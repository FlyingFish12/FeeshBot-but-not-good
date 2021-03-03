const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = module.require("fs");
const ms = module.require("ms")

module.exports = {
  name: "mute",
  description: "A mute command",
  aliases: ["m"],
  execute:async(message, args, client) => {

    const muteEmbed = new Discord.MessageEmbed()
          .setColor(`RANDOM`)
          .setTitle(`Member Muted`)
          .setTimestamp()

    if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("⚠️ Insufficient permissions")
      const target = message.mentions.members.first()
    if (!target)
        return message.channel.send("⚠️ No user mentioned.")
        const reason = args.slice(3).join(" ")
        const time = args[2];
        if (!time || time > 1209600000)
        return message.channel.send('⚠️ Please enter a valid length of time of 14 days or less (1s/m/h/d)');


          let mutedRole = message.guild.roles.cache.find(mR => mR.name === "Muted");

          if(!mutedRole) {
            try {
                mutedRole = await message.guild.roles.create({
                    name: "Muted",
                    color: "#000000",
                    permissions: []
                });
    
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(mutedRole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
    
            } catch(err) {
                message.channel.send('⚠️ Failed to make mute role. May be due to not having the correct permissions. Try again.');
            }
        }

        if(target.roles.cache.has(mutedRole.id)) return message.channel.send("⚠️ This user is already muted!");

    try {
      await target.roles.add(mutedRole);

      if (!reason) {
        reason = 'No Reason Specified'
      }
      muteEmbed.setDescription(`Member muted: ${target} (${target.user.tag})\nModerator: ${message.author} (${message.author.tag})\nHow long: ${time}\nReason: ${reason}`)
      message.channel.send(muteEmbed)
    } catch (err) {
      console.log(err)
      return message.channel.send('⚠️ Failed to mute. This may be due to role or member hierarchy. Try again.', err.message);
    }
    setTimeout(async() => {
        try {
          if (!target.roles.cache.has(mutedRole.id)) return;
          await target.roles.remove(mutedRole);
        } catch (err) {
          message.channel.send(`⚠️ Failed to unmute ${target} (${target.user.tag}). Try again.`, err.message)
        }
    }, ms(time));
  }
}

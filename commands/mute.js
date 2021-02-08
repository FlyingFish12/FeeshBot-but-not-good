const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
const fs = module.require("fs");
const ms = module.require("ms")

module.exports = {
  name: "mute",
  description: "A mute command",
  execute:async(message, args, client) => {
    
    const modlog = '797169854263984159'

    if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("⚠️ Insufficient permissions")
      const target = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!target)
        return message.channel.send("⚠️ No user mentioned.")
        const reason = args.slice(3).join(" ")
        const time = ms(args[2]);
        if (!time || time > 1209600000)
          return message.channel.send('⚠️ Please enter a length of time of 14 days or less (1s/m/h/d)');

          let mutedRole = message.guild.roles.cache.find(mR => mR.name === "Muted");

          if(!mutedRole) {
            try {
                mutedRole = await message.guild.createRole({
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
                console.log(err.stack);
            }
        }

    try {
      await target.roles.add(mutedRole);

      if (!reason) {
        message.channel.send(`${target} was muted by ${message.author} for ${time} and for the reason: No reason given`);
      }
      if (reason) {
      message.channel.send(`${target} was muted by ${message.author} for ${time} and for the reason: ${reason}`)
      }
    } catch (err) {
      console.log(err)
      return message.channel.send('⚠️ Failed to mute. Try again.', err.message);
    }
    setTimeout(async() => {
        try {
          await target.roles.remove(mutedRole);
          message.channel.send(`${target} was unmuted.`)
        } catch (err) {
          message.channel.send('⚠️ Failed to unmute. Try again.', err.message)
        }
    }, time);
  }
}
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = module.require("fs");
const ms = module.require("ms")

module.exports = {
  name: "unmute",
  description: "An unmute command",
  aliases: ["unm", "um"],
  execute:async(message, args, client) => {

    const unmuteEmbed = new Discord.MessageEmbed()
          .setColor(`RANDOM`)
          .setTitle(`Member Unmuted`)
          .setTimestamp()

    if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("⚠️ Insufficient permissions")
      const target = message.mentions.members.first();
    if (!target)
        return message.channel.send("⚠️ No user mentioned.")
        
        let mutedRole = message.guild.roles.cache.find(mR => mR.name === "Muted");

    if(!target.roles.cache.has(mutedRole.id)) return message.channel.send("⚠️ This user isn't muted!");

    try {
      await target.roles.remove(mutedRole);
      unmuteEmbed.setDescription(`successfully unmuted ${target} (${target.user.tag})`)
      message.channel.send(unmuteEmbed)
    } catch (err) {
      console.log(err)
      return message.channel.send('⚠️ Failed to unmute. Try again.', err.message);
    }
  }
}
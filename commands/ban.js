const { MessageEmbed, Discord } = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
  name: "ban",
  description: "A ban command",
  aliases: ["b"],
  execute(message, args, client) {
    if (!message.member.id === '427476318050058251')
        return message.channel.send("⚠️ Insufficient permissions")
        const member = message.mentions.members.first();
    if (!member)
        return message.channel.send("⚠️ No user mentioned.")
        const reason = args.slice(2).join(" ")
    if (!member.kickable)
        return message.channel.send("⚠️ I cannot ban this user.")
    if (member) {
        if (!reason) {
            return member.ban().then(member => {
                const banNoResEmbed = new Discord.MessageEmbed()
                    .setColor(`#800020`)
                    .setTitle(`Member Unbanned`)
                    .setDescription(`Member : <@${member.user.tag}>\nModerater : ${message.author}\nReason : No reason provided`)
                    .setFooter('Hah noob.')

            message.channel.send(banNoResEmbed)

        })
    }
    if (reason) {
        member.ban().then(member => {
            const banResEmbed = new Discord.MessageEmbed()
                    .setColor(`#800020`)
                    .setTitle(`Member Unbanned`)
                    .setDescription(`Member : <@${member.user.tag}>\nModerater : ${message.author}\nReason : ${reason}`)
                    .setFooter('Hah noob.')

            message.channel.send(banResEmbed)

    })
   }
  }
    },
};
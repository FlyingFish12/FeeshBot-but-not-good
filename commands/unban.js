const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
  name: "unban",
  description: "An unban command",
  aliases: ["unb", "ub"],
  execute(message, args, client) {
    if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.channel.send("⚠️ Insufficient permissions")
        let userID = args[1]
        if (!userID)
        return message.channel.send("⚠️ Invalid ID.")
    if (userID) {
        message.guild.fetchBans().then(bans=> {
            if(bans.size == 0) return 
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser) return
            message.guild.members.unban(bUser.user)
                const unbanEmbed = new Discord.MessageEmbed()
                    .setColor(`#34D399`)
                    .setTitle(`Member Unbanned`)
                    .setDescription(`Member: ${userID}\nModerater: ${message.author}`)
                    .setTimestamp()

            message.channel.send(unbanEmbed)
      })
    }
  }
}
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
    name: "kick",
    description: "A kick command",
    aliases: ["k"],
    execute(message, args, client) {
      if (!message.member.hasPermission('KICK_MEMBERS'))
          return message.channel.send("⚠️ Insufficient permissions")
          const member = message.mentions.members.first();
      if (!member)
          return message.channel.send("⚠️ No user mentioned.")
          const reason = args.slice(2).join(" ") 
      if (!member.kickable)
          return message.channel.send("⚠️ I cannot kick this user.")
      if (member === message.author)
          return message.channel.send("⚠️ You can't kick yourself!")
      if (member === client)
          return message.channel.send("Don't kick me ;-;")
          try {
      if (member) {
          if (!reason) {
              return member.kick().then(member => {
                const kickNoResEmbed = new Discord.MessageEmbed()
                .setColor(`#EF4444`)
                .setTitle(`Member Kicked`)
                .setDescription(`Member: ${member.user.tag}\nModerater: ${message.author}\nReason: No reason provided`)
                .setTimestamp()

            message.channel.send(kickNoResEmbed)
          })
      }
      if (reason) {
          member.kick().then(member => {
            const kickResEmbed = new Discord.MessageEmbed()
            .setColor(`#EF4444`)
            .setTitle(`Member Kicked`)
            .setDescription(`Member: ${member.user.tag}\nModerater: ${message.author}\nReason: ${reason}`)
            .setTimestamp()

            message.channel.send(kickResEmbed)
      })
      }
     }
      } catch (err) {
      console.log(err)
      return message.channel.send('⚠️ Failed to kick. Maybe I don\'t have the correct permissions? Please Try again.');
    }
   }
  }
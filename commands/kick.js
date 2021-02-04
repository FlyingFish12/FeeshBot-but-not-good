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
    if (member) {
        if (!reason) {
            return member.kick().then(member => {
            message.channel.send(`${member.user.tag} was kicked by ${message.author}. no reason was provided.`);
        })
    }
    if (reason) {
        member.kick().then(member => {
        message.channel.send(`${member.user.tag} was kicked by ${message.author}. ${reason}.`);
    })
   }
  }
 }
}
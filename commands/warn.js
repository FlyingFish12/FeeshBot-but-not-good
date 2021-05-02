const { MessageEmbed, Discord } = require("discord.js");

module.exports = {
  name: "warn",
  description: "A warn command",
  execute:async(message, args, client) => {

    let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("You are not allowed to warn members!")
    }

    if(message.author.id === toWarn.id) return message.reply("You can't warn yourself!");

    let reason = args.slice(2).join(" ")

    if(!reason) return message.channel.send('Please enter a reason!')

    message.channel.send('This command is under service due to it being bad lmao')
  },
};
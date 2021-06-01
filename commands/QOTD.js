const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = module.require("fs");
const ms = module.require("ms")
module.exports = {
  name: "qotd",
  description: "A random command",
  aliases: ["question"],
  execute: async(message, args, client) => {

    if(!message.guild.id === 787339571422691368) return;

    let announce = message.guild.roles.cache.get("828530783923732482");
    message.member.roles.add(announce);

    message.channel.send('Successfully added the announcement role.');

  }
}

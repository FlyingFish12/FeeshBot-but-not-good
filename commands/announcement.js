const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = module.require("fs");
const ms = module.require("ms")
module.exports = {
  name: "announcement",
  description: "A random command",
  aliases: ["announce"],
  execute: async(message, args, client) => {
   if(!message.guild.id === 787339571422691368) return;
const announce = message.guild.roles.cache.find(aR => aR.id === "828348238753955870")
const Target = message.author

try {

await Target.roles.add(announce);

message.channel.send('successfully added the announcement role');
} catch (err) {
message.channel.send('Failed to add the role!')
    }
  }
}

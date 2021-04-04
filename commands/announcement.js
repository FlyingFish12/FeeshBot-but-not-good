const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = module.require("fs");
const ms = module.require("ms")
module.exports = {
  name: "announcement",
  description: "A random command",
  aliases: ["announce"],
  execute: async(message, args, client) => {
   if(!message.guild.id === 787339571422691368) return
const announRole = message.guild.roles.cache.find(aR => aR.name === "Announcements")
const roleMan = message.author
roleMan.role.add(announRole)
message.channel.send('successfully added role')
try{
a
} catch(err)
console.log(err)
message.channel.send('Failed to add the role!')
    
  }
}

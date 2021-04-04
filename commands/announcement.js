const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = module.require("fs");
const ms = module.require("ms")
module.exports = {
  name: "announcement",
  description: "A random command ! ! !",
  aliases: ["announce"],
  execute:async(message, args, client) => {
   if(!message.guild.id === 787339571422691368) return;

Const announRole = message.guild.roles.cache.find(aR => aR.name === "Announcements");
Const RoleMan = message.author
RoleMan.role.add(announRole)
Message.channel.send('successfully added role')
Try{
await 
} catch(err)
Console.log(err)
Message.channel.send(':warning: failed to add the role')
    
  }
}

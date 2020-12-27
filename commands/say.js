const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'lovemeter',
    description: "A lovemeter command",
    aliases: ['say','s','write'],
    execute(message,args,client){
let args = message.content.split(" ").slice(1);
    message.delete();
    if (message.content.includes("@everyone")  || message.content.includes("@here")) return message.channel.send("You ain't making me Ping anyone BOI!");
    message.channel.send(args.join(" ")).cleanContent;
}
}
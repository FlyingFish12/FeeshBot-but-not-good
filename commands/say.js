const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'say',
    description: "A Say Command",
    aliases: ['say','s','write', 'repeat'],
    execute(message, args, client){
    let saymessage = args.slice(1).join(" ")

        const sayembed = new Discord.MessageEmbed()
            .setColor('#50C878')
            .setDescription(saymessage).cleanContent;
        message.channel.send(sayembed)
    }
}
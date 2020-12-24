const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'worldrecordfact',
    description: "An worldrecord fact command",
    aliases: ['record', 'worldrecord','recordfact', 'recordfacts', 'worldrecordfacts', 'rf'],
    execute(message,args,client){

        const jsonData = require('../arrays/rcd.json')

const records = Object.values(jsonData)

const randomRecord = records[parseInt(Math.random() * records.length)]

message.channel.send(randomRecord)
    }
}

const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'serverroles',
    description: "A server roles command",
    aliases: ['srvrle','sr'],
    execute(message,args,client){
        const serverRoleEmbed = new Discord.MessageEmbed()
        .setColor(`#440285`)
        .setTitle(`Server Roles`)
        .addFields({
                name: 'Roles',
                value: (message.guild.roles.cache.array().join(", "))

        })
        .setTimestamp()
        .setFooter(`Say "F?Server" for some server information!`)
message.channel.send(serverRoleEmbed);

    }
}
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'botinfo',
    description: "A command that shows the bots information",
    aliases: ['bi', 'info'],
    execute(message,args,client){

       let days = Math.floor(client.uptime / 86400000);
       let hours = Math.floor(client.uptime / 3600000) % 24;
       let minutes = Math.floor(client.uptime / 60000) % 60;
       let seconds = Math.floor(client.uptime / 1000) % 60;

        const botinfoEmbed = new Discord.MessageEmbed()
                .setColor(`#4893C0`)
                .setTitle(`Server Info`)
                .addFields(
                {name: `Bots ID`, value: `\`\`\`735918313921708053\`\`\``, inline: true},
                {name: `Bot Owner`, value: `\`\`\`Fefe\`\`\``, inline: true},
                {name: `Owners ID`, value: `\`\`\`427476318050058251\`\`\``, inline: true},
                {name: `Number Of Servers`, value: `\`\`\`${guilds.length}\`\`\``, inline: true},
                {name: `Uptime`, value: `\`\`\`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds\`\`\``, inline: true},
                {name: `Made With`, value: `\`\`\`Discord.js with Visual Studio Code\`\`\``, inline: true},
                {name: `Hosted On`, value: `\`\`\`Heroku\`\`\``, inline: true})
                .setTimestamp()
                .setFooter(`Say "F?ServerRoles" for a list of the servers roles!`)
        message.channel.send(botinfoEmbed);
 }
}
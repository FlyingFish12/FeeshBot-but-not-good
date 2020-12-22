const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports ={
    name: 'status',
    description: "A status command",
    aliases: ['stats','uptime'],
    execute(message,args,client){
        const guilds = client.guilds.cache.array()
       const UptimeEmbed = new Discord.MessageEmbed()
 
                 .setColor(`#FFD0F0`)
                 .setTitle(`Uptime`)
 
       let days = Math.floor(client.uptime / 86400000);
       let hours = Math.floor(client.uptime / 3600000) % 24;
       let minutes = Math.floor(client.uptime / 60000) % 60;
       let seconds = Math.floor(client.uptime / 1000) % 60;    
 
       UptimeEmbed.setDescription(`\`\`\`Uptime : ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds \nServer Count : ${guilds.length}\`\`\``)
 
       message.channel.send(UptimeEmbed)
    }
}
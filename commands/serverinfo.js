const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports ={
    name: 'serverinfo',
    description: "A serverinfo command",
    aliases: ['server','svr','si','guild','guildinfo'],
    execute(message,args,client){
        const guildOwner = message.guild.owner.user.tag
       const humanCount = message.guild.members.cache.filter(member => !member.user.bot).size;
       const botCount = message.guild.members.cache.filter(member => member.user.bot).size;
       const serverEmbed = new Discord.MessageEmbed()
               .setColor(`#4893C0`)
               .setTitle(`Server Info`)
               .addFields(
               {name: `Server Name`, value: `\`\`\`${message.guild.name}\`\`\``, inline: true},
               {name: `Server Owner`, value: `\`\`\`${guildOwner}\`\`\``, inline: true},
               {name: `Server ID`, value: `\`\`\`${message.guild.id}\`\`\``, inline: true},
               {name: `Server Moderation Level`, value: `\`\`\`${message.guild.verificationLevel || 'None'}\`\`\``, inline: true},
               {name: `Server Region`, value: `\`\`\`${message.guild.region}\`\`\``, inline: true},
               {name: `Server Creation`, value: `\`\`\`${human.date('d.m.y | h:i:s', message.guild.createdAt)} ${message.guild.createdAt >= 12? "AM" : "PM"}\`\`\``, inline: true},
               {name: `Server Members`, value: `\`\`\`${message.guild.memberCount}\`\`\``, inline: true},
               {name: `Human Members`, value: `\`\`\`${humanCount}\`\`\``, inline: true},
               {name: `Bot Members`, value: `\`\`\`${botCount}\`\`\``, inline: true})
               .setTimestamp()
               .setFooter(`Say "F?ServerRoles" for a list of the servers roles!`)
       message.channel.send(serverEmbed);

    }
}
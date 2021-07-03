const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'serverinfo',
    description: "A serverinfo command",
    aliases: ['server','svr','si','guild','guildinfo'],
    execute(message,args,client){
        const serverIcon = message.guild.iconURL();
        const Owner_Crown = client.emojis.cache.get('797172246132817972')
        const Earth_Rotate = client.emojis.cache.get('797173733243748383')
        const ID_Logo = client.emojis.cache.get('797186040430854215')
        const Moderation = client.emojis.cache.get('798141615989719040')
        const Bot_Member = client.emojis.cache.get('797177406573903892')
        const Human_Member = client.emojis.cache.get('797528900992499732')
        const All_Member = client.emojis.cache.get('798142246901514270')
        const Server_Creation = client.emojis.cache.get('798142682362019840')
        const Name = client.emojis.cache.get('798143819953864744')
        const guildOwner = message.guild.owner.user.tag
        const humanCount = message.guild.members.cache.filter(member => !member.user.bot).size;
        const botCount = message.guild.members.cache.filter(member => member.user.bot).size;
        const serverEmbed = new Discord.MessageEmbed()
               .setColor(`#4893C0`)
               .setTitle(`Server Info`)
               .setThumbnail(serverIcon)
               .addFields(
               {name: `Server Name ${Name}`, value: `\`\`\`${message.guild.name}\`\`\``, inline: true},
               {name: `Server Owner ${Owner_Crown}`, value: `\`\`\`${guildOwner}\`\`\``, inline: true},
               {name: `Server ID ${ID_Logo}`, value: `\`\`\`${message.guild.id}\`\`\``, inline: true},
               {name: `Server Moderation Level ${Moderation}`, value: `\`\`\`${message.guild.verificationLevel || 'None'}\`\`\``, inline: true},
               {name: `Server Region ${Earth_Rotate}`, value: `\`\`\`${message.guild.region}\`\`\``, inline: true},
               {name: `Server Creation ${Server_Creation}`, value: `\`\`\`${human.date('d.m.y | h:i:s', message.guild.createdAt)} ${message.guild.createdAt >= 12? "AM" : "PM"}\`\`\``, inline: true},
               {name: `Server Members ${All_Member}`, value: `\`\`\`${message.guild.memberCount}\`\`\``, inline: true})
               .setTimestamp()
               .setFooter(`Say "F?ServerRoles" for a list of the servers roles!`)
       message.channel.send(serverEmbed);

    }
}
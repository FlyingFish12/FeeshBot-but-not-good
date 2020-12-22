const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'userinfo',
    description: "A userinfo command",
    aliases: ['whois','ui'],
    execute(message,args,client){
        function Whois(message) {
            const {
                    users,
                    mentions            
            } = message;
            const Whoisembed = new Discord.MessageEmbed()
                    
            if (!mentions.users.size) {
                    Whoisembed.setColor("GREEN")
                    Whoisembed.setDescription('You Gotta Mention Someone To Use This')
            } else {
                    Whoisembed.setColor(mentions.members.first().roles.highest.color)
                    Whoisembed.setTitle(`${mentions.users.first().username}'s Info`)
                    Whoisembed.setThumbnail(mentions.users.first().displayAvatarURL({dynamic: true}))
                    Whoisembed.addFields(
                            { name: `Name`, value: `\`\`\`${mentions.users.first().tag}\`\`\``, inline: true},
                            { name: "Joined Server", value: (`\`\`\`${human.date('m-d-y | h:i:s', mentions.users.first().joinedAt)} ${mentions.users.first().joinedAt >= 12? "PM" : "AM"}\`\`\``), inline: true},
                            { name: "Account Created", value: (`\`\`\`${human.date('m-d-y | h:i:s', mentions.users.first().createdAt)} ${mentions.users.first().createdAt >= 12? "AM" : "PM"}\`\`\``), inline: true},
                    )
                    Whoisembed.addFields(
                            { name: "Highest Role", value: (mentions.members.first().roles.highest)}
                    )
                    Whoisembed.setTimestamp()
                    Whoisembed.setFooter(`ID: ${mentions.users.first().id}`)
            }
            message.channel.send(Whoisembed);
    }
    Whois(message);

    }
}
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports={
    name: 'vote',
    description: "upvote or I cri (can fish cry?)",
    aliases: ['botinvite'],
    execute(message,args,client){
        const InviteEmbed = new Discord.MessageEmbed()
        .setColor(`#DA005A`)
        .setTitle("Upvote FeeshBot Today!")
        .setDescription("[Upvote FeeshBot on DBL](https://discord.ly/feesh)")
        .setFooter("Vote Rewards Coming Soon!")
        .setTimestamp()
message.channel.send(InviteEmbed)                

    }
}

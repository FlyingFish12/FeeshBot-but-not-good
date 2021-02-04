const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports={
    name: 'vote',
    description: "upvote or I cri (can fish cry?)",
    aliases: ['votes', 'v'],
    async execute(message,args,client){
        const voteEmbed = new Discord.MessageEmbed()
        .setColor(`#DA005A`)
        .setTitle("Upvote FeeshBot Today!")
        .setDescription("[Upvote FeeshBot on DBL](https://discord.ly/feesh)\n[Upvote FeeshBot on Top.gg](https://top.gg/bot/735918313921708053)")
        .setFooter("Vote Rewards Coming Soon!")
        .setTimestamp()
    message.channel.send(voteEmbed)                

    }
}
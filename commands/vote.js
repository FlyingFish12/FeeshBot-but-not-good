const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
const Topgg = require('@top-gg/sdk')
const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNTkxODMxMzkyMTcwODA1MyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEyNDYzNDYxfQ.p3QAhJuj5h_iwzP_GZTyv8kq5SRy7taCN7ji5EVOubk')
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
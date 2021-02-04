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
    execute(message,args,client){
        
    
    let has_voted;

    let votes = [];

    let apiVotes = await api.getVotes();
    for (let i = 0; i < 10; i++) {
      votes.push(i+1 + " - " + apiVotes[i]["username"] + "#" + apiVotes[i]["discriminator"]);
    }

    let canVote = await api.hasVoted(message.author.id)

    if (canVote) { has_voted = `<a:check_yes:798896012773031938> You have voted for **[VibeMaster](https://top.gg/bot/783629275546648577/vote)**!`; } else { has_voted = `<a:check_no:798895971265675294> You have not voted for **[VibeMaster](https://top.gg/bot/783629275546648577/vote)**!` }
    let vote_for_vibemaster = `**[Click Me To Vote](https://top.gg/bot/783629275546648577/vote)**`
  const VoteEmbed = new Discord.MessageEmbed()
    .setColor('#3586cd')
    .setTitle('Vote for VibeMaster')
    .addField(`Vote for me `, vote_for_vibemaster)
    .setDescription("```css\n[ RECENT VOTES ]\n\n" + votes.join('\n') + "```")
    .addField('Vote Status', has_voted);
  message.channel.send(VoteEmbed);
        const voteEmbed = new Discord.MessageEmbed()
        .setColor(`#DA005A`)
        .setTitle("Upvote FeeshBot Today!")
        .setDescription("[Upvote FeeshBot on DBL](https://discord.ly/feesh)\n[Upvote FeeshBot on Top.gg](https://top.gg/bot/735918313921708053)")
        .setFooter("Vote Rewards Coming Soon!")
        .setTimestamp()
    message.channel.send(voteEmbed)                

    }
}
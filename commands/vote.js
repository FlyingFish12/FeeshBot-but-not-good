const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Topgg = require('dblapi.js')
const api = new Topgg.Api('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNTkxODMxMzkyMTcwODA1MyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExMDgxNzI3fQ.tb0JNNGE6OivNEwPVP2hacoY4E4YoCK2_TBJBzxa2xs')
module.exports = {
    name: 'vote',
    description: "Get's the vote link",
   async execute(message, args, client){
    
    let has_voted;

    let votes = [];

    let apiVotes = await api.getVotes();
    for (let i = 0; i < 10; i++) {
      votes.push(i+1 + " - " + apiVotes[i]["username"] + "#" + apiVotes[i]["discriminator"]);
    }

    let canVote = await api.hasVoted(message.author.id)

    if (canVote) { has_voted = `<a:check_yes:798896012773031938> You have voted for **[VibeMaster](https://top.gg/bot/735918313921708053)**!`; } else { has_voted = `<a:check_no:798895971265675294> You have not voted for **[VibeMaster](https://top.gg/bot/783629275546648577/vote)**!` }
    let vote_for_feesh = `**[Click Me To Vote](https://top.gg/bot/735918313921708053)**`
  const VoteEmbed = new Discord.MessageEmbed()
    .setColor('#3586cd')
    .setTitle('Vote for VibeMaster')
    .addField(`Vote for me `, vote_for_feesh)
    .setDescription("```css\n[ RECENT VOTES ]\n\n" + votes.join('\n') + "```")
    .addField('Vote Status', has_voted);
  message.channel.send(VoteEmbed);
  const botlistspace = `**[botlist.space](https://discordbotlist.com/bots/feesh)**`
  const OtherVotesEmbed = new Discord.MessageEmbed()
  .setColor('#3586cd')
  .setTitle('Vote for Feesh on these other sites')
  .addField(`${botlistspace}`)
  message.channel.send(OtherVotesEmbed)
  
  }
}
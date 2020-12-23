const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'headsortails',
    description: "A heads or tails command",
    aliases: ['hot','cf','coinflip','flip', 'headsortails'],
    execute(message,args,client){
        const headsortails = {
            "heads": ['heads', 'h', 'head'],
            "tails": ['tails', 't', 'tail'],
          };
          const chosenHeadsortails = ["heads", "tails"][Math.floor(Math.random() * 2)];
          
          const HeadsortailsEmbed = new Discord.MessageEmbed()
                  .setColor(`#123456`)  
                  .setTitle('Heads or Tails?')
                  .setTimestamp()
                  .setFooter(`If You Are Confused Do F?Help CoinFlip!`);
                 
          message.channel.send(HeadsortailsEmbed);
          message.channel.awaitMessages(m => m.author.id == message.author.id,
                  {max: 1, time: 10000}).then(collected => {
                          if (headsortails[chosenHeadsortails].includes(collected.first().content.toLowerCase()))
                              message.channel.send('You Guessed ' + chosenHeadsortails + ' And It Was Correct!')
                          else
                              message.channel.send('You Lose. The Answer Was ' + chosenHeadsortails)
                  })
        
    }
}
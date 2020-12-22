module.exports ={
    name: 'help',
    description: "A help command",
    execute(message,args,client){
        const helpembed = new Discord.MessageEmbed()
        .setColor(`#EB491E`)
        .setTitle(`Feesh Help Commands`)
        .setDescription('**F?Help Facts** ? \n\n **F?Help Topic** ? \n\n **F?Help Fun** ? \n\n **F?Help Util** ? \n\n **F?Support** ?')
        .setTimestamp()
        .setFooter(`Say "F?Help [category]" For That categories Commands!`)


const triviahelpembed = new Discord.MessageEmbed()
        .setColor(`#DA005A`)
        .setTitle(`Trivia Commands`)
        .addFields({
                name: `F?Trivia`,
                value: `Say **F?Trivia** to get a random trivia question! \n In Trivia, you get a random question and you have 10 seconds to answer it. You get 5 points every time you get a correct answer! **You must answer with the answer number it is instead of the written answer or you won't get it right.** Good luck!`
       })
       .addFields({
               name: `F?Trivia Hard`,
               value: `Say **F?TriviaHard** to get a **Hard** trivia question! \n In this Trivia, you get a random question that is quite hard and you have a whole **20 seconds** to answer it. You get 10 points per answer!!!**You must answer with the answer number it is instead of the written answer or you won't get it right.** Good luck!`
        })
        .addFields({
                name: `F?Trivia Intermediate`,
                value: `Say **F?TriviaInter** to get an **Intermediate** trivia question! \n In this Trivia, you get a random intermediate question and you have **10 seconds** to answer it. You get 5 points per correct answer! **You must answer with the answer number it is instead of the written answer or you won't get it right.** Have fun!`
       })
       .addFields({
               name: `F?Trivia Easy`,
               value: `Say **F?TriviaEasy** to get an **Easy** trivia question! \n In this Trivia, you get a random question that is fairly easy and you have **5 seconds** to answer it. You only get 2 points per correct answer! **You must answer with the answer number it is instead of the written answer or you won't get it right.** I hope you get it right...!`
        })
        .setTimestamp()
        .setFooter(`F?Help for all commands`)

const socialembed = new Discord.MessageEmbed()
        .setColor(`#FD6444`)
        .setTitle(`Social Commands`)
        .addFields({
                name: `F?Help Facts`,
                value: `Say **"F?Help Facts"** to get a list of all the **Trivia** commands and how to use them!`
        })
        .addFields({
                name: `F?Help Trivia`,
                value: `Say **"F?Help Topic"** to get a list of any **Topic** commands there are!`
        })
        .setTimestamp()
        .setFooter(`F?Help for all commands`)

const funhelpembed = new Discord.MessageEmbed()
        .setColor(`#FD6444`)
        .setTitle(`Fun Commands`)
        .addFields({
                name: `F?Trivia`,
                value: `Say **"F?Trivia"** to get a random trivia question! \n In Trivia, you get a random question and you have 10 seconds to answer it. **You must answer with the answer number it is instead of the written answer or you won't get it right.** Good luck!`
       })
       .addFields({
               name: `F?CoinFlip`,
               value: `Say **"F?CoinFlip [Heads or Tails]"** to play! The bot randomly picks either Heads or Tails and if you manage to guess the same choice you win! **out of use (for now)**`
       })
       .setTimestamp()
       .setFooter(`F?Help for all commands`)

const facthelpembed = new Discord.MessageEmbed()
       .setColor(`#FF6347`)
       .setTitle(`Fact Commands`)
       .addFields({
               name: `F?Facts`,
               value: `Say **"F?Facts"** to get a random fact from any catagory!`
       })
       .addFields({
               name: `F?Animal Facts`,
               value: `Say **"F?Animal"** to get a random fact about animals!`
       })
       .addFields({
               name: `F?World Facts`,
               value: `Say **"F?World"** to get a random about the world!`
       })
       .addFields({
               name: `F?Record Facts`,
               value: `Say **"F?Record"** to get a random fact about a *strange* world record!`
       })
       .addFields({
               name: `F?Sport Facts`,
               value: `Say **"F?Sport"** to get a random fact about sports!`
       })
       .setTimestamp()
       .setFooter(`F?Help for all commands`)

const topichelpembed = new Discord.MessageEmbed()
       .setColor(`#F7C035`)
       .setTitle(`Topic Commands`)
       .addFields({
               name: `F?Topic`,
               value: `Say **"F?Topic"** to get a topic to discuss to do with anything!`
       })
       .setTimestamp()
       .setFooter(`F?Help for all commands`)

const utilhelpembed = new Discord.MessageEmbed()
       .setColor(`#7CB07C`)
       .setTitle(`Utility Commands`)
       .addFields({
               name: `F?Avatar`,
               value: `Say **"F?Avatar {memeber}"** to see the full avatar of you or another member!`
       })
       .addFields({
               name: `F?Whois`,
               value: `Say **"F?Whois {memeber}"** to see some information of you or another member!`
       })
       .addFields({
               name: `F?Server`,
               value: `Say **"F?Server"** to see some information about the server!`
       })
       .addFields({
               name: `F?ServerRoles`,
               value: `Say **"F?ServerRoles"** to see all of the servers roles!`
       })
       .setTimestamp()
       .setFooter(`F?Help for all commands`)

       if(!args[1]) return message.channel.send(helpembed);
       if(args[1].toLowerCase() === 'triv' || args[1].toLowerCase() === 'trivia') {
       return message.channel.send(triviahelpembed);
       } if(args[1].toLowerCase() === 'fun' || args[1].toLowerCase() === 'game') {
       return message.channel.send(funhelpembed);
       } if(args[1].toLowerCase() === 'topic' || args[1].toLowerCase() === 'tpc') {
       return message.channel.send(topichelpembed)
       } if(args[1].toLowerCase() === 'social' || args[1].toLowerCase() === 'chat') {
       return message.channel.send(socialembed)
       } if(args[1].toLowerCase() === 'fact' || args[1].toLowerCase() === 'facts') {
       return message.channel.send(facthelpembed);
       } if(args[1].toLowerCase() === 'util' || args[1].toLowerCase() === 'utility') {
       return message.channel.send(utilhelpembed);
       }


    }
}
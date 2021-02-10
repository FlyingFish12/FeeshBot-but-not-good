const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");

module.exports = {
  name: "help",
  description: "A help command",
  execute(message, args, client) {

    const Moderation = client.emojis.cache.get('798141615989719040')
    const Fun = client.emojis.cache.get('808014677854388274')
    const Cogs = client.emojis.cache.get('808012653002752020')
    const Support = client.emojis.cache.get('808013222581764126')
    const Infinity = client.emojis.cache.get('798143819953864744')



      const helpembed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`Feesh Help`)
      .setDescription(
        `**F?Help Fun** ${Infinity}\n
        **F?Help Util** ${Cogs}\n
        **F?Help Moderation** ${Moderation}\n
        **F?Help Support** ${Support}`
      )
      .setTimestamp()
      .setFooter(`Say "F?Help [category]" For That categories Commands!`);



      const triviahelpembed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`Trivia Help`)
      .addFields({
        name: `F?Trivia`,
        value: `Say **F?Trivia** to get a random trivia question! \n In Trivia, you get a random question and you have 10 seconds to answer it. **You must answer with the answer number it is instead of the written answer or you won't get it right.** Good luck!`,
      })
      .setTimestamp()
      .setFooter(`F?Help for all commands`);



      const moderationhelp = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`Moderation Commands`)
      .addFields({
        name: `F?Ban {Member} [Reason]`,
        value: `Bans a member. Adding a reason is optional`,
      })
      .addFields({
        name: `F?Kick {Member} [Reason]`,
        value: `Kicks a member. Adding a reason is optional`
      })
      .addFields({
        name: `F?Unban {id}`,
        value: `Unbans a member.`
      })
      .addFields({
        name: `F?Mute {Member} {Time} [Reason]`,
        value: `Mutes a member.`
      })      
      .addFields({
        name: `F?Unmute {Member}`,
        value: `Unmutes a member.`
      })   
      .setTimestamp()
      .setFooter(`F?Help for all commands`);



      const utilhelp = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`Utility Commands`)
      .addFields({
        name: `F?Avatar {Member}`,
        value: `Gets the avatar of a member.`,
      })
      .addFields({
        name: `F?Serverinfo`,
        value: `See all the information about the server.`
      })
      .addFields({
        name: `F?Userinfo`,
        value: `See information about a member.`
      })
      .addFields({
        name: `F?Botinfo`,
        value: `See the information of a Feesh.`
      })
      .setTimestamp()
      .setFooter(`F?Help for all commands`);



      const supporthelp = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`Support Commands`)
      .addFields({
        name: `F?Status`,
        value: `See how many servers Feesh is in and how long it's been up.`,
      })
      .addFields({
        name: `F?Vote`,
        value: `Vote for Feesh on Top.gg or DiscordBotList.com!`
      })
      .addFields({
        name: `F?Invite`,
        value: `Invite Feesh to a server.`
      })
      .addFields({
        name: `F?Support`,
        value: `Join the support server.`
      })
      .setTimestamp()
      .setFooter(`F?Help for all commands`);



      const funhelp = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`Fun Commands`)
      .addFields({
        name: `F?Help Facts`,
        value: `See all the catagories for the fact commands.`,
      })
      .addFields({
        name: `F?Topic`,
        value: `Sends a random topic for you to disguss with people.`,
      })
      .addFields({
        name: `F?Trivia`,
        value: `How smart are you? Can you answer these questions? For more information, try \`F?Help Trivia\``
      })
      .addFields({
        name: `F?Coinflip`,
        value: `Test your luck and see how many you can get in a row.`
      })
      .addFields({
        name: `F?Say`,
        value: `Repeats what you say.`
      })
      .addFields({
        name: `F?Meme`,
        value: `Gets a random meme from reddit.`
      })
      .addFields({
        name: `F?Lovemeter {member}`,
        value: `Feesh will use it's magic powers to see how powerful your love is.`
      })
      .setTimestamp()
      .setFooter(`F?Help for all commands`);



      const facthelp = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`Fact Commands`)
      .addFields({
        name: `F?Fact`,
        value: `Get a random fact from any category.`,
      })
      .addFields({
        name: `F?Animal`,
        value: `Have some nice animal facts.`
      })
      .addFields({
        name: `F?World`,
        value: `Get some facts about the world.`
      })
      .addFields({
        name: `F?Record`,
        value: `Find out some random world records.`
      })
      .addFields({
        name: `F?Sport`,
        value: `Get a random fact about sport.`
      })
      .setTimestamp()
      .setFooter(`F?Help for all commands`);




    if (!args[1]) return message.channel.send(helpembed);
    if (
      args[1].toLowerCase() === "triv" ||
      args[1].toLowerCase() === "trivia"
    ) {
      return message.channel.send(triviahelpembed);
    }
    if (
      args[1].toLowerCase() === "fun" ||
      args[1].toLowerCase() === "game"
      ) {
        return message.channel.send(funhelp);
    }
    if (
      args[1].toLowerCase() === "fact" ||
      args[1].toLowerCase() === "facts"
      ) {
        return message.channel.send(facthelp);
    }
    if (
      args[1].toLowerCase() === "util" ||
      args[1].toLowerCase() === "utility"
    ) {
      return message.channel.send(utilhelp);
    }
    if (
      args[1].toLowerCase() === "mod" ||
      args[1].toLowerCase() === "moderation"
    ) {
      return message.channel.send(moderationhelp);
    }
    if (
      args[1].toLowerCase() === "support" ||
      args[1].toLowerCase() === "bug"
    ) {
      return message.channel.send(supporthelp);
    }
  },
};

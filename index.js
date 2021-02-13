const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
const fs = require("fs");
const prefix = "f?";
const client = new Discord.Client();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Feesh:S0d4P0pS@feesh.bh8mx.mongodb.net/Data', { useNewUrlParser: true, useUnifiedTopology: true})


client.commands = new Discord.Collection();


const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Online!");
  const activities_list = [
    "Say 'F?Help' To Learn My Commands!",
    "Say 'F?Help' To Learn My Commands!",
    "Playing Games With People!",
    "Finding Interesting Facts...",
    "Test Your Knowledge With 'F?Trivia'!",
  ];
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]);
    type: `PLAYING`;
  }, 15000);
});

client.on("message", (message) => {
  if (!message.content.toLowerCase().startsWith(`${prefix}`)) return;
  if (message.author.bot) return;

  const args = message.content.trim().split(/ +/g);

  const commandName = args[0].slice(prefix.length).toLowerCase();
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  command.execute(message, args, client);
});

client.on("guildCreate", (guild) => {
  client.channels.cache.get('787701805534019584').send(`I have been added to a new server! Name - ${guild.name} (ID: ${guild.id})`)
});

client.on("guildDelete", (guild) => {
  client.channels.cache.get('800787128237031434').send(`I have been removed from a server :c . Name - ${guild.name} (ID: ${guild.id})`)
});

//These are just here when the bot is kinda knew so i can see how well its doing, i will probably delete it sometime soon

client.login(process.env.BOT_TOKEN);

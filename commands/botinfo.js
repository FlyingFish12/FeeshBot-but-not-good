const { MessageEmbed, version: djsversion } = require("discord.js");
const Discord = require("discord.js");
const version = require('../package.json');
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
  name: "botinfo",
  description: "A command that shows the bots information",
  aliases: ["bi", "info"],
  execute(message, args, client) {
    const guilds = client.guilds.cache.array();

    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    const botinfoEmbed = new Discord.MessageEmbed()
      .setColor(`#454ade`)
      .setTitle(`Feesh Bot's Info`)
      .addFields(
        { name: `Bot Owner`, value: `\`\`\`Fefe#6010\`\`\``, inline: true },
        {
          name: `Servers`,
          value: `\`\`\`${guilds.length}\`\`\``,
          inline: true,
        },
        { name: `Framework`, value: `\`\`\`Discord.js\`\`\``, inline: true },
        { name: `Node.js Version`, value: `\`\`\`${process.version}\`\`\``, inline: true },
        { name: `Discord.js Version`, value: `\`\`\`${djsversion}\`\`\``, inline: true },
      )
      .setTimestamp()
      .setFooter(`ID:${client.id}`);
    message.channel.send(botinfoEmbed);
  },
};

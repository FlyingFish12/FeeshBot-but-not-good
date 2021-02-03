const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports = {
  name: 'eval',
  description: "cool kids only",
  aliases: ['repl'],
  execute(message, args, client) {
    const { crypto } = require("crypto");
    if (message.author.id === "714863852441042965" || message.author.id === "427476318050058251") {
      String.prototype.charLimitSplit = (number) => {
        if (typeof number !== "number") {
          number = parseInt(number, 10);
        }
        const newSplit = [];
        if (this.length > number) {
          const splitRegex = new RegExp(`.{1,${number}}`, "g");
          const splitStr = this.match(splitRegex);
          for (let i = 0; i < splitStr.length; i++) {
            newSplit.push(splitStr[i]);
          }
          return newSplit;
        }
      };
      const code = args.join(" ");
      async function success(input, output) {
        message.channel.send({
          embed: {
            color: 0x36393e,
            fields: [
              {
                name: "Input",
                value: `\`\`\`JS\n${input}\`\`\``,
              },
              {
                name: "Output",
                value: `\`\`\`JS\n${output} | ... |\`\`\``,
              },
            ],
          },
        });
      }
      async function error(input, output) {
        message.channel.send({
          embed: {
            color: 0x36393e,
            fields: [
              {
                name: "Input",
                value: `\`\`\`JS\n${input}\`\`\``,
              },
              {
                name: "Error Output",
                value: `\`\`\`JS\n${output}\`\`\``,
              },
            ],
          },
        });
      }
      function clean(text) {
        if (typeof text === "string") {
          text = text
            .replace(/`/g, `\`${String.fromCharCode(8203)}`)
            .replace(/@/g, `@${String.fromCharCode(8203)}`);
          return text;
        }
        return text;
      }
      try {
        let evaled = eval(code);
        if (typeof evaled !== "string") {
          evaled = require("util").inspect(evaled, {
            breakLength: Infinity,
          });
        }
        if (evaled.length > 1000) {
          const output = clean(evaled).charLimitSplit(1000);
          return success(code, output[0]);
        }
        return success(code, clean(evaled));
      } catch (err) {
        if (err.length > 1000) {
          const errorSplit = err.charLimitSplit(1000);
          return error(code, errorSplit);
        }
        return error(code, clean(err));
      }
    }
  }
}

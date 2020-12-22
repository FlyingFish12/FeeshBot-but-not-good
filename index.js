const Discord = require(`discord.js`);

const client = new Discord.Client();
const fs = require('fs');
const prefix = '&';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
                const command = require(`./commands/${file}`);

                client.commands.set(command.name, command);
}
 
  
        Client.on('message', message => {
  
          if(!message.content.startsWith(`${prefix}`)) return;
          if (message.author.bot) return;
      
            const args = message.content.trim().split(/ +/g);
        
            const commandName = args[0].slice(prefix.length).toLowerCase();
            const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
          
         if(!command) return;
        
        command.execute(message, args, client);
        
    });
client.login('NzkwODc2MDc5NDU5MDA4NTMy.X-G-vw.sXu8683O2XmfYgPFxilofySEJ4A')
//Add any other events
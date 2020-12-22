const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports ={
    name: 'topic',
    description: "A topic command",
    aliases: ['tpc'],
    execute(message,args,client){
        const Tpic = ["All people should have the right to own guns.",
        "The death penalty should be abolished.",
        "Human cloning should be legalized.",
        "All drugs should be legalized.",
        "Animal testing should be banned.",
        "Juveniles should be tried and treated as adults.",
        "Climate change is the greatest threat facing humanity today.",
        "The minimum wage should be $15 per hour.",
        "All people should have Universal Basic Income.",
        "Countries should be isolationist.",
        "Abortion should be banned.",
        "Every citizen should be mandated to perform national public service.",
        "Bottled water should be banned.",
        "Plastic bags should be banned.",
        "Homework should be banned.",
        "Public prayer should not be allowed in schools.",
        "All students should have an after-school job or internship.",
        "All high school athletes should be drug tested.",
        "Detention should be abolished.",
        "All student loan debt should be eliminated.",
        "Homeschooling is better than traditional schooling.",
        "All schools should be private schools.",
        "Public college should be tuition free."
];
const randomTpic = Tpic[Math.floor(Math.random() * Tpic.length)];

message.channel.send(randomTpic + ` - DEBATE!`);
    }
}
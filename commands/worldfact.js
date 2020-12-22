const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports ={
    name: 'worldfact',
    description: "An world fact command",
    aliases: ['world', 'worldfacts','wf'],
    execute(message,args,client){
        
        const Wrld = ["World Fact - North Korea and Cuba are the only places you can't buy Coca-Cola.",
        "World Fact - The entire world's population could fit inside Los Angeles.",
        "World Fact - There are more twins now than ever before.",
        "World Fact - The hottest chili pepper in the world is so hot it could kill you.",
        "World Fact - More people visit France than any other country.",
        "World Fact - The world's most densely populated island is the size of two soccer fields.",
        "World Fact - The Canary Islands are named after dogs, not birds.",
        "World Fact - Indonesia is home to some of the shortest people in the world.",
        "World Fact - The Paris Agreement on climate change was signed by the largest number of countries ever in one day.",
        "World Fact - The world's quietest room is located at Microsoft's headquarters in Washington state.",
        "World Fact - There are only three countries in the world that don't use the metric system.",
        "World Fact - The longest place name on the planet is 85 letters long.",
        "World Fact - Four babies are born every second.",
        "World Fact - The coldest temperature ever recorded was -144 degrees Fahrenheit.",
        "World Fact - The Earth's ozone layer will make a full recovery in 50 years.",
        "World Fact - Japan is the world's most earthquake-prone country.",
        "World Fact - There are around 4 quadrillion quadrillion bacteria on Earth.",
        "World Fact - People who are currently alive represent about 7 percent of the total number of people who have ever lived.",
        "World Fact - Muhammad is thought to be the most popular name in the world.",
        "World Fact - Only two countries use purple in their national flags.",
        "World Fact - Africa and Asia are home to nearly 90 percent of the world's rural population.",
        "World Fact - The most expensive coin in the world was sold for more than $7 million.",
        "World Fact - The world's largest man-made oyster reef was created in Maryland.",
        "World Fact - A record-breaking 92 countries competed in the 2018 Winter Olympics.",
        "World Fact - South Sudan is the youngest country in the world.",
        "World Fact - More than 52 percent of the world's population is under 30 years old.",
        "World Fact - People 60 years and older make up 12.3 percent of the global population.",
        "World Fact - There are more than 24 time zones around the world.",
        "World Fact - Nearly half of the world's population watched both the 2010 and 2014 FIFA World Cup games.",
        "World Fact - It's estimated that Sweden has more islands than any other country.",
        "World Fact - There are 43 countries that still have a royal family.",
        "World Fact - California is home to the 'Artichoke Capital of the World'.",
        "World Fact - All giant pandas in zoos around the world are on loan from China.",
        "World Fact - Canada has nine percent of the world's forests.",
        "World Fact - The red-billed quelea is the most common bird on Earth.",
        "World Fact - There's a website that tracks the world's population in real time.",
        "World Fact - More people speak Mandarin Chinese than any other language.",
        "World Fact - Around one in every 200 men are direct descendants of Genghis Khan.",
        "World Fact - Copenhagen is the most bike-friendly city in the world.",
        "World Fact - There are 41 countries that recognize sign language as an official language.",
        "World Fact - The global adult literacy rate is around 86 percent.",
        "World Fact - Facebook has more users than the population of the U.S., China, and Brazil combined.",
        "World Fact - There are only two countries with names that begin with 'The'.",
        "World Fact - All the ants on Earth weigh about as much as all the humans.",
        "World Fact - The oceans contain almost 200,000 different kinds of viruses.",
        "World Fact - New Zealanders have more pets per household than any other country.",
        "World Fact - Tokyo is the world's largest city with 37 million inhabitants.",
        "World Fact - Interpol began in 1914 when legal professionals from 24 countries got together to discuss catching fugitives.",
        "World Fact - Nearly two people die each second.",
        "World Fact - The World's Oldest Hotel Has Been Operating Since 705 A.D.",
        "World Fact - It Takes 68 Days to Swim the Full Length of the Mississippi River"
]

const randomWrld = Wrld[Math.floor(Math.random() * Wrld.length)];

message.channel.send(randomWrld + ` - Requested by ${message.author.username}`);
        
    }
}
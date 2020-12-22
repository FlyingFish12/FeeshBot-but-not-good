const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'worldrecordfact',
    description: "An worldrecord fact command",
    aliases: ['record', 'worldrecord','recordfact', 'recordfacts', 'worldrecordfacts', 'rf'],
    execute(message,args,client){

        const Rcd = ["World Record - Jennifer Aniston amassed 1 million followers in just five hours and 16 minutes after she joined Instagram, making her the fastest user to gain a million followers.",
               "World Record - Country singer Kacey Musgraves, along with the Country Music Hall of Fame and Museum, set a world record title for having the world's largest display of coloring pages.",
               "World Record - The world's longest charcuterie board spanned more than 150 feet and included 400 pounds of meat and cheese.",
               "World Record - Runner Eliud Kipchoge set a world record for completing a marathon in less than two hours.",
               "World Record - A pair of 1972 Nike Moon Shoes were sold at a Sotheby's auction for $437,000 — breaking the record for the most expensive sneakers sold at auction.",
               "World Record - A chef made the world's longest handmade egg noodle that measured more than 600 feet, which is longer than the Washington Monument.",
               "World Record - The oldest married couple had a combined age of more than 210 years. They were married for more than 80 years.",
               "World Record - A ring with 7,777 diamonds worth almost $5 million set a record for having the most diamonds set in one ring.",
               "World Record - Sculptors built the world's tallest sandcastle in Binz, Germany. It stands more than 57 feet above the ground, and it's made of 24,000 pounds of sand.",
               "World Record - As many as 633 Florida scuba divers broke a record for the world's largest ocean cleanup event.",
               "World Record - A man in New Zealand set a record for diving 230 feet under ice while holding his breath for nearly two and a half minutes.",
               "World Record - A display of 36,440 LEGO 'Star Wars' minifigures broke a world record.",
               "World Record - A Canadian artist created the world's largest supported sculpture made from drinking straws.",
               "World Record - A photo of an egg became the most-liked photo on Instagram, surpassing a previous record set by Kylie Jenner.",
               "World Record - A 187-year-old tortoise named Jonathan became the world's oldest-known living animal on land.",
               "World Record - A UK woman set the world record for having the largest feet of any living female. They were size 15.5 men size!",
               "World Record - A barista made 420 cappuccinos in one hour, or seven every minute.",
               "World Record - A blindfolded Australian man solved a Rubik's cube in 16.22 seconds.",
               "World Record - More than 4,500 women performed the world's largest traditional Konyak folk dance.",
               "World Record - A competitive eater set a record for the fastest time to eat a burrito. They finished it in just 44.20 seconds!",
               "World Record - An Australian chef made a pizza with 154 types of cheese, snagging a world record for the pizza with the most varieties of cheese.",
               "World Record - A corn maze company in Canada created the world's largest snow maze.",
               "World Record - A man removed 70 socks from other people's feet in one minute while blindfolded.",
               "World Record - Chefs in Italy baked the world's longest tiramisu, which was almost 900 feet long.",
               "World Record - A longhorn in Alabama broke two world records for its oversized horns. They had a full span of 10 feet, 7.4 inches!",
               "World Record - Organizations in Mexico built the world's largest teddy bear, which weighed more than 8,000 pounds.",
               "World Record - The world's largest dim sum meal had 3,100 individual pieces of dim sum.",
               "World Record - Volunteers in India constructed the world's largest cupcake tower made out of 18,818 cupcakes.",
               "World Record - The world's largest alpaca parade had 1,048 alpacas.",
               "World Record - The most accurate value of pi was calculated on Pi Day in 2019.",
               "World Record - Hassan al-Zayyat shows off Quranic verses that he had copied by hand on 39- by 28-inch paper, aspiring to enter the Guinness Book of World Records for the largest handwritten Quran, in 2010.",
               "World Record - In their attempt to break the Guinness World Record for the 'Biggest Barbecue in the World,' about 30,000 people grilled 13,713 kilos of beef.",
               "World Record - In 2012, some children took part in a peace march that attempted to set a Guinness World Record for being the largest gathering of people dressed as Mahatma Gandhi.",
               "World Record - At 2,596 feet long, a dragon float made of paper, bamboo, and wood set the Guinness World Record in 2012 for being the longest parade float ever made. It was presented during the Lantern Festival in Gutian, China.",
               "World Record - A Romanian woman wore a wedding dress with the longest train in the world during a Guinness World Record attempt in Bucharest.",
               "World Record - In Bangkok, Thailand, two women attempted to break the record for the world's longest kiss in 2013. The record then was 58 hours, 35 minutes, and 58 seconds.",
               "World Record - Bees swarmed around Gao Bingguo as he attempted to break the Guinness World Record for being covered by the largest number of bees.",
               "World Record - In 2014, a group of 261 hotel staff attempted to boost Jordan's flagging tourism industry as they broke the Guinness World Record for the largest floating image in the Dead Sea.",
               "World Record - Thaneshwar Guragai spun a basketball on a toothbrush while holding it in his mouth for exactly 22.41 seconds.",
               "World Record - 1,215 Taiwanese farmers broke a Guinness World Record by planting rice seedlings for 5.1 acres in just 16 minutes and 20 seconds.",
               "World Record - In what was perhaps one of the most physically painful world record attempts, Attila Banyai let a four-wheel drive vehicle roll over him during a festival near Budapest, Hungary.",
               "World Record - Some people in Chicago attempted to create the world's largest pillow fight. The record currently belongs to a group of 6,261 participants who bashed each other with pillows during a baseball game in St. Paul, Minnesota.",
               "World Record - A Michael Jackson impersonator dances with more than 13,000 fans in celebration of the late singer's birthday. The event, held in Mexico, broke a Guinness World Record for being the largest 'Thriller' dance.",
               "World Record - A team of six tried to set a new record for the largest cup of cappuccino in Russia's book of records. The current Guinness World Record is 4,250 liters, or 1,122 gallons.",
               "World Record - The skydivers of World Team entered the World Air Sports Federation (FAI) and Guinness Book of World Records by building the world's largest free-fall formation. 357 skydivers were linked for six seconds while free falling at 112 miles per hour.",
               "World Record - An event broke the record for the largest group of people receiving a beauty treatment in the same location. 1,000 customers received facial massages at a sports center in China.",
               "World Record - The world record for the largest Einstein gathering goes to a group of more than 300 people in Los Angeles, California.",
               "World Record - In 2013, an event was organized in New York City to break the Guinness World Record for the greatest number of people twerking simultaneously. The current record is 406 people, set during a festival in New Orleans in 2014.",
               "World Record - Sushi chefs carefully arranged tons of raw fish to create the world's largest sushi mosaic.",
               "World Record - Thousands of competitors play chess at a university in the western Indian city of Ahmedabad."
       ]
 
       const randomRcd = Rcd[Math.floor(Math.random() * Rcd.length)];
 
       message.channel.send(randomRcd + ` - Requested by ${message.author.username}`);

    }
}
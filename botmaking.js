const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const math = require("mathjs");
const coins = require("./coins.json")
const ownerid = "yourid"
bot.on('ready', () => {
    bot.user.setActivity("Being a bot is hard.")
    console.log("Bot is online.")
});
bot.on('message', function(message){
    if(message.content == 'hello')
    {
message.reply("Hi there!")
    }
});
bot.on('message', function(message){
// if user is bot it returns
    if(message.author.bot) return;
// if you want to, make a role called moneyban to prevent people from gaining money.
//     if(message.member.roles.some(r=>["moneyban"].includes(r.name)) )return;
    let coinAmt = Math.floor(Math.random() * 7) + 1
  let willithappen = Math.floor(Math.random() * 18 ) + 1

  if(willithappen == "1" ){
    // checks if they don't have a pocket. if not it makes a pocket for them.
    if(!coins[message.author.id]){
        coins[message.author.id] = {
           coins: 0
        }
    }
// adds the money on
    coins[message.author.id] = {
        coins: coins[message.author.id].coins + coinAmt
    };
    fs.writeFile('./coins.json', JSON.stringify(coins), err =>{
        if (err) console.log(err)
    })
// sends message to the authors dm and then deletes itself after 60 seconds.
          message.author.send(`you got ${coinAmt}`).then(msg => {msg.delete(60000)})
          console.log(`${message.author.tag} got ${coinAmt}`)
}
  
});

bot.on("message", async message => {
const prefix = ">"
  if(message.content.indexOf(prefix) !== 0) return;
if(message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(" ")
const command = args.shift().toLowerCase();
if(command === 'money'){
if(!coins[message.author.id]){
        coins[message.author.id] = {
           coins: 0
        }
    }

     message.reply("you have" + coins[message.author.id].coins)
}
if(command == 'embed'){
    var embed = new Discord.RichEmbed()
            .addField('Field', "Field2", true)
            .addField('You will need hex colours. if you need help google "colour picker"', 'hex', true)
            .addField("Blank Field", "blank")
            .addBlankField()
            .setColor('FFFFFF')
            .setAuthor(`Author can also hold a image.`, image)
            .setFooter('This is the footer. at the very bottom. can also hold a picture', image)
            .setImage('image')
            message.channel.send(embed)
}
if(command === 'pool')
  {  
//the choices. pulls a random string from here.
      let choices = ["apple", 'website','soda can',' light bulb']
// does the pulling
            let response = choices[Math.floor(Math.random() * choices.length)]
//posts the response.
              message.channel.send(response)

  }

  if(command === "math"){
// checks if there is any args.
  if (!args[0]) return message.channel.send('Please Supply Args.');
  let resp;
  try {
      resp = math.eval(args.join(' '));
  } catch (e) {
// Error message.
      return message.channel.send('Sorry, I cant solve that.');
  }
// makes a embed and then does the math.
  const embed = new Discord.RichEmbed()
  .setColor('FFFFFF')
       .setTitle('Math')
      .addField('Question', `${args.join('')}`)
      .addField('Answer', `${resp}`)
  message.channel.send(embed);
  }

 if(command === "say") {
// gives the message a better look, it would look like hello,world but adding this changes it to hello world.
 const sayMessage = args.join(" ");
// this deletes the user message and ignores the error it generates.
    message.delete().catch(O_o=>{});
//sends the message you sent. 
  message.channel.send(says)
 }
 if(command === "avatar"){
// checks if you mentioned anyone.
    if (!message.mentions.users.size) {
        var embed = new Discord.RichEmbed()
            .setImage(message.author.displayAvatarURL)
            .setColor('FFFFFF')
            message.channel.send(embed)
        }
        
        const avatarList = message.mentions.users.map(user => {
// if you did then it show their avatar.
            var embed = new Discord.RichEmbed()
            .setImage(user.displayAvatarURL)
            .setColor('FFFFFF')
            message.channel.send(embed)
        });
  }

if(command == 'playstatus'){
// blocks other users.
if(message.author.id !== ownerid) return message.reply("sorry you cant do that");
// same thing as sayMessage
 const playStatus = args.join(" ");
// sets the playstatus
 bot.user.setActivity(`${playStatus} | any thing else you wanna add.`)
// guess what this does?
message.reply("sure thing.")
}
});
bot.login("your-veryepic&token");

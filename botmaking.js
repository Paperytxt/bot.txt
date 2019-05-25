const Discord = require('discord.js');
const bot = new Discord.Client();
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
     message.reply("you have" + coins[message.author.id].coins)
}
 if(command === "say") {
// gives the message a better look, it would look like hello,world but adding this changes it to hello world.
 const sayMessage = args.join(" ");
// this deletes the user message and ignores the error it generates.
    message.delete().catch(O_o=>{});
//sends the message you sent. 
  message.channel.send(says)
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

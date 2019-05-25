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
bot.on("message", async message => {
const prefix = ">"
  if(message.content.indexOf(prefix) !== 0) return;
if(message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(" ")
const command = args.shift().toLowerCase();
 if(command === "say") {
// gives the message a better look, it would look like hello,world but adding this changes it to hello world.
 const sayMessage = args.join(" ");
// this deletes the user message and ignores the error it generates.
    message.delete().catch(O_o=>{});
//sends the message you sent. 
  message.channel.send(says)
 }
if(command === 'playstatus'){
// like I said, blocks other users.
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

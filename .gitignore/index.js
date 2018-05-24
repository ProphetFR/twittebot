const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("TwitterBot, !!help");
    console.log("Le Bot et la pour vous informer");
})

bot.login("NDQ4OTM4NDExMTc3Mjc5NDg4.Dedeyw.UNUMi6mCQM8CwcL2vwh1SCvLapE");


bot.on('message', message => {
    if (message.content === '!!twitter') {
      message.reply('tu veux des info sur tes jeux pas de problaime les voila sur!')
      message.reply('DOFUS     https://twitter.com/DOFUSfr?lang=fr!')
      message.reply('CS:GO     https://twitter.com/csgo_dev?lang=fr!')
      message.reply('Overwatch https://twitter.com/OverwatchFR?lang=fr!')
      message.reply('fortnite  https://twitter.com/FortniteGame?lang=fr!')
    }
  })

bot.on('message', message => {
    if (message.content === '!!help') {
      message.reply('les commande sont!')
      message.reply('!!help')
      message.reply('!!twitter') 
    }
  })

  

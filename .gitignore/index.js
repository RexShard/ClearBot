const Discord = require("discord.js")

var bot = new Discord.Client();

bot.on("ready", function() {
bot.user.setGame("ClearBot, *help");
console.log("Le bot à bien été connecté");
})

bot.login("Mzk4NTUwMzk2Nzk0MzA2NTYw.DTAKkw.s3rPlWcfN5BTBUr8lvpBzRVPl6o");

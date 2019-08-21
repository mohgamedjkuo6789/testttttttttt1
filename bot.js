const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("596850490893926400")
setInterval(function() {
channel.send(`mohamed mohamed mohamed mohamed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
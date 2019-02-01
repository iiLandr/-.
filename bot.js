const Discord = require('discord.js');
const client = new Discord.Client();

const devs = ["323152294289866763"];
const adminprefix = "+";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + "ply")) {
    client.user.setGame(argresult);
      message.channel.send(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + "wh")) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + "wt")) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix +"st")) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**:white_check_mark:**`)
}
});

client.login(process.env.USER_TOKEN);
 

const Discord = require('discord.js');
const client = new Discord.Client();

const devs = ["323152294289866763"];
const adminprefix = ".";
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




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`play`,)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});





client.login(process.env.USER_TOKEN);
 

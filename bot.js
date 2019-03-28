const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




const deve = ['517701481059844106'];
const adminp = "-";
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!deve.includes(message.author.id)) return;
    
if (message.content.startsWith(adminp + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminp + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminp + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminp + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/BlueGamer");
    message.channel.sendMessage(`**Done ${argresult}**`)
}
});

client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هن


var prefix = "-"
client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
// By JàkeY#2019 And Toxic Codes
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
// By JàkeY#2019 And Toxic Codes
  let args = message.content.split(" ").slice(1);
// By JàkeY#2019 And Toxic Codes
  if (command == "say") {
  if (message.member.id !== "467151446509617182") return message.channel.send('**لا حبي ما يصير هيك 😂 , [Protector Bot] **');// By JàkeY#2019 And Toxic Codes
   message.channel.send(args.join("  "))// By JàkeY#2019 And Toxic Codes
   message.delete()// By JàkeY#2019 And Toxic Codes
  }
 });
// لا تنسى تمنشني اذا جاتك مشكلة 😃

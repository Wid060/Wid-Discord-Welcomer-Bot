const { Client } = require('discord.js');
const ytdl = require('ytdl-core');
const ms = require('ms');
const { TOKEN, STATUS, HG_VOICE_CHANNEL, Unregister_Role, HG_VIDEO_LINK, GUILD_ID } = require('./welcome.json');


const widbot = new Client();
widbot.on("ready", () => {
  setInterval(function() {
   widbot.user.setPresence({ activity: { name: STATUS }, status: 'dnd' })
  }, 60000);//Burası durum kaybolmaaması için 1 dk bir durumu yeniliyor.
  console.log(`${widbot.user.username} Adlı hoşgeldin botu aktif!`);
});
const connections = new Map();
let broadcast;
client.on('voiceStateUpdate', async (member, newState) => {
  const voiceChannels = widbot.guilds.cache.get(GUILD_ID).channels.cache.get(HG_VOICE_CHANNEL);
  const voiceChannel = member.voice;
  if (newState.channelID == HG_VOICE_CHANNEL) {
  if(!newState.member.roles.cache.has(Unregister_Role)) return
        voiceChannels.join().then(connection => {
        const stream = ytdl(HG_VIDEO_LINK, {quality:'highest', filter:'audioonly'}, {passes: 3, volume: 0.5});
        const dispatcher = connection.play(stream);
})}});


widbot.login(TOKEN);


// Burda pek ayarlanacak pek bişey yok tek yapmanız gereken welcome.json adlı dosyanın içindeki ayarları ayarlamanız.

// Şimdidien İyi Kullanımlar.
// Eğer hata ile karşılaşırsanız discord sunucusundan ulaşabilirsiniz.
// Discord : https://discord.gg/h78bpwRQ4P

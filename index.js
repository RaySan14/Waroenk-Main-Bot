const {
  Client,
  GatewayIntentBits,
  EmbedBuilder
} = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', async () => {
  console.log(`✅ ${client.user.tag} online!`);

  const channel = await client.channels.fetch('1513407480586178742');

  const embed = new EmbedBuilder()
    .setColor('#5865F2')
    .setTitle('📍 Domisili Catalog')
    .setDescription(`
Silahkan pilih roles sesuai dengan domisili asal kamu!

🌴 | Bali
🌿 | Banten
🏙️ | Jakarta
🌄 | Jawa Barat
🏛️ | Jawa Tengah
🌋 | Jawa Timur
🌳 | Kalimantan
🏝️ | Nusa Tenggara
🦜 | Papua
🐟 | Sulawesi
🌴 | Sumatra
🎭 | Yogyakarta
🌍 | International
`)
    .setFooter({
      text: 'Click menu ini untuk memilih roles!'
    });

  await channel.send({
    embeds: [embed]
  });
});

client.login(process.env.TOKEN);

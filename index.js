const {
    Client,
    GatewayIntentBits,
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder
} = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const CHANNEL_ID = '1513407480586178742';

const BANNER_URL = 'https://cdn.discordapp.com/attachments/1513161703393857616/1513409864028782592/7E3C8A6E-F15F-4BC2-990B-201960F3D557.png';

client.once('ready', async () => {
    console.log(`✅ ${client.user.tag} online!`);

    try {
        const channel = await client.channels.fetch(CHANNEL_ID);

        const embed = new EmbedBuilder()
            .setColor('#F1C40F')
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
            .setImage(BANNER_URL)
            .setFooter({
                text: 'Click menu ini untuk memilih roles!'
            });

        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('domisili_menu')
                    .setPlaceholder('📍 Pilih domisili kamu...')
                    .addOptions([
                        {
                            label: 'Bali',
                            description: 'Pilih jika kamu berasal dari Bali',
                            emoji: '🌴',
                            value: 'bali'
                        },
                        {
                            label: 'Banten',
                            description: 'Pilih jika kamu berasal dari Banten',
                            emoji: '🌿',
                            value: 'banten'
                        },
                        {
                            label: 'Jakarta',
                            description: 'Pilih jika kamu berasal dari Jakarta',
                            emoji: '🏙️',
                            value: 'jakarta'
                        },
                        {
                            label: 'Jawa Barat',
                            description: 'Pilih jika kamu berasal dari Jawa Barat',
                            emoji: '🌄',
                            value: 'jawabarat'
                        },
                        {
                            label: 'Jawa Tengah',
                            description: 'Pilih jika kamu berasal dari Jawa Tengah',
                            emoji: '🏛️',
                            value: 'jawatengah'
                        },
                        {
                            label: 'Jawa Timur',
                            description: 'Pilih jika kamu berasal dari Jawa Timur',
                            emoji: '🌋',
                            value: 'jawatimur'
                        },
                        {
                            label: 'Kalimantan',
                            description: 'Pilih jika kamu berasal dari Kalimantan',
                            emoji: '🌳',
                            value: 'kalimantan'
                        },
                        {
                            label: 'Nusa Tenggara',
                            description: 'Pilih jika kamu berasal dari Nusa Tenggara',
                            emoji: '🏝️',
                            value: 'nusatenggara'
                        },
                        {
                            label: 'Papua',
                            description: 'Pilih jika kamu berasal dari Papua',
                            emoji: '🦜',
                            value: 'papua'
                        },
                        {
                            label: 'Sulawesi',
                            description: 'Pilih jika kamu berasal dari Sulawesi',
                            emoji: '🐟',
                            value: 'sulawesi'
                        },
                        {
                            label: 'Sumatra',
                            description: 'Pilih jika kamu berasal dari Sumatra',
                            emoji: '🌴',
                            value: 'sumatra'
                        },
                        {
                            label: 'Yogyakarta',
                            description: 'Pilih jika kamu berasal dari Yogyakarta',
                            emoji: '🎭',
                            value: 'yogyakarta'
                        },
                        {
                            label: 'International',
                            description: 'Pilih jika kamu berasal dari luar Indonesia',
                            emoji: '🌍',
                            value: 'international'
                        }
                    ])
            );

        await channel.send({
            embeds: [embed],
            components: [row]
        });

    } catch (error) {
        console.error(error);
    }
});

client.on('interactionCreate', async interaction => {

    if (!interaction.isStringSelectMenu()) return;

    if (interaction.customId === 'domisili_menu') {

        const pilihan = interaction.values[0];

        await interaction.reply({
            content: `✅ Domisili yang dipilih: **${pilihan}**`,
            ephemeral: true
        });
    }
});

client.login(process.env.TOKEN);

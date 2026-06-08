const {
    Client,
    GatewayIntentBits,
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

const CHANNEL_ID = '1513407480586178742';

const GENDER_BANNER = 'https://cdn.discordapp.com/attachments/1513161703393857616/1513418509378519050/5E6FC85F-C98D-4CCC-8BD7-3FD9A8DD0FF6.png';

const genderRoles = {
    boy: '1513361140866879618',
    ladies: '1513149828819980359'
};

const gameRoles = {
    gtav: '1513358155118018560',
    samp: '1513358190769864825',
    roblox: '1513417247790731385',
    minecraft: '1513358107324055752',
    pubg: '1513358232498868354',
    pubgm: '1513417212738932856',
    ron: '1513358284760027307'
};

const GAME_BANNER = 'https://cdn.discordapp.com/attachments/1513161703393857616/1513426086950731867/BCC206BD-48B8-4F45-875D-D003BC9F3D02.png';

const BANNER_URL = 'https://cdn.discordapp.com/attachments/1513161703393857616/1513409864028782592/7E3C8A6E-F15F-4BC2-990B-201960F3D557.png';

const roles = {
    bali: '1513404286967484536',
    banten: '1513404364054593667',
    jakarta: '1513404451367420014',
    jawabarat: '1513404531466047531',
    jawatengah: '1513404626450387014',
    jawatimur: '1513404715084546098',
    kalimantan: '1513404787981553675',
    nusatenggara: '1513404862912659526',
    papua: '1513404949281771690',
    sulawesi: '1513405104085008404',
    sumatra: '1513405199094382602',
    yogyakarta: '1513405273677627513',
    international: '1513405348286038127'
};

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
                        { label: 'Bali', emoji: '🌴', value: 'bali' },
                        { label: 'Banten', emoji: '🌿', value: 'banten' },
                        { label: 'Jakarta', emoji: '🏙️', value: 'jakarta' },
                        { label: 'Jawa Barat', emoji: '🌄', value: 'jawabarat' },
                        { label: 'Jawa Tengah', emoji: '🏛️', value: 'jawatengah' },
                        { label: 'Jawa Timur', emoji: '🌋', value: 'jawatimur' },
                        { label: 'Kalimantan', emoji: '🌳', value: 'kalimantan' },
                        { label: 'Nusa Tenggara', emoji: '🏝️', value: 'nusatenggara' },
                        { label: 'Papua', emoji: '🦜', value: 'papua' },
                        { label: 'Sulawesi', emoji: '🐟', value: 'sulawesi' },
                        { label: 'Sumatra', emoji: '🌴', value: 'sumatra' },
                        { label: 'Yogyakarta', emoji: '🎭', value: 'yogyakarta' },
                        { label: 'International', emoji: '🌍', value: 'international' }
                    ])
            );

        await channel.send({
            embeds: [embed],
            components: [row]
        });
            const genderEmbed = new EmbedBuilder()
    .setColor('#9B59B6')
    .setTitle('🚻 Gender Catalog')
    .setDescription(`
Silahkan pilih roles sesuai dengan gender kamu.

👦 | Boy
👩 | Ladies
`)
    .setImage(GENDER_BANNER)
    .setFooter({
        text: 'Click menu ini untuk memilih roles!'
    });

const genderRow = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('gender_menu')
            .setPlaceholder('🚻 Pilih gender kamu...')
            .addOptions([
                {
                    label: 'Boy',
                    emoji: '👦',
                    value: 'boy'
                },
                {
                    label: 'Ladies',
                    emoji: '👩',
                    value: 'ladies'
                }
            ])
    );

await channel.send({
    embeds: [genderEmbed],
    components: [genderRow]
});

const gameEmbed = new EmbedBuilder()
    .setColor('#2ECC71')
    .setTitle('🎮 Game Catalog')
    .setDescription(`
Silahkan pilih game yang kamu mainkan!

🚗 | GTA V
🚔 | GTA SA:MP
🟦 | Roblox
⛏️ | Minecraft
🔫 | PUBG
📱 | PUBG Mobile
🚨 | Ready Or Not
`)
    .setImage(GAME_BANNER)
    .setFooter({
        text: 'Click menu ini untuk memilih roles!'
    });

const gameRow = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('game_menu')
            .setPlaceholder('🎮 Pilih game yang kamu mainkan...')
            .setMinValues(1)
            .setMaxValues(7)
            .addOptions([
                { label: 'GTA V', emoji: '🚗', value: 'gtav' },
                { label: 'GTA SA:MP', emoji: '🚔', value: 'samp' },
                { label: 'Roblox', emoji: '🟦', value: 'roblox' },
                { label: 'Minecraft', emoji: '⛏️', value: 'minecraft' },
                { label: 'PUBG', emoji: '🔫', value: 'pubg' },
                { label: 'PUBG Mobile', emoji: '📱', value: 'pubgm' },
                { label: 'Ready Or Not', emoji: '🚨', value: 'ron' }
            ])
    );

await channel.send({
    embeds: [gameEmbed],
    components: [gameRow]
});

const rulesChannel = await client.channels.fetch('1513142504516747506');

const rulesEmbed = new EmbedBuilder()
    .setColor('#E74C3C')
    .setTitle('📜 Waroenk Main Rules')
    .setImage('https://media.discordapp.net/attachments/1513161703393857616/1513486236835254343/ChatGPT_Image_8_Jun_2026_17.13.39.png')
    .setDescription(`
**A. Respect Satu Sama Lain**

Tidak ada toleransi untuk tindakan pelecehan, diskriminasi, intimidasi, rasisme, mockery, doxxing, dan ujaran kebencian dalam bentuk apa pun.

━━━━━━━━━━━━━━

**B. Tata Krama**

• Dilarang bypass auto moderation.
• Dilarang menggunakan kata tidak senonoh.
• Dilarang diskriminasi terhadap member lain.
• Dilarang ujaran kebencian.
• Dilarang membahas topik sensitif seperti agama, politik, komunisme, terorisme, dan peperangan.
• Dilarang memulai drama.
• Dilarang earrape.
• Dilarang mempromosikan perjudian.

━━━━━━━━━━━━━━

**C. Circle**

Dilarang membentuk kelompok untuk raid, spam, ujaran kebencian, atau tindakan yang merugikan komunitas.

━━━━━━━━━━━━━━

**D. Access**

• Dilarang menyalahgunakan akses atau fasilitas server.
• Dilarang menyalahgunakan bot maupun celah sistem.

━━━━━━━━━━━━━━

**E. Informasi**

• Dilarang menyebarkan informasi palsu.
• Dilarang melakukan penipuan atau phishing.

━━━━━━━━━━━━━━

**F. Identitas**

• Dilarang meniru identitas member, bot, maupun staff.
• Dilarang menggunakan nama, foto, atau bio yang tidak pantas.
• Dilarang menyebarkan data pribadi orang lain.

━━━━━━━━━━━━━━

**G. Spamming**

• Dilarang spam text, emoji, sticker, reaction, gambar, video, maupun mention.

━━━━━━━━━━━━━━

**H. Promotion**

• Dilarang promosi server, grup, sosial media, maupun produk tanpa izin staff.

━━━━━━━━━━━━━━

**I. Self Botting**

Dilarang menggunakan self-bot dalam bentuk apa pun.

━━━━━━━━━━━━━━

**J. NSFW**

• Dilarang menyebarkan konten NSFW.
• Dilarang menseksualisasi karakter atau orang di bawah umur.

━━━━━━━━━━━━━━

⚖️ Dengan bergabung di Waroenk Main, kamu dianggap telah membaca dan menyetujui seluruh peraturan yang berlaku.
`)
    .setFooter({
        text: 'Waroenk Main Community Rules'
    });

await rulesChannel.send({
    embeds: [rulesEmbed]
});
        
} catch (error) {
    console.error(error);
}
});

client.on('interactionCreate', async interaction => {

    if (!interaction.isStringSelectMenu()) return;

    // GENDER MENU
    if (interaction.customId === 'gender_menu') {

        try {

            await interaction.member.roles.remove([
                '1513361140866879618',
                '1513149828819980359'
            ]);

            const selectedGender = genderRoles[interaction.values[0]];

            if (selectedGender) {
                await interaction.member.roles.add(selectedGender);
            }

            return interaction.reply({
                content: `✅ Gender berhasil diubah menjadi **${interaction.values[0].toUpperCase()}**`,
                ephemeral: true
            });

        } catch (error) {

            console.error(error);

            return interaction.reply({
                content: '❌ Gagal memberikan role gender.',
                ephemeral: true
            });
        }
    }

    // DOMISILI MENU
    if (interaction.customId === 'domisili_menu') {

        const allDomisiliRoles = Object.values(roles);

        try {

            await interaction.member.roles.remove(allDomisiliRoles);

            const selectedRole = roles[interaction.values[0]];

            if (selectedRole) {
                await interaction.member.roles.add(selectedRole);
            }

            return interaction.reply({
                content: `✅ Domisili berhasil diubah menjadi **${interaction.values[0]}**`,
                ephemeral: true
            });

        } catch (error) {

            console.error(error);

            return interaction.reply({
                content: '❌ Gagal memberikan role. Pastikan role bot berada di atas semua role domisili dan memiliki izin Manage Roles.',
                ephemeral: true
            });
        }
    }

// GAME MENU
if (interaction.customId === 'game_menu') {

    try {

        await interaction.member.roles.remove(
            Object.values(gameRoles)
        );

        const selectedRoles = interaction.values.map(
            value => gameRoles[value]
        );

        await interaction.member.roles.add(selectedRoles);

        return interaction.reply({
            content: '✅ Game roles berhasil diperbarui!',
            ephemeral: true
        });

    } catch (error) {

        console.error(error);

return interaction.reply({
    content: '❌ Gagal memberikan role game.',
    ephemeral: true
});
    }
}

});

client.login(process.env.TOKEN);

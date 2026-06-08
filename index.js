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
});

client.login(process.env.TOKEN);

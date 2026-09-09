const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Bot başarıyla giriş yaptı: ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('Pong! 🏓');
    }
});

client.login('MTU0NzE2NjYyNTE5Mzc5MTUwOA.GIhjdB.G9DzwN4_P3hEzysYH_7kehRHDKgyMeg8TwqDG4');
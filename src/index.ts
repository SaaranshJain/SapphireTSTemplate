import { SapphireClient } from '@sapphire/framework';
import { config } from 'dotenv';

config();

const client = new SapphireClient({
    intents: ['GUILDS', 'GUILD_MESSAGES'],
    defaultPrefix: '!',
});

client.on('ready', (client) => {
    console.log(client.user.username, 'has logged in!');
});

client.login(process.env['TOKEN']);

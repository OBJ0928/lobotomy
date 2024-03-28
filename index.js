const Discord = require('discord.js');
const dotenv = require('dotenv');
const client = new Discord.Client({ intents: 131071, partials: ['CHANNEL', 'USER', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'GUILD_SCHEDULED_EVENT'], allowedMentions: { parse: ['users'] } });


dotenv.config();

process.on('unhandledRejection', (err) => {
    console.log(`${JSON.stringify(err)}`);
});

client.on('error', (err) => {
    console.log(`${JSON.stringify(err)}`);
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('message', async (message) =>
{
    if (message.author.bot) return;


  });

client.login(process.env.TOKEN);

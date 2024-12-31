import { GatewayIntentBits } from "discord.js";
import "dotenv/config.js";
import ClientWithCommands from "./ClientWithCommands.js";
import HandleMessageCreate from "./eventHandlers/MessageCreate.js";
import HandleInteractionCreate from "./eventHandlers/InteractionCreate.js";
import HandleClientReady from "./eventHandlers/ClientReady.js";

const client = new ClientWithCommands({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

HandleClientReady(client);

HandleMessageCreate(client);
HandleInteractionCreate(client);

client.login(process.env.TOKEN);

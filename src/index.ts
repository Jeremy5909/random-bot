import {
  Events,
  GatewayIntentBits,
  MessageFlags,
  TextChannel,
} from "discord.js";
import "dotenv/config.js";
import NewClient from "./Client.js";
import "./RegisterCommands.js";

const client = new NewClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "say") {
    const message = interaction.options.getString("message")!;

    await (interaction.channel as TextChannel).send(message);

    await interaction.reply({
      content: "Sent!",
      flags: MessageFlags.Ephemeral,
    });
  }
});

client.login(process.env.TOKEN);

import {
  PermissionFlagsBits,
  REST,
  Routes,
  SlashCommandBuilder,
} from "discord.js";
import "dotenv/config.js";

const sayCommand = new SlashCommandBuilder()
  .setName("say")
  .setDescription("sigma")
  .addStringOption((option) =>
    option
      .setName("message")
      .setDescription("What to say as Gyatt Cake")
      .setRequired(true),
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages);

const rest = new REST().setToken(process.env.TOKEN!);

(async () => {
  await rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT!, process.env.GUILD!),
    { body: [sayCommand.toJSON()] },
  );
})();

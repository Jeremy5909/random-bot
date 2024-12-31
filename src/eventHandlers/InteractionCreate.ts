import { Events } from "discord.js";
import ClientWithCommands from "../Client";

export default function HandleInteractionCreate(client: ClientWithCommands) {
  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (command) {
      await command.execute(interaction);
    } else {
      console.log("Command not found");
    }
  });
}

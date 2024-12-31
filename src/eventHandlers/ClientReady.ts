import { Events } from "discord.js";
import loadCommands from "../LoadCommands.js";
import ClientWithCommands from "../ClientWithCommands.js";

export default function HandleClientReady(client: ClientWithCommands) {
  client.on(Events.ClientReady, async (readyClient) => {
    console.log(`Logged in as ${readyClient.user.tag}`);
    loadCommands(client);
  });
}

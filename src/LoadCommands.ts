import path from "path";
import fs from "fs";
import {
  REST,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  Routes,
} from "discord.js";
import ClientWithCommands, { CommandType } from "./Client";
const rest = new REST().setToken(process.env.TOKEN!);

const __dirname = import.meta.dirname;

type commandJSON = RESTPostAPIChatInputApplicationCommandsJSONBody;

async function loadCommands(client: ClientWithCommands) {
  const commands: [commandJSON?] = [];

  const normalizedPath = path.join(__dirname, "commands");
  const files = fs.readdirSync(normalizedPath);

  for (const file of files) {
    const command: CommandType = (await import("./commands/" + file)).default; // Why do i have to do .default
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
      commands.push(command.data.toJSON());
    } else {
      console.log(`Command at ./commands/${file} missing "data" or "execute"`);
    }
  }

  console.log("Loaded commands");

  await rest
    .put(
      Routes.applicationGuildCommands(process.env.CLIENT!, process.env.GUILD!),
      { body: commands },
    )
    .then(() => {
      console.log("Registered commands");
    });
}

export default loadCommands;

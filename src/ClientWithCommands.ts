import {
  CacheType,
  ChatInputCommandInteraction,
  Client,
  ClientOptions,
  Collection,
  SlashCommandBuilder,
} from "discord.js";

export default class ClientWithCommands extends Client {
  commands: Collection<string, CommandType>;

  constructor(options: ClientOptions) {
    super(options);
    this.commands = new Collection();
  }
}

export interface CommandType {
  data: SlashCommandBuilder;
  execute(interaction: ChatInputCommandInteraction<CacheType>): Promise<void>;
}

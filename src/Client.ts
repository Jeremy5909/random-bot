import { Client, ClientOptions, Collection } from "discord.js";

export default class NewClient extends Client {
  commands: Collection<any, any>;
  constructor(options: ClientOptions) {
    super(options);
    this.commands = new Collection();
  }
}

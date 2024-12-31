import { Client, Events, MessageType, TextChannel } from "discord.js";

const reactChance = 1 / 30;
const replyChance = 1 / 40;

const reactions = ["🤓", "🐺"];
const replies = ["I care!", "nobody cares", "🤓", "🐺"];

function randomFromArray(array: any[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function HandleMessageCreate(client: Client) {
  client.on(Events.MessageCreate, async (message) => {
    if (Math.random() <= reactChance) {
      message.react(randomFromArray(reactions));
    }
    if (Math.random() <= replyChance) {
      message.reply(randomFromArray(replies));
    }
    if (message.type === MessageType.Reply) {
      if (message.content.includes("🤓")) {
        return; // TODO
      }
    }
    if (message.content.toLowerCase().includes("i love you abe")) {
      (message.channel as TextChannel).send("i love you too");
    }
  });
}

import { SlashCommandBuilder } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("say something as abaraham"),
  async execute(interaction) {
    await interaction.reply("sigma");
  },
};

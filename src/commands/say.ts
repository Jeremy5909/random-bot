import {
  CacheType,
  ChatInputCommandInteraction,
  MessageFlags,
  PermissionFlagsBits,
  SlashCommandBuilder,
  TextChannel,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Say something as Gyatt Cake")
    .addStringOption((option) =>
      option.setName("message").setDescription("What to say").setRequired(true),
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

  async execute(interaction: ChatInputCommandInteraction<CacheType>) {
    (interaction.channel as TextChannel).send(
      interaction.options.getString("message")!,
    );
    await interaction.reply({ content: "Sent", flags: MessageFlags.Ephemeral });
  },
};

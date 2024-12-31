import {
  CacheType,
  ChatInputCommandInteraction,
  PermissionFlagsBits,
  SlashCommandBuilder,
  TextChannel,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("nuke")
    .setDescription("clears the chat")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

  async execute(interaction: ChatInputCommandInteraction<CacheType>) {
    const channel = interaction.channel as TextChannel;
    channel.clone().then((newChannel) => {
      const originalPosition = channel.position;
      channel.delete().catch(() => null);
      newChannel.setPosition(originalPosition);
    });
  },
};

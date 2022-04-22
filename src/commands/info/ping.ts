import { MessageEmbed } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "Check your ping (ms).",
    run: async ({ client, interaction }) => {
        // Defer reply and make ephemeral
        if (interaction.isCommand()) {
            await interaction.deferReply({
                ephemeral: true,
            });
        }

        // Ping embed options
        const pingEmbed = new MessageEmbed()
            .setTitle("Checking your ping...")
            .setDescription(`Your ping is: \`${client.ws.ping}\` ms`)
            .setColor("#99ccff")
            .setThumbnail(`${interaction.user.displayAvatarURL()}`)
            .setTimestamp();

        interaction.followUp({
            embeds: [pingEmbed],
        });
    },
});

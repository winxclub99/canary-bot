import { MessageEmbed } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
    name: "kiss",
    description: "Kiss someone!",
    options: [
        {
            name: "username",
            description: "Who do you want to kiss?",
            type: "MENTIONABLE",
            required: true,
        },
    ],
    run: async ({ client, interaction }) => {
        // Defer reply
        if (interaction.isCommand()) {
            await interaction.deferReply({
                ephemeral: false,
            });
        }

        const personKissed = interaction.options.getMentionable("username");
        const kissTitle = ["A kiss!", "A big kiss!", "Surprise! A kiss!", "Kiss!", "Mwah!"];
        const kissMessage = [
            `${interaction.user} gave ${personKissed} a kiss!`,
            `${interaction.user} kissed ${personKissed} :heart:`,
            `${interaction.user} gave ${personKissed} a big kiss! Yuck!`,
            `${personKissed} got kissed by ${interaction.user}!`,
        ];
        const kissImages = [
            "https://c.tenor.com/rLG5b9ElfBIAAAAi/lily-and-marigold.gif",
            "https://c.tenor.com/IY9Hmz9B-vgAAAAC/kiss-anime.gif",
            "https://c.tenor.com/Xc6y_eh0IcYAAAAd/anime-kiss.gif",
            "https://c.tenor.com/DDmZqcOZJisAAAAC/anime.gif",
            "https://c.tenor.com/F02Ep3b2jJgAAAAC/cute-kawai.gif",
            "https://c.tenor.com/h0-oyAlOVUEAAAAC/yosuga-no-sora-kiss.gif",
            "https://c.tenor.com/nRdyrvS3qa4AAAAC/anime-kiss.gif",
            "https://c.tenor.com/FgYExssph6MAAAAC/kiss-love.gif",
            "https://c.tenor.com/217aKgnf16sAAAAC/kiss.gif",
            "https://c.tenor.com/vmrR0VoDVRkAAAAC/blow-kiss-anime-blow-kiss.gif",
        ];

        // Return embeded follow up if it is the correct member
        if (personKissed) {
            //  kissEmbed options
            let kissEmbed = new MessageEmbed()
                .setTitle(kissTitle[Math.floor(Math.random() * kissTitle.length)])
                .setColor("#99ccff")
                .setDescription(kissMessage[Math.floor(Math.random() * kissMessage.length)])
                .setImage(kissImages[Math.floor(Math.random() * kissImages.length)])
                .setFooter({
                    text: `${interaction.user.tag}`,
                })
                .setTimestamp();

            interaction.followUp({
                embeds: [kissEmbed],
            });
        } else {
            interaction.followUp("Sorry, that user does not exist in this server.");
        }
    },
});

import { MessageEmbed } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
    name: "hug",
    description: "Hug someone!",
    options: [
        {
            name: "username",
            description: "Who do you want to hug?",
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

        const personHugged = interaction.options.getMentionable("username");
        const hugTitle = ["A hug!", "A big hug!", "Surprise! A hug!", "Hug! :heart:"];
        const hugMessage = [
            `${interaction.user} gave ${personHugged} a hug!`,
            `${interaction.user} hugged ${personHugged} :heart:`,
            `${interaction.user} gave ${personHugged} a big hug! Awww.`,
            `${personHugged} got hugged by ${interaction.user}!`,
        ];
        const hugImages = [
            "https://c.tenor.com/0T3_4tv71-kAAAAC/anime-happy.gif",
            "https://c.tenor.com/O3qIam1dAQQAAAAC/hug-cuddle.gif",
            "https://c.tenor.com/TJuvig1CFBQAAAAd/the-pet-girl-of-sakurasou-sakurasou-no-pet-na-kanojo.gif",
            "https://c.tenor.com/KHUhRSyp03EAAAAC/miss-you.gif",
            "https://c.tenor.com/mB_y2KUsyuoAAAAd/cuddle-anime-hug.gif",
            "https://c.tenor.com/ItpTQW2UKPYAAAAC/cuddle-hug.gif",
            "https://c.tenor.com/7zb6sgeEKIEAAAAC/snap.gif",
            "https://c.tenor.com/qZiLC0qGROAAAAAC/anime-two-girls.gif",
            "https://c.tenor.com/qQXjMmdgYioAAAAC/anime-anime-love.gif",
            "https://c.tenor.com/5tkkWFegYvUAAAAC/hug-couple.gif",
            "https://c.tenor.com/z5a6hfUh5SQAAAAC/hugs-and.gif",
            "https://c.tenor.com/kPgR6UH6AXcAAAAC/anime-hug.gif",
            "https://c.tenor.com/c0qkKNy2H6IAAAAd/darling-in-the-franxx-zhiro.gif",
            "https://c.tenor.com/EiTiwaYXH-QAAAAC/anime-anime-hug.gif",
            "https://c.tenor.com/MJOxwB1vH0kAAAAC/sannami-nami.gif",
        ];

        // Return embeded follow up if it is the correct member
        if (personHugged) {
            // Hug embed options
            let hugEmbed = new MessageEmbed()
                .setTitle(hugTitle[Math.floor(Math.random() * hugTitle.length)])
                .setColor("#99ccff")
                .setDescription(hugMessage[Math.floor(Math.random() * hugMessage.length)])
                .setImage(hugImages[Math.floor(Math.random() * hugImages.length)])
                .setFooter({
                    text: `${interaction.user.tag}`,
                })
                .setTimestamp();

            interaction.followUp({
                embeds: [hugEmbed],
            });
        } else {
            interaction.followUp("Sorry, that user does not exist in this server.");
        }
    },
});

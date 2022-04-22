import { MessageEmbed } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
    name: "pet",
    description: "Pet someone!",
    options: [
        {
            name: "username",
            description: "Who do you want to pet?",
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

        const personPet = interaction.options.getMentionable("target");
        const petMessage = [
            `${interaction.user} gave ${personPet} headpats!`,
            `${interaction.user} pet ${personPet} :heart:`,
            `${personPet} got headpats from ${interaction.user}!`,
        ];
        const petImages = [
            "https://c.tenor.com/edHuxNBD6IMAAAAC/anime-head-pat.gif",
            "https://c.tenor.com/2vFAxyl6cI8AAAAd/mai-headpats.gif",
            "https://c.tenor.com/ufs11bnfgYsAAAAC/anime-cute.gif",
            "https://c.tenor.com/N41zKEDABuUAAAAC/anime-head-pat-anime-pat.gif",
            "https://c.tenor.com/kM1mVaXE8Y8AAAAC/kaede-azusagawa-kaede.gif",
            "https://c.tenor.com/Y7B6npa9mXcAAAAC/rikka-head-pat-pat-on-head.gif",
            "https://c.tenor.com/9R7fzXGeRe8AAAAC/fantasista-doll-anime.gif",
            "https://c.tenor.com/Hgt-mT0KXN0AAAAd/chtholly-tiat.gif",
            "https://c.tenor.com/5dezHjhjBucAAAAC/nagi-no-asukara-manaka-mukaido.gif",
            "https://c.tenor.com/zBPha3hhm7QAAAAC/anime-girl.gif",
        ];

        // Return embeded follow up if it is the correct member
        if (personPet) {
            //  kissEmbed options
            let petEmbed = new MessageEmbed()
                .setTitle("Headpats!")
                .setColor("#99ccff")
                .setDescription(petMessage[Math.floor(Math.random() * petMessage.length)])
                .setImage(petImages[Math.floor(Math.random() * petImages.length)])
                .setFooter({
                    text: `${interaction.user.tag}`,
                })
                .setTimestamp();

            interaction.followUp({
                embeds: [petEmbed],
            });
        } else {
            interaction.followUp("Sorry, that user does not exist in this server.");
        }
    },
});

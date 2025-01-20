require('dotenv').config(); // Charger les variables d'environnement depuis .env

const { Client, GatewayIntentBits, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');

const API_BASE_URL = 'https://bhapi.338.rocks/v1';
const CLAN_ID = '983206'; // ID du clan fourni

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// Variables pour gérer les limites d'API
let apiCallCount = 0;  // Compteur des appels API
let startTime = Date.now();  // Temps de début (pour gérer la limite de 180 appels toutes les 15 minutes)

// Fonction pour effectuer des requêtes avec gestion des erreurs et rate-limiting
async function fetchWithRetry(url, params, retries = 5) {
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            const response = await axios.get(url, { params });
            apiCallCount++;  // Incrémenter le compteur d'appel API

            // Vérification de la limite des 180 appels toutes les 15 minutes
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime > 15 * 60 * 1000) {  // Si plus de 15 minutes ont passé
                apiCallCount = 0;  // Réinitialiser le compteur
                startTime = Date.now();  // Réinitialiser le temps de départ
            }

            // Si on atteint la limite de 180 appels, on attend jusqu'à ce qu'on puisse faire un autre appel
            if (apiCallCount >= 180) {
                const waitTime = 15 * 60 * 1000 - elapsedTime;  // Temps restant avant d'atteindre la limite
                console.log(`Limite de 180 appels atteinte. Attente de ${waitTime / 1000} secondes...`);
                await sleep(waitTime);  // Attendre jusqu'à la fin des 15 minutes
                apiCallCount = 0;  // Réinitialiser le compteur
                startTime = Date.now();  // Réinitialiser le temps de départ
            }

            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 429) {
                // Si c'est un rate limit, attendre avant de réessayer
                const retryAfter = error.response.headers['retry-after'] || 5; // Délai d'attente recommandé ou 5 secondes par défaut
                console.log(`Rate-limiting détecté. Attente de ${retryAfter} secondes...`);
                await sleep(retryAfter * 1000); // Attente avant de réessayer
            } else {
                console.error('Erreur de requête API:', error);
                if (attempt === retries - 1) {
                    return null;
                }
            }
        }
    }
    return null; // Retourne null si la requête échoue après plusieurs tentatives
}

// Fonction de délai d'attente
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Fonction pour récupérer les données du clan et afficher le classement
async function envoyerClassement(interaction) {
    try {
        // Répondre immédiatement à l'interaction pour éviter l'expiration
        await interaction.reply({ content: 'Chargement des données du classement...', flags: 64 }); // Réponse éphémère

        // Récupérer les données du clan depuis l'API
        const response = await fetchWithRetry(`${API_BASE_URL}/utils/clan`, { clan_id: CLAN_ID });

        if (!response || !response.data.clan) {
            return interaction.followUp('Erreur lors de la récupération des données du clan.');
        }

        const members = response.data.clan;

        // Créer un tableau pour récupérer les données des joueurs un par un avec un délai
        const memberData = [];

        // Parcourir les membres et récupérer leur bestElo avec un délai entre chaque requête
        for (let i = 0; i < members.length; i++) {
            const member = members[i];

            // Récupérer le bestElo pour chaque joueur via l'endpoint glory/id
            const gloryData = await fetchWithRetry(`${API_BASE_URL}/glory/id`, { brawlhalla_id: member.brawlhalla_id });

            // Vérification de la structure correcte de la réponse
            if (gloryData && gloryData.data && gloryData.data.bestElo !== undefined) {
                memberData.push({
                    name: member.name,
                    bestElo: gloryData.data.bestElo, // Utilisation correcte de bestElo
                });
            } else {
                memberData.push({
                    name: member.name,
                    bestElo: 'Aucun ELO', // Si aucune donnée ELO n'est trouvée, afficher 'Aucun ELO'
                });
            }

            // Ajouter un délai de 100ms entre chaque requête pour ne pas dépasser les 10 appels par seconde
            await sleep(100);  // Attendre 100ms entre chaque requête
        }

        // Trier les membres par leur meilleur ELO
        const sortedMembers = memberData.sort((a, b) => b.bestElo - a.bestElo);

        // Limiter à 25 membres pour respecter la contrainte de Discord
        const topMembers = sortedMembers.slice(0, 25);

        // Construire l'embed avec le classement et ajouter des emojis pour améliorer l'esthétique
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('🏆 Classement des membres du clan 🏆')
            .setDescription('Voici le classement des membres du clan par meilleur ELO (bestELO) :')
            .setTimestamp()
            .setThumbnail('https://example.com/logo.png')  // Logo ou image du clan
            .setFooter({
                text: 'Classement mis à jour automatiquement',
                iconURL: 'https://example.com/footer-icon.png',  // Icône du footer
            })
            .setAuthor({ name: 'Brawlhalla Clan Leaderboard', iconURL: 'https://example.com/author-icon.png' });

        // Ajouter les joueurs et leurs Elo dans l'embed avec des emojis
        topMembers.forEach((member, index) => {
            let emoji = '';
            if (index === 0) emoji = '🥇';  // 1er place
            else if (index === 1) emoji = '🥈';  // 2e place
            else if (index === 2) emoji = '🥉';  // 3e place
            else emoji = '🎯';  // Autres positions

            embed.addFields({
                name: `${emoji} ${member.name}`,
                value: `**Best ELO :** ${member.bestElo}`,
                inline: true,
            });
        });

        // Envoyer le classement via un message dans le canal
        await interaction.followUp({ embeds: [embed] });
    } catch (error) {
        console.error('Erreur lors de la récupération du classement:', error);
        interaction.followUp('Une erreur s\'est produite lors de l\'affichage du classement.');
    }
}

// Lorsque la commande Slash est exécutée
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'classement') {
        await envoyerClassement(interaction);
    }
});

// Connecter le bot avec le token
client.login(process.env.DISCORD_TOKEN); // Récupère le token à partir des variables d'environnement

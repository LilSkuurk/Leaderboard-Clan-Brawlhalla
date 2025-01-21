# 🎮 Brawlhalla Clan Leaderboard Bot 🏆

![Leaderboard Banner](https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif)  
Un bot Discord puissant pour afficher le classement des membres d'un clan Brawlhalla basé sur leur meilleur ELO (**bestELO**). 🚀

---

## 🛠️ Fonctionnalités

- 🔎 **Classement dynamique** des membres d'un clan Brawlhalla.
- 🏅 Affichage des meilleurs joueurs avec des 🥇, 🥈 et 🥉.
- ⏱️ Gestion intelligente des limites d'appels API (Rate Limiting).
- 🎨 **Embed esthétique** pour les résultats dans Discord.
- 🤖 Prêt à être hébergé sur **Heroku** ou tout autre service cloud.

---

## 📂 Structure des fichiers

. ├── index.js # Fichier principal du bot ├── package.json # Dépendances et scripts du projet ├── Procfile # Configuration pour le déploiement Heroku ├── .env # Token Discord et configurations sensibles ├── README.md # Documentation du projet

yaml
Copy
Edit

---

## 🚀 Installation

### 1️⃣ Cloner le dépôt
```bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo
2️⃣ Installer les dépendances
bash
Copy
Edit
npm install
3️⃣ Configurer les variables d'environnement
Créez un fichier .env à la racine et ajoutez votre token Discord :

env
Copy
Edit
DISCORD_TOKEN=VotreSuperTokenIci
4️⃣ Lancer le bot en local
bash
Copy
Edit
node index.js
🌐 Déploiement sur Heroku
Étape 1 : Préparer le projet
Ajoutez le fichier Procfile si ce n'est pas déjà fait :

plaintext
Copy
Edit
worker: node index.js
Étape 2 : Pousser le code vers Heroku
bash
Copy
Edit
heroku login
heroku create
git push heroku main
Étape 3 : Ajouter les variables d'environnement
bash
Copy
Edit
heroku config:set DISCORD_TOKEN=VotreSuperTokenIci
Étape 4 : Démarrer le bot
bash
Copy
Edit
heroku ps:scale worker=1
🎉 Utilisation
Dans Discord, utilisez la commande suivante pour afficher le classement :

bash
Copy
Edit
/classement
Et voilà ! Vous verrez une magnifique embed avec le classement de votre clan. 🎯

📷 Aperçu

(Remplacez ce lien par un screenshot ou un GIF de votre bot en action !)

🤝 Contribuer
Les contributions sont les bienvenues ! 💡 Créez une issue ou une pull request pour proposer des idées ou des améliorations.

🛡️ Licence
Ce projet est sous licence MIT. Faites-en bon usage ! 😄

❤️ Remerciements
Discord.js pour leur bibliothèque incroyable.
Vous pour avoir utilisé ce bot et lu jusqu'ici ! 🎊

bash
Copy
Edit

### Instructions pour utiliser les GIFs et emojis
- Pour modifier les GIFs, remplacez les URL dans le code par les liens vers vos propres fichiers ou ceux hébergés en ligne.  
- Si vous souhaitez plus d'emojis ou des modifications dans l'organisation, faites-le-moi savoir ! 🎨












# 🎮 Brawlhalla Clan Leaderboard Bot 🏆

![Leaderboard Banner](https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif)  
Un bot Discord puissant pour afficher le classement des membres d'un clan Brawlhalla basé sur leur meilleur ELO (**bestELO**). 🚀

---

## 🛠️ Fonctionnalités

- 🔎 **Classement dynamique** des membres d'un clan Brawlhalla.
- 🏅 Affichage des meilleurs joueurs avec des 🥇, 🥈 et 🥉.
- ⏱️ Gestion intelligente des limites d'appels API (Rate Limiting).
- 🎨 **Embed esthétique** pour les résultats dans Discord.
- 🤖 Prêt à être hébergé sur **Heroku** ou tout autre service cloud.

---

## 📂 Structure des fichiers

. ├── index.js # Fichier principal du bot ├── package.json # Dépendances et scripts du projet ├── Procfile # Configuration pour le déploiement Heroku ├── .env # Token Discord et configurations sensibles ├── README.md # Documentation du projet

yaml
Copy
Edit

---

## 🚀 Installation

### 1️⃣ Cloner le dépôt
```bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo
2️⃣ Installer les dépendances
bash
Copy
Edit
npm install
3️⃣ Configurer les variables d'environnement
Créez un fichier .env à la racine et ajoutez votre token Discord :

env
Copy
Edit
DISCORD_TOKEN=VotreSuperTokenIci
4️⃣ Lancer le bot en local
bash
Copy
Edit
node index.js
🌐 Déploiement sur Heroku
Étape 1 : Préparer le projet
Ajoutez le fichier Procfile si ce n'est pas déjà fait :

plaintext
Copy
Edit
worker: node index.js
Étape 2 : Pousser le code vers Heroku
bash
Copy
Edit
heroku login
heroku create
git push heroku main
Étape 3 : Ajouter les variables d'environnement
bash
Copy
Edit
heroku config:set DISCORD_TOKEN=VotreSuperTokenIci
Étape 4 : Démarrer le bot
bash
Copy
Edit
heroku ps:scale worker=1
🎉 Utilisation
Dans Discord, utilisez la commande suivante pour afficher le classement :

bash
Copy
Edit
/classement
Et voilà ! Vous verrez une magnifique embed avec le classement de votre clan. 🎯

📷 Aperçu

https://media.discordapp.net/attachments/849326364083355658/1331206004108558443/image.png?ex=6790c5b3&is=678f7433&hm=1005e748d028447add0d890dc583996bd4fa02575f47eba1114d255a9e9d3c45&=&format=webp&quality=lossless

🤝 Contribuer
Les contributions sont les bienvenues ! 💡 Créez une issue ou une pull request pour proposer des idées ou des améliorations.

🛡️ Licence
Ce projet est sous licence MIT. Faites-en bon usage ! 😄

❤️ Remerciements
Discord.js pour leur bibliothèque incroyable.
Vous pour avoir utilisé ce bot et lu jusqu'ici ! 🎊














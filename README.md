# 🎮 Brawlhalla Clan Leaderboard Bot 🏆

![Leaderboard](https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif)  

Un **bot Discord** conçu pour afficher le classement des membres de votre clan Brawlhalla en fonction de leur **meilleur ELO (bestELO)**.  
Prêt à l’emploi, avec un déploiement facile sur **Heroku** ou tout autre service cloud. 🚀  

---

## 🛠️ Fonctionnalités

✨ **Classement dynamique** :  
Affiche les joueurs de votre clan triés par **bestELO** avec des médailles pour les meilleurs ! 🥇🥈🥉  

⚙️ **Gestion intelligente des limites d'API** :  
Adapte automatiquement les appels API pour éviter les erreurs de dépassement.  

🎨 **Embed élégant** :  
Des messages visuellement attrayants pour vos utilisateurs Discord.  

☁️ **Déploiement simple** :  
Configuration rapide et facile, idéale pour Heroku ou d’autres plateformes.

---

## 📦 Installation

### 1️⃣ Clonez le projet  
git clone https://github.com/votre-utilisateur/votre-repo.git  
cd votre-repo  

### 2️⃣ Installez les dépendances  
npm install  

### 3️⃣ Configurez les variables d'environnement  
Créez un fichier `.env` à la racine avec les informations suivantes :  
DISCORD_TOKEN=VotreSuperTokenIci  

### 4️⃣ Lancez le bot en local  
node index.js  

---

## 🌍 Déploiement sur Heroku  

### Étape 1 : Préparer le projet  
Assurez-vous que le fichier `Procfile` est présent (inclus dans ce projet) :  
worker: node index.js  

### Étape 2 : Pousser le code vers Heroku  
heroku login  
heroku create  
git push heroku main  

### Étape 3 : Ajouter les variables d'environnement  
heroku config:set DISCORD_TOKEN=VotreSuperTokenIci  

### Étape 4 : Démarrer le bot  
heroku ps:scale worker=1  

🎉 **Félicitations !** Votre bot est maintenant actif sur Heroku !  

---

## 🛡️ Sécurité  

⚠️ **Ne partagez jamais votre fichier `.env` ou votre token Discord** publiquement.  

---

## 🤝 Contribution  

Les contributions sont **les bienvenues** ! 💡  
Si vous avez des idées ou des améliorations, ouvrez une **issue** ou une **pull request**.  

---

## ❤️ Remerciements  

Merci à :  
- [Discord.js](https://discord.js.org/) pour leur bibliothèque incroyable.  
- **Vous** pour avoir testé et utilisé ce bot ! 😄  

![Merci](https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif)  

---

## 📝 Licence  

Ce projet est sous **licence MIT**. Faites-en bon usage ! 🚀  




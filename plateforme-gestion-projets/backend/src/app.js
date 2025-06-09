// src/app.js

const express = require('express'); // import du module express qui nous permet de creer un serveur web
const cors = require('cors');// import de cors qui permet au frontend d'accéder à l'API
require('dotenv').config(); // on charge les variables d'environement depuis le fichier .env

/*
const userRoutes = require('./routes/user.route');
const projectRoutes = require('./routes/project.route');
const taskRoutes = require('./routes/task.route');
const projectUserRoutes = require('./routes/projectUser.route');
const depotGitRoutes = require('./routes/depotGit.route'); 
const builRoutes = require('./routes/build.route')// on importe les routes de l'API pour les depots git

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/project-users', projectUserRoutes);
app.use('/api/depot-git', depotGitRoutes); // on importe les routes de l'API pour les depots git
app.use('/api/builds', builRoutes); // on importe les routes de l'API pour les builds
// on importe les routes de l'API pour les utilisateurs, les projets, les taches et les utilisateurs des projets

*/





const connectDB = require('./models');
connectDB();
// on importe la fonction connectDB qui se trouve dans index.js qui est dans models qui permet de se connecter a la base de donnee via sequelize

const app = express(); // on creer notre application expresse qui sera notre serveur webet ecoutera les requetes http
const PORT = process.env.PORT || 5000; // on definie le port d'ecoute du server












// Middlewares
app.use(cors()); // on permet a l'api d'etre utilise dans d'autred domane de l'app comme le frontend 
app.use(express.json()); // permet de lire les donnees JSON envoyes des les requetes via POST, PUT etc...










// Routes de test
app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API de gestion de projets !');
}); // cette route repond a repond a une requtte edfectue sur la racine / via .get et e port definie plus haut et renvoie un message de bienvenue 












// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
}); // on lance le serveur via le port definie plus haut et on affiche un message dans la console pour indiquer que le serveur est en marche et sur quel port il est ecoute

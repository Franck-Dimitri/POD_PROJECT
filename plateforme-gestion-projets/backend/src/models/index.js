
const sequelize = require('../config/database'); // import de la connexion à la base de données via sequelize
// src/models/index.js
// Ce fichier est responsable de la connexion à la base de données et de l'initialisation des modèles
// Il est utilisé pour centraliser la logique de connexion à la base de données
// et pour permettre l'importation des modèles dans d'autres fichiers de l'application.
const User = require('./user.js');
const Project = require('./project.js');
const ProjectUser = require('./projectUser.js'); // ou team.model.js si c'est ça ton modèle d'association

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie 🚀');
  } catch (error) {
    console.error('Erreur de connexion à la base de données :', error);
  }
};


module.exports = connectDB;


const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
  }
);

module.exports = sequelize;

// Ce fichier configure la connexion à la base de données PostgreSQL en utilisant Sequelize.
// Il utilise les variables d'environnement dans .env pour récupérer les informations de connexion.
// Il exporte une instance de Sequelize qui sera utilisée pour interagir avec la base de données.
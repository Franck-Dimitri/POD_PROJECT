const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Project = sequelize.define('Project', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    date_debut: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    date_fin: {
      type: DataTypes.DATEONLY,
    },
    user_createur: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Project.associate = (models) => {
    Project.belongsTo(models.User, { foreignKey: 'user_createur', as: 'createur' });
    Project.belongsToMany(models.User, {
      through: models.ProjectUser,
      foreignKey: 'project_id',
    });
    Project.hasMany(models.Task, { foreignKey: 'project_id' });
    Project.hasOne(models.DepotGit, { foreignKey: 'project_id' });
  };

  return Project;
};

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const DepotGit = sequelize.define('DepotGit', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branches: {
      type: DataTypes.TEXT, // Stockage JSON string ou CSV
      allowNull: true,
    },
    date_creation: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  DepotGit.associate = (models) => {
    DepotGit.belongsTo(models.Project, { foreignKey: 'project_id' });
    DepotGit.hasMany(models.Build, { foreignKey: 'depot_git_id' });
  };

  return DepotGit;
};

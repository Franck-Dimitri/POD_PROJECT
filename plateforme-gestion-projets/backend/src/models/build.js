const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Build = sequelize.define('Build', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    statut: {
      type: DataTypes.ENUM('success', 'failed'),
      allowNull: false,
    },
    date_build: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  Build.associate = (models) => {
    Build.belongsTo(models.DepotGit, { foreignKey: 'depot_git_id' });
  };

  return Build;
};

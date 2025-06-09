const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
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
    statut: {
      type: DataTypes.ENUM('à faire', 'en cours', 'terminé'),
      allowNull: false,
      defaultValue: 'à faire',
    },
  });

  Task.associate = (models) => {
    Task.belongsTo(models.Project, { foreignKey: 'project_id' });
    Task.belongsTo(models.User, { foreignKey: 'assigné_a', as: 'assignee' });
  };

  return Task;
};

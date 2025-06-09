const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true },
    },
    role: {
      type: DataTypes.ENUM('chef', 'membre'),
      allowNull: false,
      defaultValue: 'membre',
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Project, { foreignKey: 'user_createur' });
    User.belongsToMany(models.Project, {
      through: models.ProjectUser,
      foreignKey: 'user_id',
    });
    User.hasMany(models.Task, { foreignKey: 'assigné_a' });
  };

  return User;
};

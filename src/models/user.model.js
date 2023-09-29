module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    orgId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    profilePic: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return User;
};

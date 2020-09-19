const { DataTypes } = require("sequelize");
var seedrandom = require('seedrandom');

module.exports = (sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["User", "Client", "Admin"],
      defaultValue: "User",
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true
    },
    dni: {
      type: DataTypes.INTEGER,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    province: {
      type: DataTypes.STRING,
    },
    postalCode: {
      type: DataTypes.INTEGER,
    },
    generatedCode: {
      type: DataTypes.INTEGER,
    },
    birthDate: {
      type: DataTypes.STRING
    },
    pin: {
      type: DataTypes.INTEGER,
    },
  });
};



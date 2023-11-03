// create your User model here
const { db } = require("../db/config");
const { DataTypes } = require("sequelize");

const Deck = db.define("deck", {
  name: DataTypes.STRING,
  xp: DataTypes.INTEGER,
});

module.exports = { Deck };

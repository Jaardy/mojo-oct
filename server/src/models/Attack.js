// create your User model here
const { db } = require("../db/config");
const {DataTypes} = require('sequelize')

const Attack = db.define("attack", {
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
});


module.exports = {Attack}

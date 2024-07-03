const db = require("../db/conn");
const { DataTypes } = require("sequelize");

const Jogo = db.define("Jogo", {
  titulo: {
    type: DataTypes.STRING,
  },
  desc: {
    type: DataTypes.STRING,
  },
  prec: {
    type: DataTypes.STRING,
  },
});

module.exports = Jogo;

const db = require("../db/conn");
const { DataTypes } = require("sequelize");
const Jogo = require("../models/Jogo");

const Conq = db.define(
  "Conq",
  {
    titulo: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jogo_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Cartoes",
  }
);

Conq.belongsTo(Jogo);
Jogo.hasMany(Conq);

module.exports = Conq;

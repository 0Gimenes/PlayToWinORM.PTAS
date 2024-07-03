const db = require("../db/conn");
const { DataTypes } = require("sequelize");
const Jogo = require("../models/Jogo");

const Cartao = db.define(
  "Cartao",
  {
    numero: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codSeguranca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Cartoes",
  }
);

Cartao.belongsTo(Jogo);
Usuario.hasMany(Cartao);

module.exports = Cartao;

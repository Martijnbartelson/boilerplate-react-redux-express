const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

const Games = sequelize.define('board', {
    row0: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false
    },
    row1: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false
    },

  }, {
    tableName: 'board',
    timestamps: false
  })

const Product = sequelize.define('product', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: Sequelize.STRING
  }, {
    tableName: 'products',
    timestamps: false
  })


module.exports = { Games, Product }

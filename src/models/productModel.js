const { DataTypes } = require('sequelize');
const database = require('../config/database');
const Category = require('./categoryModel');
const Product = database.sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    urlImg: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        tableName: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    brand: {
      type: DataTypes.STRING,
    },
    listUrlImg: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    department: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    assessment: {
      type: DataTypes.INTEGER,
    },
    discountValue: {
      type: DataTypes.DECIMAL(10, 2),
    },
    listOfSize: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    trending: {
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
    tableName: 'products',
  }
);

Category.hasMany(Product, {
  foreignKey: 'categoryId',
  sourceKey: 'id', 
});
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  targetKey: 'id',
});

module.exports = Product;

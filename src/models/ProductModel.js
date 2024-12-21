const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Product', {
    title: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false },
    moreLove: { type: DataTypes.BOOLEAN, defaultValue: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    desc: { type: DataTypes.TEXT, allowNull: true },
    totalSell: { type: DataTypes.INTEGER, defaultValue: 0 },
    condition: { type: DataTypes.STRING, allowNull: true },
    vendor: { type: DataTypes.STRING, allowNull: true },
    color: { type: DataTypes.STRING, allowNull: true },
    brand: { type: DataTypes.STRING, allowNull: true },
    category: { type: DataTypes.STRING, allowNull: true },
    featured: { type: DataTypes.BOOLEAN, defaultValue: false },
    trending: { type: DataTypes.BOOLEAN, defaultValue: false },
    weight: { type: DataTypes.FLOAT, allowNull: true },
    tags: { type: DataTypes.STRING, allowNull: true },
    sizes: { type: DataTypes.STRING, allowNull: true },
    review: { type: DataTypes.INTEGER, defaultValue: 0 },
    rating: { type: DataTypes.FLOAT, defaultValue: 0 },
    ratingScore: { type: DataTypes.FLOAT, defaultValue: 0 },
    created: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    variations: { type: DataTypes.JSON, allowNull: true }, // Store array of variations
  });
};

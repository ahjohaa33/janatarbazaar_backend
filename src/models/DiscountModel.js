const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Discount', {
    banner: { type: DataTypes.STRING, allowNull: true },
    percentage: { type: DataTypes.INTEGER, defaultValue: 0 },
    expireDate: { type: DataTypes.DATE, allowNull: true },
    isActive: { type: DataTypes.BOOLEAN, defaultValue: false },
    productId: { // Foreign key to Product
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products', // Refers to the Product table
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  });
};

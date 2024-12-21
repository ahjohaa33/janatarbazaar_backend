const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Image', {
    img: { type: DataTypes.STRING, allowNull: false },
    productId: { // Foreign key to Product
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Products', // Refers to the Product table
        key: 'id',
      },
      onDelete: 'CASCADE', // Delete images if the product is deleted
      onUpdate: 'CASCADE', // Update images if the product id changes
    },
  });
};


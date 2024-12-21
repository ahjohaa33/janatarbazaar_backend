const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

// Import models
const Product = require('./Product')(sequelize);
const Image = require('./Image')(sequelize);
const Gallery = require('./Gallery')(sequelize);
const Discount = require('./Discount')(sequelize);

// Define relationships
Product.hasMany(Image, { as: 'images', foreignKey: 'productId' });
Image.belongsTo(Product, { foreignKey: 'productId' });

Product.hasMany(Gallery, { as: 'gallery', foreignKey: 'productId' });
Gallery.belongsTo(Product, { foreignKey: 'productId' });

Product.hasOne(Discount, { as: 'discount', foreignKey: 'productId' });
Discount.belongsTo(Product, { foreignKey: 'productId' });

// Sync database
sequelize.sync({ alter: true })
  .then(() => console.log('Database & tables created!'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = {
  sequelize,
  Product,
  Image,
  Discount,
};


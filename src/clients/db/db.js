const { Sequelize } = require('sequelize');
const config = require("../../config");


// Connection
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: "postgres",
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

sequelize.sync()
  .then(() => {
    console.info("Sequelize synced");
  })
  .catch((error) => {
    console.error("Failed to sync sequelize", error);
  });

module.exports = sequelize;

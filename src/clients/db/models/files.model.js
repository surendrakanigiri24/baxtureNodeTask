const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const fileModel = sequelize.define('files',{
    file_id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    file_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    created_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    buffer: {
        type: DataTypes.BLOB,
        allowNull: false
    }
});

module.exports = fileModel;



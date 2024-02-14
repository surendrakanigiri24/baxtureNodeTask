const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const analysisModel = sequelize.define('analysis', {
    task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    file_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'files',
            key: 'file_id'
        }
    },
    data: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

module.exports = analysisModel;

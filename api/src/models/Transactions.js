const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    const Transaction = sequelize.define('transaction', {
        Quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        Type: {
            type: DataTypes.ENUM,
            values: ['transfer', 'load', 'payment']
        },
        
        code: {
            type: DataTypes.BIGINT,
            isUnique: true,
        },
        emisor: {
            type: DataTypes.BIGINT
        },
        receptor: {
            type: DataTypes.BIGINT
        },
        nombreReceptor: {
            type: DataTypes.STRING
        }
    })
}
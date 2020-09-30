const { DataTypes } = require('sequelize');
var seedrandom = require('seedrandom');

module.exports = sequelize => {
    const Account = sequelize.define('account', {
        Naccount: {
            type: DataTypes.BIGINT,
            isUnique: true,
            primaryKey: true
        },
        CVU: {
            type: DataTypes.BIGINT,
        },
        card: {
            type: DataTypes.BIGINT
        }, //Agregar numero de cuneeta
        balance: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
             get() {
                 return () => this.getDataValue('balance');
             },
        },
        state: {
            type: DataTypes.ENUM,
            values: ['inactive', 'active'],
            defaultValue: 'active'
        }
    })

    const numberAccount = account => {
        rng = seedrandom(`${account.dataValues.userId}`);
        account.Naccount = Math.floor(rng.double() * (2000000000 - 1800000000) + 1800000000)
    }

    const createCVU = account => {
        account.CVU = account.Naccount * (14000000099 - 11000000099) + 1250070085
    }

    const createCard = account => {
        rng = seedrandom(`${account.dataValues.userId}`);
        account.card = Math.floor(rng.double() * (4100000000004040 - 5900000000004040) + 5900000000004040)
    }
    Account.beforeCreate(numberAccount)
    Account.beforeCreate(createCVU);
    Account.beforeCreate(createCard);
}
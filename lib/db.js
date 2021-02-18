const Sequelize = require('sequelize');

Sequelize.DATE.prototype._stringify = function _stringify(date, options) { // eslint-disable-line no-underscore-dangle
    const newDate = this._applyTimezone(date, options); // eslint-disable-line no-underscore-dangle
    return newDate.format('YYYY-MM-DD HH:mm:ss.SSS');
};

export let isDbConnectionInited = false; // eslint-disable-line import/no-mutable-exports

export const db = new Sequelize({
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true
    },
    logging: true,
    define: {
        timestamps: false
    },
    pool: {
        min: 0,
        max: 5,
        idle: 20000,
        acquire: 20000
    },
    storage: '',

    port: 3306,
    host: 'localhost',
    username: 'root',
    password: 'Live3_sql',
    database: 'college',

    timezone: '+00:00'
});

export async function initConnection() {
    await db.authenticate();
    isDbConnectionInited = true;
}

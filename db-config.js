// requiring the sequelize
const Sequelize = require('sequelize');

// creating database constants
const dbName = 'your_db_name';
const dbUser = 'user_name';
const dbPassword = 'password';


// intilaizing the sequelize object
const sequelize = new Sequelize(dbName,dbUser,dbPassword,{
        host:'localhost:3000',
        port:'3306',
        dialect:'mysql'
});


const db ={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// export the db to other modules.
module.exports = db;

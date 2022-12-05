const Sequelize = require("sequelize");

const connection = new Sequelize(
    "bd_tcc",
    "root",
    "S@myra28",
    {
        host: "localhost",
        dialect: "mysql",
        
        define: {
            timestamps: false
        }
    }
);
module.exports = connection;
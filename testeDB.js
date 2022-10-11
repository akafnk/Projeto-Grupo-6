const Sequelize = require("sequelize");
const dbConfig = require("./config/config.json");
const dbConn = new Sequelize(dbConfig.development);

dbConn.query("select * from produtos", Sequelize.QueryTypes.SELECT)
.then(
    data => {
        console.log(data);
        dbConn.close();
    }
);
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const credential_1 = __importDefault(require("../common/credential"));
const sequelize = new sequelize_1.Sequelize({
    username: credential_1.default.postgres.USERNAME,
    host: credential_1.default.postgres.HOST,
    database: credential_1.default.postgres.DATABASE,
    password: credential_1.default.postgres.PASSWORD,
    port: credential_1.default.postgres.DBPORT,
    dialect: "postgres"
});
sequelize.authenticate()
    .then(() => {
    console.log("Database Connection Successfully");
}).catch((err) => {
    console.log("Database Connection not  Successfully", err);
});
sequelize.sync()
    .then(() => {
    console.log('Models synchronized with the database.');
}).catch((err) => {
    console.error('Unable to synchronize models with the database:', err);
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map
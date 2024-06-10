"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOW = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class SOW extends sequelize_1.Model {
}
exports.SOW = SOW;
SOW.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.UUID),
        allowNull: false
    },
    customerID: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'clients',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    customerPONumber: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    customerSONumber: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    validFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    validUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    totalValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: "sow"
});
//# sourceMappingURL=sow.js.map
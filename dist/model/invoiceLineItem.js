"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceLineItems = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class InvoiceLineItems extends sequelize_1.Model {
}
exports.InvoiceLineItems = InvoiceLineItems;
InvoiceLineItems.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    inVoiceId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Invoice',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    orderNo: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    rate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'InvoiceLineItems'
});
//# sourceMappingURL=invoiceLineItem.js.map
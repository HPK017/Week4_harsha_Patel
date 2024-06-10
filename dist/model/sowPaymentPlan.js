"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOWPaymentPlan = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class SOWPaymentPlan extends sequelize_1.Model {
}
exports.SOWPaymentPlan = SOWPaymentPlan;
SOWPaymentPlan.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    sowId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'sow',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'clients',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    plannedInvoiceDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    totalActualAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'SOWPaymentPlan'
});
//# sourceMappingURL=sowPaymentPlan.js.map
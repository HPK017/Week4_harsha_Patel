"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const client_1 = require("../model/client");
const sow_1 = require("./sow");
const sowPaymentPlan_1 = require("./sowPaymentPlan");
const sowPaymentPlanLineItem_1 = require("./sowPaymentPlanLineItem");
const invoice_1 = __importDefault(require("./invoice"));
const payment_1 = require("./payment");
const invoiceLineItem_1 = require("./invoiceLineItem");
class Organization extends sequelize_1.Model {
}
exports.Organization = Organization;
Organization.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    gstNo: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    panNo: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    legalOrganizationName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    invoicetemplateId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    contactName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    addressID: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    Phone: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'organization'
});
client_1.Client.belongsTo(Organization, { foreignKey: 'orgId' });
Organization.hasMany(client_1.Client, { foreignKey: 'orgId' });
sow_1.SOW.belongsTo(client_1.Client, { foreignKey: 'customerId' });
client_1.Client.hasMany(sow_1.SOW, { foreignKey: 'customerId' });
sowPaymentPlan_1.SOWPaymentPlan.belongsTo(sow_1.SOW, { foreignKey: 'sowId' });
sow_1.SOW.hasMany(sowPaymentPlan_1.SOWPaymentPlan, { foreignKey: 'sowId' });
sowPaymentPlanLineItem_1.SOWPaymentPlanItem.belongsTo(sowPaymentPlan_1.SOWPaymentPlan, { foreignKey: 'sowPaymentPlanId' });
sowPaymentPlan_1.SOWPaymentPlan.hasMany(sowPaymentPlanLineItem_1.SOWPaymentPlanItem, { foreignKey: 'sowPaymentPlanId' });
invoice_1.default.belongsTo(sow_1.SOW, { foreignKey: 'sowId' });
sow_1.SOW.hasMany(invoice_1.default, { foreignKey: 'sowId' });
invoice_1.default.belongsTo(client_1.Client, { foreignKey: 'customerId' });
client_1.Client.hasMany(invoice_1.default, { foreignKey: 'customerId' });
invoiceLineItem_1.InvoiceLineItems.belongsTo(invoice_1.default, { foreignKey: 'invoiceId' });
invoice_1.default.hasMany(invoiceLineItem_1.InvoiceLineItems, { foreignKey: 'invoiceId' });
payment_1.Payment.belongsTo(invoice_1.default, { foreignKey: 'invoiceId' });
invoice_1.default.hasMany(payment_1.Payment, { foreignKey: 'invoiceId' });
//# sourceMappingURL=organization.js.map
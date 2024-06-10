import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import {Client} from '../model/client'
import { SOW } from "./sow";
import { SOWPaymentPlan } from "./sowPaymentPlan";
import { SOWPaymentPlanItem } from "./sowPaymentPlanLineItem";
import Invoice from "./invoice";
import { Payment } from "./payment";
import { InvoiceLineItems } from "./invoiceLineItem";
import { UUID } from "sequelize";
import { UUIDV4 } from "sequelize";

interface OrganizationAttributes {
    id?: string;
    gstNo: string;
    panNo: string;
    legalOrganizationName: string;
    invoicetemplateId : string;
    shortName: string;
    contactName: string,
    displayName : string,
    email : string;
    addressID : string;
    Phone : string;
}

class Organization extends Model<OrganizationAttributes> implements OrganizationAttributes {
    id!: string;
    gstNo!: string;
    panNo!: string;
    legalOrganizationName!: string;
    invoicetemplateId!: string;
    shortName!: string;
    contactName!: string;
    displayName!: string;
    email!: string;
    addressID!: string;
    Phone!: string;
}

Organization.init (
    {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue:DataTypes.UUIDV4
        },
        gstNo:{
            type: DataTypes.UUID,
            allowNull: false,
        },
        panNo :{
            type: DataTypes.UUID,
            allowNull: false,
        },
        legalOrganizationName :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        invoicetemplateId :{
            type: DataTypes.UUID,
            allowNull: false,
        },
        shortName :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactName :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        displayName :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email :{
            type: DataTypes.UUID,
            allowNull: false,
        },
        addressID:{
            type: DataTypes.UUID,
            allowNull: false,
        },
        Phone : {
            type: DataTypes.UUID,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'organization'
    }
)


Client.belongsTo(Organization, { foreignKey: 'orgId' });
Organization.hasMany(Client, { foreignKey: 'orgId' });

SOW.belongsTo(Client, { foreignKey: 'customerId' });
Client.hasMany(SOW, { foreignKey: 'customerId' });

SOWPaymentPlan.belongsTo(SOW, { foreignKey: 'sowId' });
SOW.hasMany(SOWPaymentPlan, { foreignKey: 'sowId' });

SOWPaymentPlanItem.belongsTo(SOWPaymentPlan, { foreignKey: 'sowPaymentPlanId' });
SOWPaymentPlan.hasMany(SOWPaymentPlanItem, { foreignKey: 'sowPaymentPlanId' });

Invoice.belongsTo(SOW, { foreignKey: 'sowId' });
SOW.hasMany(Invoice, { foreignKey: 'sowId' });

Invoice.belongsTo(Client, { foreignKey: 'customerId' });
Client.hasMany(Invoice, { foreignKey: 'customerId' });

InvoiceLineItems.belongsTo(Invoice, { foreignKey: 'invoiceId' });
Invoice.hasMany(InvoiceLineItems, { foreignKey: 'invoiceId' });

Payment.belongsTo(Invoice, { foreignKey: 'invoiceId' });
Invoice.hasMany(Payment, { foreignKey: 'invoiceId' });

export {Organization}
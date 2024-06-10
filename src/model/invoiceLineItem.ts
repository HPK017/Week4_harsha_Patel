import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import Invoice from "./invoice";

interface InvoiceLineItemsAttributes {
    id: string;
    inVoiceId: string;
    orderNo: string;
    particular: string;
    rate: number;
    unit: number;
    total: number;
}

class InvoiceLineItems extends Model<InvoiceLineItemsAttributes> implements InvoiceLineItemsAttributes {
    id!: string;
    inVoiceId!: string;
    orderNo!: string;
    particular!: string;
    rate!: number;
    unit!: number;
    total!: number;
}
InvoiceLineItems.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        inVoiceId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'Invoice',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        orderNo: {
            type: DataTypes.UUID,
            allowNull: false
        },
        particular: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rate: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        unit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'InvoiceLineItems'
    }
);



export {InvoiceLineItems}

export function findByPk(invoiceId: any) {
    throw new Error('Function not implemented.');
}

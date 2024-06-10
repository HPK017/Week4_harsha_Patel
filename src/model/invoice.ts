import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { SOW } from './sow';
import { Payment } from './payment';
import { Client } from './client';

interface InvoiceAttributes {
    id?: string;
    sowId:string;
    totalInvoiceValue:string;
    status:string;
    invoiceSentOn: Date;
    customerId : string;
    paymentReceivedOn: Date;
    invoiceVersionNo : string;
    sowPaymentPlanId: string;
    invoiceAmount : number;
    paymentId : string;
    invoiceTaxAmount : string;
}

class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
    id!: string ;
    sowId!: string;
    totalInvoiceValue!: string;
    status!: string;
    invoiceSentOn!: Date;
    customerId!: string;
    paymentReceivedOn!: Date;
    invoiceVersionNo!: string;
    sowPaymentPlanId!: string;
    invoiceAmount!: number;
    paymentId!: string;
    invoiceTaxAmount!: string;

}

Invoice.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    sowId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'sow',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    totalInvoiceValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Drafted', 'Cancelled', 'Approved'),
        allowNull: false,
        defaultValue: 'Drafted',
    },
    invoiceSentOn: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    customerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'clients',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    paymentReceivedOn: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    invoiceVersionNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    sowPaymentPlanId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'SOWPaymentPlan',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    invoiceAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    paymentId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Payments',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    invoiceTaxAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'Invoice',
});


export default Invoice;

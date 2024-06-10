import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';

interface PaymentAttributes {
    id?: string;
    paymentDate: Date;
    forExAmount: number;
    currency: string;
    indianAmount: number;
    invoiceId: string;
    isFullPayment: boolean;
    bankPaymentDetails: string;
}

class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
    id?: string;
    paymentDate!: Date;
    forExAmount!: number;
    currency!: string;
    indianAmount!: number;
    invoiceId!: string;
    isFullPayment!: boolean;
    bankPaymentDetails!: string;
}

Payment.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        forExAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        indianAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        invoiceId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Invoice',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
        isFullPayment: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        bankPaymentDetails: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'Payments',
    }
);


export { Payment };

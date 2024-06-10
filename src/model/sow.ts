import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { SOWPaymentPlan } from "./sowPaymentPlan";

interface SOWAttributes {
    id? : string;
    invoiceEmailAddresses : string;
    customerID: string;
    customerPONumber : string;
    title : string
    customerSONumber : string;
    validFrom: Date;
    validUpto: Date;
    totalValue: number;
    currency: string;
}

class SOW extends Model<SOWAttributes> implements SOWAttributes {
    id!: string ;
    invoiceEmailAddresses! : string;
    customerID! : string;
    customerPONumber! : string;
    title! : string;
    customerSONumber! : string;
    validFrom! : Date;
    validUpto! : Date;
    totalValue! : number;
    currency! : string;
}

SOW.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        invoiceEmailAddresses: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            allowNull: false
        },
        customerID: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'clients',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        customerPONumber: {
            type: DataTypes.UUID,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerSONumber: {
            type: DataTypes.UUID,
            allowNull: false
        },
        validFrom: {
            type: DataTypes.DATE,
            allowNull: false
        },
        validUpto: {
            type: DataTypes.DATE,
            allowNull: false
        },
        totalValue: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName : "sow"
    }
)



export {SOW}
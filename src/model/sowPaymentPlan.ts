import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { SOWPaymentPlanItem } from "./sowPaymentPlanLineItem";

interface SOWPaymentPlanAttributes {
    id: string;
    sowId: string;
    customerId: string;
    plannedInvoiceDate: Date;
    totalActualAmount: number;
}

class SOWPaymentPlan extends Model<SOWPaymentPlanAttributes> implements SOWPaymentPlanAttributes{
    [x: string]: any;
    id!: string;
    sowId!: string;
    customerId!:string;
    plannedInvoiceDate!: Date;
    totalActualAmount!: number;
    SOWPaymentPlanItem: any;
}

SOWPaymentPlan.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        sowId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'sow',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        customerId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'clients',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        plannedInvoiceDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        totalActualAmount: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'SOWPaymentPlan'
    }
)


export {SOWPaymentPlan}
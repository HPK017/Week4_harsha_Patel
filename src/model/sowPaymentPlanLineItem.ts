import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { SOWPaymentPlan } from "./sowPaymentPlan";
import { SOW } from "./sow";

interface SOWPaymentPlanItemAttributes {
    id: string;
    sowPaymentPlanId: string;
    sowId: string;
    orderId: string;
    particular: string;
    rate: number;
    unit: number;
    total: number;
}

class SOWPaymentPlanItem extends Model<SOWPaymentPlanItemAttributes> implements SOWPaymentPlanItemAttributes {
    id!: string;
    sowPaymentPlanId!: string;
    sowId!: string;
    orderId!: string;
    particular!: string;
    rate!: number;
    unit!: number;
    total!: number;
}

SOWPaymentPlanItem.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        sowPaymentPlanId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'SOWPaymentPlan',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        sowId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'sow',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        orderId: {
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
        tableName: 'SOWPaymentPlanItem'
    }
);


export { SOWPaymentPlanItem };

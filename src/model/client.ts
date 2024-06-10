import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { SOW } from "./sow";

interface ClientAttributes {
    id ?: string;
    OrgId : string;
    MSAValidFrom: Date;
    MSAValidUpto : Date;
    LegalName : string;
    NDASignedOn : Date;
    ShortName : string;
    NDAValidFrom : Date;
    NDAValidUpto : Date;
    AddressID : string;
    DisplayName : string;
    IsMSASigned : boolean;
    IsNDASigned : boolean
    MSASignedOn : Date
}

class Client extends Model<ClientAttributes> implements ClientAttributes {
    id?: string ;
    OrgId!: string;
    MSAValidFrom!: Date;
    MSAValidUpto!: Date;
    LegalName!: string;
    NDASignedOn!: Date;
    ShortName!: string;
    NDAValidFrom!: Date;
    NDAValidUpto!: Date;
    AddressID!: string;
    DisplayName!: string;
    IsMSASigned!: boolean;
    IsNDASigned!: boolean;
    MSASignedOn!: Date;
} 

Client.init(
    {
    id : {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4
    }, 
    OrgId :{
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'organization',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
    },
    MSAValidFrom :{
        type: DataTypes.DATE,
        allowNull: false
    },
    MSAValidUpto :{
        type: DataTypes.DATE,
        allowNull: false
    },
    LegalName :{
        type: DataTypes.STRING,
        allowNull: false
    },
    NDASignedOn :{
        type: DataTypes.DATE,
        allowNull: false
    },
    ShortName :{
        type: DataTypes.STRING,
        allowNull: false
    },
    NDAValidFrom :{
        type: DataTypes.DATE,
        allowNull: false
    },
    NDAValidUpto :{
        type: DataTypes.DATE,
        allowNull: false
    },
    AddressID :{
        type: DataTypes.UUID,
        allowNull: false
    },
    DisplayName :{
        type: DataTypes.STRING,
        allowNull: false
    },
    IsMSASigned :{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    IsNDASigned :{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    MSASignedOn :{
        type: DataTypes.DATE,
        allowNull: false
    },
    },
    {
        sequelize, 
        tableName: "clients"
    }
)


export {Client}
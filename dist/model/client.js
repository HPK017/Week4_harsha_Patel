"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Client extends sequelize_1.Model {
}
exports.Client = Client;
Client.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    OrgId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'organization',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    MSAValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    MSAValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    LegalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    NDASignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    ShortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    NDAValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    NDAValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    AddressID: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    DisplayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    IsMSASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    IsNDASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    MSASignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "clients"
});
//# sourceMappingURL=client.js.map
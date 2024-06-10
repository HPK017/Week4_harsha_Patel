"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const credentials = {
    postgres: {
        USERNAME: process.env.USER,
        DATABASE: process.env.DATABASE,
        HOST: process.env.HOST_NAME,
        PASSWORD: process.env.PASSWORD,
        DBPORT: Number(process.env.PORTNAME),
    }
};
exports.default = credentials;
//# sourceMappingURL=credential.js.map
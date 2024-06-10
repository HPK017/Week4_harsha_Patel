"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = exports.createOrg = void 0;
const client_1 = require("../model/client");
const organization_1 = require("../model/organization");
const createOrg = (org) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrg = yield organization_1.Organization.create(org);
        if (newOrg) {
            return newOrg;
        }
    }
    catch (err) {
        throw err;
    }
});
exports.createOrg = createOrg;
const createClient = (cl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newcli = yield client_1.Client.create(cl);
        if (newcli) {
            return newcli;
        }
    }
    catch (err) {
        throw err;
    }
});
exports.createClient = createClient;
//# sourceMappingURL=orgService.js.map
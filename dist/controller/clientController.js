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
exports.addCli = void 0;
const clientService_1 = require("../service/clientService");
const addCli = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cli = yield (0, clientService_1.createCl)(req.body);
    res.json(cli);
});
exports.addCli = addCli;
//# sourceMappingURL=clientController.js.map
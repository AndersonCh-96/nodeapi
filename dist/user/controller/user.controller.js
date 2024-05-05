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
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
class UserController {
    constructor(userService = new user_service_1.UserService()) {
        this.userService = userService;
    }
    getAll(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.userService.getAll();
                resp.status(200).json({ data: data });
            }
            catch (error) {
                console.log("Error", error);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userService.getOne(id);
                res.status(200).json({ data: data });
            }
            catch (error) {
                console.log("Error", error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            try {
                const data = yield this.userService.create(body);
                res.status(200).json({ data: data });
            }
            catch (error) {
                console.log("Error", error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const body = req.body;
            try {
                const data = yield this.userService.update(id, body);
                res.status(200).json({ data: data });
            }
            catch (error) {
                console.log("Error", error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = this.userService.delete(id);
                res.status(200).json({ data: data });
            }
            catch (error) {
                console.log("Err", error);
            }
        });
    }
}
exports.UserController = UserController;

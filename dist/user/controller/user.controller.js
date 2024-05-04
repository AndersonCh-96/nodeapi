"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    getAll(req, resp) {
        resp.status(200).json({
            user: "Anderson",
        });
    }
}
exports.UserController = UserController;

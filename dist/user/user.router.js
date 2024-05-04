"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const router_1 = require("../shared/router/router");
const user_controller_1 = require("./controller/user.controller");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(user_controller_1.UserController);
    }
    routes() {
        this.router.get("/user", (req, res) => this.controller.getAll(req, res));
    }
}
exports.UserRouter = UserRouter;

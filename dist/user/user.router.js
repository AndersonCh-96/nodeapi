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
        this.router.get("/users", (req, res) => this.controller.getAll(req, res));
        this.router.get("/users/:id", (req, res) => this.controller.getOne(req, res));
        this.router.post("/users", (req, res) => this.controller.create(req, res));
        this.router.put("/users/:id", (req, res) => this.controller.update(req, res));
        this.router.delete("/users/:id", (req, res) => this.controller.delete(req, res));
    }
}
exports.UserRouter = UserRouter;

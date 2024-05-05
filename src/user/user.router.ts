
import { BaseRouter } from "../shared/router/router";
import { UserController } from "./controller/user.controller";


export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.get("/users", (req, res) => this.controller.getAll(req, res));
    this.router.get("/users/:id", (req, res) => this.controller.getOne(req, res));
    this.router.post("/users", (req, res) => this.controller.create(req, res));
    this.router.put("/users/:id", (req, res) => this.controller.update(req, res));
    this.router.delete("/users/:id", (req, res) => this.controller.delete(req, res));
  }
}

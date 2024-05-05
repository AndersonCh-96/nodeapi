import express from "express";
import morgan from "morgan";
import cors from "cors";
import { DataSource } from "typeorm";

import { UserRouter } from "./user/user.router";
import { ConfigServer } from "./config/config";

class ServerTest extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumerEnv("PORT");

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.dbConnect();
    this.app.use(morgan("dev"));
    this.app.use(cors());

    this.app.use("/api", this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [new UserRouter().router];
  }

  async dbConnect(): Promise<DataSource | void> {
    return this.initConnect
      .then(() => {
        console.log("Connection success");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("Server listen  on port ", this.port);
    });
  }
}

new ServerTest();

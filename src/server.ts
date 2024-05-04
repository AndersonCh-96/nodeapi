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
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.dbConnect();
    this.app.use("/api", this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [new UserRouter().router];
  }

  async dbConnect(): Promise<DataSource> {
    return await new DataSource(this.typeORMConfig).initialize();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("Server listen on port ", this.port);
    });
  }
}

new ServerTest();

import { Request, Response } from "express";

export class UserController {
  public getAll(req: Request, resp: Response) {
    resp.status(200).json({
      user: "Anderson",
    });
  }
}

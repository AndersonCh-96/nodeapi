import { Request, Response } from "express";

export class CustomerController {
  public getAll(req: Request, resp: Response) {
    resp.status(200).json({
      user: "Anderson",
    });
  }
}

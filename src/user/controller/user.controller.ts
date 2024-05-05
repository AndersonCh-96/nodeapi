import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  constructor(private readonly userService: UserService = new UserService()) {}

  async getAll(req: Request, resp: Response) {
    try {
      const data = await this.userService.getAll();
      resp.status(200).json({ data: data });
    } catch (error) {
      console.log("Error", error);
    }
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.userService.getOne(id);
      res.status(200).json({ data: data });
    } catch (error) {
      console.log("Error", error);
    }
  }

  async create(req: Request, res: Response) {
    const body = req.body;

    try {
      const data = await this.userService.create(body);
      res.status(200).json({ data: data });
    } catch (error) {
      console.log("Error", error);
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const body = req.body;
    try {
      const data = await this.userService.update(id, body);
      res.status(200).json({ data: data });
    } catch (error) {
      console.log("Error", error);
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = this.userService.delete(id);
      res.status(200).json({data:data});
    } catch (error) {
      console.log("Err", error);
    }
  }
}

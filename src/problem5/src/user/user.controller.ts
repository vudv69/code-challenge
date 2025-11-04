import { Request, Response } from "express";
import { fail, success } from "../middlewares/response";
import { UserService } from "./user.service";

export class UserController {
  static getUsers(req: Request, res: Response) {
    const users = UserService.getAll();

    return success(res, users, "Fetched users successfully");
  }

  static getUserById(req: Request, res: Response) {
    const user = UserService.getById(Number(req.params.id));
    if (!user) {
      return fail(res, "User not found", null, 404);
    }

    return success(res, user, "Fetched user successfully");
  }

  static createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const result = UserService.createUser({ name, email });

    return success(
      res,
      { id: result.lastInsertRowid, name, email },
      "User created successfully",
      201
    );
  }

  static updateUser(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    UserService.updateUser(id, { name, email });

    return success(res, { id, name, email }, "User updated successfully");
  }

  static deleteUser(req: Request, res: Response) {
    const id = Number(req.params.id);

    UserService.deleteUser(id);

    return success(res, true, "User deleted successfully");
  }
}

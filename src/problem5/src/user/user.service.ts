import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

export class UserService {
  static getAll(): User[] {
    return UserRepository.all();
  }

  static getById(id: number): User | undefined {
    return UserRepository.find(id);
  }

  static createUser(data: User) {
    return UserRepository.create(data);
  }

  static updateUser(id: number, data: User) {
    return UserRepository.update(id, data);
  }

  static deleteUser(id: number) {
    return UserRepository.remove(id);
  }
}

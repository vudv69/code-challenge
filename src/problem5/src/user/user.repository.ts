import db from "../database";
import { User } from "./user.entity";
import { mapToUser } from "./user.mapper";

export class UserRepository {
  static all(): User[] {
    const users = db.prepare("SELECT * FROM users").all();

    return users.map(mapToUser);
  }

  static find(id: number): User | undefined {
    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(id);

    return mapToUser(user);
  }

  static create(user: User) {
    return db
      .prepare("INSERT INTO users (name, email) VALUES (?, ?)")
      .run(user.name, user.email);
  }

  static update(id: number, user: User) {
    const fields = Object.entries(user).filter(
      ([_, value]) => value !== undefined
    );

    if (fields.length === 0) {
      throw new Error("No fields to update");
    }

    const setClause = fields.map(([key]) => `${key} = ?`).join(", ");
    const values = fields.map(([_, value]) => value);
    values.push(id);

    const sql = `UPDATE users SET ${setClause} WHERE id = ?`;

    return db.prepare(sql).run(...values);
  }

  static remove(id: number) {
    return db.prepare("DELETE FROM users WHERE id = ?").run(id);
  }
}

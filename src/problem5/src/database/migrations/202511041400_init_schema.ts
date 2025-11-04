import type { Database } from "better-sqlite3";

export function up(db: Database) {
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL
    );
  `
  ).run();
}

export function down(db: Database) {
  db.prepare(`DROP TABLE IF EXISTS users;`).run();
}

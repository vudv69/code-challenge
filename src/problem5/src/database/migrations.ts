import fs from "fs";
import path from "path";
import db from "./index";
import { Database } from "better-sqlite3";

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS _migrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE,
    run_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`
).run();

const MIGRATIONS_DIR = path.join(__dirname, "migrations");

export async function runMigrations(database: Database) {
  console.log("🚀 Checking migrations...");
  const appliedMigrations = database
    .prepare("SELECT name FROM _migrations")
    .all()
    .map((m: any) => m.name);

  const files = fs
    .readdirSync(MIGRATIONS_DIR)
    .filter((f) => f.endsWith(".ts") || f.endsWith(".js"))
    .sort();

  for (const file of files) {
    if (appliedMigrations.includes(file)) continue;

    console.log(`➡️ Running migration: ${file}`);
    const migration = await import(path.join(MIGRATIONS_DIR, file));

    try {
      migration.up(database);
      database.prepare("INSERT INTO _migrations (name) VALUES (?)").run(file);
      console.log(`✅ Done: ${file}`);
    } catch (err) {
      console.error(`❌ Failed: ${file}`, err);
      process.exit(1);
    }
  }

  console.log("✨ All migrations applied.");
}

runMigrations(db);

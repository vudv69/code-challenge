import type { Database } from "better-sqlite3";

export function up(db: Database) {
  const stmt = db.prepare(`INSERT INTO users (name, email) VALUES (?, ?)`);

  const users = [
    ["Admin User", "admin@example.com"],
    ["John Doe", "john@example.com"],
    ["Jane Smith", "jane@example.com"],
  ];

  for (const user of users) {
    stmt.run(...user);
  }

  console.log("✅ Users initial data inserted.");
}

export function down(db: Database) {
  db.prepare(`DELETE FROM users;`).run();
  console.log("🗑️ All users deleted.");
}

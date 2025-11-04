import { Express, Router } from "express";
import userRoutes from "../user/user.routes";

const router = Router();

export function setupRoutes(app: Express) {
  router.use("/users", userRoutes);

  app.get("/", (req: any, res: any) =>
    res.json({ status: "ok", now: new Date() })
  );
  app.use("/api", router);

  console.log("🎯 User endpoint at /users");
}

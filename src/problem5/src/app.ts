import bodyParser from "body-parser";
import express from "express";
import { setupSwagger } from "./config/swagger";
import { setupRoutes } from "./config/routes";

export const createApp = () => {
  const app = express();
  app.use(bodyParser.json());

  setupRoutes(app);
  setupSwagger(app);

  return app;
};

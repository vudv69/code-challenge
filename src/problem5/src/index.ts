import { createApp } from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});

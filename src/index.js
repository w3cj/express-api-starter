import app from "./app.js";
import { env } from "./env.js";

const server = app.listen(env.PORT, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${env.PORT}`);
  /* eslint-enable no-console */
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${env.PORT} is already in use. Please choose another port or stop the process using it.`);
  }
  else {
    console.error("Failed to start server:", err);
  }
  process.exit(1);
});

import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  database: new Database("./better-auth.db"),
  trustedOrigins: ["http://localhost:8080", "http://localhost:3000"],
  emailAndPassword: {
    enabled: true,
  },
});

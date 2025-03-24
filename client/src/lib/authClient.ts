import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // the base url of the server
  baseURL: "http://localhost:8080",
});

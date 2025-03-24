import { authClient } from "../lib/authClient";

const handleGoogleSignIn = async () => {
  try {
    const result = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
      newUserCallbackURL: "/welcome",
    });

    // Send result to backend for validation
    //@ts-ignore
    const token = result.accessToken;
    await fetch("/api/auth/google", {
      method: "POST",
      body: JSON.stringify({ token }),
    });
  } catch (error) {
    console.error(error);
  }
};

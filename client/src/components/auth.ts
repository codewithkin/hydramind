import { authClient } from "../lib/authClient"; // import authClient

export async function createUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log("EMAIL:", email);
  console.log("PASSWORD:", password);

  const { data, error } = await authClient.signUp.email(
    {
      email,
      password,
      name: email,
    },
    {
      onSuccess: (ctx) => {
        alert("Sign up succesfull");
      },
    }
  );

  if (error) {
    console.error("BetterAuth error:", error);
    throw new Error("failed to create user ");
  }

  console.error("BetterAuth error:", error);
  console.log(data);
}

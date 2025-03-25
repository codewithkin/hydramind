// import { betterAuth } from "better-auth";

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
// const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
// const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// if (
//   !GOOGLE_CLIENT_ID ||
//   !GOOGLE_CLIENT_SECRET ||
//   !GITHUB_CLIENT_ID ||
//   !GITHUB_CLIENT_SECRET
// ) {
//   throw new Error(
//     "Missing required environment variables for social providers."
//   );
// }

// export default betterAuth({
//   emailAndPassword: {
//     enabled: true,
//   },
//   socialProviders: {
//     google: {
//       clientId: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//     },
//     github: {
//       clientId: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//     },
//   },
//   secret: process.env.BETTER_AUTH_SECRET,
// });

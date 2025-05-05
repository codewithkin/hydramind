// import { Request, Response } from "express";
// import User from "../../model/user.js";
// import jwt from "jsonwebtoken";

// //controller function for register
// export async function register(req: Request, res: Response) {
//   try {
//     const { name, email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "All fields are Required!" });
//     }

//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({ message: "User alredy exists!" });
//     }

//     const user = await User.create({ name, email, password });

//     await user.save();

//     res
//       .status(201)
//       .json({ message: "User registered succesfully", user: user });
//   } catch (error) {
//     console.log("Error :", error);
//     res.status(500).json({ message: "User regitstraion Failed!" });
//   }
// }

// //controller function for logIn
// export async function logIn(req: Request, res: Response) {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(401).json({ message: "All fields are Required!" });
//     }

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password!" });
//     }

//     //Ensure password is a string and compare
//     //@ts-ignore
//     if (!(await user.comparePassword(password))) {
//       return res.status(401).json({ message: "Invalid password!" });
//     }

//     // token
//     const token = jwt.sign(
//       {
//         id: user._id,
//       },
//       process.env.JWT_SECRET_KEY as string,
//       { expiresIn: "1h" }
//     );

//     return res.status(201).json({
//       message: "Log-In succesfull",
//       token,
//       user: {
//         email: user.email,
//         password: user.password,
//       },
//     });
//   } catch (error) {
//     console.log("Error :", error);
//     res.status(500).json({ message: "User Log-In Failed!" });
//   }
// }

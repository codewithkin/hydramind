import { Request, Response } from "express";
import User from "../../model/user";

export async function register(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are Required!" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User alredy exists!" });
    }

    const user = await User.create({ name, email, password });

    await user.save();

    res
      .status(201)
      .json({ message: "User registered succesfully", user: user });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ message: "User regitstraion Failed!" });
  }
}

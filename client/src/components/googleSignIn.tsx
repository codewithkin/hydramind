import { useState } from "react";
import { createUser } from "./auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center w-full bg-gray-50 mt-20">
      <form action={createUser}>
        <div>
          <div>
            <label className="" htmlFor="name">
              Email
            </label>
          </div>
          <input
            name="email"
            type="email"
            value={email}
            className="border rounded-sm outline-none px-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label className="" htmlFor="password">
              Password
            </label>
          </div>
          <input
            name="password"
            type="password"
            value={password}
            className="border rounded-sm outline-none px-1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="border mt-2 px-3 py-1 text-sm rounded-sm   text-blue-500 hover:text-blue-700 "
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

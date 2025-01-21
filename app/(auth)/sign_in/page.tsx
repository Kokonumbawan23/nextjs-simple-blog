"use client";

import { useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen m-auto">
      <div className="w-96 p-4 rounded-lg shadow-lg flex flex-col justify-center gap-6">
        <h1 className="font-bold text-lg text-center">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex gap-2 justify-between">
            <label htmlFor="email" className="py-2">Email</label>
            <input
              type="email"  
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/4 p-2 rounded-lg"
              required
            />
          </div>
          <div className="flex gap-2 justify-between">
            <label htmlFor="password" className="py-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-3/4 p-2 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="bg-white text-black p-4 font-semibold w-1/2 mx-auto rounded-lg">Sign In</button>
        </form>
      </div>
    </div>
  );
}

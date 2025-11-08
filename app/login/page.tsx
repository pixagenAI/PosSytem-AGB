"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("staff");
  const router = useRouter();

  const handleLogin = () => {
    if (email.includes("admin")) localStorage.setItem("role", "admin");
    else localStorage.setItem("role", "staff");
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Gerai POS Login</h1>
        <input
          className="w-full p-2 border rounded mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className="w-full p-2 border rounded mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>
        <button
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

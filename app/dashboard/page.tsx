"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [role, setRole] = useState("");
  const router = useRouter();

  useEffect(() => {
    const r = localStorage.getItem("role");
    if (!r) router.push("/login");
    setRole(r || "");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard ({role})</h1>
      <div className="mt-4 grid gap-3">
        <Link href="/sales" className="p-4 bg-white rounded shadow hover:bg-gray-100">📈 Rekod Jualan</Link>
        <Link href="/expenses" className="p-4 bg-white rounded shadow hover:bg-gray-100">💸 Belanja Harian</Link>
        {role === "admin" && (
          <Link href="/reports" className="p-4 bg-white rounded shadow hover:bg-gray-100">📊 Laporan & PDF</Link>
        )}
      </div>
    </div>
  );
}

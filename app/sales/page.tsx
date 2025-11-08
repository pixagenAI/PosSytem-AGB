"use client";
import { useState } from "react";

export default function SalesPage() {
  const [sales, setSales] = useState<number[]>([]);
  const [amount, setAmount] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Rekod Jualan</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Jumlah (RM)"
          className="border p-2 rounded flex-1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setSales([...sales, Number(amount)]);
            setAmount("");
          }}
        >
          Tambah
        </button>
      </div>
      <ul>
        {sales.map((val, i) => (
          <li key={i} className="border-b py-1">RM {val.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

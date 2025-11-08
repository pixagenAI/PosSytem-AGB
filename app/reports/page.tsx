"use client";
import jsPDF from "jspdf";

export default function ReportsPage() {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Laporan Gerai POS", 20, 20);
    doc.text("Jualan Harian & Belanja direkod di sistem.", 20, 40);
    doc.save("laporan-pos.pdf");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Laporan Keseluruhan</h1>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={generatePDF}
      >
        Export PDF
      </button>
    </div>
  );
}

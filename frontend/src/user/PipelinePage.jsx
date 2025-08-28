import React, { useState } from "react";
import Papa from "papaparse";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export default function PipelinePage() {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleFileUpload = (file) => {
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setHeaders(results.meta.fields || []);
        setData(results.data.slice(0, 5)); // preview first 5 rows
      },
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFileUpload(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black tracking-tight text-center mb-12"
        >
          Upload & Preview Your Dataset
        </motion.h1>

        {/* Square Upload Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="w-full h-64 border-2 border-dashed border-violet-500/40 hover:border-violet-500 transition rounded-2xl flex flex-col items-center justify-center cursor-pointer bg-white/5"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <Upload className="w-12 h-12 text-violet-400 mb-3" />
          <p className="text-slate-300 font-medium">
            Drag & Drop your CSV here
          </p>
          <p className="text-slate-500 text-sm mt-1">or click to browse</p>
          <input
            id="fileInput"
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
          />
        </motion.div>

        {/* Preview Table */}
        {data.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 overflow-x-auto rounded-2xl border border-white/10 shadow-lg"
          >
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-white/10">
                <tr>
                  {headers.map((header) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-left text-sm font-semibold text-violet-300"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/20">
                {data.map((row, i) => (
                  <tr key={i}>
                    {headers.map((header) => (
                      <td
                        key={header}
                        className="px-4 py-2 text-sm text-slate-300"
                      >
                        {row[header]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </div>
  );
}

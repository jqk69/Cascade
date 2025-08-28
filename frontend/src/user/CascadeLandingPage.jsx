import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom"
import {
  Rocket,
  Workflow,
  Database,
  LineChart,
  Shield,
  Zap,
  Github,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/logo.png"

export default function CascadeLandingPage() {
  const gridSize = 15;
  const horizontalLines = Array.from({ length: gridSize }, (_, i) => i);
  const verticalLines = Array.from({ length: gridSize }, (_, i) => i);

  const navigate=useNavigate()

  const handleNavigate=(e,path)=>{
    e.preventDefault()
    navigate(path)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100 relative overflow-hidden">

      {/* Matrix grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {horizontalLines.map((i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-pink-300 opacity-30"
            style={{ top: `${(i / gridSize) * 100}%` }}
            animate={{ opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 2 + i * 0.1, repeat: Infinity }}
          />
        ))}
        {verticalLines.map((i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-pink-300 opacity-30"
            style={{ left: `${(i / gridSize) * 100}%` }}
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 2 + i * 0.1, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black tracking-tight"
          >
            Build, train, and ship ML pipelines
            <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-300 text-transparent bg-clip-text">
              without drowning in boilerplate.
            </span>
          </motion.h1>
          <p className="mt-6 text-lg text-slate-300">
            Cascade is your all-in-one AutoML platform that simplifies every step of the ML workflow.
          </p>
          <a
            onClick={(e)=>handleNavigate(e,"/pipeline")}
            className="mt-8 inline-block bg-violet-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-violet-400 transition"
          >
            Try it Out
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-800 p-6 rounded-2xl text-center hover:scale-[1.02] transition">
            <Workflow className="mx-auto mb-4 h-10 w-10 text-violet-400" />
            <h3 className="font-semibold mb-2">Pipeline Builder</h3>
            <p className="text-slate-300 text-sm">Design ML workflows in minutes without coding.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl text-center hover:scale-[1.02] transition">
            <Database className="mx-auto mb-4 h-10 w-10 text-pink-400" />
            <h3 className="font-semibold mb-2">Data Management</h3>
            <p className="text-slate-300 text-sm">Upload, clean, and store datasets securely.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl text-center hover:scale-[1.02] transition">
            <LineChart className="mx-auto mb-4 h-10 w-10 text-green-400" />
            <h3 className="font-semibold mb-2">Analytics</h3>
            <p className="text-slate-300 text-sm">Visualize metrics, compare models, and track performance.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl text-center hover:scale-[1.02] transition">
            <Shield className="mx-auto mb-4 h-10 w-10 text-blue-400" />
            <h3 className="font-semibold mb-2">Secure</h3>
            <p className="text-slate-300 text-sm">Authentication and secure data storage built-in.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">How it Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-slate-800 hover:scale-[1.02] transition">
            <Zap className="mx-auto mb-4 h-10 w-10 text-yellow-400" />
            <h3 className="font-semibold mb-2">Upload Data</h3>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800 hover:scale-[1.02] transition">
            <Workflow className="mx-auto mb-4 h-10 w-10 text-violet-400" />
            <h3 className="font-semibold mb-2">Train Model</h3>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800 hover:scale-[1.02] transition">
            <LineChart className="mx-auto mb-4 h-10 w-10 text-green-400" />
            <h3 className="font-semibold mb-2">Evaluate</h3>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800 hover:scale-[1.02] transition">
            <Shield className="mx-auto mb-4 h-10 w-10 text-blue-400" />
            <h3 className="font-semibold mb-2">Deploy</h3>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">FAQ</h2>
        <div className="space-y-6 max-w-2xl mx-auto text-slate-300">
          <div>
            <h3 className="font-semibold">Do I need coding experience?</h3>
            <p>No, Cascade handles everything for you from data preprocessing to deployment.</p>
          </div>
          <div>
            <h3 className="font-semibold">Can I deploy multiple models?</h3>
            <p>Yes, Cascade allows you to train and deploy multiple ML pipelines simultaneously.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-slate-400 border-t border-white/10">
        &copy; 2025 Cascade AutoML. All rights reserved.
      </footer>
    </div>
  );
}

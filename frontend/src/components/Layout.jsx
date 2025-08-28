import { Outlet, useNavigate } from "react-router-dom";
import { Github, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function Layout() {
  const navigate = useNavigate();

  const handleNavigate = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      {/* Persistent Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-br from-slate-900 to-black">
        <div className=" mx-9 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-semibold tracking-tight text-white">Cascade</span>
          </div>

          {/* Center */}
          <div className="hidden md:flex items-center text-sm text-slate-300">
            <span>Build ML pipelines effortlessly, from raw data to production-ready models</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/jqk69"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/20  bg-green-600 hover:border-white/40"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main>
        <Outlet /> 
      </main>
    </>
  );
}

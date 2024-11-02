"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full 
                transition-all duration-300 ease-in-out
                bg-white/90 dark:bg-gray-800/90 
                hover:bg-white dark:hover:bg-gray-800
                shadow-lg hover:shadow-xl
                backdrop-blur-sm"
    >
      <div className="relative w-8 h-8">
        <span className={`absolute inset-0 transition-transform duration-300 ${isDark ? "rotate-0" : "rotate-180 opacity-0"}`}>
          <Moon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </span>
        <span className={`absolute inset-0 transition-transform duration-300 ${isDark ? "-rotate-180 opacity-0" : "rotate-0"}`}>
          <Sun className="w-8 h-8 text-amber-500" />
        </span>
      </div>
    </button>
  );
};

const LandingPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Improved Gradient Background */}
      <div className="absolute inset-0 transition-colors duration-500">
        {/* Light mode gradient - Soft, vibrant colors */}
        <div
          className="absolute inset-0 
                      bg-gradient-to-br from-rose-100 via-violet-200 to-teal-100
                      dark:opacity-0 opacity-100 transition-opacity duration-500"
        />

        {/* Dark mode gradient - Deep, rich colors */}
        <div
          className="absolute inset-0 
                      bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900
                      dark:opacity-100 opacity-0 transition-opacity duration-500"
        />

        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 
                      bg-gradient-to-tl from-transparent via-white/5 to-transparent
                      dark:from-transparent dark:via-white/5 dark:to-transparent
                      animate-pulse"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1
          className="text-6xl md:text-8xl font-bold mb-4 tracking-tight
                     text-slate-800 dark:text-white
                     [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]"
        >
          Sijo Sam
        </h1>
        <div
          className="w-24 h-1 bg-violet-500 dark:bg-violet-400 mx-auto mb-6 rounded-full
                      shadow-lg"
        />
        <h2
          className="text-xl md:text-2xl font-light tracking-wide uppercase mb-12
                     text-slate-700 dark:text-slate-200"
        >
          Software Engineer
        </h2>

        {/* Enhanced Glowing Button */}
        <Link href="/more" className="group relative inline-flex items-center justify-center">
          {/* Base button */}
          <div
            className="relative z-10 px-8 py-3 text-xl font-medium rounded-full
                       bg-white/90 dark:bg-slate-800/90
                       text-violet-600 dark:text-violet-300
                       backdrop-blur-sm
                       transition-all duration-300
                       group-hover:shadow-lg group-hover:shadow-violet-500/20"
          >
            <span className="flex items-center">
              LEARN MORE
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
            </span>
          </div>

          {/* Enhanced glow effects */}
          <div
            className="absolute inset-0 -m-1 rounded-full transition-all duration-300 
                       before:absolute before:inset-[-2px] before:rounded-full before:border-2 
                       before:border-violet-400/0 before:transition-all
                       group-hover:before:scale-110 group-hover:before:border-violet-400/30 
                       group-hover:before:blur-sm
                       after:absolute after:inset-[-4px] after:rounded-full after:border-2 
                       after:border-violet-300/0 after:transition-all
                       group-hover:after:scale-125 group-hover:after:border-violet-300/20 
                       after:blur-md"
          />

          {/* Ambient glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 blur-xl
                       bg-gradient-to-r from-violet-600 to-indigo-600
                       dark:from-violet-500 dark:to-indigo-500
                       transition-opacity duration-300 
                       group-hover:opacity-40"
          />
        </Link>
      </div>

      <ThemeSwitcher />
    </section>
  );
};

export default LandingPage;

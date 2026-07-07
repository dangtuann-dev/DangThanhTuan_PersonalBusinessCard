"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, MapPin } from "lucide-react";
import Avatar from "@/components/Avatar";
import CTAButtons from "@/components/CTAButtons";
import ParticleBackground from "@/components/ParticleBackground";
import BankQR from "@/components/BankQR";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      setIsDark(true); // Default to dark mode
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  // Render a clean dark-mode placeholder during server-side render or initialization
  // to avoid flash of light-mode background.
  const currentIsDark = mounted ? isDark : true;

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start md:justify-center relative overflow-y-auto overflow-x-hidden bg-neutral-50 dark:bg-[#000000] text-neutral-900 dark:text-neutral-100 transition-colors duration-500 font-sans px-6 py-12">
      {/* Subtle particle animation background */}
      <ParticleBackground isDark={currentIsDark} />

      {/* Gentle Animated Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none opacity-45 dark:opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neutral-200 dark:bg-neutral-900/60 blur-[80px] sm:blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-neutral-300 dark:bg-neutral-900/60 blur-[100px] sm:blur-[150px] animate-float-reverse" />
      </div>

      {/* Elegant Theme Toggle Button */}
      {mounted && (
        <button
          onClick={() => setIsDark(!isDark)}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30 p-3 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-500 bg-white/40 dark:bg-black/40 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
          aria-label="Toggle Light/Dark Theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-45" />
          ) : (
            <Moon className="w-5 h-5 transition-transform duration-300 hover:-rotate-12" />
          )}
        </button>
      )}

      {/* Main Content Area */}
      <div className="z-10 flex flex-col items-center text-center max-w-md w-full">
        {/* Avatar Container */}
        <div className="animate-fade-in-up">
          <Avatar />
        </div>

        {/* Full Name */}
        <h1 className="animate-fade-in-up animation-delay-100 mt-8 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white select-text">
          Dang Thanh Tuan
        </h1>

        {/* Muted Tagline */}
        <p className="animate-fade-in-up animation-delay-200 mt-4 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed max-w-[280px] sm:max-w-xs text-balance select-text">
          connect to grow
        </p>

        {/* Location Marker */}
        <div className="animate-fade-in-up animation-delay-300 mt-3.5 flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-wide text-neutral-400 dark:text-neutral-500 select-text">
          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 dark:text-neutral-600" />
          <span>Ho Chi Minh City, Vietnam</span>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animation-delay-400 w-full flex justify-center">
          <CTAButtons />
        </div>

        {/* Bank Account Transfer Section */}
        <div className="animate-fade-in-up animation-delay-500 w-full flex justify-center">
          <BankQR />
        </div>
      </div>

      {/* Elegant, unobtrusive signature footer */}
      <footer className="animate-fade-in-up animation-delay-400 absolute bottom-6 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-neutral-400/40 dark:text-neutral-600/40 select-none">
        © {new Date().getFullYear()} Dang Thanh Tuan
      </footer>
    </main>
  );
}

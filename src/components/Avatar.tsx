"use client";

import Image from "next/image";
import { useState } from "react";

export default function Avatar() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative group flex items-center justify-center">
      {/* Outer pulsing ambient grayscale glow on hover */}
      <div className="absolute inset-0 rounded-full bg-neutral-300 dark:bg-neutral-800 opacity-20 blur-xl scale-95 group-hover:scale-110 transition-all duration-700 ease-out" />

      {/* Avatar Container */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border border-neutral-300/80 dark:border-neutral-800/80 bg-neutral-100 dark:bg-neutral-900 shadow-xl group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-all duration-300 ease-out">
        
        {/* Grayscale filter and hover adjustments */}
        <Image
          src="/avatar.jpg"
          alt="Dang Thanh Tuan Profile Picture"
          fill
          priority
          sizes="(max-width: 768px) 160px, 192px"
          className={`object-cover grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Elegant top-light shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 dark:to-white/5 pointer-events-none" />
      </div>
      
      {/* Decorative thin accent ring */}
      <div className="absolute inset-[-4px] rounded-full border border-neutral-200/30 dark:border-neutral-800/30 scale-98 group-hover:scale-102 transition-all duration-500 pointer-events-none" />
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Fixed position to float above the Hero
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      
      {/* Container:
        - rounded-full: Gives the pill/cloud shape
        - backdrop-blur: Frosted glass effect 
        - shadow-lg: Lifts it off the background
      */}
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm border-2 border-brand-cream rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-3 flex justify-between items-center relative">
        
        {/* LOGO */}
        <Link href="/" className="group">
          <span className="font-display text-3xl md:text-4xl text-brand-purple drop-shadow-sm group-hover:scale-105 transition-transform inline-block">
            IL FORNO di <span className="text-brand-pink">Teo</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {["Our Story", "Shop Snacks", "Ingredients", "Wholesale"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="font-sans font-bold text-brand-brown/80 hover:text-brand-purple hover:-translate-y-0.5 transition-all text-lg"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA BUTTON & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          
          {/* "Wobbly" CTA Button */}
          <button className="hidden md:block bg-brand-pink text-brand-yellow font-display text-xl px-6 py-2 rounded-full border-b-4 border-pink-700 hover:border-b-2 hover:translate-y-[2px] active:border-b-0 active:translate-y-[4px] transition-all transform hover:rotate-2">
            Order Now!
          </button>

          {/* Mobile Menu Icon (Hamburger) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-purple p-2 rounded-full hover:bg-brand-teal/20 transition"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN (Curvy Container) */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 bg-white rounded-[2rem] shadow-xl border-4 border-brand-teal flex flex-col gap-4 text-center md:hidden animate-in slide-in-from-top-4 fade-in duration-200">
            {["Our Story", "Shop Snacks", "Ingredients", "Wholesale"].map((item) => (
              <Link 
                key={item} 
                href="#"
                onClick={() => setIsOpen(false)}
                className="font-display text-2xl text-brand-brown hover:text-brand-pink"
              >
                {item}
              </Link>
            ))}
            <button className="mt-2 bg-brand-pink text-brand-yellow font-display text-2xl px-6 py-3 rounded-xl border-b-4 border-pink-700 w-full">
              Order Now!
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}
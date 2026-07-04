"use client";

import React, { useState, useEffect } from "react";
import Feature from "@/components/ui/feature-modern";
import AccordionFeatures from "@/components/ui/accordion-features";
import CreativeFeatures from "@/components/ui/creative-features";
import Reviews from "@/components/ui/reviews";
import EmergencyCTA from "@/components/ui/emergency-cta";
import FAQ from "@/components/ui/faq";
import Footer from "@/components/ui/footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-350 ${
          scrolled ? "py-3 navbar-scrolled" : "py-[18px]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold text-[1.35rem] z-10 text-white">
            <span className="text-white">GDR <span>Hospital</span></span>
          </a>

          {/* Nav Links */}
          <ul
            className={`flex items-center gap-2 transition-all duration-200 ${
              menuOpen
                ? "fixed top-0 left-0 w-full h-screen bg-[#0a0a0a]/97 backdrop-blur-lg flex-col justify-center gap-4 z-[5]"
                : "hidden md:flex"
            }`}
          >
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 text-[0.9rem] font-medium text-white/90 rounded-full hover:bg-white/8 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 text-[0.9rem] font-medium text-slate-400 rounded-full hover:bg-white/8 hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 text-[0.9rem] font-medium text-slate-400 rounded-full hover:bg-white/8 hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#doctors"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 text-[0.9rem] font-medium text-slate-400 rounded-full hover:bg-white/8 hover:text-white transition-colors"
              >
                Doctors
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 text-[0.9rem] font-medium text-slate-400 rounded-full hover:bg-white/8 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            href="tel:+919889210155"
            className="hidden md:inline-block px-6 py-2.5 text-[0.875rem] font-semibold text-[#0a0a0a] bg-white rounded-full transition-all duration-350 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] hover:bg-white/90"
          >
            Book a Call
          </a>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 bg-none border-none cursor-pointer z-10 p-1"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-transform duration-200 ${
                menuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white rounded-full transition-transform duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* ===== HERO / VIDEO SECTION ===== */}
      <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover scale-[1.05]"
            autoPlay
            muted
            loop
            playsInline
            src="/grd-website-vid.mp4"
          />
          <div className="absolute inset-0 gradient-hero-overlay z-[1]"></div>
        </div>

        <div className="relative z-10 text-center w-full max-w-[800px] px-6 flex flex-col items-center animate-fade-in-up">
          <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-white/85 text-center mb-3 leading-[1.7] tracking-[0.08em] uppercase font-light">
            Your Trusted Healthcare Partner
          </p>
          <p className="text-[0.85rem] text-white/65 tracking-[0.05em] text-center font-normal">
            Advanced Medical Care | 24/7 Emergency Services
          </p>
        </div>

        {/* Bottom Section: actions + stats above scroll indicator */}
        <div className="absolute bottom-[100px] left-0 right-0 z-10 flex flex-col items-center gap-5 px-6 animate-fade-in-up-delayed">
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <a
              href="tel:+919889210155"
              className="relative inline-flex items-center gap-2.5 px-9 py-4 font-sans text-base font-semibold text-white bg-transparent border-2 border-white/70 rounded-full cursor-pointer overflow-hidden transition-all duration-350 backdrop-blur-[8px] tracking-[0.02em] hover:bg-white/15 hover:border-white hover:-translate-y-[3px] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
            >
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              Book a Call
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/8 to-transparent animate-shimmer"></span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-4 text-[0.95rem] font-medium text-slate-400 transition-all duration-350 rounded-full hover:text-white hover:bg-white/5 group"
            >
              Explore Services
              <svg
                className="transition-transform duration-200 group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 flex-wrap mt-2.5">
            <div className="text-center">
              <span className="text-[0.8rem] text-slate-400 uppercase tracking-[0.06em] font-medium">
                Expert Doctors
              </span>
            </div>
            <div className="w-[1px] h-10 bg-white/12"></div>
            <div className="text-center">
              <span className="text-[0.8rem] text-slate-400 uppercase tracking-[0.06em] font-medium">
                Departments
              </span>
            </div>
            <div className="w-[1px] h-10 bg-white/12"></div>
            <div className="text-center">
              <span className="text-[0.8rem] text-slate-400 uppercase tracking-[0.06em] font-medium">
                Years Experience
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400 text-[0.7rem] uppercase tracking-[0.12em] select-none">
          <div className="w-6 h-[38px] border-2 border-slate-400/30 rounded-xl flex justify-center pt-1.5">
            <div className="w-0.5 h-2 bg-primary rounded-full animate-scroll-wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* ===== FEATURE COMPONENT (RENDERED UNDER HOMEPAGE) ===== */}
      <div id="services">
        <div id="about">
          <Feature />
        </div>
        <div id="doctors">
          <AccordionFeatures />
        </div>
        <CreativeFeatures />
        <Reviews />
        <EmergencyCTA />
        <FAQ />
      </div>

      {/* ===== FOOTER ===== */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

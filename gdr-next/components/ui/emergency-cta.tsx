"use client";

import React from "react";

export default function EmergencyCTA() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#121214] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-white/10 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column: Heading, Description, and Action Button */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                24x7 Emergency Care
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Our medical emergency response team is prepared to provide immediate care and expert treatment when you need it most. Call our 24/7 hotline for prompt assistance.
              </p>
            </div>

            {/* Right Column: Key Critical Care Features */}
            <div className="space-y-5 md:pl-6 border-t border-white/5 pt-8 md:pt-0 md:border-t-0 md:border-l md:border-white/5">
              <div>
                <h4 className="text-sm font-semibold text-white leading-tight">
                  Medical Emergency
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Always ready for immediate interventions.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white leading-tight">
                  Accident Cases
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Quick response and expert trauma care.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white leading-tight">
                  Sudden Illness
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Immediate diagnostics and advanced treatment.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white leading-tight">
                  Ambulance Dispatch
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  24x7 ambulance services across Sitapur.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white leading-tight">
                  Critical Monitoring
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Continuous monitoring and intensive support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

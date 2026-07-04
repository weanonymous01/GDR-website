"use client";

import React from "react";

const conditions = [
  "Dengue", "Malaria", "Gout", "Nerve Pain", "Kidney Stones",
  "Urology", "Brain Diseases", "Arthritis", "Back & Neck Pain",
  "Slip Disc", "Cervical", "Leg Pain", "Frozen Shoulder",
  "Respiratory Diseases", "Abdominal Pain", "Diabetes", "Cold / Cough / Fever",
];

const freeServices = [
  "Free Sugar Test",
  "Free Blood Pressure Test",
  "Free Physician / Neurologist Consultation",
  "50% Discount on Pathology Services",
  "Gout & Bone Disease Consultation",
];

const contacts = [
  { purpose: "General / OPD Appointments", number: "9889210155", href: "tel:+919889210155" },
  { purpose: "Landline", number: "05862-325590", href: "tel:05862325590" },
  { purpose: "Emergency / Ambulance", number: "+91 73805 12800", href: "tel:+917380512800" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Top Row: Brand ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              GDR <span className="text-white/80">Hospital</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              World-class healthcare services now available in Sitapur with experienced doctors,
              critical care supported by Medanta e-ICU, and 24x7 emergency facilities.
            </p>
          </div>
        </div>

        {/* ── Main Grid: 4 Columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Conditions Covered */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Conditions We Treat
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {conditions.map((c, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] font-medium text-slate-300 bg-white/[0.04] border border-white/5 rounded-md"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Free Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Free & Discounted Services
            </h3>
            <ul className="space-y-3">
              {freeServices.map((s, i) => (
                <li key={i}>
                  <span className="text-sm text-slate-300 leading-snug">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Emergency */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Contact Directory
            </h3>
            <div className="space-y-4">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className="block group"
                >
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block mb-0.5">
                    {c.purpose}
                  </span>
                  <span className="text-sm text-white font-bold group-hover:text-primary transition-colors">
                    {c.number}
                  </span>
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="mt-6 pt-5 border-t border-white/5">
              <div className="mb-3">
                <p className="text-xs text-slate-400 leading-relaxed">
                  GDR Hospital LLP, Sitapur,<br />
                  Uttar Pradesh, India
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  24x7 Emergency Services<br />
                  OPD: Mon–Sat (See Doctor Schedules)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Emergency Banner ── */}
        <div className="bg-[#121214] border border-white/5 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">24x7 Emergency Care</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Medical Emergency • Accident Cases • Sudden Illness — Always Ready
              </p>
            </div>
            <a
              href="tel:+917380512800"
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-all duration-200 flex-shrink-0"
            >
              +91 73805 12800
            </a>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} GDR Hospital LLP. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Designed & Developed by{" "}
            <a href="https://socialsense.in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              socialsense.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

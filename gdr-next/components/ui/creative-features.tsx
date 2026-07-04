"use client";

import React from "react";
import { Building, Activity, Users, Shield, Monitor, Video, Scissors, Truck } from "lucide-react";

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: <Building className="h-5 w-5 text-white" />,
    title: "30-Bed Modern Hospital",
    description: "A clean, modern healthcare facility featuring comfortable inpatient rooms and specialized wards.",
  },
  {
    icon: <Activity className="h-5 w-5 text-white" />,
    title: "Medanta e-ICU Support",
    description: "State-of-the-art intensive care unit equipped with Medanta's expert e-ICU remote support.",
  },
  {
    icon: <Users className="h-5 w-5 text-white" />,
    title: "Expert Doctors & Staff",
    description: "Dedicated medical professionals, experienced consultants, and trained nursing staff available 24/7.",
  },
  {
    icon: <Shield className="h-5 w-5 text-white" />,
    title: "Emergency & Critical Care",
    description: "Immediate emergency response and expert critical care management for urgent, life-saving needs.",
  },
  {
    icon: <Monitor className="h-5 w-5 text-white" />,
    title: "24x7 Patient Monitoring",
    description: "Continuous observation and tracking of patient vital signs to ensure timely medical interventions.",
  },
  {
    icon: <Video className="h-5 w-5 text-white" />,
    title: "Telemedicine",
    description: "Consult with our medical specialists online from the comfort of your home via secure video calls.",
  },
  {
    icon: <Scissors className="h-5 w-5 text-white" />,
    title: "Laparoscopic Surgery",
    description: "Advanced minimally invasive surgical options offering faster recovery times and less discomfort.",
  },
  {
    icon: <Truck className="h-5 w-5 text-white" />,
    title: "24x7 Ambulance Services",
    description: "Rapid ambulance dispatch services and round-the-clock emergency care facilities at Sitapur.",
  },
];

export default function CreativeFeatures() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-[1.15]">
            Hospital Infrastructure
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Equipped with state-of-the-art facilities, emergency response systems, and continuous patient support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-t border-l border-white/10 rounded-xl overflow-hidden bg-black/20">
          {features.map((item, idx) => {
            const isLastTwo = idx >= 6;
            return (
              <div
                key={idx}
                className={`p-8 border-b border-r border-white/10 bg-white/[0.03] transition-colors duration-300 col-span-1 md:col-span-1 ${
                  isLastTwo ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

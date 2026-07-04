"use client";

import React from "react";
import { Star } from "lucide-react";

type ReviewItem = {
  name: string;
  subtitle: string;
  text: string;
  initials: string;
  stars: number;
};

const reviews: ReviewItem[] = [
  {
    name: "SHALINI RAJPOOT",
    subtitle: "5 reviews • 2 weeks ago",
    text: "“Excellent hospital with caring doctors and supportive staff. The treatment was very good, and all my concerns were addressed properly. The hospital is clean, well-managed, and patient-friendly. Highly recommended.”",
    initials: "SR",
    stars: 5,
  },
  {
    name: "MANISH SINGH",
    subtitle: "Local Guide • 74 reviews • 59 photos • 2 weeks ago",
    text: "“The facility is clean, well-maintained, and professionally managed. The staff is courteous and the overall atmosphere is welcoming. It is great to see such a healthcare facility starting in our area. Wishing the entire team success and hoping it serves the community well.”",
    initials: "MS",
    stars: 5,
  },
  {
    name: "GDR Hospital Community",
    subtitle: "Sitapur Patient • 2 weeks ago",
    text: "“World class health services are now available in GDR Hospital for the first time in Sitapur with experienced doctors and critical care supported by Medanta e-ICU.”",
    initials: "GH",
    stars: 5,
  },
  {
    name: "Patient Family Member",
    subtitle: "Verified Care Review • 2 weeks ago",
    text: "“GDR Hospital doctors look after us like family, providing comfort and care when it is needed most.”",
    initials: "PF",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-[1.15]">
            Loved by patients, trusted by families
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Here is what our patients and the Sitapur community say about their experience at GDR Hospital.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Left Tall Card (Shalini Rajpoot) */}
          <div className="lg:col-span-1 lg:row-span-2 bg-[#121214] border border-white/5 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:shadow-xl">
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[0].stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-lg font-medium text-white leading-relaxed mb-8">
                {reviews[0].text}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-white text-sm border border-white/10">
                {reviews[0].initials}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {reviews[0].name}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {reviews[0].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Top Right Wide Card (Manish Singh) */}
          <div className="lg:col-span-2 bg-[#121214] border border-white/5 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:shadow-xl">
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(reviews[1].stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {reviews[1].text}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold text-white text-sm border border-white/10">
                {reviews[1].initials}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {reviews[1].name}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {reviews[1].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Right Card 1 (GDR Hospital Community) */}
          <div className="lg:col-span-1 bg-[#121214] border border-white/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:shadow-xl">
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(reviews[2].stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {reviews[2].text}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center font-bold text-white text-xs border border-white/10">
                {reviews[2].initials}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white leading-tight">
                  {reviews[2].name}
                </h4>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                  {reviews[2].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Bottom Right Card 2 (Patient Family Member) */}
          <div className="lg:col-span-1 bg-[#121214] border border-white/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:shadow-xl">
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(reviews[3].stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {reviews[3].text}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center font-bold text-white text-xs border border-white/10">
                {reviews[3].initials}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white leading-tight">
                  {reviews[3].name}
                </h4>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                  {reviews[3].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

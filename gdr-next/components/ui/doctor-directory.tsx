"use client";

import React, { useState } from "react";

type Doctor = {
  id: number;
  name: string;
  sector: string;
  category: "all" | "medicine" | "neurology" | "cardiology" | "pediatrics" | "surgery" | "orthopedics";
  qualifications: string;
  specialization: string;
  opdDays: string;
  opdTiming: string;
  specialWeekly?: string;
  previousExperience?: string[];
  currentPosition?: string;
  departmentsCovered?: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Harshit Rastogi",
    sector: "General Physician / Intensivist / Pain Management",
    category: "medicine",
    qualifications: "MBBS, DNB",
    specialization: "Physician, Intensivist, Neuro-Joint Pain Management Specialist",
    opdDays: "Monday to Sunday",
    opdTiming: "9:00 AM – 9:00 PM",
    previousExperience: [
      "Former Assistant Professor, Hind Medical College",
      "Rajiv Gandhi Cancer Institute, Delhi",
      "Indian Spinal Center, Delhi",
      "15 Years of Clinical Experience"
    ],
    departmentsCovered: "General Medicine, Cardiology, Nephrology, Neurology & Spine, Bone & Joint, Gynecology, General Surgery, ICU, 24x7 Emergency"
  },
  {
    id: 2,
    name: "Dr. Pawan Kr. Maurya",
    sector: "Neurology",
    category: "neurology",
    qualifications: "MD Medicine (KGMU, Lucknow), DM Neurology — PGIMER & RML Hospital, New Delhi",
    specialization: "Consultant Neuro Physician",
    opdDays: "Monday to Saturday (Sunday By Appointment)",
    opdTiming: "2:30 PM – 4:30 PM",
    specialWeekly: "Wednesday — 2:30 PM to 4:30 PM"
  },
  {
    id: 3,
    name: "Dr. Shubham",
    sector: "Cardiology (Junior Resident)",
    category: "cardiology",
    qualifications: "MBBS, JR Cardiology",
    specialization: "Physician & Junior Resident — Heart Disease",
    opdDays: "Monday to Saturday",
    opdTiming: "4:00 PM – 7:00 PM",
    previousExperience: [
      "Ex. Resident, Tender Palm Hospital, Lucknow",
      "Ex. Resident, Sahara Hospital, Lucknow"
    ]
  },
  {
    id: 4,
    name: "Dr. Rajat Kumar Singh",
    sector: "Pediatric Surgery / Child Care",
    category: "pediatrics",
    qualifications: "MBBS, MS, MCh — Paediatric Surgery, BHU",
    specialization: "Paediatric Surgeon — Neonates & Children",
    opdDays: "Sunday Only",
    opdTiming: "12:00 PM – 3:00 PM",
    currentPosition: "Assistant Professor, Medical College"
  },
  {
    id: 5,
    name: "Dr. Alok Srivastava",
    sector: "General Surgery / Laparoscopic & Laser Surgery",
    category: "surgery",
    qualifications: "MBBS, MS (General Surgery)",
    specialization: "General, Laparoscopic & Laser Surgeon",
    opdDays: "Monday to Saturday (Sunday By Appointment)",
    opdTiming: "4:00 PM – 7:00 PM",
    currentPosition: "Professor & HOD, Medical College"
  },
  {
    id: 6,
    name: "Dr. Shivam Chitransh",
    sector: "Orthopedics / Bone & Joint Surgery",
    category: "orthopedics",
    qualifications: "MBBS, MS (Orthopedic)",
    specialization: "Trauma, Arthroscopic and Joint Replacement Surgeon",
    opdDays: "Monday to Saturday (Sunday By Appointment)",
    opdTiming: "4:00 PM – 7:00 PM",
    previousExperience: [
      "Training Institute: Varun Arjun Medical College & Rohilkhand Hospital, Shahjahanpur"
    ]
  },
  {
    id: 7,
    name: "Dr. Vishnu Mon",
    sector: "Orthopedics / Bone & Joint (Junior Resident)",
    category: "orthopedics",
    qualifications: "MBBS, JR (Orthopedic)",
    specialization: "Junior Resident — Bone & Joint Disease",
    opdDays: "Monday to Saturday (Sunday By Appointment)",
    opdTiming: "9:00 AM – 7:00 PM",
    previousExperience: [
      "Ex. JR Orthopedic, Deen Dayal Upadhyay Hospital, Delhi",
      "Attar Sain Jain Hospital, Delhi",
      "AIIMS, Delhi"
    ]
  }
];

const categories = [
  { id: "all", label: "All Specialists" },
  { id: "medicine", label: "Medicine & Pain" },
  { id: "neurology", label: "Neurology" },
  { id: "cardiology", label: "Cardiology" },
  { id: "pediatrics", label: "Pediatrics" },
  { id: "surgery", label: "Surgery" },
  { id: "orthopedics", label: "Orthopedics" }
];

export default function DoctorDirectory() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredDoctors = doctors.filter(
    (doc) => activeFilter === "all" || doc.category === activeFilter
  );

  return (
    <section id="doctors" className="py-16 md:py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title Block */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-[0.75rem] font-semibold tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full uppercase mb-4">
            Specialist Directory
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Experienced medical professionals and residents delivering reliable, patient-centered care.
          </p>
        </div>

        {/* Categories / Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full border transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-white text-[#0a0a0a] border-white"
                  : "bg-transparent text-slate-400 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Doctor Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#121214] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-white/10 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Doctor Avatar Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0ea5e9] to-[#06b6d4] flex items-center justify-center font-bold text-white text-base shadow-inner">
                    {doc.name
                      .split(" ")
                      .filter((n) => n !== "Dr." && n !== "Kr.")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-[#0ea5e9] font-medium mt-0.5">
                      {doc.sector}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2 text-xs border-t border-white/5">
                  {/* Qualifications */}
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                      Qualifications
                    </span>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      {doc.qualifications}
                    </p>
                  </div>

                  {/* Specialization */}
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                      Specialization
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {doc.specialization}
                    </p>
                  </div>

                  {/* OPD Days / Timing */}
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block font-semibold mb-0.5">
                      OPD schedule
                    </span>
                    <p className="text-slate-300 font-medium">
                      {doc.opdDays}
                    </p>
                    <p className="text-[#0ea5e9] font-medium mt-0.5">
                      {doc.opdTiming}
                    </p>
                  </div>

                  {/* Special Weekly OPD */}
                  {doc.specialWeekly && (
                    <div className="bg-[#0ea5e9]/5 border border-[#0ea5e9]/10 rounded-lg p-2.5">
                      <span className="text-[#0ea5e9] uppercase tracking-wider block font-bold mb-0.5 text-[10px]">
                        Special Weekly OPD
                      </span>
                      <p className="text-slate-300 font-medium">{doc.specialWeekly}</p>
                    </div>
                  )}

                  {/* Previous Experience / Current Position */}
                  {(doc.previousExperience || doc.currentPosition) && (
                    <div>
                      <span className="text-slate-500 uppercase tracking-wider block font-semibold mb-1">
                        Experience & Positions
                      </span>
                      <ul className="list-disc list-inside text-slate-400 space-y-1 pl-0.5">
                        {doc.currentPosition && (
                          <li className="leading-relaxed">
                            <span className="text-white font-medium">{doc.currentPosition}</span>
                          </li>
                        )}
                        {doc.previousExperience?.map((exp, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Departments Covered (For Dr. Harshit) */}
              {doc.departmentsCovered && (
                <div className="mt-4 pt-3.5 border-t border-white/5">
                  <span className="text-slate-500 uppercase tracking-wider block text-[10px] font-bold mb-1.5">
                    Departments Covered
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {doc.departmentsCovered.split(", ").map((dept, idx) => (
                      <span
                        key={idx}
                        className="bg-white/5 text-slate-300 px-2 py-0.5 rounded text-[10px] border border-white/5 font-medium"
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";

type DoctorItem = {
  id: string;
  name: string;
  sector: string;
  qualifications: string;
  specialization: string;
  opdDays: string;
  opdTiming: string;
  specialWeekly?: string;
  previousExperience?: string[];
  currentPosition?: string;
  departmentsCovered?: string;
  imageSrc: string;
};

const items: DoctorItem[] = [
  {
    id: "harshit",
    name: "Dr. Harshit Rastogi",
    sector: "General Physician / Intensivist / Pain Management",
    qualifications: "MBBS, DNB",
    specialization: "Physician, Intensivist, Neuro-Joint Pain Management Specialist",
    opdDays: "Monday to Sunday",
    opdTiming: "9:00 AM - 9:00 PM",
    previousExperience: [
      "Former Assistant Professor, Hind Medical College",
      "Rajiv Gandhi Cancer Institute, Delhi",
      "Indian Spinal Center, Delhi",
      "15 Years of Clinical Experience"
    ],
    departmentsCovered: "General Medicine, Cardiology, Nephrology, Neurology & Spine, Bone & Joint, Gynecology, General Surgery, ICU, 24x7 Emergency",
    imageSrc: "/hospital_feature_mockup.png",
  },
  {
    id: "pawan",
    name: "Dr. Pawan Kr. Maurya",
    sector: "Neurology",
    qualifications: "MD Medicine (KGMU, Lucknow), DM Neurology - PGIMER & RML Hospital, New Delhi",
    specialization: "Consultant Neuro Physician",
    opdDays: "Monday to Saturday (Sunday By Appointment)",
    opdTiming: "2:30 PM - 4:30 PM",
    specialWeekly: "Wednesday - 2:30 PM to 4:30 PM",
    imageSrc: "/doctors_feature_mockup.png",
  },
  {
    id: "shubham",
    name: "Dr. Shubham",
    sector: "Cardiology (Junior Resident)",
    qualifications: "MBBS, JR Cardiology",
    specialization: "Physician & Junior Resident - Heart Disease",
    opdDays: "Monday to Saturday",
    opdTiming: "4:00 PM - 7:00 PM",
    previousExperience: [
      "Ex. Resident, Tender Palm Hospital, Lucknow",
      "Ex. Resident, Sahara Hospital, Lucknow"
    ],
    imageSrc: "/labs_feature_mockup.png",
  },
  {
    id: "rajat",
    name: "Dr. Rajat Kumar Singh",
    sector: "Pediatric Surgery / Child Care",
    qualifications: "MBBS, MS, MCh - Paediatric Surgery, BHU",
    specialization: "Paediatric Surgeon - Neonates & Children",
    opdDays: "Sunday Only",
    opdTiming: "12:00 PM - 3:00 PM",
    currentPosition: "Assistant Professor, Medical College",
    imageSrc: "/hospital_feature_mockup.png",
  },
  {
    id: "alok",
    name: "Dr. Alok Srivastava",
    sector: "General Surgery / Laparoscopic & Laser Surgery",
    qualifications: "MBBS, MS (General Surgery)",
    specialization: "General, Laparoscopic & Laser Surgeon",
    opdDays: "Monday to Saturday (Sunday By Appointment)",
    opdTiming: "4:00 PM - 7:00 PM",
    currentPosition: "Professor & HOD, Medical College",
    imageSrc: "/doctors_feature_mockup.png",
  },
  {
    id: "shivam",
    name: "Dr. Shivam Chitransh",
    sector: "Orthopedics / Bone & Joint Surgery",
    qualifications: "MBBS, MS (Orthopedic)",
    specialization: "Trauma, Arthroscopic and Joint Replacement Surgeon",
    opdDays: "Monday to Saturday (Sunday By Appointment)",
    opdTiming: "4:00 PM - 7:00 PM",
    previousExperience: [
      "Training Institute: Varun Arjun Medical College & Rohilkhand Hospital, Shahjahanpur"
    ],
    imageSrc: "/labs_feature_mockup.png",
  },
  {
    id: "vishnu",
    name: "Dr. Vishnu Mon",
    sector: "Orthopedics / Bone & Joint (Junior Resident)",
    qualifications: "MBBS, JR (Orthopedic)",
    specialization: "Junior Resident - Bone & Joint Disease",
    opdDays: "Monday to Saturday (Sunday By Appointment)",
    opdTiming: "9:00 AM - 7:00 PM",
    previousExperience: [
      "Ex. JR Orthopedic, Deen Dayal Upadhyay Hospital, Delhi",
      "Attar Sain Jain Hospital, Delhi",
      "AIIMS, Delhi"
    ],
    imageSrc: "/hospital_feature_mockup.png",
  }
];

export default function AccordionFeatures() {
  const [activeId, setActiveId] = useState<string>("harshit");

  const activeDoc = items.find((item) => item.id === activeId) || items[0];

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Our Consultant & Resident Doctors
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Click on any doctor to view their complete OPD schedule, qualifications, and specialties.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-12 items-start">
          {/* Left Side: Interactive Accordion of Doctors (7 cols) */}
          <div className="flex flex-col gap-3.5 md:col-span-7">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`border border-white/5 rounded-xl p-4 cursor-pointer transition-all duration-350 ${
                    isActive
                      ? "bg-white/5 border-white/15 shadow-lg shadow-black/30"
                      : "bg-[#121214]/40 hover:bg-[#121214]/80 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <h3
                          className={`text-[0.95rem] transition-colors duration-200 ${
                            isActive ? "text-white font-bold" : "text-slate-300"
                          }`}
                        >
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {item.sector.split(" / ")[0]}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`transform transition-transform duration-200 ${
                        isActive ? "rotate-180 text-white" : "text-slate-400"
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-350 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-white/5"
                        : "grid-rows-[0fr] opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="overflow-hidden space-y-3.5 text-xs text-slate-300">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold mb-0.5">
                          Qualifications
                        </span>
                        <p className="font-medium text-white">{item.qualifications}</p>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold mb-0.5">
                          Specialization
                        </span>
                        <p className="text-slate-300">{item.specialization}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold mb-0.5">
                            OPD Timing
                          </span>
                          <p className="text-white font-bold">{item.opdTiming}</p>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold mb-0.5">
                            OPD Days
                          </span>
                          <p className="text-slate-300 font-medium">{item.opdDays}</p>
                        </div>
                      </div>

                      {item.specialWeekly && (
                        <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                          <span className="text-white uppercase tracking-wider block font-bold mb-0.5 text-[9px]">
                            Special Weekly OPD
                          </span>
                          <p className="text-slate-200 font-medium">{item.specialWeekly}</p>
                        </div>
                      )}

                      {item.previousExperience && (
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold mb-1">
                            Experience & Positions
                          </span>
                          <ul className="list-disc list-inside text-slate-400 pl-0.5 space-y-0.5">
                            {item.previousExperience.map((exp, idx) => (
                              <li key={idx} className="leading-relaxed">{exp}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.currentPosition && (
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold mb-0.5">
                            Current Position
                          </span>
                          <p className="text-white font-medium">{item.currentPosition}</p>
                        </div>
                      )}

                      {item.departmentsCovered && (
                        <div className="pt-2 border-t border-white/5">
                          <span className="text-[9px] text-slate-500 uppercase tracking-wider block font-bold mb-1.5">
                            Departments Covered
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {item.departmentsCovered.split(", ").map((dept, idx) => (
                              <span
                                key={idx}
                                className="bg-white/5 text-slate-300 px-1.5 py-0.5 rounded text-[9px] border border-white/5"
                              >
                                {dept}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Interactive Mockup / Profile Panel (5 cols) */}
          <div className="md:col-span-5 relative w-full aspect-[4/5] bg-gradient-to-b from-[#18181b] to-[#121214] border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between p-6 shadow-2xl transition-all duration-350 sticky top-24">
            


            {/* Profile Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Doctor Main Title */}
                <div className="flex justify-end items-start mb-6">
                  <span className="bg-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                    GDR Specialist
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {activeDoc.name}
                </h4>
                <p className="text-sm text-white font-bold mb-6">
                  {activeDoc.sector}
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5 text-xs">
                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block font-bold mb-1 text-[10px]">
                      Qualifications
                    </span>
                    <p className="text-slate-200 leading-relaxed font-medium">
                      {activeDoc.qualifications}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-500 uppercase tracking-wider block font-bold mb-1 text-[10px]">
                      Specialization Details
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {activeDoc.specialization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timing Badge Footer */}
              <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4 mt-6">
                <span className="text-slate-500 uppercase tracking-wider block text-[10px] font-bold mb-1.5">
                  OPD Availability
                </span>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-medium text-xs">
                    {activeDoc.opdDays}
                  </span>
                  <span className="text-white font-bold text-sm">
                    {activeDoc.opdTiming}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

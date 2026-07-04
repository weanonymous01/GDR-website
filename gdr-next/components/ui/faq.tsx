"use client";

import React from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What are the visiting hours at GDR Hospital?",
    answer:
      "General visiting hours are from 10:00 AM to 12:00 PM and 4:00 PM to 6:00 PM daily. ICU visits are allowed for immediate family members only, during designated 15-minute slots. Emergency cases are attended to 24x7 without any time restrictions.",
  },
  {
    question: "Does GDR Hospital offer cashless insurance treatment?",
    answer:
      "Yes, GDR Hospital supports cashless treatment under multiple health insurance providers. Our dedicated insurance desk assists patients with pre-authorization, claim processing, and documentation so you can focus on recovery without worrying about upfront payments.",
  },
  {
    question: "What is the Medanta e-ICU and how does it help patients?",
    answer:
      "Our ICU is connected to Medanta's e-ICU program, where senior intensivists from Medanta Hospital remotely monitor critical patients in real-time. This means your loved ones receive world-class critical care guidance right here in Sitapur, without needing to transfer to a metro city.",
  },
  {
    question: "How do I book an OPD appointment with a specialist?",
    answer:
      "You can book an OPD appointment by calling our helpline at +91 73805 12800 or by visiting the hospital reception directly. Walk-in consultations are also available during OPD hours. Each doctor's schedule and timings are listed on our website.",
  },
  {
    question: "Is emergency and ambulance service available 24 hours?",
    answer:
      "Absolutely. GDR Hospital provides round-the-clock emergency care and ambulance dispatch services across Sitapur. In case of a medical emergency, accident, or sudden illness, call our emergency helpline at +91 73805 12800 for immediate assistance.",
  },
  {
    question: "What surgical facilities are available at GDR Hospital?",
    answer:
      "We offer both general and advanced laparoscopic (minimally invasive) surgery facilities. Our operation theatres are fully equipped with modern surgical instruments, and our surgeons specialize in general surgery, orthopedic procedures, and pediatric surgery.",
  },
  {
    question: "Can I consult a doctor online through telemedicine?",
    answer:
      "Yes, GDR Hospital offers telemedicine consultations for follow-up visits and non-emergency cases. You can schedule a secure video call with our specialists from the comfort of your home. Contact our reception or helpline to arrange a virtual appointment.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 text-[0.7rem] font-semibold tracking-widest text-slate-400 bg-white/5 border border-white/10 rounded-full uppercase mb-5">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
            Common Questions & Answers
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Find out all the essential details about GDR Hospital and how we can serve your healthcare needs.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="py-8 border-t border-white/5 first:border-t-0"
            >
              <div className="flex items-start gap-5">
                {/* Number */}
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-slate-400">
                  {idx + 1}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-white leading-snug mb-2.5">
                    {item.question}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

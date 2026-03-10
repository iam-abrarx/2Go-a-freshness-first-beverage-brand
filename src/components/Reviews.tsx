"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { getAssetPath } from "@/lib/utils";

const reviews = [
  {
    name: "Arif Ahmed",
    role: "Creative Director",
    text: "The fresh watermelon juice is exactly what I needed. Pure, cold, and honestly the best I've had in Dhaka. The packaging is just a bonus!",
    image: "/assets/profile.webp",
    rating: 5,
    accent: "#d64c4c"
  },
  {
    name: "Sarah Kabir",
    role: "Fitness Enthusiast",
    text: "Finally a place that doesn't add sugar! The Fruit Fizz is my post-workout ritual now. Real fruit, real energy, real fast.",
    image: "/assets/profile.webp",
    rating: 5,
    accent: "#307351"
  },
  {
    name: "Tanvir Hossain",
    role: "Tech Lead",
    text: "Cold coffee done right. Not too sweet, perfectly balanced. 2Go has cracked the code for premium on-the-go beverages.",
    image: "/assets/profile.webp",
    rating: 5,
    accent: "#F3CA40"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#fcfcfc] relative overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--yellow)]/5 rounded-full blur-[80px] -mr-32 -mt-32" />
      
      <div className="container relative z-10">
        <Reveal>
          <div className="section-title text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[var(--primary)] font-black uppercase tracking-[5px] text-xs">Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-display uppercase mt-4 leading-tight tracking-tighter">Loved by the<br/>Masterminds</h2>
            <div className="w-20 h-1.5 bg-[var(--yellow)] mx-auto mt-8 rounded-full" />
          </div>
        </Reveal>

        <Reveal animation="reveal-stagger">
          <div className="grid md:grid-cols-3 gap-10">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="group bg-white p-12 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.03)] hover:shadow-[0_45px_90px_rgba(214,76,76,0.12)] transition-all duration-700 border border-gray-50 flex flex-col justify-between h-full relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--primary)] text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.437.917-4 3.638-4 5.849h3.983v10h-9.979z" />
                  </svg>
                </div>

                <div>
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[var(--yellow)] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl font-medium text-[var(--text-light)] italic leading-relaxed opacity-90 mb-10">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-8 border-t border-gray-50">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-[var(--primary)] shadow-lg group-hover:scale-105 transition-transform duration-700">
                    <Image src={getAssetPath(review.image)} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display uppercase tracking-tighter text-[var(--text-dark)]">{review.name}</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] opacity-80 mt-1">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

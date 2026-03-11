"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { Instagram, Facebook, Video, ArrowRight } from "lucide-react";

const feedImages = [
  { id: 1, src: "/images/slider-1.jpg" },
  { id: 2, src: "/images/slider-2.jpg" },
  { id: 3, src: "/images/slider-3.jpg" },
  { id: 4, src: "/images/slider-1.jpg" },
  { id: 5, src: "/images/slider-2.jpg" },
  { id: 6, src: "/images/slider-3.jpg" },
  { id: 7, src: "/images/slider-1.jpg" },
  { id: 8, src: "/images/slider-2.jpg" },
];

export default function SocialFeed() {
  return (
    <section className="relative w-full bg-[#d64c4c] pt-24 pb-24 overflow-hidden">
      {/* Top Content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        {/* Pill Label */}
        <div className="inline-block bg-white/20 text-white text-sm font-bold tracking-widest uppercase px-6 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/30">
          Stay in touch
        </div>

        {/* Large Typography */}
        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-white leading-[0.9] tracking-tighter mb-10 w-full max-w-5xl">
          FOLLOW <br />
          FOR MORE
        </h2>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4">
          <a href="#" className="flex items-center gap-3 bg-[#b13a3a] text-white px-6 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-[#a03232]">
            <Instagram size={20} />
            Instagram
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a href="#" className="flex items-center gap-3 bg-[#b13a3a] text-white px-6 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-[#a03232]">
            <Facebook size={20} />
            Facebook
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a href="#" className="flex items-center gap-3 bg-[#b13a3a] text-white px-6 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-[#a03232]">
            <Video size={20} />
            TikTok
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative w-full bg-[#d64c4c] pt-24 overflow-hidden">
      {/* Top Content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10 mb-16">
        {/* Pill Label */}
        <div className="inline-block bg-white/20 text-white text-sm font-bold tracking-widest uppercase px-6 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/30">
          Stay in touch
        </div>

        {/* Large Typography */}
        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-white leading-[0.9] tracking-tighter mb-10 w-full max-w-5xl">
          FOLLOW <br />
          @2GO_OFFICIAL <br />
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

      {/* Scrolling Image Feed */}
      <div className="w-full relative z-20 pb-12 translate-y-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView="auto"
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="social-swiper"
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
            1440: { slidesPerView: 6.5 },
          }}
        >
          {feedImages.map((img, index) => (
            <SwiperSlide key={`${img.id}-${index}`} className="!w-auto">
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden group shadow-2xl">
                <Image
                  src={getAssetPath(img.src)}
                  alt="Social feed image"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />
                
                {/* Instagram Tag */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <Instagram size={14} />
                  Instagram
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .social-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}

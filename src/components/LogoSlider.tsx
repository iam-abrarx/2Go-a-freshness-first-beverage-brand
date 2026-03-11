"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function LogoSlider() {
  return (
    <section className="w-full relative pt-16 pb-12 bg-white overflow-hidden border-t border-b border-gray-100">
      <div className="container mx-auto px-4 mb-16">
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[5px] text-center">
          Affiliated Brands & Partners
        </p>
      </div>

      <div className="w-full relative z-20">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={80}
          slidesPerView="auto"
          loop={true}
          speed={5000}
          loopAdditionalSlides={10}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="social-swiper flex items-center"
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((num, index) => (
            <SwiperSlide key={index} className="!w-auto flex justify-center items-center py-4">
              <div className="relative w-[200px] h-[100px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <Image
                  src={getAssetPath(`/images/logos/logo-${num}.png`)}
                  alt="Partner Logo"
                  fill
                  sizes="200px"
                  className="object-contain"
                />
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

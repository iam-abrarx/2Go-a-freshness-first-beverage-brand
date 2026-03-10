"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const heroSlides = [
  { 
    id: 1, 
    subtitle: "EST. 2024",
    text: "A Freshness First", 
    desc: "Experience the ultimate refreshing taste with zero compromises on quality, directly sourced from nature."
  },
  { 
    id: 2, 
    subtitle: "CRAFTED WITH CARE",
    text: "Premium Quality", 
    desc: "Every drop is carefully curated to give you an authentic and rejuvenating experience."
  },
  { 
    id: 3, 
    subtitle: "FOR THE PLANET",
    text: "Sustainably Sourced", 
    desc: "Our commitment revolves around eco-friendly practices that protect tomorrow."
  },
];


const manualLayers = [
  {
    nr: 1,
    id: "1-03-bg-1",
    src: "/assets/composition/1-03.svg",
    color: "#ced4b1",
    brightness: 1.0,
    hidden: false,
    top: "auto",
    bottom: "0vh",
    left: "5vw",
    right: "auto",
    rotate: 35,
    scale: 3,
    x: -100,
    y: -45,
    scrollFactor: 0.04, // Moves UP as you scroll down
    opacity: 0.8,
    parallax: 3,
    animation: {
      type: 'slide-up',
      duration: '2.85s',
      delay: '0.23s',
      ease: 'cubic-bezier(0.26, .58, 0.3, 1)'
    }
  },
  {
    nr: 2,
    id: "1-03-bg-2",
    src: "/assets/composition/1-03.svg",
    color: "#ced4b1",
    brightness: 0.9,
    hidden: false,
    top: "auto",
    bottom: "0vh",
    left: "15vw",
    right: "auto",
    rotate: 65,
    scale: 2.5,
    x: 155,
    y: 140,
    opacity: 1.0,
    parallax: 4,
    scrollFactor: 0.025, // Moves UP as you scroll down
    animation: {
      type: 'slide-up',
      duration: '1.5s',
      delay: '0.2s',
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)'
    }
  },
  {
    nr: 3,
    id: "1-01-bottom-left-flipped",
    src: "/assets/composition/1-01.svg",
    flipX: true,
    hidden: false,
    top: "auto",
    bottom: "-18vh",
    left: "30vw",
    right: "auto",
    rotate: 10,
    scale: 1.85,
    x: -100,
    y: 0,
    opacity: 1,
    scrollFactor: 0.02, // Moves UP as you scroll down
    parallax: 0.0,
    animation: {
      type: 'slide-up',
      duration: '2.5s',
      delay: '0.2s',
      ease: 'cubic-bezier(0.26, .58, 0.3, 1)'
    }
    
  },
  {
    nr: 4,
    id: "1-02-bottom-left",
    src: "/assets/composition/1-02.svg",
    color: "#ced4b1",
    brightness: 1,
    hidden: false,
    top: "auto",
    bottom: "-30vh",
    left: "10vw",
    right: "auto",
    rotate: 50,
    scale: 6,
    x: 0,
    y: 0,
    opacity: 1,
    scrollFactor: 0.02, // Moves UP as you scroll down
    parallax: 0,
    animation: {
      type: 'fade',
      duration: '2.0s',
      delay: '0.2s',
      ease: 'cubic-bezier(0.33, 1, 0.68, 1)'
    }
  },
  {
    nr: 5,
    id: "1-02-bottom-left-top",
    src: "/assets/composition/1-02.svg",
    color: "#bdc690",
    brightness: 1.0,
    hidden: false,
    top: "auto",
    bottom: "-32vh",
    left: "15vw",
    right: "auto",
    rotate: 60,
    scale: 2.50,
    x: 180,
    y: 0,
    opacity: 1,
    // scrollFactor: -0.03, // Moves UP as you scroll down
    parallax: 6,
    animation: {
      type: 'slide-up',
      duration: '1.0s',
      delay: '0.08s'
    }
  },
  {
    nr: 8,
    id: "1-01-bottom-left",
    src: "/assets/composition/1-01.svg",
    hidden: false,
    top: "auto",
    bottom: "-20vh",
    left: "25vw",
    right: "auto",
    rotate: 35,
    scale: 4.0,
    x: -600,
    y: 20,
    opacity: 1,
    parallax: 6.5,
    scrollFactor: -0.05, // Moves UP as you scroll down
    animation: {
      type: 'slide-up',
      duration: '1.53s',
      delay: '0.0s',
      ease: 'cubic-bezier(0.26, .58, 0.3, 1)'
    },
    
  },
  {
    nr: 7,
    id: "1-02-bottom-left-v3",
    src: "/assets/composition/1-02.svg",
    color: "#bdc690",
    brightness: 1.0,
    hidden: false,
    top: "auto",
    bottom: "-35vh",
    left: "25vw",
    right: "auto",
    rotate: 65,
    scale: 3.8,
    x: -440,
    y: 0,
    opacity: 1,
    parallax: 7,
    scrollFactor: -0.05, // Moves UP as you scroll down
    animation: {
      type: 'slide-right',
      duration: '1.8s',
      delay: '0.2s'
    }
  },
];

export default function DesignHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [isInteractionReady, setIsInteractionReady] = useState(false);

  // High-performance tracking using CSS Variables and requestAnimationFrame
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };

    const handleReady = () => {
      setIsMounted(true);
    };

    const updateStyles = () => {
      if (sectionRef.current) {
        sectionRef.current.style.setProperty("--mouse-x", mouseX.toString());
        sectionRef.current.style.setProperty("--mouse-y", mouseY.toString());
        sectionRef.current.style.setProperty("--scroll-y", window.scrollY.toString());
      }
      frameId = requestAnimationFrame(updateStyles);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("2go-site-ready", handleReady);
    frameId = requestAnimationFrame(updateStyles);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px" }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("2go-site-ready", handleReady);
      cancelAnimationFrame(frameId);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Switch to snappy interaction mode after entry animations are mostly complete
  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => setIsInteractionReady(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  // Transform calculation helper using CSS variables for performance
  const getLayerStyles = (layer: any) => {
    const baseX = layer.x || 0;
    const baseY = layer.y || 0;
    const scaleX = (layer as any).flipX ? -(layer.scale || 1) : (layer.scale || 1);
    const scaleY = layer.scale || 1;
    const rotate = layer.rotate || 0;
    const scrollFactor = layer.scrollFactor || 0;
    const parallax = layer.parallax || 0;

    // The transformation logic is moved to CSS calc() expressions powered by the --mouse and --scroll variables
    // This allows the browser to bypass the React render cycle for real-time movement
    const transform = `
      translate(
        calc(var(--mouse-x, 0) * ${parallax}px + ${baseX}px),
        calc(var(--mouse-y, 0) * ${parallax}px + ${baseY}px + (var(--scroll-y, 0) * ${scrollFactor}px))
      )
      rotate(${rotate}deg)
      scale(${scaleX}, ${scaleY})
    `;

    // Handle entrance animation overrides
    if (!isMounted && layer.animation) {
      const type = layer.animation.type || 'fade';
      let animX = baseX;
      let animY = baseY;

      if (type === 'slide-up') animY += 100;
      if (type === 'slide-down') animY -= 100;
      if (type === 'slide-left') animX += 100;
      if (type === 'slide-right') animX -= 100;

      return {
        transform: `translate(${animX}px, ${animY}px) rotate(${rotate}deg) scale(${scaleX}, ${scaleY})`
      };
    }

    return { transform };
  };

  return (
    <section 
      id="design-hero"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#ebefd7]"
      style={{ contain: 'paint' }}
    >
      {/* Preload SVG Masks to prevent FOUC mask flicker */}
      <div className="hidden" aria-hidden="true">
        {manualLayers.map((layer) => (
          <Image key={`preload-${layer.id}`} src={getAssetPath(layer.src)} alt="" width={10} height={10} priority />
        ))}
      </div>

      {/* Background Parallax Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isInView && [...manualLayers]
          .sort((a, b) => (a.nr || 0) - (b.nr || 0))
          .map((layer) => {
            if (layer.hidden) return null;
            
            const anim = layer.animation || {};
            const duration = anim.duration || "1s";
            const delay = anim.delay || "0s";
            const ease = anim.ease || "ease-out";

            // When isInteractionReady is true, we use a much faster transition for mouse/scroll follow
            const interactionTransition = "transform 0.4s ease-out, opacity 0.4s ease-out";
            const entryTransition = `transform ${duration} ${ease} ${delay}, opacity ${duration} ${ease} ${delay}`;

            return (
              <div
                key={layer.id}
                className="absolute"
                style={{
                  top: layer.top,
                  bottom: layer.bottom,
                  left: layer.left,
                  right: layer.right,
                  zIndex: layer.nr,
                  opacity: (!isMounted && anim.type === 'fade') ? 0 : layer.opacity,
                  transition: isInteractionReady ? interactionTransition : entryTransition,
                  ...getLayerStyles(layer),
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <div 
                  className="relative w-[500px] h-[500px]"
                  style={{ 
                    transformOrigin: 'bottom center',
                  } as React.CSSProperties}
                >
                  {(layer as any).color ? (
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundColor: (layer as any).color,
                        maskImage: `url(${getAssetPath(layer.src)})`,
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        maskSize: 'contain',
                        WebkitMaskImage: `url(${getAssetPath(layer.src)})`,
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        WebkitMaskSize: 'contain',
                        filter: `brightness(${(layer as any).brightness || 1})`,
                      }}
                    />
                  ) : (
                    <Image
                      src={getAssetPath(layer.src)}
                      alt=""
                      fill
                      className="object-contain"
                      priority
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>

      {/* Central Content Removed as per request */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-6 mt-20 md:mt-32 group">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true, 
            renderBullet: (index, className) => {
              return `<span class="${className} w-3 h-3 bg-[#d64c4c]/50 opacity-100 transition-all hover:bg-[#d64c4c]"></span>`;
            }
          }}
          className="w-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-visible pb-12"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="pt-8">
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 md:p-16 rounded-3xl">
                <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-[#d64c4c] mb-4 md:mb-6 block">
                  {slide.subtitle}
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1a3826] tracking-tighter mb-6 md:mb-8 leading-[0.9]">
                  {slide.text}
                </h2>
                <p className="max-w-2xl mx-auto text-base md:text-xl text-[#3b5947] font-medium leading-relaxed mb-8 md:mb-10">
                  {slide.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center bg-[#d64c4c] text-white rounded-full shadow-[0_4px_12px_rgba(214,76,76,0.3)] hover:bg-[#b13a3a] hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:-translate-x-0 disabled:opacity-50 disabled:cursor-not-allowed">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
          </svg>
        </button>
        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 flex items-center justify-center bg-[#d64c4c] text-white rounded-full shadow-[0_4px_12px_rgba(214,76,76,0.3)] hover:bg-[#b13a3a] hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 disabled:opacity-50 disabled:cursor-not-allowed">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.59 6L9.17 7.41 13.76 12l-4.59 4.59L10.59 18l6-6-6-6z"/>
          </svg>
        </button>

        <div className="flex gap-4 items-center justify-center mt-2 relative z-40">
          <button className="px-8 py-3.5 bg-[#d64c4c] text-white rounded-full font-semibold tracking-wide hover:bg-[#b13a3a] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            Explore Our Range
          </button>
          <button className="px-8 py-3.5 bg-white/50 text-[#1a3826] rounded-full font-semibold tracking-wide border border-[#1a3826]/10 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
            Learn More
          </button>
        </div>
        <style jsx global>{`
          .swiper-pagination-bullet-active {
            width: 32px !important;
            border-radius: 9999px !important;
            background-color: #d64c4c !important;
          }
          .swiper-pagination-bullet {
            transition: all 0.3s ease;
          }
        `}</style>
      </div>
      
      {/* Soft Overlays - Lowered z-index to stay behind content */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ebefd7]/10 via-transparent to-[#ebefd7]/10 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#ebefd7_100%)] opacity-30 z-10 pointer-events-none" />
    </section>
  );
}


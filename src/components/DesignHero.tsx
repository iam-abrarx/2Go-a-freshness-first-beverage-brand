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
    subtitle: "Born Fresh, Served Real",
    text: "Juice for all\noccasions.", 
    desc: "Experience the purest taste of nature with our freshly pressed juices made from seasonal fruits in Dhaka."
  },
  { 
    id: 2, 
    subtitle: "Born Fresh, Served Real",
    text: "Real Fruits.\nReal Taste.", 
    desc: "We believe in keeping it real. No artificial colors, no preservatives, just pure fruit goodness delivered fresh."
  },
  { 
    id: 3, 
    subtitle: "Born Fresh, Served Real",
    text: "Start Fresh\nEvery Day.", 
    desc: "Fuel your day with natural energy from our range of masterclass fresh juices and healthy beverages."
  },
];


const manualLayers = [
  {
    nr: 1,
    id: "1-03-bg-1",
    src: "/assets/composition/1-03.svg",
    color: "#ced4b1",
    brightness: 1.0,
    blur: 2,
    hidden: false,
    top: "auto",
    bottom: "0vh",
    left: "5vw",
    right: "auto",
    rotate: 35,
    scale: 2,
    x: -100,
    y: -45,
    scrollFactor: 0.04, // Moves UP as you scroll down
    opacity: 1.0,
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
    blur: 2,
    hidden: false,
    top: "auto",
    bottom: "0vh",
    left: "15vw",
    right: "auto",
    rotate: 65,
    scale: 1.5,
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
    blur: 1,
    hidden: false,
    top: "auto",
    bottom: "-18vh",
    left: "30vw",
    right: "auto",
    rotate: 10,
    scale: 0.85,
    x: -80 ,
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
    blur: 0.2,
    hidden: false,
    top: "auto",
    bottom: "-30vh",
    left: "10vw",
    right: "auto",
    rotate: 50,
    scale: 5,
    x: -20,
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
    blur: 1,
    hidden: false,
    top: "auto",
    bottom: "-32vh",
    left: "15vw",
    right: "auto",
    rotate: 60,
    scale: 1.50,
    x: 150,
    y: -10,
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
    nr: 9,
    id: "bottle-watermelon",
    src: "/assets/bottles/Watermelon Bottle.png",
    isImage: true,
    blur: 0,
    hidden: false,
    top: "auto",
    bottom: "-10vh",
    left: "5vw",
    right: "auto",
    rotate: 0,
    scale: 1.5,
    x: 150,
    y: -90,
    opacity: 1,
    parallax: 0,
    scrollFactor: 0.1,
    animation: {
      type: 'slide-up',
      duration: '1.8s',
      delay: '0.4s',
      ease: 'cubic-bezier(0.26, .58, 0.3, 1)'
    }
  },
  {
    nr: 8,
    id: "bottle-papaya",
    src: "/assets/bottles/Papaya Bottle.png",
    isImage: true,
    blur: 0,
    hidden: false,
    top: "auto",
    bottom: "-10vh",
    left: "5vw",
    right: "auto",
    rotate: 0,
    scale: 1.2,
    x: -10,
    y: -40,
    opacity: 1,
    parallax: 0,
    scrollFactor: 0.102,
    animation: {
      type: 'slide-up',
      duration: '2.0s',
      delay: '0.6s',
      ease: 'cubic-bezier(0.26, .58, 0.3, 1)'
    }
  },
  {
    nr: 8,
    id: "bottle-fruit-fizz",
    src: "/assets/bottles/fruit-fizz.png",
    isImage: true,
    blur: 0,
    hidden: false,
    top: "auto",
    bottom: "-10vh",
    left: "5vw",
    right: "auto",
    rotate: 0,
    scale: 1.20,
    x: 325,
    y: -20,
    opacity: 1,
    parallax: 0,
    scrollFactor: 0.125,
    animation: {
      type: 'slide-up',
      duration: '1.6s',
      delay: '0.8s',
      ease: 'cubic-bezier(0.26, .58, 0.3, 1)'
    }
  },
  {
    nr: 8,
    id: "1-01-bottom-left",
    src: "/assets/composition/1-01.svg",
    blur: 0,
    hidden: false,
    top: "auto",
    bottom: "-20vh",
    left: "25vw",
    right: "auto",
    rotate: 35,
    scale: 3.0,
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
    blur: 2,
    hidden: false,
    top: "auto",
    bottom: "-35vh",
    left: "25vw",
    right: "auto",
    rotate: 65,
    scale: 2.8,
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
      className="relative h-[95vh] flex items-end justify-center overflow-hidden bg-[#f8f4e9]"
      style={{ contain: 'paint' }}
    >
      {/* Preload SVG Masks */}
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
                  filter: (layer as any).blur ? `blur(${(layer as any).blur}px)` : undefined,
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

      {/* Central Content */}
      <div className="relative z-30 w-full max-w-7xl ml-auto mr-0 px-6 mt-32 md:mt-48 mb-auto group">
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.hero-next',
              prevEl: '.hero-prev',
            }}
            pagination={{ 
              clickable: true, 
              renderBullet: (index, className) => {
                return `<span class="${className} w-3 h-3 bg-[#d64c4c] opacity-50 transition-all hover:bg-[#ebc543] hover:opacity-100"></span>`;
              }
            }}
            className="w-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-visible pb-12"
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id} className="pt-8">
                <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 md:p-16 rounded-3xl">
                  <span className="text-lg md:text-xl text-[#d64c4c] mb-3 md:mb-5 block">
                    {slide.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#d64c4c] tracking-tighter mb-5 md:mb-7 leading-[0.9] whitespace-pre-line">
                    {slide.text}
                  </h2>
                  <p className="max-w-3xl mx-auto text-2xl md:text-3xl text-[#3b5947] leading-relaxed mb-7 md:mb-9 whitespace-pre-line">
                    {slide.desc}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#" className="px-7 py-2.5 bg-[#d64c4c] text-white font-semibold rounded-full text-base hover:bg-[#c43e3e] transition-all duration-300 hover:scale-105 shadow-lg">
                      Explore Collection
                    </a>
                    <a href="#" className="px-7 py-2.5 bg-[#24583d] text-white font-semibold rounded-full text-base hover:bg-[#1a3826] transition-all duration-300 hover:scale-105 shadow-lg">
                      Our Menu
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <button className="hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/50 backdrop-blur border border-white/60 rounded-full text-[#24583d] shadow-lg transition-all hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button className="hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/50 backdrop-blur border border-white/60 rounded-full text-[#24583d] shadow-lg transition-all hover:bg-white hover:scale-110 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
        
        <style jsx global>{`
          .swiper-pagination-bullet-active {
            width: 32px !important;
            border-radius: 9999px !important;
            background-color: #ebc543 !important;
            opacity: 1 !important;
          }
          .swiper-pagination-bullet {
            transition: all 0.3s ease;
          }
        `}</style>
      </div>
      
    </section>
  );
}


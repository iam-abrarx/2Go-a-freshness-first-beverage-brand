"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { products } from "@/data/products";

const categories = [
  {
    id: "juice",
    name: "JUICES",
    count: "4+ Items",
    color: "#d64c4c", // Signature Red
    image: "/assets/bottles/Watermelon Bottle.png",
    badge: "Trending",
  },
  {
    id: "shake",
    name: "SHAKES",
    count: "1+ Items",
    color: "#307351", // Forest Green
    image: "/assets/bottles/Fruit Fizz Bottle.png",
    badge: "Bestseller",
  },
  {
    id: "coffee",
    name: "COFFEE",
    count: "1 Item",
    color: "#F7D08A", // Creamy Yellow
    textColorSelection: "dark",
    image: "/assets/bottles/Cold Coffee Bottle.png",
    badge: "New",
  },
];

export default function Categories() {
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Close overlay on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCat(null);
        setSelectedProduct(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Reset selected product when category changes
  useEffect(() => {
    setSelectedProduct(null);
  }, [selectedCat]);

  // Prevent scroll when overlay is open
  useEffect(() => {
    if (selectedCat) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedCat]);

  const filteredProducts = products.filter(p => p.category === selectedCat);
  const currentCategory = categories.find(c => c.id === selectedCat);

  return (
    <section id="categories" className="py-32 bg-white overflow-hidden relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-[100px] -ml-40 -mt-20" />

      <div className="container relative z-10">
        <Reveal>
          <div className="section-title text-left mb-20 max-w-2xl">
            <span className="text-[var(--primary)] font-black uppercase tracking-[5px] text-xs">Explore Menu</span>
            <h2 className="text-6xl font-display uppercase mt-4 leading-tight">Our Mastermind<br/>Categories</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <Reveal key={index} animation="reveal-stagger" className="h-full">
              <div
                className="group relative h-[500px] rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-[0_45px_90px_rgba(0,0,0,0.15)] hover:-translate-y-4 shadow-xl cursor-pointer"
                style={{ backgroundColor: cat.color }}
                onClick={() => setSelectedCat(cat.id)}
              >
                {/* Background Watermark */}
                <div className={`absolute top-12 left-12 opacity-[0.08] select-none pointer-events-none ${cat.textColorSelection === "dark" ? "text-black" : "text-white"}`}>
                  <span className="text-[120px] font-display leading-none tracking-tighter">{cat.name}</span>
                </div>

                {/* Content Container */}
                <div className={`absolute inset-8 z-10 rounded-xl ${cat.textColorSelection === "dark" ? "bg-black/5 border-black/10" : "bg-white/10 border-white/20"} backdrop-blur-xl border p-10 flex flex-col justify-between transition-all duration-700 group-hover:bg-opacity-20`}>
                  <div className="flex flex-col items-start gap-6">
                    {cat.badge && (
                      <span className={`${cat.textColorSelection === "dark" ? "bg-black text-white" : "bg-white text-[var(--text-dark)]"} text-[10px] font-black uppercase px-4 py-1.5 rounded-lg shadow-2xl transition-transform group-hover:scale-110`}>
                        {cat.badge}
                      </span>
                    )}
                    <div>
                        <h3 className={`text-4xl font-display uppercase leading-none drop-shadow-sm ${cat.textColorSelection === "dark" ? "text-black" : "text-white"}`}>
                          {cat.name}
                        </h3>
                        <p className={`mt-4 font-black uppercase tracking-[3px] text-[10px] ${cat.textColorSelection === "dark" ? "text-black/50" : "text-white/60"}`}>
                          {cat.count}
                        </p>
                    </div>
                  </div>

                  <div>
                    <span
                      className={`inline-flex items-center gap-3 font-black uppercase tracking-[4px] text-[10px] border-b-2 pb-2 transition-all group/link ${cat.textColorSelection === "dark" ? "text-black border-black/20 hover:border-black" : "text-white border-white/40 hover:border-white"}`}
                    >
                      View List
                      <svg 
                          className="w-5 h-5 transform transition-transform group-hover/link:translate-x-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                      >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Product Image Area */}
                <div className="absolute -right-20 -bottom-8 w-[380px] h-[520px] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-1000 z-20 pointer-events-none">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
                  />
                  
                  {/* Floating Shadow */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[180px] h-[35px] bg-black/40 blur-[40px] rounded-full -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Product List Overlay - Updated for Left Alignment and Master-Detail */}
      {selectedCat && (
        <div className="fixed inset-0 z-[100] flex items-center justify-start p-4 sm:p-8 animate-in fade-in duration-500">
          <div 
            className="absolute inset-0 bg-[var(--text-dark)]/80 backdrop-blur-md cursor-pointer"
            onClick={() => { setSelectedCat(null); setSelectedProduct(null); }}
          />
          
          <div className={`relative h-full bg-white rounded-2xl shadow-2xl flex overflow-hidden transition-all duration-700 ease-out animate-in slide-in-from-left ${selectedProduct ? 'w-full max-w-6xl' : 'w-full max-w-2xl'}`}>
            
            {/* Master: Product List (Left Pane) */}
            <div className={`flex flex-col h-full bg-white transition-all duration-700 border-r border-gray-50 ${selectedProduct ? 'w-[400px] shrink-0' : 'w-full'}`}>
                {/* Overlay Header */}
                <div className="p-10 pb-6 flex items-center justify-between">
                    <div>
                        <span className="text-[var(--primary)] font-black uppercase tracking-[5px] text-[10px]">Collection</span>
                        <h2 className="text-4xl font-display uppercase mt-2">{currentCategory?.name}</h2>
                    </div>
                    {!selectedProduct && (
                        <button 
                            onClick={() => setSelectedCat(null)}
                            className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-500 group"
                        >
                            <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Product List */}
                <div className="flex-grow overflow-y-auto px-10 py-6 custom-scrollbar">
                    <div className="space-y-4">
                        {filteredProducts.map((product) => (
                            <div 
                                key={product.id}
                                onClick={() => setSelectedProduct(product)}
                                className={`group flex items-center gap-6 p-5 rounded-xl transition-all duration-500 cursor-pointer border ${selectedProduct?.id === product.id ? 'bg-white shadow-xl border-gray-100 scale-[1.02]' : 'bg-[#f8f9fa] border-transparent hover:bg-white hover:border-gray-50'}`}
                            >
                                <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-xl p-2 group-hover:scale-105 transition-transform duration-500 shadow-sm">
                                    <Image 
                                        src={product.image} 
                                        alt={product.name} 
                                        fill 
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h4 className={`text-lg font-display uppercase leading-tight group-hover:text-[var(--primary)] transition-colors ${selectedProduct?.id === product.id ? 'text-[var(--primary)]' : ''}`}>{product.name}</h4>
                                    <p className="text-[10px] text-[var(--text-light)] font-black uppercase tracking-widest mt-1 opacity-60">{product.size}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-black text-[var(--primary)]">৳{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Overlay Footer */}
                <div className="p-10 pt-6 border-t border-gray-50 bg-white">
                    <button 
                        onClick={() => setSelectedCat(null)}
                        className="w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest bg-gray-50 hover:bg-[var(--primary)] hover:text-white transition-all duration-500"
                    >
                        Close Collection
                    </button>
                </div>
            </div>

            {/* Detail: Product View (Right Pane) */}
            <div className={`flex-grow h-full bg-[#fcfcfc] transition-all duration-700 ${selectedProduct ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0 pointer-events-none absolute'}`}>
                {selectedProduct && (
                    <div className="flex flex-col h-full bg-white">
                        {/* Detail Header */}
                        <div className="p-10 border-b border-gray-50 flex justify-between items-center">
                             <div className="flex items-center gap-4">
                                 <span className="w-10 h-10 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center font-black text-sm">
                                     {products.indexOf(selectedProduct) + 1}
                                 </span>
                                 <span className="text-[10px] font-black uppercase tracking-[4px] text-gray-400">Product Details</span>
                             </div>
                             <button 
                                onClick={() => setSelectedProduct(null)}
                                className="text-[10px] font-black uppercase tracking-[3px] text-gray-400 hover:text-[var(--primary)] transition-colors flex items-center gap-2 group"
                            >
                                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to List
                            </button>
                        </div>

                        {/* Detail Content */}
                        <div className="flex-grow overflow-y-auto custom-scrollbar p-12">
                            <div className="grid lg:grid-cols-2 gap-16 items-start">
                                {/* Visual Area */}
                                <div className="space-y-8">
                                    <div 
                                        className="relative h-[400px] rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl group/img"
                                        style={{ backgroundColor: currentCategory?.color }}
                                    >
                                         <div className="absolute inset-x-0 bottom-0 top-1/2 bg-white/20 rounded-full blur-[80px] scale-0 group-hover/img:scale-110 transition-transform duration-1000" />
                                         <div className="relative w-[300px] h-[380px] transform hover:scale-110 hover:rotate-3 transition-transform duration-700">
                                            <Image 
                                                src={selectedProduct.image} 
                                                alt={selectedProduct.name} 
                                                fill 
                                                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                                            />
                                         </div>
                                    </div>
                                    
                                    {/* Pricing & CTA */}
                                    <div className="flex items-center justify-between p-8 bg-gray-50 rounded-xl border border-gray-100/50">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[3px] text-gray-400 mb-1">Price Per Bottle</p>
                                            <span className="text-4xl font-black text-[var(--primary)]">৳{selectedProduct.price}</span>
                                        </div>
                                        <button 
                                            className="btn-primary !py-5 !px-8 !rounded-2xl flex items-center gap-3"
                                            onClick={() => window.open(`https://wa.me/8801715322138?text=I'm interested in ordering ${selectedProduct.name}`, '_blank')}
                                        >
                                            Order Now
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Text Area */}
                                <div className="space-y-12">
                                    <div>
                                        <h2 className="text-5xl font-display uppercase leading-tight mb-6">{selectedProduct.name}</h2>
                                        <p className="text-gray-500 leading-relaxed text-lg font-medium opacity-80">{selectedProduct.description}</p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-10">
                                        <div>
                                            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-[var(--primary)] mb-4">Ingredients</h5>
                                            <p className="text-sm font-bold text-gray-800 leading-relaxed">{selectedProduct.ingredients}</p>
                                        </div>
                                        <div>
                                            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-[var(--primary)] mb-4">Package</h5>
                                            <p className="text-sm font-bold text-gray-800">{selectedProduct.size} Recyclable Bottle</p>
                                        </div>
                                    </div>

                                    {selectedProduct.specialNotes && (
                                        <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-[var(--primary)]">
                                            <h5 className="text-[10px] font-black uppercase tracking-[4px] text-[var(--primary)] mb-6">Expert Notes</h5>
                                            <ul className="space-y-4">
                                                {selectedProduct.specialNotes.map((note: string, i: number) => (
                                                    <li key={i} className="flex gap-4 text-xs font-bold text-gray-700 leading-relaxed">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5 shrink-0" />
                                                        {note}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Detail Footer */}
                        <div className="p-10 border-t border-gray-50 bg-white flex items-center justify-between">
                             <div className="flex gap-2">
                                 <span className="w-3 h-3 rounded-full bg-[var(--primary)]" />
                                 <span className="w-3 h-3 rounded-full bg-[var(--secondary)]" />
                                 <span className="w-3 h-3 rounded-full bg-[var(--yellow)]" />
                             </div>
                             <p className="text-[10px] font-black uppercase tracking-[4px] text-gray-300">Born Fresh. Served Real.</p>
                        </div>
                    </div>
                )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

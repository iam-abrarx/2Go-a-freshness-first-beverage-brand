"use client";

import Reveal from "./Reveal";

const reviews = [
  {
    name: "Rafiq Ahmed",
    role: "Regular customer",
    rating: 5,
    text: "Best fresh juice in Dhaka! The Pineapple Juice is incredibly fresh and you can really taste the difference compared to bottled alternatives. Highly recommend!",
    accent: "var(--primary)",
  },
  {
    name: "Nusrat Jahan",
    role: "Regular customer",
    rating: 5,
    text: "I love that they use no preservatives. The Lemon Guava is my favorite — the mint and chili combination is unique and refreshing. My whole family is hooked!",
    accent: "var(--secondary)",
  },
  {
    name: "Karim Uddin",
    role: "Regular customer",
    rating: 5,
    text: "Great quality juices at a fair price. The Banana Chocolate Shake is perfect for an afternoon energy boost. Would love to see more shake options on the menu!",
    accent: "var(--yellow)",
  },
];

const videoReviews = [
  {
    name: "Sadia Rahman",
    role: "Food Blogger",
    thumbnail: "/assets/bottles/real_photos/combine.png",
    accent: "var(--primary)",
    caption: "\"Tried all 7 flavors — here's my honest ranking!\"",
  },
  {
    name: "Tanvir Hasan",
    role: "Fitness Enthusiast",
    thumbnail: "/assets/bottles/real_photos/combine.png",
    accent: "var(--secondary)",
    caption: "\"My go-to post-workout recovery drink\"",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-[#f8f9fa] overflow-hidden relative">
      {/* Subtle background text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-black uppercase tracking-tighter">REVIEWS</span>
      </div>

      <div className="container relative z-10">
        <Reveal>
            <div className="section-title text-center mb-24">
                <span className="text-[var(--primary)] font-black uppercase tracking-[5px] text-xs">Customer Stories</span>
                <h2 className="text-6xl font-display uppercase mt-4">What Dhaka Says<br/>About 2Go</h2>
            </div>
        </Reveal>

        {/* Text Reviews */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <Reveal key={index} animation="reveal-stagger" className="h-full">
                <div className="group relative h-full bg-white p-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col border border-gray-100/50">
                    
                    {/* Corner accent */}
                    <div 
                        className="absolute top-0 right-0 w-24 h-24 truncate rounded-tr-[40px] opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none"
                        style={{ background: `radial-gradient(circle at top right, ${review.accent}, transparent 70%)` }}
                    />

                    {/* Rating */}
                    <div className="flex gap-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < review.rating ? "text-[var(--yellow)]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        ))}
                    </div>

                    <p className="text-xl font-medium text-[var(--text-light)] mb-12 leading-relaxed tracking-tight flex-grow italic">
                        &ldquo;{review.text}&rdquo;
                    </p>

                    <div className="flex items-center gap-5 pt-8 border-t border-gray-50">
                        <div 
                            className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-lg transform transition-transform group-hover:rotate-6"
                            style={{ backgroundColor: review.accent }}
                        >
                            {review.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                            <h4 className="font-display uppercase text-xl leading-none mb-1.5 text-[var(--text-dark)]">{review.name}</h4>
                            <p className="text-[9px] font-black uppercase tracking-[3px] text-[var(--text-gray)]">{review.role}</p>
                        </div>
                    </div>
                </div>
            </Reveal>
          ))}
        </div>

        {/* Video Reviews */}
        <Reveal>
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-[var(--primary)] flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-display uppercase">Video Reviews</h3>
                <p className="text-[9px] font-black uppercase tracking-[3px] text-gray-400">Real stories from real people</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {videoReviews.map((video, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-700 border border-gray-100/50 cursor-pointer"
                >
                  {/* Video Thumbnail Area */}
                  <div 
                    className="relative h-[280px] overflow-hidden"
                    style={{ backgroundColor: index === 0 ? "#f8e8e8" : "#e8f0e8" }}
                  >
                    {/* Thumbnail Background */}
                    <div className="absolute inset-0 opacity-30">
                      <div 
                        className="absolute inset-0"
                        style={{ 
                          background: `linear-gradient(135deg, ${video.accent} 0%, transparent 60%)`,
                          opacity: 0.3,
                        }}
                      />
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-lg flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-8 h-8 ml-1" style={{ color: video.accent }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-6 right-6 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-lg">
                      {index === 0 ? "2:34" : "1:48"}
                    </div>

                    {/* Video Icon Badge */}
                    <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[2px] px-4 py-2 rounded-full flex items-center gap-2" style={{ color: video.accent }}>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Video Review
                    </div>

                    {/* Waveform decoration */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center gap-[3px] px-8 pb-4 opacity-30">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 rounded-full transition-all"
                          style={{
                            height: `${Math.random() * 100}%`,
                            minHeight: "4px",
                            backgroundColor: video.accent,
                            opacity: 0.6 + Math.random() * 0.4,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-8 flex items-center gap-5">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-lg flex-shrink-0"
                      style={{ backgroundColor: video.accent }}
                    >
                      {video.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-display uppercase text-xl leading-none mb-1.5 text-[var(--text-dark)]">{video.name}</h4>
                      <p className="text-[9px] font-black uppercase tracking-[3px] text-gray-400">{video.role}</p>
                    </div>
                    <p className="text-sm text-gray-400 italic max-w-[200px] text-right hidden lg:block">{video.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

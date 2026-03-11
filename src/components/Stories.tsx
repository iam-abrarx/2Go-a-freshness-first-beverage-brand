"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { getAssetPath } from "@/lib/utils";

const stories = [
  {
    id: 1,
    title: "Vibrant Pop-up at Dhaka Fest",
    description: "Our fresh juices were a hit at the recent outdoor festival in Dhaka. We loved serving the community!",
    image: "/images/stories/event-sale.png",
    tag: "Event Sale",
  },
  {
    id: 2,
    title: "Fueling University Energy",
    description: "Promoting healthy habits at local university campuses with our natural fruit juice samples.",
    image: "/images/stories/event-promotion.png",
    tag: "Promotion",
  },
  {
    id: 3,
    title: "Corporate Health Day",
    description: "Premium juice catering for corporate wellness events, bringing freshness to the workspace.",
    image: "/images/stories/event-corporate.png",
    tag: "Corporate",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="py-24 bg-[#fdfdfd] overflow-hidden">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="section-title text-center max-w-2xl mx-auto mb-16">
            <span className="text-[var(--primary)] font-black uppercase tracking-[5px] text-xs">Our Journey</span>
            <h2 className="text-5xl font-display uppercase mt-4 leading-tight">Brand Stories & Events</h2>
            <div className="w-16 h-1 bg-[var(--yellow)] mx-auto mt-6 rounded-full" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Reveal key={story.id} animation="reveal-up">
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 group transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={getAssetPath(story.image)}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-[var(--primary)] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                    {story.tag}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display uppercase mb-4 leading-tight group-hover:text-[var(--primary)] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {story.description}
                  </p>
                  <div className="flex items-center gap-2 text-[var(--primary)] font-bold text-xs uppercase tracking-widest cursor-pointer group/link">
                    Read Story
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

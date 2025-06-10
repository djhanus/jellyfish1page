import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const useCases = [
  {
    title: "Focus R&D resources on innovation",
    desc: "Measure time spent on roadmap, KTLO, and more to better align engineering with impact",
    link: "See how →"
  },
  {
    title: "Increase delivery predictability",
    desc: "See what’s on track, what’s at risk, and take action to keep everything on schedule",
    link: "See what’s on track →"
  },
  {
    title: "Remove engineering bottlenecks",
    desc: "Track key metrics like team performance, lead time, and deployment frequency in one place",
    link: "Track all metrics →"
  },
  {
    title: "Measure the impact of coding tools",
    desc: "Quantify Copilot usage, adoption, and impact on engineering efficiency",
    link: "See the impact →"
  },
  {
    title: "Improve team visibility",
    desc: "Understand how teams are spending time and identify opportunities for improvement",
    link: "View insights →"
  },
  {
    title: "Optimize tool usage",
    desc: "Track usage of platforms like GitHub Copilot and understand team-level adoption",
    link: "See adoption →"
  }
];

export default function UseCases() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-white px-6 py-24 min-h-[500px]">
      <div className="max-w-7xl mx-auto overflow-visible">
        {/* Header & Arrows */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl text-left">
            See how Jellyfish drives engineering clarity across use cases
          </h2>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable card area */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto scroll-smooth pb-12 pt-12 pr-6 pl-4 -mr-2 snap-x hide-scrollbar"
        >
          {useCases.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] bg-white rounded-2xl p-7 border border-gray-100 shadow-product snap-start"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-base text-gray-600 mb-32">{card.desc}</p>
              <a href="#" className="text-violet-600 font-semibold text-sm hover:underline">
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

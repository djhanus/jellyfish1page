import { motion } from "framer-motion";

const useCases = [
  {
    title: "Focus R&D resources on innovation",
    desc: "Measure time spent on roadmap, KTLO...",
    link: "See how →"
  },
  {
    title: "Increase delivery predictability",
    desc: "See what’s on track, what’s at risk...",
    link: "See what’s on track →"
  },
  {
    title: "Remove engineering bottlenecks",
    desc: "Track key metrics like team performance...",
    link: "Track all metrics →"
  },
  {
    title: "Measure the impact of coding tools",
    desc: "Quantify Copilot usage, adoption...",
    link: "See the impact →"
  }
];

export default function UseCases() {
  return (
    <section className="bg-white px-6 py-20 text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 max-w-3xl mx-auto text-left">
        See how Jellyfish drives engineering clarity across use cases
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {useCases.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white shadow rounded-xl p-6 text-left border border-gray-100 hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
            <a href="#" className="text-violet-600 font-semibold text-sm hover:underline">
              {card.link}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

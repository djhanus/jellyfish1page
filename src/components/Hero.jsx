import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#0b0223] text-white px-6 pt-24 pb-32 text-center overflow-hidden">
      {/* Background Blob Placeholder */}
      <img
        src="/blob.svg"
        alt="Decorative Blob"
        className="absolute top-[50%] md:top-[30%] left-[-10%] w-[120%] max-w-none opacity-1 pointer-events-none animate-float"
      />

      {/* Main Text */}
      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl leading-[115%] md:text-6xl font-bold md:leading-[115%]">
          The Leading Software <br /> Engineering Intelligence Platform
        </h1>
        <p className="text-xl text-gray-300 mt-7 leading-[150%]">
          Jellyfish supports every stage of the engineering lifecycle—from planning to delivery to post-mortem impact—so leaders at every level can drive true productivity, not just day-to-day optimization.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#"
            className="bg-[#CFEF09] text-[#0D062B] font-medium px-6 py-3 rounded-full hover:bg-lime-300 transition"
          >
            Request a demo
          </a>
          <a href="#" className="text-[#CFEF09] font-semibold px-6 py-3 rounded-full hover:underline transition">
            Product tour →
          </a>
        </div>
      </motion.div>

      {/* Dashboard Image Placeholder */}
      <motion.img
        src="/dashboard.png"
        alt="Dashboard Screenshot"
        className="mt-2 mx-auto w-full max-w-7xl rounded-3xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

    </section>
  );
}

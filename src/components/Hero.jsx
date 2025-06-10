export default function Hero() {
  return (
    <section className="relative bg-[#0D062B] text-white px-6 pt-24 pb-32 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto z-10 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          The Leading Software Engineering Intelligence Platform
        </h1>
        <p className="text-lg text-gray-300 mt-6">
          Jellyfish supports every stage of the engineering lifecycle—from planning to delivery to post-mortem impact—so leaders at every level can drive true productivity, not just day-to-day optimization.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href="#" className="bg-[#d7ff32] text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-300 transition">
            Request a demo
          </a>
          <a href="#" className="text-[#d7ff32] font-semibold px-6 py-3 rounded-full hover:underline transition">
            Product tour →
          </a>
        </div>
      </div>

      {/* Floating dashboard image */}
      <img
        src="https://source.unsplash.com/random/1200x700?dashboard"
        alt="Dashboard Preview"
        className="mt-16 mx-auto w-full max-w-6xl rounded-xl shadow-lg z-10 relative"
      />

      {/* Optional background blobs (could use absolute divs or SVGs here if needed) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* placeholder for gradient/blurred background shapes */}
      </div>
    </section>
  );
}

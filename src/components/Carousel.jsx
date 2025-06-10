import { useState } from "react";

const images = [
  "https://source.unsplash.com/random/800x400?nature",
  "https://source.unsplash.com/random/800x400?tech",
  "https://source.unsplash.com/random/800x400?city"
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative overflow-hidden py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <img src={images[current]} className="w-full rounded-lg shadow" alt="carousel item" />
        <div className="flex justify-between mt-4">
          <button onClick={prev} className="px-4 py-2 bg-gray-700 text-white rounded">Prev</button>
          <button onClick={next} className="px-4 py-2 bg-gray-700 text-white rounded">Next</button>
        </div>
      </div>
    </section>
  );
}

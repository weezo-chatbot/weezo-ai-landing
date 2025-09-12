// components/Testimonials.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Weezo AI reduced our fraud alerts by 30% while improving response time to customer queries.",
    name: "Ada Nwosu",
    company: "Zenith Bank"
  },
  {
    quote:
      "Integrating Weezo AI was seamless, and customer satisfaction scores jumped immediately.",
    name: "Tunde Adebayo",
    company: "Paystack"
  },
  {
    quote:
      "Citizen complaints are resolved faster than ever thanks to Weezo’s intelligent automation, truly seamless.",
    name: "Chinelo Okeke",
    company: "Lagos State Gov"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonial" className="py-20 bg-gray-800 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Animated Headline */}
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-700 rounded-2xl p-8 shadow-lg"
            >
              <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">
                "{testimonials[index].quote}"
              </p>
              <p className="font-semibold">{testimonials[index].name}</p>
              <p className="text-gray-400 text-sm">
                {testimonials[index].company}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 px-2 -translate-y-1/2">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

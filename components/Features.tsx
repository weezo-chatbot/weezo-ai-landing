// components/Features.tsx
"use client";

import { motion } from "framer-motion";
import { Brain, Shield, LineChart, RefreshCcw } from "lucide-react";

const features = [
  {
    title: "Domain-Specific Datasets",
    description:
      "Curated datasets tailored for banks, fintechs, government, and telecoms, ensuring accuracy and relevance.",
    icon: Brain,
  },
  {
    title: "Bank-Grade Security",
    description:
      "Enterprise-level security with encryption and compliance standards to safeguard sensitive customer data.",
    icon: Shield,
  },
  {
    title: "Intelligent Insights",
    description:
      "Turn every customer interaction into actionable insights, helping organizations make data-driven decisions.",
    icon: LineChart,
  },
  {
    title: "Continuous Model Improvement",
    description:
      "Models evolve with new data and feedback, delivering smarter performance over time.",
    icon: RefreshCcw,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Powerful Features Built for Enterprises
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                {/* Animated dangling icon */}
                <motion.div
                  animate={{
                    y: [0, -6, 0, 6, 0], // up & down motion
                    rotate: [0, -3, 0, 3, 0], // slight swing
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="p-3 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center"
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

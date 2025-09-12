// components/InsightsPanel.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Zap, Brain } from "lucide-react";

const insights = [
  {
    icon: <BarChart3 className="w-10 h-10 text-purple-400" />,
    category: "Analytics",
    title: "Customer Sentiment Tracking",
    description: "Measure customer satisfaction directly from chatbot interactions.",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    category: "Performance",
    title: "Response Speed Analysis",
    description: "Monitor and optimize chatbot response times across channels.",
  },
  {
    icon: <Brain className="w-10 h-10 text-green-400" />,
    category: "AI Insights",
    title: "FAQ Gap Detection",
    description: "Identify customer queries your chatbot struggles to answer.",
  },
];

export default function InsightsPanel() {
  return (
    <section id="insight" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Headline + tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Customer Insights
        </motion.h2>

        {/* Tagline with Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Weezo AI doesn’t just power conversations, it unlocks valuable insights 
          from your customer interactions to help you improve service and decision-making.
        </motion.p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-6 shadow-lg relative"
            >
              {/* Icon with bounce + gentle dangling */}
              <motion.div

                viewport={{ once: true }}
                animate={{
                  rotate: [0, 6, -6, 0] // swinging back and forth
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-4 flex justify-center"
              >
                {item.icon}
              </motion.div>

              {/* Category */}
              <p className="text-sm text-purple-400 mb-2">{item.category}</p>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm">{item.description}</p>

              {/* Action icon */}
              <div className="absolute bottom-4 right-4 bg-gray-700 p-2 rounded-full">
                <ArrowUpRight className="w-4 h-4 text-gray-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

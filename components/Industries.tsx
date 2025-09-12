// components/Industries.tsx
"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  CreditCard,
  Headset,
  ShoppingBag,
  Trophy
} from "lucide-react";

const industries = [
  {
    icon: CreditCard,
    color: "text-indigo-400",
    title: "Banks & Fintechs",
    description:
      "Weezo AI helps financial institutions fight fraud, reduce risk, and improve customer service through intelligent data labeling and AI-ready datasets."
  },
  {
    icon: Landmark,
    color: "text-green-400",
    title: "Government Agencies",
    description:
      "Supporting citizen engagement, automating FAQs, and monitoring public services with datasets tailored for governance and civic support."
  },
  {
    icon: Headset,
    color: "text-pink-400",
    title: "Customer Service",
    description:
      "AI-powered assistants that handle complaints, queries, and support tickets with accuracy and empathy."
  },
  {
    icon: Building2,
    color: "text-yellow-400",
    title: "Telecommunications",
    description:
      "Enhancing self-service chatbots, troubleshooting guides, and fraud alerts in telecom ecosystems."
  },
  {
    icon: ShoppingBag,
    color: "text-blue-400",
    title: "E-Commerce",
    description:
      "Improving online retail experiences with datasets that power chatbots for order tracking, returns, payments, and personalized shopping support."
  },
  {
    icon: Trophy,
    color: "text-red-400",
    title: "Sports Betting",
    description:
      "Delivering specialized conversation datasets for betting platforms, enabling chatbots to answer queries about odds, account management, and withdrawals effectively."
  }
];

export default function Industries() {
  return (
    <section id="industry" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
      
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Industries We Serve
        </motion.h2>

        <div className="space-y-12">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon with dangling animation */}
              <motion.div
                className="flex items-center justify-center flex-shrink-0 bg-gray-800 rounded-full p-6 shadow-lg"
                animate={{
                  rotate: [0, 6, -6, 0] // swinging back and forth
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <industry.icon className={`w-8 h-8 ${industry.color}`} />
              </motion.div>

              {/* Text */}
              <div className="max-w-lg">
                <h3 className="text-2xl font-semibold mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

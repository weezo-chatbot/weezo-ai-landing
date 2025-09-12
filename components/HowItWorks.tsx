// components/HowItWorksAdvanced.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Database, Wand2, Tag, Cpu, Repeat } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
  Icon: any;
  accent?: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Collect",
    description:
      "Gather structured and unstructured data from proven sources.",
    Icon: Database,
    accent: "from-blue-400 to-indigo-500",
  },
  {
    id: 2,
    title: "Clean & Normalize",
    description:
      "Remove PII, normalize currency/formatting, and convert messy text into consistent records.",
    Icon: Wand2,
    accent: "from-teal-400 to-emerald-500",
  },
  {
    id: 3,
    title: "Label & Annotate",
    description:
      "Tag intents, mark entities, and create gold-standard datasets for training.",
    Icon: Tag,
    accent: "from-amber-400 to-yellow-500",
  },
  {
    id: 4,
    title: "Train & Validate",
    description:
      "Fine-tune models on labeled data, validate, and iterate with human feedback.",
    Icon: Cpu,
    accent: "from-pink-400 to-rose-500",
  },
  {
    id: 5,
    title: "Deploy & Monitor",
    description:
      "Seamlessly integrate with chat platforms, monitor performance, and keep datasets fresh.",
    Icon: Repeat,
    accent: "from-green-400 to-teal-500",
  },
];

export default function HowItWorksAdvanced() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="blueprint" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          How Weezo AI Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl text-center mx-auto mb-12"
        >
          A continuous, auditable process: collect clean data, label it precisely,
          train robust models, and deploy with continuous monitoring built for
          banks, fintech, government, telecom, and other industries with high 
          customers query.
        </motion.p>

        {/* Timeline / flow */}
        <div
          ref={containerRef}
          className="relative flex flex-col md:flex-row items-center md:items-start gap-y-8 md:gap-x-8"
        >
          {/* horizontal connectors and steps for desktop */}
          <div className="hidden md:flex items-center w-full">
            {/* Step nodes */}
            {steps.map((step, idx) => (
              <div key={step.id} className="flex-1 flex items-center">
                {/* Step Node */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="flex-1 flex flex-col items-center"
                >
                  <div
                    className="relative flex items-center justify-center rounded-full w-20 h-20 shadow-xl"
                    aria-hidden
                  >
                    {/* Gradient ring */}
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.accent} opacity-10`}
                      aria-hidden
                    />
                    <div className="relative z-10 bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center border border-gray-700">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.15,
                        }}
                        className="text-indigo-300"
                      >
                        <step.Icon className="w-7 h-7" />
                      </motion.div>
                    </div>
                  </div>

                  <h4 className="mt-4 text-sm font-semibold">{step.title}</h4>
                  <p className="text-xs text-gray-400 mt-2 text-center px-4">
                    {step.description}
                  </p>
                </motion.div>

                {/* connector except after last item */}
                {idx < steps.length - 1 && (
                  <div className="flex-1 px-2">
                    <div className="relative h-2 flex items-center">
                      <div className="h-1 w-full rounded-full bg-gray-800" />
                      {/* moving dot on connector */}
                      <motion.div
                        className="absolute left-0 top-0 h-3 w-3 rounded-full bg-indigo-400 shadow-lg"
                        animate={{
                          x: ["0%", "100%"],
                        }}
                        transition={{
                          duration: 3.2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: idx * 0.6,
                        }}
                        style={{ transform: "translateX(0%)" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* mobile stacked view */}
          <div className="md:hidden grid gap-6 w-full">
            {steps.map((step, idx) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-gray-800 rounded-2xl p-4 shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <step.Icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{step.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{step.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* subtle footer / loop note */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Continuous loop visualizes Weezo’s iterative improvement cycle; data drives
          model updates, and models help surface better data.
        </div>
      </div>
    </section>
  );
}

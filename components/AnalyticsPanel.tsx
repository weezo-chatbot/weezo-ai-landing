"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { CheckCircle, Smile } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Line Chart Data
const lineData = [
  { name: "Mon", accuracy: 82 },
  { name: "Tue", accuracy: 87 },
  { name: "Wed", accuracy: 89 },
  { name: "Thu", accuracy: 91 },
  { name: "Fri", accuracy: 94 },
  { name: "Sat", accuracy: 96 },
  { name: "Sun", accuracy: 98 },
];

// Pie Chart Data
const pieData = [
  { name: "Very Satisfied", value: 65 },
  { name: "Satisfied", value: 25 },
  { name: "Neutral", value: 7 },
  { name: "Dissatisfied", value: 3 },
];

const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF4444"];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg">
        <p className="font-semibold">{label}</p>
        <p>{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function AnalyticsPanel() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="analytics-panel" ref={ref} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Weezo AI Performance Analytics
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Line Chart Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Card className="bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-gray-700">
              <CardContent>
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Accuracy Over Time
                  </h3>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#aaa" />
                    <YAxis stroke="#aaa" />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="accuracy"
                      stroke="#4ade80"
                      strokeWidth={3}
                      dot={{ r: 5, fill: "#4ade80" }}
                      animationDuration={1200}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <p className="text-gray-300 text-sm mt-4 w-full text-center leading-relaxed px-4">
              Accuracy steadily improves throughout the week, peaking at{" "}
              <span className="text-green-400 font-semibold">98%</span> on
              Sunday. This demonstrates Weezo AI’s ability to continuously
              optimize performance in real-world scenarios, maintaining
              reliability and trust at scale.
            </p>
          </motion.div>

          {/* Pie Chart Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
          >
            <Card className="bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-gray-700">
              <CardContent>
                <div className="flex items-center gap-3 mb-6">
                  <Smile className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Customer Satisfaction
                  </h3>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      animationDuration={1200}
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                  Our AI-powered chatbot demonstrates strong satisfaction scores:
                  <span className="text-green-400"> 65% Very Satisfied</span> and
                  <span className="text-blue-400"> 25% Satisfied</span>. Only a
                  small percentage of users remain neutral or dissatisfied.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

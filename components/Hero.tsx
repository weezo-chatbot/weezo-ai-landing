// components/Hero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const numParticles = 60;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function draw() {
      if (ctx) {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8);
        gradient.addColorStop(0, "rgba(99,102,241,0.9)");
        gradient.addColorStop(1, "rgba(99,102,241,0)");
        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    

      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = 1 - dist / 130;
            const gradLine = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            gradLine.addColorStop(0, `rgba(99,102,241,${alpha})`);
            gradLine.addColorStop(1, `rgba(139,92,246,${alpha})`);

            ctx.strokeStyle = gradLine;
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
      requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1, opacity: 0.5 }}
    />
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Chatbot", href: "#chatbot" },
    { label: "Analytics", href: "#analytics-panel" },
    { label: "Insight", href: "#insight" },
    { label: "Features", href: "#features" },
    { label: "Blueprint", href: "#blueprint" },
    { label: "Industry", href: "#industry" },
    { label: "Testimonial", href: "#testimonial" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          Weezo AI
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <a
          href="#cta"
          className="hidden md:inline-block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30 font-semibold text-sm text-white transition"
        >
          Book a Demo
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-200 hover:text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0F1C]/95 backdrop-blur-md absolute top-16 left-0 w-full px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-200 hover:text-white text-lg"
            >
              {item.label}
            </a>
          ))}
          {/* Mobile CTA inside drawer */}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 px-6 py-3 text-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30 font-semibold text-white"
          >
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  );
}

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Smarter Data.", "Smarter Chatbot.", "Smarter Decision."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black text-white overflow-hidden px-6"
    >
      {/* Navbar */}
      <Navbar />

      {/* Network background animation */}
      <NetworkBackground />

      {/* Floating glow orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        style={{ zIndex: 2 }}
      />
      <motion.div
        className="absolute top-40 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        style={{ zIndex: 2 }}
      />

      <div className="relative z-20 max-w-6xl mx-auto px-6 py-40 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold "
        >
          The future of conversation with
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-300 to-purple-400">
            {text}
          </span>
          <Cursor cursorColor="" cursorStyle="|" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Weezo AI provides Dataset-as-a-Service, helping organizations train chatbots that truly understands their customers
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30 font-semibold text-lg"
          >
            Book a Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

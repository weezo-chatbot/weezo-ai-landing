// components/CTASection.tsx
"use client";

import { useState } from "react";

export default function CTASection() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("✅ Thank you! Your demo request has been sent.");
        setForm({ name: "", email: "", company: "", message: "" });
        setIsOpen(false);
      } else {
        alert("❌ Something went wrong, please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send, check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-r from-green-500 to-teal-500 text-white relative"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to make your chatbot smarter?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
        Join the banks, fintechs, telecoms, and government agencies transforming customer support with Weezo AI.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-block bg-white text-green-600 font-semibold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Book a Demo
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-lg relative">
            <h3 className="text-2xl font-bold mb-4">Request a Demo</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Fullname"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <input
                type="email"
                name="email"
                placeholder="Official Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 h-24"
              />

              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-2 rounded-lg text-white ${
                    loading
                      ? "bg-green-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

// components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="mb-6 md:mb-0 text-white font-bold text-xl">
          Weezo AI
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <p>Email: contact@weezo.ai</p>
          <p>Phone: +234 801 234 5678</p>
        </div>

        {/* Socials */}
        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Weezo AI. All rights reserved.
      </div>
    </footer>
  );
}

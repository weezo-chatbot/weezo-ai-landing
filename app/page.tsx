// app/page.tsx
import Hero from "@/components/Hero";
import ChatDemo from "@/components/ChatDemo";
import AnalyticsPanel from "@/components/AnalyticsPanel";
import InsightsPanel from "@/components/InsightsPanel";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-white">
      
      {/* Hero Section */}
      <Hero />
      
      {/* Chatbot Demo */}
      <ChatDemo />

      {/* Analytics Panel */}
      <AnalyticsPanel />

      {/* Analytics Panel */}
      <InsightsPanel />

      {/* Analytics Panel */}
      <Features />

      {/* How Weezo Works */}
      <HowItWorks />

      {/* Industries We Serve */}
      <Industries />

      {/* Testimonials */}
      <Testimonials />

      {/* Call-to-Action */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* BackToTop */}
      <BackToTop />
    </main>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import BeforeAfter from "./components/BeforeAfter";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-charcoal antialiased overflow-x-hidden">
      {/* Premium Sticky Navigation */}
      <Header />

      {/* Main Landing Sections */}
      <main>
        {/* Full-Screen Immersive Hero */}
        <Hero />

        {/* Brand Intro & Core Craftsmanship Highlights */}
        <About />

        {/* Animated Milestones & Statistics */}
        <Stats />

        {/* 10 Core Services with Detail Modals */}
        <Services />

        {/* Why Homeowners Choose Us (8 Icon factors) */}
        <WhyChooseUs />

        {/* Fully Interactive Before & After Drag Slider */}
        <BeforeAfter />

        {/* Masonry Project Gallery with Filter Tabs & Lightbox */}
        <Projects />

        {/* Testimonials Carousel Slider & Placeholders */}
        <Testimonials />

        {/* Our 4-Step Professional Construction Process */}
        <Process />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact Form, Suburban Coverage, and custom Google Map */}
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Back To Top Action Button */}
      <BackToTop />
    </div>
  );
}


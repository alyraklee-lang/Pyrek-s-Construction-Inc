import { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000); // changes every 5 seconds
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section className="relative py-24 bg-brand-blue text-white overflow-hidden">
      {/* Background grain texture and dark overlays */}
      <div className="absolute inset-0 wood-grain-overlay opacity-[0.03] pointer-events-none"></div>
      
      {/* Absolute decorative circle */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase block mb-3">
            VERIFIED HOMEOWNER FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black mb-4">
            What Our Clients Say About Marcin & Team
          </h2>
          <div className="flex items-center justify-center space-x-1.5 text-yellow-400 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4.5 w-4.5 fill-yellow-400 stroke-yellow-400" />
            ))}
            <span className="text-sm font-mono font-bold text-white ml-2">Five-Star Reviews</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-white/5 border border-white/10 p-8 sm:p-14 rounded-3xl backdrop-blur-md shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
            {/* Wooden top decorative bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>
            
            {/* Quote Icon watermark */}
            <div className="absolute top-8 right-8 text-brand-accent/10">
              <Quote className="h-24 w-24 stroke-[1px]" />
            </div>

            {/* Testimonial Active Slide with smooth opacity fade */}
            <div className="transition-all duration-500 ease-in-out">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6 text-brand-accent">
                {[...Array(TESTIMONIALS[activeIndex].stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-accent stroke-brand-accent" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg sm:text-xl md:text-2xl font-serif font-medium leading-relaxed mb-8 text-gray-100 max-w-3xl">
                "{TESTIMONIALS[activeIndex].text}"
              </blockquote>
            </div>

            {/* Client Metadata and Navigation Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-6 gap-6">
              
              {/* Client Info */}
              <div>
                <span className="block font-bold text-base text-white font-sans">
                  {TESTIMONIALS[activeIndex].name}
                </span>
                <span className="block text-xs font-mono text-brand-accent tracking-wider font-semibold uppercase mt-0.5">
                  {TESTIMONIALS[activeIndex].role} &bull; {TESTIMONIALS[activeIndex].location}
                </span>
              </div>

              {/* Slider Controls Buttons */}
              <div className="flex items-center space-x-3 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-white/5 hover:bg-brand-accent border border-white/10 hover:border-brand-accent rounded-full transition-all cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-xs font-mono font-semibold text-gray-400">
                  {activeIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-3 bg-white/5 hover:bg-brand-accent border border-white/10 hover:border-brand-accent rounded-full transition-all cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 transition-all rounded-full cursor-pointer ${
                  index === activeIndex ? "w-8 bg-brand-accent" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

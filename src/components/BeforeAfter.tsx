import React, { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, HelpCircle } from "lucide-react";

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<"kitchen" | "bathroom">("kitchen");
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const images = {
    kitchen: {
      before: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=50&blur=10&sat=-100", // simulated outdated kitchen
      after: "/src/assets/images/hero_kitchen_living_1783450837425.jpg", // our premium kitchen
      title: "Luxury Kitchen Remodel",
      description: "Gutting an outdated, enclosed layout to construct a spacious, modern open-concept culinary space with natural wood cabinets, granite countertops, and premium lighting."
    },
    bathroom: {
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=50&blur=10&sat=-100", // simulated outdated bath
      after: "/src/assets/images/luxury_bathroom_1783450847257.jpg", // our premium bathroom
      title: "Modern Bathroom Renovation",
      description: "Replacing basic old fixtures with a glass walk-in shower, charcoal slate wall tiling, and dual oak vanity units with premium black brass details."
    }
  };

  const current = images[activeTab];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase block mb-3">
            SEEING IS BELIEVING
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-brand-charcoal mb-4">
            Interactive Before & After Transformations
          </h2>
          <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
            Drag the handle to slide between the original outdated space and our fully completed premium renovation. Touch friendly and responsive.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center space-x-4 mb-10">
          <button
            onClick={() => {
              setActiveTab("kitchen");
              setSliderPosition(50);
            }}
            className={`px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === "kitchen"
                ? "bg-brand-blue text-white shadow-md border-b-2 border-brand-accent"
                : "bg-white text-gray-600 hover:text-brand-accent border border-gray-100"
            }`}
          >
            Luxury Kitchen Remodel
          </button>
          <button
            onClick={() => {
              setActiveTab("bathroom");
              setSliderPosition(50);
            }}
            className={`px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === "bathroom"
                ? "bg-brand-blue text-white shadow-md border-b-2 border-brand-accent"
                : "bg-white text-gray-600 hover:text-brand-accent border border-gray-100"
            }`}
          >
            Modern Bathroom Remodel
          </button>
        </div>

        {/* Slider & Description Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Description Card (Left on large screen) */}
          <div className="lg:col-span-4 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-accent"></div>
            <span className="inline-block px-3 py-1 bg-brand-accent/15 text-brand-accent font-mono text-[10px] uppercase font-black rounded-full mb-4">
              Project Spotlight
            </span>
            <h3 className="text-2xl font-serif font-black text-brand-charcoal mb-4">
              {current.title}
            </h3>
            <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mb-4">
              Finished to Perfection
            </p>
            <p className="text-sm text-gray-500 leading-relaxed font-sans mb-6">
              {current.description}
            </p>
            
            <div className="flex items-center space-x-3 text-xs text-brand-accent font-semibold bg-brand-accent/5 p-4 rounded-xl border border-brand-accent/10">
              <ArrowLeftRight className="h-5 w-5 animate-pulse shrink-0" />
              <span>Use your finger or mouse to slide back and forth on the image.</span>
            </div>
          </div>

          {/* Interactive Slider Canvas (Right on large screen) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onClick={handleContainerClick}
              className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-gray-200"
            >
              {/* Before Image (Background) */}
              <img
                src={current.before}
                alt="Outdated home before remodel"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 bg-black/60 backdrop-blur-md rounded-lg text-white font-mono text-xs font-bold uppercase tracking-wider">
                Before Remodeling
              </span>

              {/* After Image (Cropped Overlay) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={current.after}
                  alt="Beautiful modern remodeled space by Pyrek's Construction"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 bg-brand-accent/90 backdrop-blur-md rounded-lg text-white font-mono text-xs font-bold uppercase tracking-wider">
                  After Remodeling
                </span>
              </div>

              {/* Slider Handle Divider line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onTouchStart={(e) => {
                  setIsDragging(true);
                }}
              >
                {/* Drag Handle button */}
                <div className="absolute w-12 h-12 bg-white rounded-full shadow-2xl border-4 border-brand-accent text-brand-blue flex items-center justify-center transition-transform hover:scale-115">
                  <ArrowLeftRight className="h-4 w-4" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

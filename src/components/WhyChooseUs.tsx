import * as Icons from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

export default function WhyChooseUs() {
  // Helper to render Lucide Icons dynamically
  const renderIcon = (name: string, className: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.Check className={className} />;
    return <IconComponent className={className} />;
  };

  return (
    <section id="why-us" className="py-24 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section with badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase block mb-3">
              THE PYREK'S ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-brand-charcoal leading-tight max-w-2xl">
              Why Homeowners Choose Pyrek's Construction
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
              We understand that choosing a contractor requires trust. Here is the unwavering standard we bring to every job.
            </p>
          </div>
        </div>

        {/* Bento/Modern Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gray-50 hover:bg-white rounded-2xl border border-gray-100 hover:border-brand-accent/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Highlight background dot hover effect */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-accent/5 rounded-bl-full group-hover:bg-brand-accent/10 transition-colors pointer-events-none"></div>

              <div>
                {/* Dynamically styled Icon container */}
                <div className="mb-6 inline-flex items-center justify-center p-3.5 rounded-xl bg-white border border-gray-100 text-brand-accent shadow-sm group-hover:scale-110 transition-all duration-300">
                  {renderIcon(item.iconName, "h-5 w-5")}
                </div>

                <h3 className="text-base font-bold text-brand-charcoal mb-3 font-sans group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Little bottom wood indicator */}
              <div className="mt-6 w-8 h-0.5 bg-brand-accent/30 group-hover:w-full group-hover:bg-brand-accent transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Quote line */}
        <div className="mt-16 bg-brand-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl border border-brand-accent/20">
          <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase font-bold block mb-2">
                HAVE A SPECIFIC VISION?
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
                Let's discuss how we can transform your space with absolute precision.
              </h3>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-brand-accent hover:bg-white hover:text-brand-blue font-bold rounded-xl text-sm transition-colors cursor-pointer shrink-0"
            >
              Request Your Free Estimate
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

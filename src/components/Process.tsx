import { PROCESS_STEPS } from "../data";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase block mb-3">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-brand-charcoal mb-4">
            Our Professional Four-Step Process
          </h2>
          <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
            We follow a structured, transparent construction process to ensure your remodeling project is delivered with absolute peace of mind, on schedule, and on budget.
          </p>
        </div>

        {/* Steps Timeline Layout */}
        <div className="relative">
          {/* Horizontal Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-100 -translate-y-[80px] z-0">
            {/* Animated gold highlight on the line */}
            <div className="absolute top-0 left-0 w-3/4 h-full bg-brand-accent rounded-full animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="group relative text-center md:text-left lg:text-center">
                
                {/* Step Numeral Bubble */}
                <div className="mb-6 flex justify-center md:justify-start lg:justify-center">
                  <div className="relative w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 group-hover:border-brand-accent/50 shadow-sm group-hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:-translate-y-2">
                    {/* Tiny wood corner indicator */}
                    <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-[4px]"></div>
                    
                    <span className="text-3xl font-serif font-black text-brand-blue group-hover:text-brand-accent transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Details */}
                <h3 className="text-lg font-bold text-brand-charcoal mb-3 font-sans group-hover:text-brand-accent transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans max-w-xs mx-auto md:mx-0 lg:mx-auto">
                  {step.description}
                </p>

                {/* Desktop indicator dots */}
                <div className="hidden lg:block absolute top-[40px] right-[-24px] z-20 pointer-events-none">
                  {index < PROCESS_STEPS.length - 1 && (
                    <span className="w-2 h-2 rounded-full bg-brand-accent/50 block animate-ping"></span>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

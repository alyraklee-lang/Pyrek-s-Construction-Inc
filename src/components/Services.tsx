import { useState } from "react";
import * as Icons from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Helper to render Lucide Icons dynamically
  const renderIcon = (name: string, className: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.Wrench className={className} />;
    return <IconComponent className={className} />;
  };

  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase block mb-3">
            WHAT WE DO BEST
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-brand-charcoal mb-6 leading-tight">
            Premium Home Remodeling & Repair Services
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-sans font-light leading-relaxed">
            From modern luxury renovations to precise drywall and ceiling finishes, Pyrek's Construction Inc brings expert craftsmanship, reliability, and care to every single home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl border border-gray-100 hover:border-brand-accent/20 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Wooden top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-brand-accent/40 group-hover:via-brand-accent group-hover:to-brand-accent/40 transition-all duration-500 rounded-t-2xl"></div>
              
              <div>
                {/* Icon wrapper */}
                <div className="mb-6 inline-flex items-center justify-center p-4 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  {renderIcon(service.iconName, "h-6 w-6")}
                </div>

                <h3 className="text-xl font-bold text-brand-charcoal mb-3 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
              </div>

              {/* Action and quick-list details */}
              <div>
                <ul className="space-y-2 mb-6 border-t border-gray-50 pt-4">
                  {service.details.slice(0, 2).map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center space-x-2 text-xs text-gray-600 font-sans font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-3 bg-gray-50 hover:bg-brand-blue text-brand-blue hover:text-white rounded-xl font-semibold text-xs transition-colors cursor-pointer text-center block"
                >
                  View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Overlay for Service Specifications */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
            <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl border border-gray-100 animate-[fade-in-up_0.3s_ease-out]">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <Icons.X className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 rounded-xl bg-brand-accent/15 text-brand-accent">
                  {renderIcon(selectedService.iconName, "h-7 w-7")}
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-black text-brand-charcoal">
                    {selectedService.title}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase font-bold">
                    Professional Remodeling Service
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-sans">
                {selectedService.description}
              </p>

              {/* Fully-detailed points list */}
              <div className="mb-8">
                <h4 className="text-xs font-mono tracking-wider font-bold text-gray-800 uppercase mb-3">
                  Scope & Inclusion details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                      <Icons.Check className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 font-sans font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA call inside details overlay */}
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex-1 py-3.5 bg-brand-accent hover:bg-brand-blue text-white rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer text-center"
                >
                  Request Quote for This
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl font-bold text-sm transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

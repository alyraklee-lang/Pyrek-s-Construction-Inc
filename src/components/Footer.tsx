import { Hammer, Phone, Mail, Facebook, Instagram, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 wood-grain-overlay opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="p-2 bg-brand-accent rounded-lg text-white">
                <Hammer className="h-5 w-5" />
              </div>
              <div>
                <span className="text-lg font-serif font-black tracking-wider text-white">PYREK'S</span>
                <span className="block text-[9px] font-mono tracking-widest text-brand-accent uppercase font-bold -mt-1">
                  CONSTRUCTION
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-sans font-light max-w-sm">
              Pyrek's Construction Inc is a premium residential general contractor based in Chicago, IL. We specialize in bringing our clients' dream spaces to life with expert remodeling, reliable scheduling, and flawless finishes.
            </p>

            {/* Social handles links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                className="p-2.5 bg-white/5 hover:bg-brand-accent text-gray-300 hover:text-white rounded-lg border border-white/5 transition-colors cursor-pointer"
                aria-label="Facebook Profile"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/5 hover:bg-brand-accent text-gray-300 hover:text-white rounded-lg border border-white/5 transition-colors cursor-pointer"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-4 w-4" />
              </a>
              {/* Custom Yelp/Houzz placeholder icon using Award or shield */}
              <a
                href="#"
                className="p-2.5 bg-white/5 hover:bg-brand-accent text-gray-300 hover:text-white rounded-lg border border-white/5 transition-colors cursor-pointer flex items-center space-x-1"
                title="Houzz & Yelp"
                aria-label="Reviews Profiles"
              >
                <Award className="h-4 w-4" />
                <span className="text-[9px] font-mono font-bold tracking-tighter">YELP</span>
              </a>
            </div>
          </div>

          {/* Column 2: Remodeling Services Quick links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase">
              REMODEL SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
              {[
                { label: "Kitchen Remodeling", target: "services" },
                { label: "Bathroom Remodeling", target: "services" },
                { label: "Basement Finishing", target: "services" },
                { label: "Interior Painting", target: "services" },
                { label: "Drywall Installation", target: "services" },
                { label: "Ceiling Structural Repair", target: "services" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollTo(link.target)}
                    className="hover:text-brand-accent transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Navigation */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase">
              OUR COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-sans">
              {[
                { label: "About Marcin", target: "about" },
                { label: "Why Homeowners Choose Us", target: "why-us" },
                { label: "Remodeling Projects", target: "projects" },
                { label: "Step-by-Step Process", target: "process" },
                { label: "Customer Testimonials", target: "hero" },
                { label: "Common FAQs", target: "faqs" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollTo(link.target)}
                    className="hover:text-brand-accent transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Contact Details */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase">
              QUICK CONTACT
            </h4>
            <ul className="space-y-4 text-xs text-gray-400 font-sans">
              <li>
                <span className="block text-[10px] font-mono text-gray-500 uppercase">Call Marcin Pyrek</span>
                <a
                  href="tel:7733497149"
                  className="text-white hover:text-brand-accent font-bold text-sm transition-colors mt-0.5 block"
                >
                  (773) 349-7149
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-mono text-gray-500 uppercase">Write An Email</span>
                <a
                  href="mailto:marcin@pyreksconstruction.com"
                  className="text-white hover:text-brand-accent font-semibold transition-colors mt-0.5 block"
                >
                  marcin@pyreksconstruction.com
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-mono text-gray-500 uppercase">Service Coverage</span>
                <p className="mt-0.5 leading-relaxed text-gray-400">
                  Homeowners across Chicago, Park Ridge, Glenview, Arlington Heights, and nearby suburbs.
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Copyright Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-sans font-light gap-4">
          <p>
            &copy; {currentYear} Pyrek's Construction Inc. All rights reserved. Managed with pride in Chicago.
          </p>
          <div className="flex space-x-6 text-gray-500">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#services" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Free Estimate Consultation</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

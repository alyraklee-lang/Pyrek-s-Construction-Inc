import { useState, useEffect } from "react";
import { Hammer, Phone, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-gray-100"
          : "bg-gradient-to-b from-black/60 to-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? "bg-brand-blue text-white" : "bg-white text-brand-blue"
            }`}>
              <Hammer className="h-6 w-6" />
            </div>
            <div>
              <span className={`text-xl font-serif font-black tracking-wider transition-colors ${
                isScrolled ? "text-brand-charcoal" : "text-white"
              }`}>
                PYREK'S
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-brand-accent uppercase font-bold -mt-1">
                CONSTRUCTION
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium text-sm">
            {[
              { label: "About", target: "about" },
              { label: "Services", target: "services" },
              { label: "Why Us", target: "why-us" },
              { label: "Work", target: "projects" },
              { label: "Our Process", target: "process" },
              { label: "FAQs", target: "faqs" }
            ].map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className={`transition-colors cursor-pointer hover:text-brand-accent ${
                  isScrolled ? "text-gray-700 hover:text-brand-accent" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden sm:flex items-center space-x-6">
            <a
              href="tel:7733497149"
              className={`flex items-center space-x-2 font-semibold text-sm transition-colors ${
                isScrolled ? "text-brand-blue hover:text-brand-accent" : "text-white hover:text-brand-accent-light"
              }`}
            >
              <div className="p-2 rounded-full bg-brand-accent/20">
                <Phone className="h-4 w-4 text-brand-accent" />
              </div>
              <span>(773) 349-7149</span>
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm flex items-center space-x-2 cursor-pointer ${
                isScrolled
                  ? "bg-brand-blue text-white hover:bg-brand-accent hover:shadow-md"
                  : "bg-brand-accent text-white hover:bg-white hover:text-brand-blue"
              }`}
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors"
            style={{ color: isScrolled ? "#121212" : "#ffffff" }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100 z-50">
          <div className="px-4 pt-4 pb-6 space-y-3 font-medium text-gray-800">
            {[
              { label: "About Pyrek's", target: "about" },
              { label: "Remodeling Services", target: "services" },
              { label: "Why Homeowners Choose Us", target: "why-us" },
              { label: "Featured Work", target: "projects" },
              { label: "Our Process", target: "process" },
              { label: "Frequently Asked Questions", target: "faqs" },
              { label: "Contact & Location", target: "contact" }
            ].map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="block w-full text-left py-2 px-3 rounded-lg hover:bg-gray-50 hover:text-brand-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3 px-3">
              <a
                href="tel:7733497149"
                className="flex items-center space-x-3 py-2 text-brand-blue font-bold text-base"
              >
                <Phone className="h-5 w-5 text-brand-accent" />
                <span>(773) 349-7149</span>
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-brand-blue hover:bg-brand-accent text-white py-3 rounded-xl font-bold transition-all text-center flex items-center justify-center space-x-2"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { Star, Shield, ThumbsUp, FileText, ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with elegant dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_kitchen_living_1783450837425.jpg"
          alt="Luxury Kitchen and Living Room Remodel by Pyrek's Construction"
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Decorative Wood accent bar at bottom of Hero */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-brand-accent z-10"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Tagline / Welcome */}
          <div className="inline-flex items-center space-x-2 bg-brand-accent/20 border border-brand-accent/30 text-brand-accent px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Trusted Chicago General Contractor</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white mb-6 leading-[1.1]">
            Bringing Your <span className="text-brand-accent">Dream Home</span> to Life
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-200 font-sans font-light leading-relaxed mb-10 max-w-2xl">
            Expert home remodeling and renovation services delivered with exceptional craftsmanship, attention to detail, and an unwavering commitment to quality.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-brand-accent hover:bg-white text-white hover:text-brand-blue font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-accent/25 flex items-center justify-center space-x-3 cursor-pointer group"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="tel:7733497149"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-bold rounded-xl transition-all backdrop-blur-md flex items-center justify-center space-x-3 cursor-pointer"
            >
              <Phone className="h-5 w-5 text-brand-accent" />
              <span>Call Today</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center justify-center p-2 rounded-lg bg-yellow-500/10 text-yellow-500">
                <Star className="h-5 w-5 fill-yellow-500" />
              </div>
              <div>
                <span className="block text-white font-bold text-sm tracking-tight">⭐ 5-Star Reviews</span>
                <span className="block text-gray-400 text-xs">Highly Rated</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center justify-center p-2 rounded-lg bg-brand-accent/20 text-brand-accent">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-white font-bold text-sm tracking-tight">✓ Quality Craft</span>
                <span className="block text-gray-400 text-xs">Flawless Finishes</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center justify-center p-2 rounded-lg bg-green-500/10 text-green-500">
                <ThumbsUp className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-white font-bold text-sm tracking-tight">✓ Professional</span>
                <span className="block text-gray-400 text-xs">Friendly & Reliable</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center justify-center p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-white font-bold text-sm tracking-tight">✓ Free Estimates</span>
                <span className="block text-gray-400 text-xs">No Obligations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

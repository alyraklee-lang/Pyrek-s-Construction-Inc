import { Check, ShieldCheck, Heart, UserCheck } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Meticulous Attention to Detail",
      description: "We are perfectionists at heart. We ensure flawless paint cuts, laser-straight tiles, and seamless drywall seams that stand up to any lighting."
    },
    {
      title: "Honest & Transparent Communication",
      description: "We believe in direct and clear dialogue. We provide upfront estimates with zero hidden fees and deliver daily progress updates so you are never left guessing."
    },
    {
      title: "Reliable Scheduling & Commitment",
      description: "We respect your time. We show up as scheduled, work continuously on your project, and commit to finishing on time and within your budget."
    },
    {
      title: "Clean & Safe Job Sites",
      description: "Remodeling is messy, but we manage it responsibly. We utilize plastic containment walls, dust extractors, and clean up the work site thoroughly at the end of each day."
    },
    {
      title: "Customer-First Approach",
      description: "Your absolute satisfaction is our benchmark. We actively listen to your needs, accommodate changes smoothly, and prioritize your family's comfort."
    },
    {
      title: "High-Quality Materials & Finishes",
      description: "We never cut corners. We source premium-grade lumber, drywall, paints, and hardware to guarantee that your home's beauty lasts for decades."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Overlapping Images Gallery (Left) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/5 rounded-full filter blur-3xl z-0"></div>
            
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/src/assets/images/drywall_painting_1783450871694.jpg"
                alt="Flawless drywall and paint finish by Pyrek's Construction"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Wooden Accent Frame Corner */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-accent"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-accent"></div>
            </div>

            {/* Inset Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-4 z-20 bg-brand-blue text-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-brand-accent/20">
              <div className="flex items-center space-x-3 mb-2">
                <ShieldCheck className="h-6 w-6 text-brand-accent shrink-0" />
                <span className="text-sm font-mono font-bold tracking-wider uppercase text-brand-accent">Pyrek's Quality</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Our reputation is built on exceptional craftsmanship, absolute reliability, and lifelong client relationships.
              </p>
            </div>
          </div>

          {/* Text Content (Right) */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase block mb-3">
                MEET PYREK'S CONSTRUCTION INC
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-brand-charcoal mb-6 leading-tight">
                Crafting Beautiful Spaces With Uncompromised Integrity
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-sans font-light leading-relaxed mb-6">
                Under the expert leadership of Marcin Pyrek, **Pyrek's Construction Inc** has established itself as Chicago's trusted name in high-end residential remodeling. We specialize in transforming spaces—from masterfully completed bathroom retreats and chef's kitchens to full home remodeling projects.
              </p>
              <p className="text-gray-600 font-sans leading-relaxed">
                We believe that premium home remodeling requires more than just hammering nails; it demands deep technical expertise, meticulous planning, high-quality finishes, and outstanding customer service. We treat every home with the utmost respect, guaranteeing beautiful, durable results.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-start space-x-3 group">
                  <div className="mt-1 p-1 rounded-full bg-brand-accent/15 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <Check className="h-3.5 w-3.5 stroke-[3px]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-brand-charcoal mb-1 font-sans">
                      {h.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">
                      {h.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import { Award, Users, ThumbsUp, Calendar } from "lucide-react";

interface StatItemProps {
  endVal: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

function StatCard({ endVal, suffix, label, description, icon }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = endVal / (duration / 30);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= endVal) {
        setCount(endVal);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [endVal]);

  return (
    <div className="relative group bg-white/5 border border-white/10 hover:border-brand-accent/30 p-8 rounded-2xl transition-all duration-300 shadow-xl overflow-hidden backdrop-blur-md">
      {/* Decorative vertical bar hover effect */}
      <div className="absolute top-0 left-0 w-1 h-0 bg-brand-accent group-hover:h-full transition-all duration-300"></div>

      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-brand-accent/10 text-brand-accent rounded-xl group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <span className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white">
          {count}
          <span className="text-brand-accent">{suffix}</span>
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-100 font-sans mb-1">
        {label}
      </h3>
      <p className="text-xs text-gray-400 font-sans leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-brand-dark overflow-hidden">
      {/* Background grain texture */}
      <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none"></div>
      
      {/* Decorative glowing gradient blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-accent/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            endVal={15}
            suffix="+"
            label="Years of Experience"
            description="Crafting premium home additions and custom renovations since 2011."
            icon={<Calendar className="h-6 w-6" />}
          />
          <StatCard
            endVal={5}
            suffix="/5"
            label="Star Rating"
            description="Flawless, verified five-star feedback on home remodeling platforms."
            icon={<Award className="h-6 w-6" />}
          />
          <StatCard
            endVal={450}
            suffix="+"
            label="Completed Remodels"
            description="Successful projects delivered across Chicago and nearby suburbs."
            icon={<ThumbsUp className="h-6 w-6" />}
          />
          <StatCard
            endVal={100}
            suffix="%"
            label="Satisfaction Rate"
            description="Guaranteed satisfaction. We stay on-site until you're absolutely in love with your home."
            icon={<Users className="h-6 w-6" />}
          />
        </div>

      </div>
    </section>
  );
}

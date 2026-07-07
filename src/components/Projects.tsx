import { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { Maximize2, X, Clock, Ruler } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  // Map user-friendly category filters
  const categories = ["All", "Kitchens", "Bathrooms", "Basements", "Painting", "Drywall", "Bedrooms", "Whole Home"];

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Kitchens" && project.category === "Kitchens") return true;
    if (filter === "Bathrooms" && project.category === "Bathrooms") return true;
    if (filter === "Basements" && project.category === "Basements") return true;
    if (filter === "Painting" && project.category === "Painting") return true;
    if (filter === "Drywall" && project.category === "Drywall") return true;
    if (filter === "Bedrooms" && project.category === "Bedrooms") return true;
    if (filter === "Whole Home" && project.category === "Whole Home") return true;
    return false;
  });

  return (
    <section id="projects" className="py-24 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase block mb-3">
            PORTFOLIO OF EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-brand-charcoal mb-4">
            Our Featured Remodeling Projects
          </h2>
          <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
            Take a look at some of our premium renovations. Every project is executed with absolute pride, attention to detail, and top-tier finishes.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-bold text-xs tracking-wider uppercase transition-all cursor-pointer ${
                filter === cat
                  ? "bg-brand-blue text-white shadow-md border-b-2 border-brand-accent"
                  : "bg-gray-50 text-gray-600 hover:text-brand-accent hover:bg-gray-100 border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Elegant Masonry/Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer ${
                // Simulate irregular masonry dimensions on large screens
                idx % 3 === 1 ? "lg:scale-98" : ""
              }`}
              onClick={() => setLightboxProject(project)}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Accent border overlay */}
                <div className="absolute inset-0 border-0 group-hover:border-4 border-brand-accent/50 transition-all duration-300 pointer-events-none rounded-2xl"></div>

                {/* Dark Hover Overlay with Zoom Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Category Pill */}
                  <div className="self-start px-3 py-1 bg-brand-accent/90 backdrop-blur-md rounded-full text-white text-[10px] font-mono uppercase tracking-wider font-bold shadow-sm">
                    {project.category}
                  </div>

                  {/* Centered Quick Expand Icon */}
                  <div className="self-center p-3 rounded-full bg-white/20 text-white backdrop-blur-md scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/20">
                    <Maximize2 className="h-5 w-5" />
                  </div>

                  {/* Title & Metadata */}
                  <div>
                    <h3 className="text-lg font-serif font-black text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-300 font-sans">
                      {project.size && (
                        <span className="flex items-center space-x-1">
                          <Ruler className="h-3 w-3 text-brand-accent" />
                          <span>{project.size}</span>
                        </span>
                      )}
                      {project.duration && (
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-brand-accent" />
                          <span>{project.duration}</span>
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Desktop Static Bottom Bar (highly professional fallback for non-hover states) */}
              <div className="p-5 border-t border-gray-50 flex items-center justify-between sm:hidden lg:flex">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-brand-accent uppercase block mb-1">
                    {project.category}
                  </span>
                  <h4 className="text-sm font-bold text-brand-charcoal font-sans">
                    {project.title}
                  </h4>
                </div>
                <div className="text-[10px] font-mono text-gray-400 font-bold">
                  VIEW CASE
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Zoom Overlay */}
        {lightboxProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity">
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-transparent flex flex-col items-center">
              
              {/* Close Button */}
              <button
                onClick={() => setLightboxProject(null)}
                className="absolute -top-12 right-0 p-2.5 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all cursor-pointer border border-white/15"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <div className="w-full h-auto max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black">
                <img
                  src={lightboxProject.image}
                  alt={lightboxProject.title}
                  className="w-full h-full max-h-[70vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom Details Panel */}
              <div className="w-full mt-6 bg-brand-blue/95 border border-brand-accent/20 p-6 rounded-2xl text-white backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase block mb-1">
                    {lightboxProject.category} Project
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black">
                    {lightboxProject.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed mt-1">
                    Completed with exceptional attention to detail by Pyrek's Construction Inc.
                  </p>
                </div>

                <div className="flex items-center space-x-6 text-sm font-sans shrink-0 border-t border-white/10 pt-4 md:border-t-0 md:pt-0">
                  {lightboxProject.size && (
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-white/5 text-brand-accent">
                        <Ruler className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="block text-gray-400 text-[10px] uppercase font-mono">Project Size</span>
                        <span className="block font-bold">{lightboxProject.size}</span>
                      </div>
                    </div>
                  )}

                  {lightboxProject.duration && (
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-white/5 text-brand-accent">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <span className="block text-gray-400 text-[10px] uppercase font-mono">Timeframe</span>
                        <span className="block font-bold">{lightboxProject.duration}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

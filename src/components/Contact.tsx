import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Map, Layers } from "lucide-react";
import { SERVICE_AREAS } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request to server-side or email relay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        city: "",
        message: ""
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase block mb-3">
            START YOUR PROJECT TODAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-brand-charcoal mb-4">
            Request A Free Estimate
          </h2>
          <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
            Fill out the form below or call Marcin Pyrek directly to schedule your free consultation. We serve homeowners throughout the greater Chicago area with quality residential remodeling.
          </p>
        </div>

        {/* Form and Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Service Areas (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-blue text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden shadow-xl border border-brand-accent/20">
              <div className="absolute inset-0 wood-grain-overlay opacity-5 pointer-events-none"></div>
              
              <h3 className="text-2xl font-serif font-bold mb-6 text-white">
                Pyrek's Construction Inc
              </h3>
              
              <div className="space-y-6">
                {/* Click-to-call Phone link */}
                <a
                  href="tel:7733497149"
                  className="flex items-start space-x-4 group cursor-pointer block"
                >
                  <div className="p-3 bg-brand-accent/25 text-brand-accent rounded-xl group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-gray-400 uppercase">Direct Phone Line</span>
                    <span className="block text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                      (773) 349-7149
                    </span>
                  </div>
                </a>

                {/* Email Address */}
                <a
                  href="mailto:marcin@pyreksconstruction.com"
                  className="flex items-start space-x-4 group cursor-pointer block"
                >
                  <div className="p-3 bg-brand-accent/25 text-brand-accent rounded-xl group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-gray-400 uppercase">Email Contact</span>
                    <span className="block text-base font-bold text-white group-hover:text-brand-accent transition-colors">
                      marcin@pyreksconstruction.com
                    </span>
                  </div>
                </a>

                {/* Primary Office/Service Hub */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-accent/25 text-brand-accent rounded-xl">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-gray-400 uppercase">Service Hub Location</span>
                    <span className="block text-sm font-semibold text-gray-200">
                      Chicago, IL & Nearby Suburbs
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Trust Emblem */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center space-x-3.5">
                <ShieldCheck className="h-10 w-10 text-brand-accent shrink-0" />
                <p className="text-xs text-gray-300 leading-normal font-sans">
                  Licensed, bonded, and fully insured. We guarantee professional, reliable remodeling and pristine cleanups.
                </p>
              </div>
            </div>

            {/* Service Areas Section */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h4 className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase mb-4 block">
                CHICAGO SUBURBS WE SERVE
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                We focus on high-end residential renovations across Cook, DuPage, and Lake County suburbs. Key coverage areas include:
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((city) => (
                  <span
                    key={city}
                    className="px-3.5 py-1.5 bg-white border border-gray-200 hover:border-brand-accent text-[11px] font-sans font-semibold text-gray-700 rounded-lg shadow-sm transition-colors"
                  >
                    {city}, IL
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Estimate Form & Mock Map (Right Column) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Form container */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl relative">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-accent rounded-t-3xl"></div>
              
              {submitSuccess ? (
                <div className="text-center py-12 space-y-6">
                  <div className="inline-flex items-center justify-center p-4 bg-green-50 text-green-500 rounded-full mb-2">
                    <CheckCircle2 className="h-16 w-16 stroke-[1.5]" />
                  </div>
                  <h3 className="text-2xl font-serif font-black text-brand-charcoal">
                    Thank You, Estimate Request Received!
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto font-sans">
                    Marcin Pyrek or a senior project coordinator has received your inquiry. We will review your details and contact you within 24 hours to schedule your free home consultation.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 bg-brand-blue hover:bg-brand-accent text-white font-bold rounded-lg text-xs transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-serif font-black text-brand-charcoal mb-4">
                    Get an Itemized Consultation & Quote
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 focus:border-brand-accent focus:bg-white rounded-xl text-sm transition-all focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(773) 349-7149"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 focus:border-brand-accent focus:bg-white rounded-xl text-sm transition-all focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 focus:border-brand-accent focus:bg-white rounded-xl text-sm transition-all focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 focus:border-brand-accent focus:bg-white rounded-xl text-sm transition-all focus:outline-none"
                      >
                        <option value="">Select a Remodeling Service</option>
                        <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                        <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                        <option value="Basement Finishing">Basement Finishing</option>
                        <option value="Interior Painting">Interior Painting</option>
                        <option value="Drywall Taping & Repair">Drywall Taping & Repair</option>
                        <option value="Ceiling Repair">Ceiling Repair</option>
                        <option value="Bedroom Renovation">Bedroom Renovation</option>
                        <option value="Whole Home Remodeling">Whole Home Remodeling</option>
                        <option value="Interior Restoration">Interior Restoration</option>
                        <option value="General Improvements">General Improvements</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-2">
                      Your City / Town (e.g., Park Ridge, IL)
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Park Ridge, IL"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 focus:border-brand-accent focus:bg-white rounded-xl text-sm transition-all focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-2">
                      Briefly Describe Your Vision
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      placeholder="Tell us about your kitchen layout, bathroom tiles, ceiling drywall repair, or project scheduling details..."
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 focus:border-brand-accent focus:bg-white rounded-xl text-sm transition-all focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Submission estimate button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-accent hover:bg-brand-blue text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center space-x-2.5 shadow-md hover:shadow-xl cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending Request..." : "Request a Free Estimate"}</span>
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Custom Google Map Embed Placeholder */}
            <div className="relative h-72 rounded-3xl overflow-hidden border border-gray-200 shadow-xl group">
              {/* Clean Map Grid Layout representation */}
              <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                {/* Simulated Grid Gridlines */}
                <div className="absolute inset-0" style={{
                  backgroundImage: "radial-gradient(#d4d4d4 1.5px, transparent 1.5px)",
                  backgroundSize: "24px 24px"
                }}></div>
                
                {/* Simulated Map Rivers / Roads */}
                <svg className="absolute inset-0 w-full h-full text-blue-200 pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0,100 C 150,110 200,20 350,150 S 500,200 800,120" fill="none" stroke="#2563eb" strokeWidth="8" />
                  <path d="M 120,0 C 140,150 180,180 210,300" fill="none" stroke="#a3a3a3" strokeWidth="4" />
                  <path d="M 400,0 C 450,120 380,240 500,300" fill="none" stroke="#a3a3a3" strokeWidth="5" />
                </svg>

                {/* Animated Pulsing Location Pins representing Chicago suburbs */}
                <div className="absolute top-[35%] left-[45%] z-10 flex flex-col items-center">
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-brand-accent/30 animate-ping"></span>
                  <div className="p-2.5 bg-brand-accent text-white rounded-full shadow-lg relative">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="mt-1.5 px-2 py-1 bg-brand-blue text-white text-[9px] font-mono tracking-wider uppercase font-bold rounded-md shadow-md border border-brand-accent/20">
                    PARK RIDGE
                  </div>
                </div>

                <div className="absolute top-[60%] left-[65%] z-10 flex flex-col items-center">
                  <span className="absolute inline-flex h-6 w-6 rounded-full bg-brand-accent/25 animate-pulse"></span>
                  <div className="p-1.5 bg-brand-blue text-brand-accent rounded-full shadow-lg">
                    <MapPin className="h-3 w-3" />
                  </div>
                  <div className="mt-1 px-1.5 py-0.5 bg-brand-blue/80 text-white text-[8px] font-sans font-bold rounded shadow-md">
                    Chicago Service Hub
                  </div>
                </div>
              </div>

              {/* Map Floating Interface Panel */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-gray-100 max-w-[220px] transition-transform duration-300 group-hover:translate-x-1.5">
                <span className="block text-[10px] font-mono font-black text-brand-accent tracking-widest uppercase">
                  COVERAGE AREA
                </span>
                <span className="block text-xs font-bold text-brand-charcoal mt-1">
                  Greater Chicago Area
                </span>
                <span className="block text-[10px] text-gray-500 font-sans mt-0.5">
                  Serving Park Ridge, Arlington Heights, Glenview, Evanston & nearby suburbs.
                </span>
              </div>

              {/* Map View Toggle Actions */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <div className="p-2 bg-white rounded-lg shadow-md border border-gray-100 text-gray-600 hover:text-brand-accent cursor-pointer">
                  <Map className="h-4 w-4" />
                </div>
                <div className="p-2 bg-white rounded-lg shadow-md border border-gray-100 text-gray-600 hover:text-brand-accent cursor-pointer">
                  <Layers className="h-4 w-4" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

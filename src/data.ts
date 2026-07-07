import { Service, Project, Testimonial, FAQItem, ProcessStep } from "./types";

export const SERVICES: Service[] = [
  {
    id: "kitchen",
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into a luxurious, high-performance space. From custom oak cabinetry and quartz waterfalls to smart appliance integration and premium wood accents, we build kitchens designed to be the warm heart of your home.",
    iconName: "ChefHat",
    details: ["Custom cabinetry & islands", "Quartz & marble countertops", "Smart lighting & appliance setup", "Open-concept layout conversions"]
  },
  {
    id: "bathroom",
    title: "Bathroom Remodeling",
    description: "Create a serene spa-like sanctuary. We specialize in glass-enclosed walk-in tile showers, freestanding tub installations, custom vanities, heated floors, and high-end tile configurations for modern relaxation.",
    iconName: "Bath",
    details: ["Walk-in custom tile showers", "Freestanding tub installation", "Premium plumbing fixtures", "Smart vanity mirrors & lighting"]
  },
  {
    id: "basement",
    title: "Basement Finishing",
    description: "Maximize your home's square footage by converting your damp basement into a stunning premium living space. We build home theaters, modern wet bars, custom home offices, and guest suites.",
    iconName: "Home",
    details: ["Media rooms & home theaters", "Custom wet bars & wine cellars", "Sub-floor & thermal insulation", "Integrated basement bathrooms"]
  },
  {
    id: "painting",
    title: "Interior Painting",
    description: "Bring a crisp, professional finish to your walls. We deliver flawless, high-end interior painting with meticulous surface preparation, clean crisp lines, and premium zero-VOC paint selections.",
    iconName: "Paintbrush",
    details: ["Full trim, baseboard & door spray", "Accent wall styling & textures", "Plaster & crown molding painting", "Eco-friendly premium paints"]
  },
  {
    id: "drywall",
    title: "Drywall Installation & Repair",
    description: "Professional drywall hanging, taping, mudding, and sanding. Whether remodeling a room or repairing ceiling access, we guarantee a glass-smooth finish with zero visible seams.",
    iconName: "Grid",
    details: ["Hanging, taping & mudding", "Water-damage drywall restoration", "Level 5 premium finish", "Seamless patch matching"]
  },
  {
    id: "ceiling",
    title: "Ceiling Repair",
    description: "Repair cracked, saggy, or water-damaged ceilings. Our master craftspeople handle structural repairs, plaster matching, texture matching (or popcorn removal), and seamless painting.",
    iconName: "Layers",
    details: ["Water stain mitigation", "Popcorn ceiling removal", "Sagging plaster restoration", "Seamless plaster/texture matching"]
  },
  {
    id: "bedroom",
    title: "Bedroom Renovations",
    description: "Design a cozy, elegant bedroom retreat. We specialize in custom walk-in closets, accent headboard walls, ambient modern recess lighting, and gorgeous hardwood or plush flooring upgrades.",
    iconName: "BedDouble",
    details: ["Custom walk-in closet organizers", "Integrated LED ambient lighting", "Hardwood flooring & subflooring", "Soundproofing & thermal comfort"]
  },
  {
    id: "whole-home",
    title: "Whole Home Remodeling",
    description: "Comprehensive home transformations that breathe new life into every room. We guide you from structural re-engineering and layout modifications to the final custom paint stroke.",
    iconName: "Hammer",
    details: ["Load-bearing wall removal", "Unified design & flooring flows", "Plumbing & electrical upgrades", "Phased scheduling to suit your family"]
  },
  {
    id: "interior-renovations",
    title: "Interior Renovations",
    description: "Modernize individual spaces with high-end trim carpentry, custom built-ins, modern fireplace mantels, staircase remodeling, and updated doors and hardware.",
    iconName: "Wrench",
    details: ["Crown molding & wainscoting", "Custom fireplace mantels", "Staircase baluster & rail upgrades", "Modern solid-core door install"]
  },
  {
    id: "home-improvements",
    title: "Home Improvements",
    description: "Important structural and aesthetic updates to maintain and elevate your property's value, executed with the same absolute attention to detail as our major remodels.",
    iconName: "Sparkles",
    details: ["Premium door & window installs", "Smart home device integration", "Flooring and tile updates", "General high-end handyman repairs"]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Five-Star Reviews",
    description: "A flawless track record of highly satisfied clients in Chicago and suburbs who praise our professionalism and quality.",
    iconName: "Star"
  },
  {
    title: "Detail-Oriented Craftsmanship",
    description: "We are perfectionists. Every joint is seamless, every tile line is laser-straight, and every paint finish is smooth.",
    iconName: "Compass"
  },
  {
    title: "Professional & Friendly Team",
    description: "Our crew is polite, clean, respectful, and highly skilled. We treat your house with the care we would show our own.",
    iconName: "Users"
  },
  {
    title: "Reliable Scheduling",
    description: "We show up on time every single day. We set realistic build timelines and work consistently until the job is fully done.",
    iconName: "CalendarDays"
  },
  {
    title: "High-End Finishes",
    description: "We source premium woods, custom materials, and superior paints to ensure your remodel feels like a luxury resort.",
    iconName: "Award"
  },
  {
    title: "Honest Communication",
    description: "No hidden fees, no sudden surprises. We keep you fully updated daily with photos, messages, and straightforward solutions.",
    iconName: "MessageSquareText"
  },
  {
    title: "Clean Work Areas",
    description: "Renovations are dusty, but we control it. We use plastic containment walls, dust extractors, and clean up thoroughly daily.",
    iconName: "ShieldCheck"
  },
  {
    title: "Customer Satisfaction",
    description: "Your home is your most valuable asset. We do not consider a project complete until you are absolutely thrilled with the work.",
    iconName: "Heart"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "kitchen-remodel",
    title: "Luxury Kitchen Remodel",
    category: "Kitchens",
    image: "/src/assets/images/hero_kitchen_living_1783450837425.jpg",
    size: "340 sq ft",
    duration: "4 Weeks"
  },
  {
    id: "bathroom-remodel",
    title: "Modern Bathroom Remodel",
    category: "Bathrooms",
    image: "/src/assets/images/luxury_bathroom_1783450847257.jpg",
    size: "120 sq ft",
    duration: "2.5 Weeks"
  },
  {
    id: "finished-basement",
    title: "Finished Basement Lounge",
    category: "Basements",
    image: "/src/assets/images/finished_basement_1783450861912.jpg",
    size: "950 sq ft",
    duration: "5 Weeks"
  },
  {
    id: "interior-painting",
    title: "Interior Painting & Trim",
    category: "Painting",
    image: "/src/assets/images/drywall_painting_1783450871694.jpg",
    size: "Whole Home",
    duration: "1.5 Weeks"
  },
  {
    id: "custom-drywall",
    title: "Custom Drywall & Plastering",
    category: "Drywall",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
    size: "Living Room",
    duration: "4 Days"
  },
  {
    id: "bedroom-renovation",
    title: "Master Bedroom Retreat",
    category: "Bedrooms",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    size: "280 sq ft",
    duration: "2 Weeks"
  },
  {
    id: "open-concept",
    title: "Open Concept Living Area",
    category: "Whole Home",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    size: "1,200 sq ft",
    duration: "6 Weeks"
  },
  {
    id: "complete-remodel",
    title: "Complete Home Remodel",
    category: "Whole Home",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    size: "2,400 sq ft",
    duration: "10 Weeks"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "John & Laura S.",
    role: "Homeowners",
    location: "Park Ridge, IL",
    stars: 5,
    text: "Marcin Pyrek and his team did an amazing job remodeling our bathrooms and bedrooms. They took great pride in every detail and completely transformed our home. Extremely reliable and tidy!",
    date: "June 2026"
  },
  {
    id: "test-2",
    name: "David K.",
    role: "Property Owner",
    location: "Arlington Heights, IL",
    stars: 5,
    text: "Professional, always on time, and extremely detail-oriented. The finished drywall work and custom painting exceeded our expectations. I've worked with many contractors, but Pyrek's is in a league of their own.",
    date: "May 2026"
  },
  {
    id: "test-3",
    name: "Mariusz W.",
    role: "Homeowner",
    location: "Chicago, IL",
    stars: 5,
    text: "I've hired Marcin for multiple projects over the years. He is a perfectionist and I highly recommend him for drywall, kitchen remodeling, and custom renovations. A contractor you can actually trust.",
    date: "March 2026"
  },
  {
    id: "test-4",
    name: "Elena G.",
    role: "Homeowner",
    location: "Glenview, IL",
    stars: 5,
    text: "The basement finishing project turned out gorgeous! Marcin worked with our design and added some clever wood accents that really elevated the space. Reliable scheduling and fantastic clean job sites.",
    date: "February 2026"
  },
  {
    id: "test-5",
    name: "Robert M.",
    role: "Homeowner",
    location: "Evanston, IL",
    stars: 5,
    text: "Superb ceiling repair and crown molding work. We had water damage on our plaster ceiling and now it looks absolutely flawless as if nothing ever happened. Friendly team, honest prices.",
    date: "January 2026"
  },
  {
    id: "test-6",
    name: "Catherine T.",
    role: "Homeowner",
    location: "Oak Park, IL",
    stars: 5,
    text: "Excellent kitchen gut renovation. Marcin's communication was clear throughout, and they completed the project on time despite us ordering custom cabinets that had delivery delays. Highly recommended!",
    date: "November 2025"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Free Consultation",
    description: "We visit your home to walk through your space, discuss your ideas, material choices, and understand your budget goals."
  },
  {
    number: "02",
    title: "Design & Detailed Estimate",
    description: "You'll receive a detailed, itemized quote showing scope of work, labor, and materials. We establish timelines and finalize layouts."
  },
  {
    number: "03",
    title: "Professional Construction",
    description: "Our skilled craftspeople execute the remodel. We keep dust controlled, maintain communication daily, and focus entirely on your home."
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description: "We review every single detail with you together. Once you are 100% satisfied with our craftsmanship, we sign off on your beautiful new space."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we offer fully detailed, transparent estimates completely free of charge. We will visit your home, discuss your vision, evaluate the space, and provide a clear breakdown of costs and timelines."
  },
  {
    question: "How long does a bathroom remodel take?",
    answer: "A standard bathroom remodel typically takes 2 to 3 weeks, depending on the scope of work (e.g. tile selection, structural plumbing changes, or custom vanity installation). We work continuously once we start your project to minimize disruption."
  },
  {
    question: "Can you remodel kitchens and bathrooms?",
    answer: "Absolutely. Pyrek's Construction specializes in high-end kitchen and bathroom remodeling. We handle everything from gutting and layout changes to plumbing, electrical, tiling, cabinetry installation, and premium wood accents."
  },
  {
    question: "Do you repair drywall and ceilings?",
    answer: "Yes! We have extensive experience with seamless drywall installation, water-damaged ceiling repairs, plastering, texture matching, and painting. Our repairs are completely seamless and ready for high-quality paint finishes."
  },
  {
    question: "Do you handle complete home renovations?",
    answer: "Yes, we offer whole-home remodeling services including open-concept floor plan conversions, structural wall removals, basement transformations, and overall modern upgrades."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve homeowners throughout the greater Chicago area and nearby suburbs (including Park Ridge, Arlington Heights, Glenview, Northbrook, Evanston, Des Plaines, Mount Prospect, Oak Park, Niles, Skokie, and more)."
  }
];

export const SERVICE_AREAS = [
  "Chicago",
  "Park Ridge",
  "Arlington Heights",
  "Glenview",
  "Northbrook",
  "Evanston",
  "Oak Park",
  "Des Plaines",
  "Mount Prospect",
  "Niles",
  "Skokie",
  "Wilmette",
  "Winnetka"
];

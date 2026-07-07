export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // references lucide-react icons dynamically
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  size?: string;
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  stars: number;
  text: string;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

import { useState } from "react";
import { FAQS } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-gray-50 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-black tracking-widest text-brand-accent uppercase block mb-3">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-brand-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-500 font-sans font-light leading-relaxed">
            We believe in honest communication. If you have additional questions about our scheduling, budgets, or materials, feel free to give us a call.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-brand-accent/30 shadow-lg"
                    : "border-gray-100 hover:border-gray-200 shadow-sm"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`p-2 rounded-xl transition-colors ${
                      isOpen ? "bg-brand-accent/15 text-brand-accent" : "bg-gray-50 text-gray-400"
                    }`}>
                      <HelpCircle className="h-5 w-5 shrink-0" />
                    </div>
                    <span className="font-bold text-sm sm:text-base text-brand-charcoal font-sans">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Expand/Collapse Indicator */}
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    isOpen ? "bg-brand-accent text-white rotate-180" : "bg-gray-50 text-gray-500"
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {/* Collapsible content pane */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-gray-50" : "max-h-0"
                  }`}
                >
                  <div className="p-6 sm:p-8 bg-white text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact fallback notice */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-sans text-center sm:text-left">
            Still have an unanswered question? Contact Marcin Pyrek directly for guidance.
          </p>
          <a
            href="tel:7733497149"
            className="text-xs font-bold text-brand-accent hover:text-brand-blue transition-colors shrink-0 flex items-center space-x-1.5"
          >
            <span>Call (773) 349-7149</span>
          </a>
        </div>

      </div>
    </section>
  );
}

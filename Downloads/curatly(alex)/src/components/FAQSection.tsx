import { useState } from "react";
import svgPaths from "../imports/svg-l4z9c6cxdj";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div 
      className={`bg-[#f7f7f7] content-stretch flex flex-col items-start overflow-clip px-[30px] py-[20px] rounded-[25px] w-full max-w-[641px] transition-all duration-300 ${
        isOpen ? 'gap-[10px]' : 'gap-0'
      }`}
    >
      <button
        onClick={onToggle}
        className="content-stretch flex gap-[20px] md:gap-[355px] items-center justify-between w-full text-left"
      >
        <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] text-[#2d2d2d] text-[20px] md:text-[24px] tracking-[-0.24px] flex-1">
          {question}
        </p>
        <div className="relative size-[54px] shrink-0">
          <svg 
            className={`block size-full transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} 
            fill="none" 
            preserveAspectRatio="none" 
            viewBox="0 0 54 54"
          >
            <circle cx="27" cy="27" fill="#2D2D2D" r="27" />
            <path d={svgPaths.p1f697d00} fill="white" />
          </svg>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] text-[#818181] text-[18px] tracking-[-0.18px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What is Curalty?",
      answer: "Curalty is a platform that helps you curate, organize, and share your favorite moments effortlessly. Join the waitlist to be part of the first people to experience it."
    },
    {
      question: "Why should I join the early access list?",
      answer: "Early access gives you first-hand experience with new features, priority updates, and the chance to start earning as soon as we launch."
    },
    {
      question: "When will Curalty launch?",
      answer: "We're in the final stages of development. Early access members will be notified via email the moment we go live."
    },
    {
      question: "Is joining the waitlist free?",
      answer: "Yes — signing up is completely free. Just enter your email, and you'll be added to the waitlist instantly."
    }
  ];

  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] items-center overflow-clip relative w-full max-w-[1440px] py-[60px] px-4">
      {/* Section Header */}
      <div className="content-stretch flex flex-col font-['Satoshi:Medium',sans-serif] gap-[15px] items-center justify-center">
        <h2 className="leading-[normal] text-[#2d2d2d] text-[48px] md:text-[64px] tracking-[-3.2px] text-center px-4">
          Frequently asked questions
        </h2>
        <div className="leading-[24px] text-[#818181] text-[18px] text-center tracking-[-0.18px] px-4 max-w-[600px]">
          <p className="mb-0">Everything you need to know about Curatly. find answers</p>
          <p>to the most common questions below</p>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="content-stretch flex flex-col gap-[15px] items-center w-full">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
}

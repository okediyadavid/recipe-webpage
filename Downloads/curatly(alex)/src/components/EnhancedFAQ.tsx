import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Plus, HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      className="bg-gradient-to-br from-[#f7f7f7] to-[#fafafa] flex flex-col items-start overflow-hidden px-[30px] py-[25px] rounded-[25px] w-full max-w-[641px] cursor-pointer group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-yellow-200"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <button
        onClick={onToggle}
        className="flex gap-[20px] items-center justify-between w-full text-left"
      >
        <p className="font-['Satoshi:Medium',sans-serif] leading-[28px] text-[#2d2d2d] text-[20px] md:text-[24px] tracking-[-0.24px] flex-1 group-hover:text-yellow-700 transition-colors">
          {question}
        </p>
        <motion.div 
          className="relative size-[54px] shrink-0 bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-full flex items-center justify-center group-hover:from-yellow-600 group-hover:to-orange-600 transition-all duration-300"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Plus className="size-6 text-white" strokeWidth={3} />
        </motion.div>
      </button>
      
      <motion.div 
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 15 : 0
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <motion.p 
          className="font-['Satoshi:Medium',sans-serif] leading-[28px] text-[#818181] text-[18px] tracking-[-0.18px]"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export function EnhancedFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const faqs = [
    {
      question: "What is Curatly?",
      answer: "Curatly is a cutting-edge platform that helps you curate, organize, and share your favorite moments effortlessly. With AI-powered tools and intuitive interfaces, you can transform your photo collections into monetizable assets. Join the waitlist to be among the first to experience the future of content curation."
    },
    {
      question: "Why should I join the early access list?",
      answer: "Early access members get exclusive benefits including lifetime discounts, priority customer support, first access to new features, and the opportunity to start earning immediately upon launch. Plus, you'll help shape the product by providing valuable feedback during the beta phase."
    },
    {
      question: "When will Curatly launch?",
      answer: "We're in the final stages of development and planning to launch in January 2026. Early access members will receive email notifications as soon as we go live, along with exclusive onboarding materials and personalized setup assistance to help you get started."
    },
    {
      question: "Is joining the waitlist free?",
      answer: "Absolutely! Signing up for the waitlist is completely free with no obligations. Just enter your email address, and you'll be instantly added to our exclusive list. We'll keep you updated on our progress and notify you when we're ready to launch."
    }
  ];

  return (
    <div ref={ref} className="bg-white w-full max-w-[1440px] py-[100px] px-4 relative overflow-hidden">
      {/* Decorative Background */}
      <motion.div 
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-yellow-100/30 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Section Header */}
      <motion.div
        className="flex flex-col gap-[15px] items-center justify-center mb-[50px] relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <HelpCircle className="size-4 text-yellow-600" />
          <span className="font-['Satoshi:Bold',sans-serif] text-[12px] text-yellow-800 uppercase tracking-wider">
            FAQ
          </span>
        </motion.div>
        <h2 className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[48px] md:text-[64px] tracking-[-3.2px] text-center px-4">
          Frequently asked questions
        </h2>
        <div className="font-['Satoshi:Medium',sans-serif] leading-[28px] text-[#818181] text-[18px] text-center tracking-[-0.18px] px-4 max-w-[600px]">
          <p className="mb-0">Everything you need to know about Curatly. Find answers</p>
          <p>to the most common questions below</p>
        </div>
      </motion.div>

      {/* FAQ Items */}
      <div className="flex flex-col gap-[20px] items-center w-full relative z-10">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            index={index}
          />
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-[60px] text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.6 }}
      >
        <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[18px] mb-4">
          Still have questions?
        </p>
        <motion.button
          className="bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] text-white px-[30px] py-[15px] rounded-full font-['Satoshi:Medium',sans-serif] text-[16px] hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Contact our team
        </motion.button>
      </motion.div>
    </div>
  );
}

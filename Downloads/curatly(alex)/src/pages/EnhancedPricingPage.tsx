import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Check, Zap, Crown, Building2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: 9,
    period: "/month",
    description: "Perfect for individuals and hobbyists",
    features: [
      "Up to 1,000 photos",
      "Basic AI curation tools",
      "5 GB cloud storage",
      "Email support",
      "Mobile app access",
      "Basic analytics"
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    name: "Pro",
    icon: Crown,
    price: 29,
    period: "/month",
    description: "Best for professional creators",
    features: [
      "Up to 10,000 photos",
      "Advanced AI curation",
      "50 GB cloud storage",
      "Priority support",
      "Custom branding",
      "Advanced analytics",
      "API access",
      "Team collaboration"
    ],
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: null,
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited photos",
      "Full AI suite",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option"
    ],
    color: "from-orange-500 to-red-500",
    popular: false
  }
];

export function EnhancedPricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full max-w-[1440px] px-4 py-[80px] md:py-[120px]">
      {/* Header */}
      <motion.div 
        className="flex flex-col items-center gap-[30px] text-center mb-[60px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Crown className="size-4 text-green-600" />
          <span className="font-['Satoshi:Bold',sans-serif] text-[12px] text-green-800 uppercase tracking-wider">
            Simple Pricing
          </span>
        </motion.div>

        <motion.h1 
          className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[56px] md:text-[80px] tracking-[-3.2px] leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Choose your plan
        </motion.h1>

        <motion.p 
          className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[20px] tracking-[-0.18px] max-w-[600px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          className="flex items-center gap-4 bg-gray-100 p-2 rounded-full mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-3 rounded-full font-['Satoshi:Bold',sans-serif] text-[14px] transition-all ${
              !isAnnual ? 'bg-white text-[#2d2d2d] shadow-lg' : 'text-[#818181]'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-3 rounded-full font-['Satoshi:Bold',sans-serif] text-[14px] transition-all relative ${
              isAnnual ? 'bg-white text-[#2d2d2d] shadow-lg' : 'text-[#818181]'
            }`}
          >
            Annual
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[10px] px-2 py-1 rounded-full">
              Save 20%
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Pricing Cards */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-[30px] max-w-[1200px] mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`relative rounded-[30px] flex flex-col overflow-hidden ${
              plan.popular 
                ? 'bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white' 
                : 'bg-white border-2 border-gray-200'
            }`}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <motion.div
                className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-[12px] font-['Satoshi:Bold',sans-serif] rounded-bl-[15px]"
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 20, y: -20 }}
                transition={{ delay: 0.5 }}
              >
                MOST POPULAR
              </motion.div>
            )}

            {/* Background Gradient */}
            {plan.popular && (
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10`}
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}

            <div className="p-[40px] flex flex-col h-full relative z-10">
              {/* Icon */}
              <motion.div
                className={`bg-gradient-to-br ${plan.color} w-[60px] h-[60px] rounded-[20px] flex items-center justify-center mb-4`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <plan.icon className="size-8 text-white" />
              </motion.div>

              {/* Plan Name */}
              <h3 className={`font-['Satoshi:Bold',sans-serif] text-[28px] tracking-[-0.28px] mb-2 ${
                plan.popular ? 'text-white' : 'text-[#2d2d2d]'
              }`}>
                {plan.name}
              </h3>

              {/* Description */}
              <p className={`font-['Satoshi:Medium',sans-serif] text-[14px] mb-6 ${
                plan.popular ? 'text-gray-300' : 'text-[#818181]'
              }`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                {plan.price ? (
                  <>
                    <span className={`font-['Satoshi:Medium',sans-serif] text-[56px] tracking-[-1.68px] ${
                      plan.popular ? 'text-white' : 'text-[#2d2d2d]'
                    }`}>
                      ${isAnnual ? Math.round(plan.price * 0.8) : plan.price}
                    </span>
                    <span className={`font-['Satoshi:Medium',sans-serif] text-[18px] tracking-[-0.18px] ${
                      plan.popular ? 'text-gray-300' : 'text-[#818181]'
                    }`}>
                      {plan.period}
                    </span>
                  </>
                ) : (
                  <span className={`font-['Satoshi:Medium',sans-serif] text-[40px] tracking-[-1.2px] ${
                    plan.popular ? 'text-white' : 'text-[#2d2d2d]'
                  }`}>
                    Custom
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-[16px] mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <motion.li
                    key={j}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.15 + j * 0.05 }}
                  >
                    <div className={`rounded-full p-1 shrink-0 ${
                      plan.popular ? 'bg-white/20' : 'bg-green-100'
                    }`}>
                      <Check className={`size-4 ${
                        plan.popular ? 'text-white' : 'text-green-600'
                      }`} />
                    </div>
                    <span className={`font-['Satoshi:Medium',sans-serif] text-[14px] leading-[1.6] ${
                      plan.popular ? 'text-gray-200' : 'text-[#818181]'
                    }`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-[16px] px-[24px] rounded-full font-['Satoshi:Bold',sans-serif] text-[16px] transition-all ${
                  plan.popular 
                    ? 'bg-white text-[#2d2d2d] hover:bg-gray-100' 
                    : 'bg-[#2d2d2d] text-white hover:bg-[#1a1a1a]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.price ? 'Get Started' : 'Contact Sales'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <motion.div
        className="mt-[100px] text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[32px] mb-4">
          Questions about pricing?
        </h3>
        <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[18px] mb-6">
          Our team is here to help you find the perfect plan
        </p>
        <motion.button
          className="border-2 border-[#2d2d2d] text-[#2d2d2d] px-8 py-4 rounded-full font-['Satoshi:Bold',sans-serif] text-[16px]"
          whileHover={{ scale: 1.05, backgroundColor: "#2d2d2d", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Call
        </motion.button>
      </motion.div>
    </div>
  );
}

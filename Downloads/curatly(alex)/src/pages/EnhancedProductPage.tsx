import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Zap, TrendingUp, Shield, Layers, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Curation",
    description: "Let our advanced AI help you curate the best content from your collection automatically",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Layers,
    title: "Smart Organization",
    description: "Intuitive interfaces and intelligent categorization to keep everything organized",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: TrendingUp,
    title: "Revenue Generation",
    description: "Turn your curated collections into revenue streams with built-in commerce tools",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Upload, organize, and share your content in seconds with our optimized platform",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security features to keep your content safe",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-50"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into your content performance and audience engagement",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50"
  }
];

export function EnhancedProductPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="w-full max-w-[1440px] px-4 py-[80px] md:py-[120px]">
      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        className="flex flex-col items-center gap-[30px] text-center mb-[100px]"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="size-4 text-purple-600" />
          <span className="font-['Satoshi:Bold',sans-serif] text-[12px] text-purple-800 uppercase tracking-wider">
            Product Overview
          </span>
        </motion.div>

        <motion.h1 
          className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[56px] md:text-[80px] tracking-[-3.2px] leading-[1.1] max-w-[900px]"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              background: "linear-gradient(90deg, #2d2d2d 0%, #8B5CF6 50%, #2d2d2d 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The all-in-one platform
          </motion.span>{" "}
          for content creators
        </motion.h1>

        <motion.p 
          className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[20px] md:text-[24px] tracking-[-0.18px] max-w-[700px] leading-[1.6]"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover how Curatly helps you curate, organize, and monetize your content effortlessly with cutting-edge AI technology.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] text-white px-8 py-4 rounded-full font-['Satoshi:Bold',sans-serif] text-[16px]"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.button>
          <motion.button
            className="border-2 border-[#2d2d2d] text-[#2d2d2d] px-8 py-4 rounded-full font-['Satoshi:Bold',sans-serif] text-[16px]"
            whileHover={{ scale: 1.05, backgroundColor: "#2d2d2d", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[80px]">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className={`${feature.bgColor} p-[40px] rounded-[30px] relative overflow-hidden group cursor-pointer border border-transparent hover:border-gray-200 transition-all duration-300`}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Animated Gradient Background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* Icon */}
            <motion.div
              className={`bg-gradient-to-br ${feature.color} w-[60px] h-[60px] rounded-[20px] flex items-center justify-center mb-6 relative z-10`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <feature.icon className="size-8 text-white" />
            </motion.div>

            {/* Content */}
            <h3 className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[24px] tracking-[-0.24px] mb-[15px] relative z-10">
              {feature.title}
            </h3>
            <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[16px] tracking-[-0.16px] leading-[1.6] relative z-10">
              {feature.description}
            </p>

            {/* Hover Arrow */}
            <motion.div
              className="absolute bottom-[40px] right-[40px] opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-[100px] bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-[40px] p-[60px] md:p-[80px] text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative z-10">
          <h2 className="font-['Satoshi:Bold',sans-serif] text-white text-[40px] md:text-[56px] tracking-[-2.4px] mb-6">
            Ready to transform your content?
          </h2>
          <p className="font-['Satoshi:Medium',sans-serif] text-gray-300 text-[20px] mb-8 max-w-[600px] mx-auto">
            Join thousands of creators already using Curatly to grow their business
          </p>
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full font-['Satoshi:Bold',sans-serif] text-[18px]"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen, Video, MessageCircle, Code, HelpCircle, FileText, Newspaper, Rocket } from "lucide-react";

const resources = [
  {
    category: "Documentation",
    icon: BookOpen,
    title: "Getting Started Guide",
    description: "Learn the basics of Curatly in under 10 minutes with our comprehensive guides",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    category: "Tutorial",
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for all features and advanced techniques",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50"
  },
  {
    category: "Blog",
    icon: Newspaper,
    title: "Best Practices",
    description: "Tips and tricks from successful creators and industry experts",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    category: "Community",
    icon: MessageCircle,
    title: "Community Forum",
    description: "Connect with other Curatly users and share your experiences",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50"
  },
  {
    category: "API",
    icon: Code,
    title: "Developer Docs",
    description: "Integrate Curatly into your workflow with our powerful API",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50"
  },
  {
    category: "Support",
    icon: HelpCircle,
    title: "Help Center",
    description: "Find answers to common questions and troubleshooting guides",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50"
  },
  {
    category: "Templates",
    icon: FileText,
    title: "Template Library",
    description: "Pre-built templates to jumpstart your creative projects",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50"
  },
  {
    category: "Updates",
    icon: Rocket,
    title: "Product Updates",
    description: "Stay updated with the latest features and improvements",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50"
  }
];

export function EnhancedResourcesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full max-w-[1440px] px-4 py-[80px] md:py-[120px]">
      {/* Header */}
      <motion.div 
        className="flex flex-col items-center gap-[30px] text-center mb-[80px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <BookOpen className="size-4 text-orange-600" />
          <span className="font-['Satoshi:Bold',sans-serif] text-[12px] text-orange-800 uppercase tracking-wider">
            Resources
          </span>
        </motion.div>

        <motion.h1 
          className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[56px] md:text-[80px] tracking-[-3.2px] leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Everything you need
        </motion.h1>

        <motion.p 
          className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[20px] tracking-[-0.18px] max-w-[700px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Guides, tutorials, and resources to help you get the most out of Curatly
        </motion.p>
      </motion.div>

      {/* Resources Grid */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] mb-[100px]">
        {resources.map((resource, i) => (
          <motion.div
            key={i}
            className={`${resource.bgColor} p-[30px] rounded-[25px] cursor-pointer border-2 border-transparent hover:border-gray-200 transition-all group relative overflow-hidden`}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {/* Background Gradient on Hover */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <p className={`font-['Satoshi:Bold',sans-serif] text-[11px] uppercase tracking-wider bg-gradient-to-r ${resource.color} bg-clip-text text-transparent`}>
                  {resource.category}
                </p>
                <motion.div
                  className={`bg-gradient-to-br ${resource.color} w-[40px] h-[40px] rounded-[12px] flex items-center justify-center`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <resource.icon className="size-5 text-white" />
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[20px] tracking-[-0.2px] mb-[10px] group-hover:translate-x-1 transition-transform">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px] leading-[1.6]">
                {resource.description}
              </p>

              {/* Arrow */}
              <motion.div
                className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Content Section */}
      <motion.div
        className="bg-gradient-to-br from-[#f7f7f7] to-white rounded-[40px] p-[60px] md:p-[80px] border-2 border-gray-200 mb-[80px]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Video className="size-4 text-purple-600" />
              <span className="font-['Satoshi:Bold',sans-serif] text-[12px] text-purple-800 uppercase tracking-wider">
                Featured Tutorial
              </span>
            </motion.div>

            <h2 className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[40px] tracking-[-1.6px] mb-4">
              Master Curatly in 30 minutes
            </h2>
            <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[18px] leading-[1.6] mb-6">
              Watch our comprehensive video tutorial covering everything from basic setup to advanced features and monetization strategies.
            </p>
            <div className="flex gap-4">
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-['Satoshi:Bold',sans-serif] text-[16px]"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Now
              </motion.button>
              <motion.button
                className="border-2 border-[#2d2d2d] text-[#2d2d2d] px-8 py-4 rounded-full font-['Satoshi:Bold',sans-serif] text-[16px]"
                whileHover={{ scale: 1.05, backgroundColor: "#2d2d2d", color: "#fff" }}
                whileTap={{ scale: 0.95 }}
              >
                View All Tutorials
              </motion.button>
            </div>
          </div>

          <motion.div
            className="relative h-[400px] rounded-[30px] overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1762324962471-858a5f68a6dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHBvcnRmb2xpbyUyMGdhbGxlcnl8ZW58MXx8fHwxNzY1NTYzNDE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Tutorial Preview"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-full p-6 cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M16 12L34 24L16 36V12Z" fill="white" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-[40px] p-[60px] md:p-[80px] text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20"
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
          <HelpCircle className="size-16 text-orange-400 mx-auto mb-6" />
          <h2 className="font-['Satoshi:Bold',sans-serif] text-white text-[40px] md:text-[56px] tracking-[-2.4px] mb-6">
            Can't find what you're looking for?
          </h2>
          <p className="font-['Satoshi:Medium',sans-serif] text-gray-300 text-[20px] mb-8 max-w-[600px] mx-auto">
            Our support team is here to help you 24/7
          </p>
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-full font-['Satoshi:Bold',sans-serif] text-[18px]"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

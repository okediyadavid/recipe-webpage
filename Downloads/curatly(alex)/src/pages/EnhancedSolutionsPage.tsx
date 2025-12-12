import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { User, Briefcase, Users, Building } from "lucide-react";

const solutions = [
  {
    icon: User,
    title: "For Creators",
    subtitle: "Build your personal brand",
    description: "Monetize your content with powerful curation tools, analytics, and built-in commerce features designed specifically for individual creators.",
    image: "https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMG1vZGVybnxlbnwxfHx8fDE3NjU1NDQ1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-blue-500 to-cyan-500",
    features: ["Personal branding tools", "Revenue tracking", "Social media integration", "Custom portfolio"]
  },
  {
    icon: Briefcase,
    title: "For Businesses",
    subtitle: "Streamline your workflow",
    description: "Manage your visual content efficiently and enhance customer engagement with advanced collaboration tools and team features.",
    image: "https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjU0NzE4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-purple-500 to-pink-500",
    features: ["Team collaboration", "Client management", "Brand consistency", "Workflow automation"]
  },
  {
    icon: Users,
    title: "For Agencies",
    subtitle: "Manage multiple clients",
    description: "Handle multiple client portfolios seamlessly with advanced collaboration features, white-label options, and client reporting.",
    image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NTQ3MjU3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-green-500 to-emerald-500",
    features: ["Multi-client dashboard", "White-label options", "Client reporting", "Resource allocation"]
  },
  {
    icon: Building,
    title: "For Enterprise",
    subtitle: "Enterprise-grade security",
    description: "Enterprise-level security, scalability, and support for large organizations with custom integrations and dedicated account management.",
    image: "https://images.unsplash.com/photo-1605972695554-4b31fd365a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwcGhvbmV8ZW58MXx8fHwxNzY1NTYzNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-orange-500 to-red-500",
    features: ["Custom integrations", "SSO & security", "Dedicated support", "SLA guarantee"]
  }
];

export function EnhancedSolutionsPage() {
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
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Briefcase className="size-4 text-blue-600" />
          <span className="font-['Satoshi:Bold',sans-serif] text-[12px] text-blue-800 uppercase tracking-wider">
            Solutions
          </span>
        </motion.div>

        <motion.h1 
          className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[56px] md:text-[80px] tracking-[-3.2px] leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Built for everyone
        </motion.h1>

        <motion.p 
          className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[20px] tracking-[-0.18px] max-w-[700px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Tailored solutions for creators, businesses, agencies, and enterprises. Find the perfect fit for your needs.
        </motion.p>
      </motion.div>

      {/* Solutions Grid */}
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {solutions.map((solution, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-[30px] overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-all group cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Image */}
            <div className="relative h-[300px] overflow-hidden">
              <motion.img
                src={solution.image}
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Icon Badge */}
              <motion.div
                className={`absolute top-6 left-6 bg-gradient-to-br ${solution.color} w-[60px] h-[60px] rounded-[20px] flex items-center justify-center shadow-xl`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <solution.icon className="size-8 text-white" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-[40px]">
              <div className="mb-6">
                <p className={`font-['Satoshi:Bold',sans-serif] text-[12px] uppercase tracking-wider mb-2 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                  {solution.subtitle}
                </p>
                <h3 className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[32px] tracking-[-0.32px] mb-3">
                  {solution.title}
                </h3>
                <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[16px] leading-[1.6]">
                  {solution.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {solution.features.map((feature, j) => (
                  <motion.div
                    key={j}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.15 + j * 0.05 }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`} />
                    <span className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                className={`w-full py-[14px] px-[24px] rounded-full font-['Satoshi:Bold',sans-serif] text-[14px] bg-gradient-to-r ${solution.color} text-white relative overflow-hidden group`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative z-10">Learn More →</span>
              </motion.button>
            </div>
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
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
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
            Not sure which solution is right for you?
          </h2>
          <p className="font-['Satoshi:Medium',sans-serif] text-gray-300 text-[20px] mb-8 max-w-[600px] mx-auto">
            Let's talk and find the perfect fit for your business
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              className="bg-white text-[#2d2d2d] px-8 py-4 rounded-full font-['Satoshi:Bold',sans-serif] text-[16px]"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-full font-['Satoshi:Bold',sans-serif] text-[16px]"
              whileHover={{ scale: 1.05, backgroundColor: "white", color: "#2d2d2d" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from "motion/react";
import { Twitter, Facebook, Linkedin, Instagram, Github, Mail } from "lucide-react";

export function EnhancedFooter() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Enterprise", "Customer stories"],
    Platform: ["Developer API", "Partners", "Electron", "Curatly Desktop"],
    Support: ["Docs", "Community Forum", "Professional Services", "Skills", "Status"],
    Company: ["About", "Blog", "Careers", "Press", "Inclusion", "Social Impact", "Shop"]
  };

  const socialLinks = [
    { icon: Twitter, label: "Twitter", color: "hover:text-blue-400" },
    { icon: Facebook, label: "Facebook", color: "hover:text-blue-600" },
    { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-700" },
    { icon: Instagram, label: "Instagram", color: "hover:text-pink-600" },
    { icon: Github, label: "GitHub", color: "hover:text-gray-900" },
  ];

  return (
    <footer className="w-full max-w-[1440px] px-4 md:px-[20px] py-[80px] border-t border-gray-200 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-50/20 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-[60px]">
        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-[30px] p-[40px] md:p-[60px] text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Mail className="size-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-['Satoshi:Bold',sans-serif] text-white text-[32px] md:text-[40px] tracking-[-1.2px] mb-4">
                Stay in the loop
              </h3>
              <p className="font-['Satoshi:Medium',sans-serif] text-gray-300 text-[18px] mb-8 max-w-[600px] mx-auto">
                Get the latest updates, features, and exclusive content delivered to your inbox
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-yellow-400 transition-all font-['Satoshi:Medium',sans-serif]"
              />
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-[#2d2d2d] px-8 py-4 rounded-full font-['Satoshi:Bold',sans-serif] text-[16px] whitespace-nowrap"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 184, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[40px] md:gap-[60px]">
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category} 
              className="flex flex-col gap-[20px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[16px] tracking-[-0.16px]">
                {category}
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.button 
                      className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px] hover:text-[#2d2d2d] transition-colors text-left relative group"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[1px] bg-yellow-400 w-0 group-hover:w-full transition-all duration-300"
                      />
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-[30px] pt-[40px] border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[28px] tracking-[-0.28px]"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  background: "linear-gradient(90deg, #2d2d2d 0%, #FFB800 50%, #2d2d2d 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Curatly
              </motion.span>
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-[30px] flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {["Terms", "Privacy", "Security"].map((item, index) => (
              <motion.button 
                key={item}
                className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px] hover:text-[#2d2d2d] transition-colors relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[1px] bg-yellow-400 w-0 group-hover:w-full transition-all duration-300"
                />
              </motion.button>
            ))}
            <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px]">
              © 2025 Curatly, Inc.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-[15px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.button
                key={social.label}
                className={`text-[#818181] transition-colors ${social.color}`}
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="size-5" />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

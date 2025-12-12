import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import svgPaths from "../imports/svg-l4z9c6cxdj";
import imgNewArrivalsClosed1 from "figma:asset/08bab91f9b3e8b6048b9c90da1a28a5b6188f949.png";
import imgScreenshot20251114At1147011 from "figma:asset/ed92eae74ea28756a753b9e9a2d9f0d6d71f3c50.png";
import imgScreenshot20251114At1148221 from "figma:asset/b7b5386ebd99d2d2307750208858e2cfec4d904c.png";
import img10 from "figma:asset/27bbc27b3376437a596ddc2c30a41f015c1aab02.png";
import imgFrame11 from "figma:asset/fb4ac5236417a88bcd3d2c2fccd1753905a2d163.png";
// @ts-ignore
import imgIPhone131431 from "figma:asset/17bbcef0e8d01a42251cedbc7a75e742c0bcd9fe.png";
import { toast } from "sonner@2.0.3";
import { Sparkles, TrendingUp, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function AnimatedHero() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      toast.success("🎉 Welcome to the waitlist!", {
        description: "We'll notify you when Curatly launches.",
        duration: 4000,
      });
      setEmail("");
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <motion.div
      className="relative min-h-screen w-full max-w-[1440px] overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/20">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-100/20 to-amber-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="relative z-10 py-[70px] px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Logo */}
        <motion.div
          className="flex justify-center mb-[56px]"
          variants={itemVariants}
        >
          <motion.div
            className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-[30px] size-[96px] flex items-center justify-center shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <span className="font-['Satoshi:Bold',sans-serif] text-[64px] text-white leading-none relative z-10">C</span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="flex flex-col gap-[15px] items-center justify-center mb-[30px]"
          variants={itemVariants}
        >
          <motion.h1
            className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[48px] md:text-[72px] lg:text-[96px] tracking-[-3.2px] text-center px-4 leading-[1.1]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="inline-block"
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
              Get early access
            </motion.span>
          </motion.h1>

          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-yellow-500 size-6" />
            </motion.div>
            <span className="font-['Satoshi:Bold',sans-serif] text-[#FFB800] text-[14px] tracking-wider uppercase">
              Launching January 2026
            </span>
          </motion.div>

          <motion.div
            className="font-['Satoshi:Medium',sans-serif] leading-[28px] text-[#818181] text-[18px] md:text-[20px] text-center tracking-[-0.18px] px-4 max-w-[700px]"
            variants={itemVariants}
          >
            <p className="mb-0">We're getting close. Join the early access list for Curatly and</p>
            <p>start earning as soon as we launch.</p>
          </motion.div>
        </motion.div>

        {/* Enhanced Email Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex justify-center mb-[30px] px-4"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white backdrop-blur-xl h-[74px] rounded-[50px] w-full max-w-[684px] relative shadow-[0px_20px_60px_0px_rgba(0,0,0,0.1)] border border-white/60"
            whileHover={{ scale: 1.02, boxShadow: "0px 25px 70px 0px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex gap-4 items-center px-[20px] py-[10px] size-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="font-['Satoshi:Medium',sans-serif] leading-[24px] flex-1 text-[#2d2d2d] text-[18px] tracking-[-0.18px] bg-transparent outline-none placeholder:text-[#818181]"
              />
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] flex items-center justify-center h-[52px] px-[25px] py-[5px] rounded-[30px] shrink-0 min-w-[162px] relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 0.2 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="font-['Satoshi:Medium',sans-serif] leading-[20px] text-[16px] text-center text-white tracking-[-0.16px] relative z-10">
                  Join waitlist
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.form>

        {/* Enhanced Social Proof */}
        <motion.div
          className="flex gap-[25px] items-center justify-center mb-[50px] px-4 flex-wrap"
          variants={itemVariants}
        >
          <motion.div
            className="flex -space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[imgNewArrivalsClosed1, imgScreenshot20251114At1147011, imgScreenshot20251114At1148221].map((img, i) => (
              <motion.div
                key={i}
                className="bg-white overflow-clip relative rounded-full size-[48px] ring-2 ring-white"
                whileHover={{ scale: 1.2, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img alt={`User ${i + 1}`} className="size-full object-cover" src={img} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="size-5 text-yellow-600" />
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] text-[#2d2d2d] text-[18px] tracking-[-0.18px]">
              Join <span className="font-['Satoshi:Bold',sans-serif] text-yellow-600">2,900+</span> others on the waitlist
            </p>
          </motion.div>
        </motion.div>

        {/* Phone Mockup with Advanced Animations */}
        <motion.div
          className="relative flex justify-center px-4"
          variants={itemVariants}
          style={{ y }}
        >
          <motion.div
            className="relative w-full max-w-[670px] aspect-[670/1412]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              alt="Curatly app interface"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
              src={imgIPhone131431}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />

          {/* Floating Stats with Advanced Animations */}
          <motion.div
            className="absolute left-[5%] md:left-[80px] top-[380px] bg-white/90 backdrop-blur-xl flex flex-col items-start p-[15px] rounded-[20px] shadow-2xl border border-white/60"
            variants={floatVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <motion.div
              className="flex items-center gap-2 mb-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TrendingUp className="size-5 text-green-500" />
              <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px]">
                Photos this week
              </p>
            </motion.div>
            <motion.p
              className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[32px] tracking-[-0.32px]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            >
              12,230
            </motion.p>
          </motion.div>

          {/* Floating User Avatars with Stagger Animation */}
          <motion.div
            className="absolute right-[5%] md:right-[120px] top-[160px] bg-white/90 backdrop-blur-xl flex items-center px-[15px] py-[10px] rounded-[30px] shadow-2xl border border-white/60"
            variants={floatVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "1s" }}
            whileHover={{ scale: 1.05 }}
          >
            {[imgNewArrivalsClosed1, img10, imgFrame11].map((img, i) => (
              <motion.div
                key={i}
                className="bg-white -ml-[10px] first:ml-0 overflow-clip relative rounded-full size-[48px] ring-2 ring-white"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                whileHover={{ scale: 1.3, zIndex: 10 }}
              >
                <img alt={`Collaborator ${i + 1}`} className="size-full object-cover" src={img} />
              </motion.div>
            ))}
            <motion.div
              className="-ml-[10px] relative size-[41px]"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <svg className="block size-full" fill="none" viewBox="0 0 40 39">
                <path d={svgPaths.p349ab980} fill="#FFE236" stroke="#231F20" strokeMiterlimit="10" />
                <path d={svgPaths.pcaad300} stroke="white" strokeLinecap="round" strokeMiterlimit="10" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import svgPaths from "../imports/svg-xjazr5r4oe";
import imgNewArrivalsClosed1 from "figma:asset/08bab91f9b3e8b6048b9c90da1a28a5b6188f949.png";
import imgFrame50 from "figma:asset/1e8964e14a716ebf43669bd35cf631162a7e9e9e.png";
import imgScreenshot20251114At1147011 from "figma:asset/ed92eae74ea28756a753b9e9a2d9f0d6d71f3c50.png";
import img10 from "figma:asset/27bbc27b3376437a596ddc2c30a41f015c1aab02.png";
import img8Instagram from "figma:asset/da75b8efd74f7f03bc8dd13475f80fe32cf9eaeb.png";
import { TrendingUp, DollarSign, Users, Award } from "lucide-react";

function AnimatedCounter({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {end}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

function StatCard({ 
  children, 
  className = "",
  delay = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      className={`h-[362px] relative rounded-[25px] shrink-0 w-full ${className} overflow-hidden group`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-100/0 to-orange-100/0 group-hover:from-yellow-100/30 group-hover:to-orange-100/30 transition-all duration-500"
      />
      <div className="overflow-clip rounded-[inherit] size-full relative z-10">
        <div className="content-stretch flex flex-col gap-[138px] items-start p-[30px] relative size-full">
          {children}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[25px] group-hover:border-yellow-200 transition-colors duration-500" />
    </motion.div>
  );
}

export function EnhancedStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-white w-full max-w-[1440px] py-[100px] px-4">
      {/* Section Header */}
      <motion.div
        className="text-center mb-[60px]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <Award className="size-4 text-yellow-600" />
          <span className="font-['Satoshi:Bold',sans-serif] text-[12px] text-yellow-800 uppercase tracking-wider">
            Proven Results
          </span>
        </motion.div>
        <h2 className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[48px] md:text-[56px] tracking-[-2.4px] mb-4">
          The numbers speak for themselves
        </h2>
        <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[18px] max-w-[600px] mx-auto">
          Join thousands of creators already earning with Curatly
        </p>
      </motion.div>

      <div className="content-stretch flex gap-[21px] items-start justify-center flex-wrap lg:flex-nowrap">
        {/* Left Column */}
        <div className="content-stretch flex flex-col gap-[21px] items-start w-full lg:w-[347px]">
          {/* Partners Badge */}
          <motion.div 
            className="h-[95px] relative rounded-[25px] shrink-0 w-full bg-gradient-to-br from-white to-gray-50 overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-row items-center justify-center rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative size-full">
                <motion.div 
                  className="flex items-center pr-[12px]"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {[imgNewArrivalsClosed1, imgFrame50, imgScreenshot20251114At1147011, img10, img8Instagram].map((img, i) => (
                    <motion.div
                      key={i}
                      className="bg-white mr-[-12px] overflow-clip relative rounded-full shrink-0 size-[48px] ring-2 ring-white shadow-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                    >
                      <img alt={`Partner ${i + 1}`} className="size-full object-cover" src={img} />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  className="flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <Users className="size-4 text-yellow-600" />
                  <p className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[11px] tracking-[-0.1px]">
                    100+ PARTNERS
                  </p>
                </motion.div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[25px] group-hover:border-yellow-200 transition-colors" />
          </motion.div>

          {/* ROI Card */}
          <StatCard delay={0.2}>
            <div className="flex items-start gap-3">
              <motion.div
                className="bg-green-100 p-2 rounded-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="size-6 text-green-600" />
              </motion.div>
              <div className="font-['Satoshi:Bold',sans-serif] leading-[24px] text-[#818181] text-[18px] tracking-[-0.18px]">
                <p className="mb-0">Earn back on your</p>
                <p>investment within 30 days</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] text-[72px] tracking-[-1.92px]">
                <AnimatedCounter end={90} suffix="%" />
              </p>
              <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] text-[#818181] text-[18px] tracking-[-0.2px]">
                Return on investment (ROI)
              </p>
            </div>
          </StatCard>
        </div>

        {/* Middle Column */}
        <div className="content-stretch flex flex-col gap-[21px] items-start w-full lg:w-[347px]">
          {/* Revenue Card */}
          <StatCard delay={0.3}>
            <div className="flex items-start gap-3">
              <motion.div
                className="bg-blue-100 p-2 rounded-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <DollarSign className="size-6 text-blue-600" />
              </motion.div>
              <div className="font-['Satoshi:Bold',sans-serif] leading-[24px] text-[#818181] text-[18px] tracking-[-0.18px]">
                <p className="mb-0">Through our custom-</p>
                <p>tailored funnel systems</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] text-[56px] tracking-[-1.92px]">
                <AnimatedCounter end={2.5} prefix="$" suffix="M+" />
              </p>
              <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] text-[#818181] text-[18px] tracking-[-0.2px]">
                Revenue generated
              </p>
            </div>
          </StatCard>

          {/* Available Badge */}
          <motion.div 
            className="h-[95px] relative rounded-[25px] shrink-0 w-full bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-row items-center rounded-[inherit] size-full">
              <div className="flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
                <motion.div
                  className="relative shrink-0 size-[15px]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg className="block size-full" fill="none" viewBox="0 0 15 15">
                    <circle cx="7.5" cy="7.5" fill="#22c55e" r="7.5" />
                  </svg>
                  <motion.div
                    className="absolute inset-0 bg-green-400 rounded-full"
                    animate={{ opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <p className="font-['Satoshi:Bold',sans-serif] text-[#059669] text-[12px] tracking-[-0.12px]">
                  AVAILABLE FOR 2026 JANUARY
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-green-200 border-solid inset-0 pointer-events-none rounded-[25px]" />
          </motion.div>
        </div>

        {/* Right Column - Trust Card */}
        <motion.div 
          className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] h-[482px] overflow-clip relative rounded-[29px] shadow-2xl w-full lg:w-[509px] group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-[24.48%_22.99%_10.17%_-17.88%]">
            <svg className="block size-full opacity-20" fill="none" preserveAspectRatio="none" viewBox="0 0 483 315">
              <motion.path 
                d={svgPaths.p31362ac0} 
                fill="url(#gradient)" 
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB800" />
                  <stop offset="100%" stopColor="#FF8800" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute flex flex-col gap-[275px] h-[482px] items-start left-1/2 overflow-clip p-[30px] rounded-[29px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[509px]">
            <motion.div 
              className="font-['Satoshi:Bold',sans-serif] leading-[28px] text-[#eaeaea] text-[20px] tracking-[-0.2px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
            >
              <p className="mb-0">We delivered 50+ projects</p>
              <p>worldwide, helping service-based companies</p>
            </motion.div>
            <div className="flex gap-[30px] md:gap-[198px] items-center w-full flex-wrap lg:flex-nowrap">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              >
                <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] text-[0px] tracking-[-1.92px]">
                  <span className="text-[72px] text-white"><AnimatedCounter end={4.8} /></span>
                  <span className="text-[#818181] text-[36px]">/5</span>
                </p>
              </motion.div>
              <motion.div 
                className="font-['Satoshi:Bold',sans-serif] leading-[24px] text-[#eaeaea] text-[12px] tracking-[-0.12px]"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 1.4 }}
              >
                <p className="mb-0">TRUSTED BY</p>
                <p>CLIENTS WORLDWIDE</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

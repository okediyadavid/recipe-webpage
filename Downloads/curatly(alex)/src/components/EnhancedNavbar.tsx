import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import svgPaths from "../imports/svg-uja5wz06qp";
import { useTheme } from "next-themes";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function EnhancedNavbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Get started", page: "home" },
    { name: "Product", page: "product" },
    { name: "Solutions", page: "solutions" },
    { name: "Pricing", page: "pricing" },
    { name: "Resources", page: "resources" }
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full max-w-[1440px] px-4 md:px-[20px] transition-all duration-300 ${scrolled ? "py-[16px]" : "py-[24px]"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={`flex items-center justify-between rounded-[25px] px-6 py-4 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/60" : "bg-transparent"
          }`}
        layout
      >
        {/* Logo */}
        <motion.button
          onClick={() => handleNavClick("home")}
          className="font-['Satoshi:Bold',sans-serif] leading-[24px] text-[#2d2d2d] text-[24px] tracking-[-0.24px] relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="relative"
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
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[40px]">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => handleNavClick(link.page)}
              className={`font-['Satoshi:Medium',sans-serif] leading-[24px] text-[16px] tracking-[-0.16px] transition-all duration-300 relative ${currentPage === link.page ? 'text-[#2d2d2d]' : 'text-[#818181]'
                }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              {currentPage === link.page && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-400"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}

          {/* Icon Buttons */}
          <motion.div
            className="flex items-center gap-[10px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Theme Toggle Button */}
            <motion.button
              className="relative size-[34px] hover:shadow-lg transition-shadow bg-white rounded-full border border-gray-200"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sun className="size-5 text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Moon className="size-5 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Person/Account Button */}
            <motion.button
              className="relative size-[34px] hover:shadow-lg transition-shadow"
              aria-label="Account"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                <circle cx="17" cy="17" fill="white" r="17" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
                  <path
                    d={svgPaths.p2cbf85f0}
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d={svgPaths.p3f64a500}
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="size-6 text-[#2d2d2d]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="size-6 text-[#2d2d2d]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 bg-white/90 backdrop-blur-xl rounded-[25px] shadow-xl border border-white/60 overflow-hidden"
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.page)}
                  className={`font-['Satoshi:Medium',sans-serif] leading-[24px] text-[16px] tracking-[-0.16px] text-left transition-all duration-300 py-2 px-4 rounded-lg ${currentPage === link.page
                    ? 'text-[#2d2d2d] bg-yellow-100'
                    : 'text-[#818181] hover:bg-gray-100'
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}

              <div className="flex items-center gap-4 mt-2 pt-4 border-t border-gray-200">
                <motion.button
                  className="relative size-[34px] bg-white rounded-full border border-gray-200"
                  aria-label="Toggle theme"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    {theme === "dark" ? (
                      <motion.div
                        key="sun-mobile"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Sun className="size-5 text-yellow-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon-mobile"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Moon className="size-5 text-gray-700" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <motion.button
                  className="relative size-[34px] bg-white rounded-full border border-gray-200"
                  aria-label="Account"
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                    <circle cx="17" cy="17" fill="white" r="17" />
                  </svg>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
                      <path
                        d={svgPaths.p2cbf85f0}
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d={svgPaths.p3f64a500}
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

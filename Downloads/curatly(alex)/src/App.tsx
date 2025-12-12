import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeProvider } from "next-themes";
import { EnhancedNavbar } from "./components/EnhancedNavbar";
import { EnhancedFooter } from "./components/EnhancedFooter";
import { HomePage } from "./pages/HomePage";
import { EnhancedProductPage } from "./pages/EnhancedProductPage";
import { EnhancedSolutionsPage } from "./pages/EnhancedSolutionsPage";
import { EnhancedPricingPage } from "./pages/EnhancedPricingPage";
import { EnhancedResourcesPage } from "./pages/EnhancedResourcesPage";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "product":
        return <EnhancedProductPage />;
      case "solutions":
        return <EnhancedSolutionsPage />;
      case "pricing":
        return <EnhancedPricingPage />;
      case "resources":
        return <EnhancedResourcesPage />;
      default:
        return <HomePage />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-[30px] size-[96px] flex items-center justify-center shadow-2xl relative overflow-hidden"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-400/30"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <span className="font-['Satoshi:Bold',sans-serif] text-[64px] text-white leading-none relative z-10">
              C
            </span>
          </motion.div>
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="bg-white min-h-screen flex flex-col items-center w-full overflow-x-hidden dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#2d2d2d',
              color: '#fff',
              border: 'none',
              borderRadius: '20px',
              padding: '16px 24px',
            },
          }}
        />

        <EnhancedNavbar currentPage={currentPage} onNavigate={setCurrentPage} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex flex-col items-center"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>

        <EnhancedFooter />

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] text-white p-4 rounded-full shadow-2xl z-50 dark:from-gray-700 dark:to-gray-600"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </div>
    </ThemeProvider>
  );
}

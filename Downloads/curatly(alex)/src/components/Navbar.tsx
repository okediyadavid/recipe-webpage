import { useState } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "../imports/svg-uja5wz06qp";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  };

  return (
    <nav className="w-full max-w-[1440px] px-4 md:px-[20px] py-[24px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] text-[#2d2d2d] text-[24px] tracking-[-0.24px]">
          Curatly
        </p>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-[40px]">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.page)}
              className={`font-['Satoshi:Medium',sans-serif] leading-[24px] text-[16px] tracking-[-0.16px] hover:opacity-70 transition-opacity ${
                currentPage === link.page ? 'text-[#2d2d2d]' : 'text-[#818181]'
              }`}
            >
              {link.name}
            </button>
          ))}
          
          {/* Icon Buttons */}
          <div className="flex items-center gap-[10px]">
            {/* Sun/Light Mode Button */}
            <button 
              className="relative size-[34px] hover:opacity-70 transition-opacity"
              aria-label="Toggle theme"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                <circle cx="17" cy="17" fill="white" r="17" />
                <path 
                  d={svgPaths.p3f867200} 
                  stroke="black" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                />
              </svg>
            </button>

            {/* Person/Account Button */}
            <button 
              className="relative size-[34px] hover:opacity-70 transition-opacity"
              aria-label="Account"
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
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="size-6 text-[#2d2d2d]" />
          ) : (
            <Menu className="size-6 text-[#2d2d2d]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.page)}
              className={`font-['Satoshi:Medium',sans-serif] leading-[24px] text-[16px] tracking-[-0.16px] text-left hover:opacity-70 transition-opacity ${
                currentPage === link.page ? 'text-[#2d2d2d]' : 'text-[#818181]'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="flex items-center gap-4 mt-2">
            <button 
              className="relative size-[34px] hover:opacity-70 transition-opacity"
              aria-label="Toggle theme"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                <circle cx="17" cy="17" fill="white" r="17" />
                <path 
                  d={svgPaths.p3f867200} 
                  stroke="black" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                />
              </svg>
            </button>
            <button 
              className="relative size-[34px] hover:opacity-70 transition-opacity"
              aria-label="Account"
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
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
export function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Enterprise", "Customer stories"],
    Platform: ["Developer API", "Partners", "Electron", "Curatly Desktop"],
    Support: ["Docs", "Community Forum", "Professional Services", "Skills", "Status"],
    Company: ["About", "Blog", "Careers", "Press", "Inclusion", "Social Impact", "Shop"]
  };

  return (
    <footer className="w-full max-w-[1440px] px-4 md:px-[20px] py-[60px] border-t border-[#eaeaea]">
      <div className="flex flex-col gap-[60px]">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[40px]">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-[20px]">
              <h3 className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[16px] tracking-[-0.16px]">
                {category}
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {links.map((link) => (
                  <li key={link}>
                    <button className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px] hover:text-[#2d2d2d] transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-[20px] pt-[40px] border-t border-[#eaeaea]">
          <p className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[24px] tracking-[-0.24px]">
            Curatly
          </p>
          
          <div className="flex items-center gap-[30px] flex-wrap justify-center">
            <button className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px] hover:text-[#2d2d2d] transition-colors">
              Terms
            </button>
            <button className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px] hover:text-[#2d2d2d] transition-colors">
              Privacy
            </button>
            <button className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px] hover:text-[#2d2d2d] transition-colors">
              Security
</button>
            <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px]">
              © 2025 Curatly, Inc.
            </p>
          </div>
          
          <div className="flex items-center gap-[15px]">
            <button className="text-[#818181] hover:text-[#2d2d2d] transition-colors" aria-label="Twitter">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button className="text-[#818181] hover:text-[#2d2d2d] transition-colors" aria-label="Facebook">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
              </svg>
            </button>
            <button className="text-[#818181] hover:text-[#2d2d2d] transition-colors" aria-label="LinkedIn">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

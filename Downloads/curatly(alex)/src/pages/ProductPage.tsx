export function ProductPage() {
  return (
    <div className="w-full max-w-[1440px] px-4 py-[100px]">
      <div className="flex flex-col items-center gap-[30px] text-center">
        <h1 className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[64px] tracking-[-3.2px]">
          Product
        </h1>
        <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[18px] tracking-[-0.18px] max-w-[600px]">
          Discover how Curatly helps you curate, organize, and monetize your content effortlessly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[60px] w-full">
          {[
            {
              title: "Smart Curation",
              description: "AI-powered tools to help you curate the best content from your collection"
            },
            {
              title: "Easy Organization",
              description: "Intuitive interfaces to organize and categorize your photos and media"
            },
            {
              title: "Monetization",
              description: "Turn your curated collections into revenue streams with built-in commerce tools"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-[#f7f7f7] p-[40px] rounded-[25px]">
              <h3 className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[24px] tracking-[-0.24px] mb-[15px]">
                {feature.title}
              </h3>
              <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[16px] tracking-[-0.16px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

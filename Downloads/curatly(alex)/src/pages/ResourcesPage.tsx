export function ResourcesPage() {
  return (
    <div className="w-full max-w-[1440px] px-4 py-[100px]">
      <div className="flex flex-col items-center gap-[30px] text-center">
        <h1 className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[64px] tracking-[-3.2px]">
          Resources
        </h1>
        <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[18px] tracking-[-0.18px] max-w-[600px]">
          Everything you need to get the most out of Curatly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px] w-full">
          {[
            {
              category: "Documentation",
              title: "Getting Started Guide",
              description: "Learn the basics of Curatly in under 10 minutes"
            },
            {
              category: "Tutorial",
              title: "Video Tutorials",
              description: "Step-by-step video guides for all features"
            },
            {
              category: "Blog",
              title: "Best Practices",
              description: "Tips and tricks from successful creators"
            },
            {
              category: "Community",
              title: "Community Forum",
              description: "Connect with other Curatly users"
            },
            {
              category: "API",
              title: "Developer Docs",
              description: "Integrate Curatly into your workflow"
            },
            {
              category: "Support",
              title: "Help Center",
              description: "Find answers to common questions"
            }
          ].map((resource, i) => (
            <div key={i} className="bg-[#f7f7f7] p-[30px] rounded-[25px] text-left hover:bg-[#eaeaea] transition-colors cursor-pointer">
              <p className="font-['Satoshi:Bold',sans-serif] text-[#818181] text-[12px] tracking-[-0.12px] mb-[10px] uppercase">
                {resource.category}
              </p>
              <h3 className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[20px] tracking-[-0.2px] mb-[10px]">
                {resource.title}
              </h3>
              <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[14px] tracking-[-0.14px]">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

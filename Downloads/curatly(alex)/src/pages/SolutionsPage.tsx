export function SolutionsPage() {
  return (
    <div className="w-full max-w-[1440px] px-4 py-[100px]">
      <div className="flex flex-col items-center gap-[30px] text-center">
        <h1 className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[64px] tracking-[-3.2px]">
          Solutions
        </h1>
        <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[18px] tracking-[-0.18px] max-w-[600px]">
          Tailored solutions for creators, businesses, and enterprises.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[60px] w-full">
          {[
            {
              title: "For Creators",
              description: "Build your personal brand and monetize your content with powerful curation tools"
            },
            {
              title: "For Businesses",
              description: "Streamline your visual content management and enhance customer engagement"
            },
            {
              title: "For Agencies",
              description: "Manage multiple client portfolios with advanced collaboration features"
            },
            {
              title: "For Enterprise",
              description: "Enterprise-grade security and scalability for large organizations"
            }
          ].map((solution, i) => (
            <div key={i} className="bg-[#f7f7f7] p-[50px] rounded-[25px] text-left">
              <h3 className="font-['Satoshi:Bold',sans-serif] text-[#2d2d2d] text-[32px] tracking-[-0.32px] mb-[15px]">
                {solution.title}
              </h3>
              <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[18px] tracking-[-0.18px]">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      features: [
        "Up to 1,000 photos",
        "Basic curation tools",
        "5 GB storage",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "Up to 10,000 photos",
        "Advanced AI curation",
        "50 GB storage",
        "Priority support",
        "Custom branding",
        "Analytics dashboard"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited photos",
        "Full AI suite",
        "Unlimited storage",
        "24/7 support",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <div className="w-full max-w-[1440px] px-4 py-[100px]">
      <div className="flex flex-col items-center gap-[30px] text-center">
        <h1 className="font-['Satoshi:Medium',sans-serif] text-[#2d2d2d] text-[64px] tracking-[-3.2px]">
          Pricing
        </h1>
        <p className="font-['Satoshi:Medium',sans-serif] text-[#818181] text-[18px] tracking-[-0.18px] max-w-[600px]">
          Choose the perfect plan for your needs. All plans include a 14-day free trial.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[60px] w-full">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-[40px] rounded-[25px] flex flex-col ${
                plan.featured 
                  ? 'bg-[#2d2d2d] text-white' 
                  : 'bg-[#f7f7f7]'
              }`}
            >
              <h3 className={`font-['Satoshi:Bold',sans-serif] text-[24px] tracking-[-0.24px] mb-[15px] ${
                plan.featured ? 'text-white' : 'text-[#2d2d2d]'
              }`}>
                {plan.name}
              </h3>
              <div className="mb-[30px]">
                <span className={`font-['Satoshi:Medium',sans-serif] text-[48px] tracking-[-1.44px] ${
                  plan.featured ? 'text-white' : 'text-[#2d2d2d]'
                }`}>
                  {plan.price}
                </span>
                <span className={`font-['Satoshi:Medium',sans-serif] text-[18px] tracking-[-0.18px] ${
                  plan.featured ? 'text-[#eaeaea]' : 'text-[#818181]'
                }`}>
                  {plan.period}
                </span>
              </div>
              <ul className="flex flex-col gap-[12px] mb-[30px] flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className={`font-['Satoshi:Medium',sans-serif] text-[14px] tracking-[-0.14px] text-left ${
                    plan.featured ? 'text-[#eaeaea]' : 'text-[#818181]'
                  }`}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-[15px] px-[20px] rounded-[30px] font-['Satoshi:Medium',sans-serif] text-[16px] tracking-[-0.16px] transition-colors ${
                plan.featured 
                  ? 'bg-white text-[#2d2d2d] hover:bg-[#eaeaea]' 
                  : 'bg-[#2d2d2d] text-white hover:bg-[#1a1a1a]'
              }`}>
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

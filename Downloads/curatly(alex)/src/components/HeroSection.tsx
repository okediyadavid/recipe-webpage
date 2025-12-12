import { useState } from "react";
import svgPaths from "../imports/svg-l4z9c6cxdj";
import imgNewArrivalsClosed1 from "figma:asset/08bab91f9b3e8b6048b9c90da1a28a5b6188f949.png";
import imgScreenshot20251114At1147011 from "figma:asset/ed92eae74ea28756a753b9e9a2d9f0d6d71f3c50.png";
import imgScreenshot20251114At1148221 from "figma:asset/b7b5386ebd99d2d2307750208858e2cfec4d904c.png";
import img10 from "figma:asset/27bbc27b3376437a596ddc2c30a41f015c1aab02.png";
import imgFrame11 from "figma:asset/fb4ac5236417a88bcd3d2c2fccd1753905a2d163.png";
import imgIPhone131431 from "figma:asset/17bbcef0e8d01a42251cedbc7a75e742c0bcd9fe.png";
import { toast } from "sonner@2.0.3";

function AvatarImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`bg-white overflow-clip relative rounded-[30px] size-[48px] ${className || ""}`}>
      <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
    </div>
  );
}

export function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      toast.success("You're on the waitlist!", {
        description: "We'll notify you when Curatly launches.",
      });
      setEmail("");
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <div 
      className="h-auto min-h-[1562px] overflow-clip relative w-full max-w-[1440px] py-[70px] px-4"
      style={{ 
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgba(255, 187, 0, 0.2) 51.916%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" 
      }}
    >
      {/* Logo */}
      <div className="flex justify-center mb-[56px]">
        <div className="bg-[#2d2d2d] rounded-[30px] size-[96px] flex items-center justify-center">
          <span className="font-['Satoshi:Bold',sans-serif] text-[64px] text-white leading-none">C</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="content-stretch flex flex-col font-['Satoshi:Medium',sans-serif] gap-[15px] items-center justify-center not-italic text-nowrap mb-[30px]">
        <h1 className="leading-[normal] relative shrink-0 text-[#2d2d2d] text-[48px] md:text-[64px] tracking-[-3.2px] text-center px-4">
          Get early access
        </h1>
        <div className="leading-[24px] relative shrink-0 text-[#818181] text-[18px] text-center tracking-[-0.18px] px-4 max-w-[600px]">
          <p className="mb-0">We're getting close. Join the early access list for Curatly and</p>
          <p>start earning as soon as we launch.</p>
        </div>
      </div>

      {/* Email Form */}
      <form onSubmit={handleSubmit} className="flex justify-center mb-[30px] px-4">
        <div className="bg-white h-[74px] rounded-[50px] w-full max-w-[684px] relative shadow-[0px_470px_132px_0px_rgba(0,0,0,0),0px_301px_120px_0px_rgba(0,0,0,0.01),0px_169px_102px_0px_rgba(0,0,0,0.05),0px_75px_75px_0px_rgba(0,0,0,0.09),0px_19px_41px_0px_rgba(0,0,0,0.1)] border border-[#eaeaea]">
          <div className="content-stretch flex gap-4 items-center px-[20px] py-[10px] size-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="font-['Satoshi:Medium',sans-serif] leading-[24px] flex-1 text-[#818181] text-[18px] tracking-[-0.18px] bg-transparent outline-none placeholder:text-[#818181]"
            />
            <button
              type="submit"
              className="bg-[#2d2d2d] flex items-center justify-center h-[52px] px-[15px] py-[5px] rounded-[30px] shrink-0 min-w-[162px] hover:bg-[#1a1a1a] transition-colors"
            >
              <span className="font-['Satoshi:Medium',sans-serif] leading-[20px] text-[16px] text-center text-white tracking-[-0.16px]">
                Join waitlist
              </span>
            </button>
          </div>
        </div>
      </form>

      {/* Social Proof */}
      <div className="content-stretch flex gap-[25px] items-center justify-center mb-[30px] px-4 flex-wrap">
        <div className="flex -space-x-3">
          <div className="bg-white overflow-clip relative rounded-[30px] size-[48px]">
            <div className="absolute flex h-[74px] items-center justify-center left-[-1px] top-0 w-[49px]">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <img alt="User avatar" className="h-[74px] w-[49px] object-cover" src={imgNewArrivalsClosed1} />
              </div>
            </div>
          </div>
          <div className="bg-white overflow-clip relative rounded-[30px] size-[48px]">
            <div className="absolute flex h-[69.564px] items-center justify-center left-[-8px] top-[-8px] w-[59.66px]">
              <div className="flex-none rotate-[0.551deg]">
                <img alt="User avatar" className="h-[69px] w-[59px] object-cover" src={imgScreenshot20251114At1147011} />
              </div>
            </div>
          </div>
          <div className="bg-white overflow-clip relative rounded-[30px] size-[48px]">
            <img alt="User avatar" className="h-[60px] w-[51px] object-cover absolute left-[-3px] top-0" src={imgScreenshot20251114At1148221} />
          </div>
        </div>
        <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] text-[#818181] text-[18px] text-center tracking-[-0.18px]">
          Join +2,900 others on the waitlist
        </p>
      </div>

      {/* Phone Mockup */}
      <div className="relative flex justify-center px-4">
        <div className="relative w-full max-w-[670px] aspect-[670/1412]">
          <img 
            alt="Curatly app interface on iPhone" 
            className="absolute inset-0 w-full h-full object-contain" 
            src={imgIPhone131431} 
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[rgba(217,217,217,0)] via-[19.788%] via-[rgba(241,241,241,0.62)] to-[44.476%] to-[#ffffff] pointer-events-none" />

        {/* Floating Stats - Photos this week */}
        <div className="absolute left-[5%] md:left-[80px] top-[380px] bg-white flex flex-col items-start overflow-clip p-[10px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] shadow-lg">
          <div className="content-stretch flex flex-col font-['Satoshi:Medium',sans-serif] gap-[5px] items-start leading-[24px]">
            <p className="text-[#818181] text-[18px] tracking-[-0.18px]">Photos this week</p>
            <p className="text-[#2d2d2d] text-[24px] tracking-[-0.24px]">12,230</p>
          </div>
        </div>

        {/* Floating User Avatars */}
        <div className="absolute right-[5%] md:right-[120px] top-[160px] bg-white flex items-center pl-[10px] pr-[20px] py-[10px] rounded-bl-[25px] rounded-br-[25px] rounded-tr-[25px] shadow-lg">
          <div className="bg-white overflow-clip relative rounded-[30px] size-[48px] -ml-[10px]">
            <div className="absolute flex h-[74px] items-center justify-center left-[-1px] top-0 w-[49px]">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <img alt="User" className="h-[74px] w-[49px] object-cover" src={imgNewArrivalsClosed1} />
              </div>
            </div>
          </div>
          <div className="bg-white -ml-[10px] overflow-clip relative rounded-[30px] size-[48px]">
            <div className="absolute flex h-[53.266px] items-center justify-center left-[0.9px] top-[0.08px] w-[42.978px]">
              <div className="flex-none rotate-[0.214deg]">
                <img alt="User" className="h-[53.107px] w-[42.78px] object-cover" src={img10} />
              </div>
            </div>
          </div>
          <div className="-ml-[10px] relative rounded-[30px] size-[48px]">
            <div className="absolute inset-0 bg-white rounded-[30px]" />
            <img alt="User" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgFrame11} />
          </div>
          <div className="-ml-[10px] relative size-[41px]">
            <div className="absolute inset-[4.22%_3.61%_4.27%_1.27%]">
              <div className="absolute inset-[-1.33%_-1.28%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 39">
                  <g>
                    <path d={svgPaths.p349ab980} fill="#FFE236" stroke="#231F20" strokeMiterlimit="10" />
                    <path d={svgPaths.pcaad300} stroke="white" strokeLinecap="round" strokeMiterlimit="10" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

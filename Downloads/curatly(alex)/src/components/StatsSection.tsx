import svgPaths from "../imports/svg-xjazr5r4oe";
import imgNewArrivalsClosed1 from "figma:asset/08bab91f9b3e8b6048b9c90da1a28a5b6188f949.png";
import imgFrame50 from "figma:asset/1e8964e14a716ebf43669bd35cf631162a7e9e9e.png";
import imgScreenshot20251114At1147011 from "figma:asset/ed92eae74ea28756a753b9e9a2d9f0d6d71f3c50.png";
import img10 from "figma:asset/27bbc27b3376437a596ddc2c30a41f015c1aab02.png";
import img8Instagram from "figma:asset/da75b8efd74f7f03bc8dd13475f80fe32cf9eaeb.png";

function StatCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={`h-[362px] relative rounded-[20px] shrink-0 w-full ${className}`}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[138px] items-start p-[30px] relative size-full">
          {children}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function StatDisplay({ 
  mainText, 
  accentText, 
  label 
}: { 
  mainText: string; 
  accentText: string; 
  label: string;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0 w-[246px]">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#2d2d2d] text-[64px] tracking-[-1.92px] w-full">
        {mainText}
        <span className="text-[#818181]">{accentText}</span>
      </p>
      <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#818181] text-[20px] tracking-[-0.2px] w-full">
        {label}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <div className="bg-white w-full max-w-[1440px] py-[60px] px-4">
      <div className="content-stretch flex gap-[21px] items-start justify-center flex-wrap lg:flex-nowrap">
        {/* Left Column */}
        <div className="content-stretch flex flex-col gap-[21px] items-start w-full lg:w-[347px]">
          {/* Partners Badge */}
          <div className="h-[95px] relative rounded-[20px] shrink-0 w-full">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative size-full">
                <div className="content-stretch flex items-center pl-0 pr-[12px] py-0 relative shrink-0">
                  <div className="bg-white mr-[-12px] overflow-clip relative rounded-[30px] shrink-0 size-[48px]">
                    <div className="absolute flex h-[74px] items-center justify-center left-[-1px] top-0 w-[49px]">
                      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                        <img 
                          alt="Partner avatar" 
                          className="h-[74px] w-[49px] object-cover" 
                          src={imgNewArrivalsClosed1} 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mr-[-12px] relative rounded-[30px] shrink-0 size-[48px]">
                    <div className="absolute inset-0 bg-white rounded-[30px]" />
                    <img 
                      alt="Partner avatar" 
                      className="absolute max-w-none object-cover rounded-[30px] size-full" 
                      src={imgFrame50} 
                    />
                  </div>
                  <div className="bg-white mr-[-12px] overflow-clip relative rounded-[30px] shrink-0 size-[48px]">
                    <div className="absolute flex h-[69.564px] items-center justify-center left-[-8px] top-[-8px] w-[59.66px]">
                      <div className="flex-none rotate-[0.551deg]">
                        <img 
                          alt="Partner avatar" 
                          className="h-[69px] w-[59px] object-cover" 
                          src={imgScreenshot20251114At1147011} 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white mr-[-12px] overflow-clip relative rounded-[30px] shrink-0 size-[48px]">
                    <div className="absolute flex h-[67.756px] items-center justify-center left-[-5.31px] top-[-7.67px] w-[55.408px]">
                      <div className="flex-none rotate-[357.953deg]">
                        <img 
                          alt="Partner avatar" 
                          className="h-[65.901px] w-[53.087px] object-cover" 
                          src={img10} 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white mr-[-12px] overflow-clip relative rounded-[30px] shrink-0 size-[48px]">
                    <img 
                      alt="Partner avatar" 
                      className="absolute h-[66px] left-[-1.44px] top-[-1.5px] w-[53px] object-cover" 
                      src={img8Instagram} 
                    />
                  </div>
                </div>
                <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#818181] text-[10px] text-nowrap tracking-[-0.1px]">
                  100 + PARTNERS
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>

          {/* ROI Card */}
          <StatCard>
            <div className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#818181] text-[20px] tracking-[-0.2px]">
              <p className="mb-0">Earn back on your</p>
              <p>investment within 30 days</p>
            </div>
            <StatDisplay 
              mainText="90" 
              accentText="%" 
              label="Return on investment (ROI)" 
            />
          </StatCard>
        </div>

        {/* Middle Column */}
        <div className="content-stretch flex flex-col gap-[21px] items-start w-full lg:w-[347px]">
          {/* Revenue Card */}
          <StatCard>
            <div className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#818181] text-[20px] tracking-[-0.2px]">
              <p className="mb-0">Through our custom-</p>
              <p>tailored funnel systems</p>
            </div>
            <StatDisplay 
              mainText="$2.5" 
              accentText="+" 
              label="Revenue generated" 
            />
          </StatCard>

          {/* Available Badge */}
          <div className="h-[95px] relative rounded-[20px] shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
                <div className="relative shrink-0 size-[15px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <circle cx="7.5" cy="7.5" fill="#D2FF4A" r="7.5" />
                  </svg>
                </div>
                <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#818181] text-[12px] text-nowrap tracking-[-0.12px]">
                  AVAILABLE FOR 2026 JANUARY
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[20px]" />
          </div>
        </div>

        {/* Right Column - Trust Card */}
        <div className="bg-[#2d2d2d] h-[482px] overflow-clip relative rounded-[29px] shadow-[368px_847px_250px_0px_rgba(0,0,0,0),236px_542px_236px_0px_rgba(0,0,0,0.01),133px_305px_200px_0px_rgba(0,0,0,0.05),59px_136px_148px_0px_rgba(0,0,0,0.09),15px_34px_81px_0px_rgba(0,0,0,0.1)] w-full lg:w-[509px]">
          <div className="absolute inset-[24.48%_22.99%_10.17%_-17.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 483 315">
              <path d={svgPaths.p31362ac0} fill="#3D3D3D" />
            </svg>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[275px] h-[482px] items-start left-1/2 overflow-clip p-[30px] rounded-[29px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-full max-w-[509px]">
            <div className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#eaeaea] text-[20px] tracking-[-0.2px]">
              <p className="mb-0">We delivered 50+ projects</p>
              <p>worldwide, helping service-based companies</p>
            </div>
            <div className="content-stretch flex gap-[198px] items-center leading-[0] not-italic relative shrink-0 w-full flex-wrap lg:flex-nowrap">
              <p className="font-['Satoshi:Medium',sans-serif] leading-[normal] relative shrink-0 text-[0px] tracking-[-1.92px]">
                <span className="text-[64px] text-white">4.8</span>
                <span className="text-[#818181] text-[36px]">/5</span>
              </p>
              <div className="font-['Satoshi:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#eaeaea] text-[12px] tracking-[-0.12px]">
                <p className="mb-0">TRUSTED BY</p>
                <p>CLIENTS WORLDWIDE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

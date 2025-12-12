import svgPaths from "./svg-l4z9c6cxdj";
import clsx from "clsx";
import imgNewArrivalsClosed1 from "figma:asset/08bab91f9b3e8b6048b9c90da1a28a5b6188f949.png";
import imgScreenshot20251114At1147011 from "figma:asset/ed92eae74ea28756a753b9e9a2d9f0d6d71f3c50.png";
import imgScreenshot20251114At1148221 from "figma:asset/b7b5386ebd99d2d2307750208858e2cfec4d904c.png";
import img10 from "figma:asset/27bbc27b3376437a596ddc2c30a41f015c1aab02.png";
import imgFrame11 from "figma:asset/fb4ac5236417a88bcd3d2c2fccd1753905a2d163.png";
import imgIPhone131431 from "figma:asset/17bbcef0e8d01a42251cedbc7a75e742c0bcd9fe.png";
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative size-[54px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[584px]">
      <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2d2d2d] text-[24px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">{text}</p>
      <BackgroundImage2 additionalClassNames="shrink-0">
        <g id="Group 12">
          <circle cx="27" cy="27" fill="var(--fill-0, #2D2D2D)" id="Ellipse 5" r="27" />
          <g id="material-symbols:close">
            <path d={svgPaths.p1f697d00} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
      </BackgroundImage2>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("bg-white overflow-clip relative rounded-[30px] size-[48px]", additionalClassNames)}>
      <div className="absolute flex h-[74px] items-center justify-center left-[-1px] top-0 w-[49px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[74px] relative w-[49px]" data-name="New arrivals  _ Closed 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNewArrivalsClosed1} />
          </div>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string;
};

function BackgroundImage({ text, text1, text2, additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Satoshi:Medium',sans-serif] gap-[15px] items-center justify-center not-italic text-nowrap", additionalClassNames)}>
      <p className="leading-[normal] relative shrink-0 text-[#2d2d2d] text-[64px] tracking-[-3.2px] whitespace-pre">{text}</p>
      <div className="leading-[24px] relative shrink-0 text-[#818181] text-[18px] text-center tracking-[-0.18px] whitespace-pre">
        <p className="mb-0">{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full">
      <div className="h-[1562px] overflow-clip relative shrink-0 w-[1440px]" data-name="Desktop - 1" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgba(255, 187, 0, 0.2) 51.916%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <div className="absolute contents left-[672px] top-[70px]">
          <div className="absolute bg-[#2d2d2d] left-[672px] rounded-[30px] size-[96px] top-[70px]" />
          <p className="absolute font-['Satoshi:Bold',sans-serif] h-[83.2px] leading-[normal] left-[calc(50%-23px)] not-italic text-[64px] text-white top-[calc(50%-708px)] w-[46.72px]">C</p>
        </div>
        <BackgroundImage text="Get early access" text1="We’re getting close. Join the early access list for Curatly and" text2="start earning as soon as we launch." additionalClassNames="absolute left-[483px] top-[196px]" />
        <div className="absolute bg-white h-[74px] left-[378px] rounded-[50px] top-[375px] w-[684px]">
          <div className="content-stretch flex gap-[330px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#818181] text-[18px] text-center text-nowrap tracking-[-0.18px] whitespace-pre">Your email address</p>
            <div className="bg-[#2d2d2d] content-stretch flex h-[52px] items-center justify-center overflow-clip px-[15px] py-[5px] relative rounded-[30px] shrink-0 w-[162px]">
              <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.16px] whitespace-pre">Join waitlist</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[50px] shadow-[0px_470px_132px_0px_rgba(0,0,0,0),0px_301px_120px_0px_rgba(0,0,0,0.01),0px_169px_102px_0px_rgba(0,0,0,0.05),0px_75px_75px_0px_rgba(0,0,0,0.09),0px_19px_41px_0px_rgba(0,0,0,0.1)]" />
        </div>
        <div className="absolute content-stretch flex gap-[25px] items-center left-[511.5px] top-[479px]">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <BackgroundImage1 additionalClassNames="[grid-area:1_/_1] ml-0 mt-0" />
            <div className="[grid-area:1_/_1] bg-white ml-[37px] mt-0 overflow-clip relative rounded-[30px] size-[48px]">
              <div className="absolute flex h-[69.564px] items-center justify-center left-[-8px] top-[-8px] w-[59.66px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none rotate-[0.551deg]">
                  <div className="h-[69px] relative w-[59px]" data-name="Screenshot 2025-11-14 at 11.47.01 1">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251114At1147011} />
                  </div>
                </div>
              </div>
            </div>
            <div className="[grid-area:1_/_1] bg-white ml-[75px] mt-0 overflow-clip relative rounded-[30px] size-[48px]">
              <div className="absolute h-[60px] left-[-3px] top-0 w-[51px]" data-name="Screenshot 2025-11-14 at 11.48.22 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251114At1148221} />
              </div>
            </div>
          </div>
          <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#818181] text-[18px] text-center text-nowrap tracking-[-0.18px] whitespace-pre">Join +2,900 others on the waitlist</p>
        </div>
        <div className="absolute h-[1412px] left-[385px] top-[557px] w-[670px]" data-name="iPhone 13 & 14 - 3 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone131431} />
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(217,217,217,0)] h-[869px] left-1/2 to-[#ffffff] to-[44.476%] top-[1026px] translate-x-[-50%] via-[19.788%] via-[rgba(241,241,241,0.62)] w-[1440px]" />
        <div className="absolute bg-white content-stretch flex items-center left-[960px] pl-[10px] pr-[20px] py-[10px] rounded-bl-[25px] rounded-br-[25px] rounded-tr-[25px] top-[996px]">
          <BackgroundImage1 additionalClassNames="mr-[-10px] shrink-0" />
          <div className="bg-white mr-[-10px] overflow-clip relative rounded-[30px] shrink-0 size-[48px]">
            <div className="absolute flex h-[53.266px] items-center justify-center left-[0.9px] top-[0.08px] w-[42.978px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none rotate-[0.214deg]">
                <div className="h-[53.107px] relative w-[42.78px]" data-name="_ (10)">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img10} />
                </div>
              </div>
            </div>
          </div>
          <div className="mr-[-10px] relative rounded-[30px] shrink-0 size-[48px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
              <div className="absolute bg-white inset-0 rounded-[30px]" />
              <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[30px] size-full" src={imgFrame11} />
            </div>
          </div>
          <div className="mr-[-10px] relative shrink-0 size-[41px]" data-name="streamline-stickies-color:star">
            <div className="absolute inset-[4.22%_3.61%_4.27%_1.27%]" data-name="Group">
              <div className="absolute inset-[-1.33%_-1.28%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 39">
                  <g id="Group">
                    <path d={svgPaths.p349ab980} fill="var(--fill-0, #FFE236)" id="Vector" stroke="var(--stroke-0, #231F20)" strokeMiterlimit="10" />
                    <path d={svgPaths.pcaad300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeMiterlimit="10" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex flex-col items-start left-[382px] overflow-clip p-[10px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] top-[882px]">
          <div className="content-stretch flex flex-col font-['Satoshi:Medium',sans-serif] gap-[5px] items-start leading-[24px] not-italic relative shrink-0 text-center w-[134px]">
            <p className="min-w-full relative shrink-0 text-[#818181] text-[18px] tracking-[-0.18px] w-[min-content]">Photos this week</p>
            <p className="relative shrink-0 text-[#2d2d2d] text-[24px] text-nowrap tracking-[-0.24px] whitespace-pre">12,230</p>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[30px] items-center overflow-clip relative shrink-0 w-[1440px]" data-name="Desktop - 2">
        <BackgroundImage text="Frequently asked questions" text1="Everything you need to know about Curatly. find answers" text2="to the most common questions below" additionalClassNames="relative shrink-0" />
        <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
          <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[10px] h-[193px] items-start overflow-clip px-[30px] py-[20px] relative rounded-[25px] shrink-0 w-[641px]">
            <div className="content-stretch flex gap-[355px] items-center relative shrink-0">
              <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2d2d2d] text-[24px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">What is Curalty?</p>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <BackgroundImage2 additionalClassNames="[grid-area:1_/_1] ml-0 mt-0">
                  <circle cx="27" cy="27" fill="var(--fill-0, #2D2D2D)" id="Ellipse 5" r="27" />
                </BackgroundImage2>
                <div className="[grid-area:1_/_1] ml-[16.05px] mt-[16.05px] relative size-[21.892px]" data-name="material-symbols:close">
                  <div className="absolute inset-[20.83%]" data-name="Vector">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                      <path d={svgPaths.p8c462f0} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#818181] text-[18px] tracking-[-0.18px] w-[min-content]">Curalty is a platform that helps you curate, organize, and share your favorite moments effortlessly. Join the waitlist to be part of the first people to experience it.</p>
          </div>
          <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[30px] py-[20px] relative rounded-[25px] shrink-0 w-[641px]">
            <BackgroundImageAndText text="Why should I join the early access list?" />
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#818181] text-[18px] tracking-[-0.18px] w-[min-content]">Early access gives you first-hand experience with new features, priority updates, and the chance to start earning as soon as we launch.</p>
          </div>
          <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[30px] py-[20px] relative rounded-[25px] shrink-0 w-[641px]">
            <BackgroundImageAndText text="When will Curalty launch?" />
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#818181] text-[18px] tracking-[-0.18px] w-[min-content]">We’re in the final stages of development. Early access members will be notified via email the moment we go live.</p>
          </div>
          <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[30px] py-[20px] relative rounded-[25px] shrink-0 w-[641px]">
            <BackgroundImageAndText text="Is joining the waitlist free?" />
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#818181] text-[18px] tracking-[-0.18px] w-[min-content]">Yes — signing up is completely free. Just enter your email, and you’ll be added to the waitlist instantly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
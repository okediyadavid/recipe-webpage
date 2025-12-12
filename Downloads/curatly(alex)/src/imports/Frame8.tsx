import svgPaths from "./svg-uja5wz06qp";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[34px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        {children}
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative rounded-[20px] size-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[24px] relative size-full">
          <p className="font-['Satoshi:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2d2d2d] text-[24px] text-nowrap tracking-[-0.24px] whitespace-pre">Curaty</p>
          <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2d2d2d] text-[16px] text-nowrap tracking-[-0.16px] whitespace-pre">Get started</p>
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2d2d2d] text-[16px] text-nowrap tracking-[-0.16px] whitespace-pre">Product</p>
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2d2d2d] text-[16px] text-nowrap tracking-[-0.16px] whitespace-pre">Solutions</p>
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2d2d2d] text-[16px] text-nowrap tracking-[-0.16px] whitespace-pre">Pricing</p>
            <p className="font-['Satoshi:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2d2d2d] text-[16px] text-nowrap tracking-[-0.16px] whitespace-pre">Resources</p>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <Wrapper>
                <g id="Group 5">
                  <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 4" r="17" />
                  <g id="iconoir:sun-light">
                    <path d={svgPaths.p3f867200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                </g>
              </Wrapper>
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[44px] mt-0 place-items-start relative">
                <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
                  <Wrapper>
                    <circle cx="17" cy="17" fill="var(--fill-0, white)" id="Ellipse 4" r="17" />
                  </Wrapper>
                  <div className="[grid-area:1_/_1] ml-[7px] mt-[5px] relative size-[20px]" data-name="charm:person">
                    <div className="absolute inset-[17.19%_17.19%_10.94%_17.19%]" data-name="Group">
                      <div className="absolute inset-[-5.22%_-5.71%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
                          <g id="Group">
                            <path d={svgPaths.p2cbf85f0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.p3f64a500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Input6 from "../components/Input2";
import WhowhatInfluencedYou1 from "../components/WhowhatInfluencedYou1";
import Property1Desktop1 from "../components/Property1Desktop1";

const DSignUpQuestion1 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden text-left text-base text-neutral-100 font-overline-regular">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[56px] left-[48px] w-[9.2px] h-[19.2px]">
        <img
          className="absolute top-[0px] left-[0px] w-[9.2px] h-[19.2px] object-contain"
          alt=""
          src="/vector-175-stroke.svg"
        />
      </button>
      <div className="absolute top-[143px] left-[calc(50%_-_170px)] w-[340px] h-[789px] overflow-y-auto flex flex-col items-start justify-start gap-[40px]">
        <Input6 />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[335px] relative leading-[24px] font-semibold inline-block">
              Why did you start dancing?
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
              <input
                className="m-0 w-6 relative h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px] font-semibold">
                 I enjoy it
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[340px] relative leading-[24px] font-semibold hidden">
              Question
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
              <input
                className="m-0 w-6 relative h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px] font-semibold">
                Entertaining friends and family
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[340px] relative leading-[24px] font-semibold hidden">
              Question
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
              <input
                className="m-0 w-6 relative h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px] font-semibold">
                It relieves stress
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[340px] relative leading-[24px] font-semibold hidden">
              Question
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
              <input
                className="m-0 w-6 relative h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px] font-semibold">
                I had nothing to do during the pandemic, so I started dancing
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[340px] relative leading-[24px] font-semibold hidden">
              Question
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
              <input
                className="m-0 w-6 relative h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px] font-semibold">
                I was completing an assignment for school
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[340px] relative leading-[24px] font-semibold hidden">
              Question
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
              <input
                className="m-0 w-6 relative h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px] font-semibold">
                I entered a competition
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[340px] relative leading-[24px] font-semibold hidden">
              Question
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
              <input
                className="m-0 w-6 relative h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px] font-semibold">
                I wanted to earn a living 
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[340px] relative leading-[24px] font-semibold hidden">
              Question
            </div>
            <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
              <input
                className="m-0 w-6 relative h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="flex-1 relative leading-[24px] font-semibold">
                Other
              </div>
            </div>
          </div>
        </div>
        <WhowhatInfluencedYou1 />
      </div>
      <Property1Desktop1
        text="Questions"
        property1DesktopAlignSelf="unset"
        property1DesktopPosition="absolute"
        property1DesktopTop="unset"
        property1DesktopLeft="550px"
        property1DesktopWidth="340px"
        property1DesktopBottom="910px"
        property1DesktopHeight="48px"
      />
    </div>
  );
};

export default DSignUpQuestion1;

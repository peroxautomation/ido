import SizeBigStateSecondaryDev from "./SizeBigStateSecondaryDev";
import PropTypes from "prop-types";

const WhowhatInfluencedYou1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative leading-[24px] font-semibold">
          Who/what influenced you?
        </div>
        <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
          <input
            className="m-0 w-6 relative h-6 overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="flex-1 relative leading-[24px] font-semibold">
            I have always loved dancing
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
            My family
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
            My friends
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
            A school project
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
            A dancing show on television
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
            Social media
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
      <SizeBigStateSecondaryDev
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        text="Next"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus.svg"
        leftIcon={false}
        rightIcon={false}
        sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
        sizeBigStateSecondaryDevAlignSelf="stretch"
        sizeBigStateSecondaryDevWidth="unset"
        sizeBigStateSecondaryDevPosition="unset"
        sizeBigStateSecondaryDevRight="unset"
        sizeBigStateSecondaryDevBottom="unset"
        sizeBigStateSecondaryDevLeft="unset"
        sizeBigStateSecondaryDevFlex="unset"
        sizeBigStateSecondaryDevBorder="none"
        sizeBigStateSecondaryDevTop="unset"
        cTAColor="#fff"
      />
    </div>
  );
};

WhowhatInfluencedYou1.propTypes = {
  className: PropTypes.string,
};

export default WhowhatInfluencedYou1;

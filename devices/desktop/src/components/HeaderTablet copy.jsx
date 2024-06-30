import StateInactiveSizeDefault from "./StateInactiveSizeDefault";
import PropTypes from "prop-types";

const HeaderTablet = ({
  className = "",
  hugeIconmenuoutlinemenuLi,
  hugeIconarrowssolidin,
}) => {
  return (
    <div
      className={`absolute w-full top-[40px] right-[-1px] left-[1px] flex flex-row items-start justify-start py-2 px-6 box-border gap-[203px] text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[45px]">
        <img
          className="w-11 relative h-11"
          alt=""
          src={hugeIconmenuoutlinemenuLi}
        />
        <div className="relative leading-[32px] font-semibold">LOGO</div>
      </div>
      <div className="w-[336px] flex flex-row items-start justify-start gap-[16px]">
        <StateInactiveSizeDefault
          text="Create"
          hugeIconeducationsolidpen="/hugeiconinterfaceoutlineplus1.svg"
          icon
          stateInactiveSizeDefaultBackgroundColor="rgba(255, 255, 255, 0.08)"
          stateInactiveSizeDefaultPosition="unset"
          stateInactiveSizeDefaultTop="unset"
          stateInactiveSizeDefaultLeft="unset"
          stateInactiveSizeDefaultWidth="160px"
          stateInactiveSizeDefaultRight="unset"
          stateInactiveSizeDefaultBottom="unset"
          stateInactiveSizeDefaultGap="unset"
          stateInactiveSizeDefaultFlex="unset"
          stateInactiveSizeDefaultAlignSelf="unset"
          hugeIconeducationsolidpenWidth="24px"
          hugeIconeducationsolidpenHeight="24px"
        />
        <StateInactiveSizeDefault
          text="Login"
          hugeIconeducationsolidpen="/hugeiconarrowssolidin@2x.png"
          icon={false}
          stateInactiveSizeDefaultBackgroundColor="#cc0f3c"
          stateInactiveSizeDefaultPosition="unset"
          stateInactiveSizeDefaultTop="unset"
          stateInactiveSizeDefaultLeft="unset"
          stateInactiveSizeDefaultWidth="unset"
          stateInactiveSizeDefaultRight="unset"
          stateInactiveSizeDefaultBottom="unset"
          stateInactiveSizeDefaultGap="unset"
          stateInactiveSizeDefaultFlex="1"
          stateInactiveSizeDefaultAlignSelf="unset"
          hugeIconeducationsolidpenWidth="24px"
          hugeIconeducationsolidpenHeight="24px"
        />
      </div>
    </div>
  );
};

HeaderTablet.propTypes = {
  className: PropTypes.string,
  hugeIconmenuoutlinemenuLi: PropTypes.string,
  hugeIconarrowssolidin: PropTypes.string,
};

export default HeaderTablet;

import { useMemo } from "react";
import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";
import PropTypes from "prop-types";

const StateSelected1 = ({
  className = "",
  amountText = "$10 ",
  feature1 = "Create unlimited",
  feature2 = "Create unlimited",
  feature3 = "Create unlimited",
  feature4 = "Create unlimited",
  feature5 = "Create unlimited",
  hugeIconinterfacesolidplu,
  stateSelectedPosition,
  stateSelectedTop,
  stateSelectedLeft,
  stateSelectedBoxShadow,
  stateSelectedBorder,
}) => {
  const stateSelectedStyle = useMemo(() => {
    return {
      position: stateSelectedPosition,
      top: stateSelectedTop,
      left: stateSelectedLeft,
      boxShadow: stateSelectedBoxShadow,
      border: stateSelectedBorder,
    };
  }, [
    stateSelectedPosition,
    stateSelectedTop,
    stateSelectedLeft,
    stateSelectedBoxShadow,
    stateSelectedBorder,
  ]);

  return (
    <div
      className={`w-[344px] shadow-[0px_4px_25px_rgba(204,_15,_60,_0.3)] rounded-2xl bg-neutral-800 box-border h-[388px] flex flex-col items-center justify-start p-6 gap-[16px] text-center text-5xl text-neutral-100 font-overline-regular border-[2px] border-solid border-primary-500 ${className}`}
      style={stateSelectedStyle}
    >
      <div className="flex flex-col items-center justify-start gap-[8px]">
        <div className="relative leading-[32px] font-semibold">Plan</div>
        <div className="flex flex-row items-center justify-start text-13xl">
          <div className="flex flex-row items-center justify-center py-0 px-2 border-r-[1px] border-solid border-neutral-700">
            <div className="relative leading-[40px] font-semibold">
              {amountText}
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-0 px-2 text-left text-sm">
            <div className="relative leading-[20px] font-semibold">
              <p className="m-0">{`per `}</p>
              <p className="m-0">month</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[16px] text-left text-base">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfacesolidcheckcircle.svg"
          />
          <div className="relative leading-[24px] font-semibold">
            {feature1}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfacesolidcheckcircle.svg"
          />
          <div className="relative leading-[24px] font-semibold">
            {feature2}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfacesolidcheckcircle.svg"
          />
          <div className="relative leading-[24px] font-semibold">
            {feature3}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfacesolidcheckcircle.svg"
          />
          <div className="relative leading-[24px] font-semibold">
            {feature4}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfacesolidcheckcircle.svg"
          />
          <div className="relative leading-[24px] font-semibold">
            {feature5}
          </div>
        </div>
      </div>
      <SizeSmallStatePrimaryDev
        text="Continue"
        hugeIconinterfacesolidplu="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
        rightIcon={false}
        sizeSmallStatePrimaryDevBackgroundColor="#cc0f3c"
        sizeSmallStatePrimaryDevWidth="252px"
        sizeSmallStatePrimaryDevPosition="unset"
        sizeSmallStatePrimaryDevRight="unset"
        sizeSmallStatePrimaryDevBottom="unset"
        sizeSmallStatePrimaryDevLeft="unset"
        cTAColor="#fff"
      />
    </div>
  );
};

StateSelected1.propTypes = {
  className: PropTypes.string,
  amountText: PropTypes.string,
  feature1: PropTypes.string,
  feature2: PropTypes.string,
  feature3: PropTypes.string,
  feature4: PropTypes.string,
  feature5: PropTypes.string,
  hugeIconinterfacesolidplu: PropTypes.string,

  /** Style props */
  stateSelectedPosition: PropTypes.any,
  stateSelectedTop: PropTypes.any,
  stateSelectedLeft: PropTypes.any,
  stateSelectedBoxShadow: PropTypes.any,
  stateSelectedBorder: PropTypes.any,
};

export default StateSelected1;

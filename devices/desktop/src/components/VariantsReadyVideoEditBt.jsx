import { useMemo } from "react";
import StatePrimaryDeviceTablet from "./StatePrimaryDeviceTablet";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import PropTypes from "prop-types";

const VariantsReadyVideoEditBt = ({
  className = "",
  hugeIconinterfacesolidplu,
  variantsReadyVideoEditBtWidth,
  variantsReadyVideoEditBtPosition,
  variantsReadyVideoEditBtTop,
  variantsReadyVideoEditBtRight,
  variantsReadyVideoEditBtLeft,
  variantsReadyVideoEditBtHeight,
  variantsReadyVideoEditBtBottom,
  frameDivBackgroundImage,
}) => {
  const variantsReadyVideoEditBtStyle = useMemo(() => {
    return {
      width: variantsReadyVideoEditBtWidth,
      position: variantsReadyVideoEditBtPosition,
      top: variantsReadyVideoEditBtTop,
      right: variantsReadyVideoEditBtRight,
      left: variantsReadyVideoEditBtLeft,
      height: variantsReadyVideoEditBtHeight,
      bottom: variantsReadyVideoEditBtBottom,
    };
  }, [
    variantsReadyVideoEditBtWidth,
    variantsReadyVideoEditBtPosition,
    variantsReadyVideoEditBtTop,
    variantsReadyVideoEditBtRight,
    variantsReadyVideoEditBtLeft,
    variantsReadyVideoEditBtHeight,
    variantsReadyVideoEditBtBottom,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage,
    };
  }, [frameDivBackgroundImage]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] flex flex-col items-end justify-start p-6 box-border relative gap-[16px] ${className}`}
      style={variantsReadyVideoEditBtStyle}
    >
      <img
        className="w-8 relative h-8 overflow-hidden shrink-0 z-[0]"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
      />
      <div className="self-stretch h-[360px] flex flex-col items-center justify-between py-0 px-6 box-border z-[1]">
        <div
          className="w-80 relative rounded-xl h-[300px] overflow-hidden shrink-0 bg-[url('/public/frame-71184@3x.png')] bg-cover bg-no-repeat bg-[top]"
          style={frameDivStyle}
        >
          <div className="absolute top-[122px] left-[132px] rounded-17xl bg-white-40 flex flex-row items-start justify-start p-4">
            <img
              className="w-10 relative h-10 overflow-hidden shrink-0"
              alt=""
              src="/hugeiconmultimedia-and-audiosolidplay.svg"
            />
          </div>
          <StatePrimaryDeviceTablet
            text="Edit cover"
            statePrimaryDeviceTabletBackgroundColor="#1b1b1b"
            statePrimaryDeviceTabletWidth="73px"
            statePrimaryDeviceTabletHeight="32px"
            statePrimaryDeviceTabletPosition="absolute"
            statePrimaryDeviceTabletTop="260px"
            statePrimaryDeviceTabletLeft="124px"
            unrelateLineHeight="20px"
          />
        </div>
        <SizeMediumStateSecondary
          hugeIconinterfacesolidplu="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
          text="Next"
          leftIcon={false}
          sizeMediumStateSecondaryBackgroundColor="#cc0f3c"
          sizeMediumStateSecondaryWidth="320px"
          sizeMediumStateSecondaryBorder="unset"
          sizeMediumStateSecondaryAlignSelf="unset"
          sizeMediumStateSecondaryMargin="unset"
          sizeMediumStateSecondaryPosition="unset"
          sizeMediumStateSecondaryTop="unset"
          sizeMediumStateSecondaryLeft="unset"
        />
      </div>
      <img
        className="w-8 absolute !m-[0] top-[24px] left-[24px] h-8 overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/hugeiconarrowsbulkdirectionleft-011.svg"
      />
    </div>
  );
};

VariantsReadyVideoEditBt.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacesolidplu: PropTypes.string,

  /** Style props */
  variantsReadyVideoEditBtWidth: PropTypes.any,
  variantsReadyVideoEditBtPosition: PropTypes.any,
  variantsReadyVideoEditBtTop: PropTypes.any,
  variantsReadyVideoEditBtRight: PropTypes.any,
  variantsReadyVideoEditBtLeft: PropTypes.any,
  variantsReadyVideoEditBtHeight: PropTypes.any,
  variantsReadyVideoEditBtBottom: PropTypes.any,
  frameDivBackgroundImage: PropTypes.any,
};

export default VariantsReadyVideoEditBt;

import { useMemo } from "react";
import EditCoverImg from "./EditCoverImg";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import PropTypes from "prop-types";

const VariantsEditCover = ({
  className = "",
  editCoverImg,
  hugeIconinterfacesolidplu,
  variantsEditCoverWidth,
  variantsEditCoverPosition,
  variantsEditCoverTop,
  variantsEditCoverRight,
  variantsEditCoverLeft,
  variantsEditCoverHeight,
  variantsEditCoverBottom,
  frameDivBackgroundImage,
}) => {
  const variantsEditCoverStyle = useMemo(() => {
    return {
      width: variantsEditCoverWidth,
      position: variantsEditCoverPosition,
      top: variantsEditCoverTop,
      right: variantsEditCoverRight,
      left: variantsEditCoverLeft,
      height: variantsEditCoverHeight,
      bottom: variantsEditCoverBottom,
    };
  }, [
    variantsEditCoverWidth,
    variantsEditCoverPosition,
    variantsEditCoverTop,
    variantsEditCoverRight,
    variantsEditCoverLeft,
    variantsEditCoverHeight,
    variantsEditCoverBottom,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage,
    };
  }, [frameDivBackgroundImage]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] flex flex-col items-end justify-start p-6 box-border relative gap-[16px] ${className}`}
      style={variantsEditCoverStyle}
    >
      <img
        className="w-8 relative h-8 overflow-hidden shrink-0 z-[0]"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
      />
      <div className="self-stretch h-[360px] flex flex-col items-center justify-between py-0 px-6 box-border z-[1]">
        <div
          className="w-80 relative rounded-xl h-[223px] overflow-hidden shrink-0 bg-[url('/public/frame-71185@3x.png')] bg-cover bg-no-repeat bg-[top]"
          style={frameDiv1Style}
        >
          <div className="absolute top-[76px] left-[124px] rounded-17xl bg-white-40 flex flex-row items-start justify-start p-4">
            <img
              className="w-10 relative h-10 overflow-hidden shrink-0"
              alt=""
              src="/hugeiconmultimedia-and-audiosolidplay.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start relative">
          <EditCoverImg
            editCoverImg="/edit-cover-img@2x.png"
            propWidth="50px"
            propPosition="relative"
            propMargin="unset"
            propTop="unset"
            propLeft="unset"
            propHeight="56px"
          />
          <EditCoverImg
            editCoverImg="/edit-cover-img@2x.png"
            propWidth="50px"
            propPosition="relative"
            propMargin="unset"
            propTop="unset"
            propLeft="unset"
            propHeight="56px"
          />
          <EditCoverImg
            editCoverImg="/edit-cover-img@2x.png"
            propWidth="50px"
            propPosition="relative"
            propMargin="unset"
            propTop="unset"
            propLeft="unset"
            propHeight="56px"
          />
          <EditCoverImg
            editCoverImg="/edit-cover-img@2x.png"
            propWidth="50px"
            propPosition="relative"
            propMargin="unset"
            propTop="unset"
            propLeft="unset"
            propHeight="56px"
          />
          <EditCoverImg
            editCoverImg="/edit-cover-img@2x.png"
            propWidth="50px"
            propPosition="relative"
            propMargin="unset"
            propTop="unset"
            propLeft="unset"
            propHeight="56px"
          />
          <EditCoverImg
            editCoverImg="/edit-cover-img@2x.png"
            propWidth="50px"
            propPosition="relative"
            propMargin="unset"
            propTop="unset"
            propLeft="unset"
            propHeight="56px"
          />
          <EditCoverImg
            editCoverImg="/edit-cover-img1@2x.png"
            propWidth="35px"
            propPosition="relative"
            propMargin="unset"
            propTop="unset"
            propLeft="unset"
            propHeight="56px"
          />
          <EditCoverImg
            editCoverImg="/edit-cover-img2@2x.png"
            propWidth="56px"
            propPosition="absolute"
            propMargin="0 !important"
            propTop="-4px"
            propLeft="22px"
            propHeight="64px"
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

VariantsEditCover.propTypes = {
  className: PropTypes.string,
  editCoverImg: PropTypes.string,
  hugeIconinterfacesolidplu: PropTypes.string,

  /** Style props */
  variantsEditCoverWidth: PropTypes.any,
  variantsEditCoverPosition: PropTypes.any,
  variantsEditCoverTop: PropTypes.any,
  variantsEditCoverRight: PropTypes.any,
  variantsEditCoverLeft: PropTypes.any,
  variantsEditCoverHeight: PropTypes.any,
  variantsEditCoverBottom: PropTypes.any,
  frameDivBackgroundImage: PropTypes.any,
};

export default VariantsEditCover;

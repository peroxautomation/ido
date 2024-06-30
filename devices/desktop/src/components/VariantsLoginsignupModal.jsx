import { useMemo } from "react";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import VariantLoginSizeDesktop from "./VariantLoginSizeDesktop";
import PropTypes from "prop-types";

const VariantsLoginsignupModal = ({
  className = "",
  titleText = "LOG IN TO IDO",
  hugeIconinterfacesolidplu,
  cTA,
  hugeIconinterfacesolidplu1,
  hugeIconinterfacesolidplu2,
  hugeIconinterfacesolidplu3,
  variantsLoginsignupModalPosition,
  variantsLoginsignupModalHeight,
  variantsLoginsignupModalWidth,
  variantsLoginsignupModalTop,
  variantsLoginsignupModalRight,
  variantsLoginsignupModalBottom,
  variantsLoginsignupModalLeft,
}) => {
  const variantsLoginsignupModalStyle = useMemo(() => {
    return {
      position: variantsLoginsignupModalPosition,
      height: variantsLoginsignupModalHeight,
      width: variantsLoginsignupModalWidth,
      top: variantsLoginsignupModalTop,
      right: variantsLoginsignupModalRight,
      bottom: variantsLoginsignupModalBottom,
      left: variantsLoginsignupModalLeft,
    };
  }, [
    variantsLoginsignupModalPosition,
    variantsLoginsignupModalHeight,
    variantsLoginsignupModalWidth,
    variantsLoginsignupModalTop,
    variantsLoginsignupModalRight,
    variantsLoginsignupModalBottom,
    variantsLoginsignupModalLeft,
  ]);

  return (
    <div
      className={`rounded-3xl bg-neutral-800 max-w-full flex flex-col items-end justify-start p-6 box-border gap-[16px] text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={variantsLoginsignupModalStyle}
    >
      <img
        className="w-8 relative h-8 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
      />
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-6 gap-[32px]">
        <div className="self-stretch relative leading-[32px]">{titleText}</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <SizeMediumStateSecondary
            hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
            text="Use Email / Username"
            leftIcon
            sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeMediumStateSecondaryWidth="unset"
            sizeMediumStateSecondaryBorder="unset"
            sizeMediumStateSecondaryAlignSelf="stretch"
            sizeMediumStateSecondaryMargin="unset"
            sizeMediumStateSecondaryPosition="unset"
            sizeMediumStateSecondaryTop="unset"
            sizeMediumStateSecondaryLeft="unset"
          />
          <SizeMediumStateSecondary
            hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
            text="Continue with Google"
            leftIcon
            sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeMediumStateSecondaryWidth="unset"
            sizeMediumStateSecondaryBorder="unset"
            sizeMediumStateSecondaryAlignSelf="stretch"
            sizeMediumStateSecondaryMargin="unset"
            sizeMediumStateSecondaryPosition="unset"
            sizeMediumStateSecondaryTop="unset"
            sizeMediumStateSecondaryLeft="unset"
          />
          <SizeMediumStateSecondary
            hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
            text="Continue with Apple"
            leftIcon
            sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeMediumStateSecondaryWidth="unset"
            sizeMediumStateSecondaryBorder="unset"
            sizeMediumStateSecondaryAlignSelf="stretch"
            sizeMediumStateSecondaryMargin="unset"
            sizeMediumStateSecondaryPosition="unset"
            sizeMediumStateSecondaryTop="unset"
            sizeMediumStateSecondaryLeft="unset"
          />
          <SizeMediumStateSecondary
            hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
            text="Continue with Facebook"
            leftIcon
            sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeMediumStateSecondaryWidth="unset"
            sizeMediumStateSecondaryBorder="unset"
            sizeMediumStateSecondaryAlignSelf="stretch"
            sizeMediumStateSecondaryMargin="unset"
            sizeMediumStateSecondaryPosition="unset"
            sizeMediumStateSecondaryTop="unset"
            sizeMediumStateSecondaryLeft="unset"
          />
        </div>
        <VariantLoginSizeDesktop
          alreadyHaveAnAccount="Don’t have an account? "
          login="Sign up"
          loginTextDecoration="unset"
        />
      </div>
    </div>
  );
};

VariantsLoginsignupModal.propTypes = {
  className: PropTypes.string,
  titleText: PropTypes.string,
  hugeIconinterfacesolidplu: PropTypes.string,
  cTA: PropTypes.string,
  hugeIconinterfacesolidplu1: PropTypes.string,
  hugeIconinterfacesolidplu2: PropTypes.string,
  hugeIconinterfacesolidplu3: PropTypes.string,

  /** Style props */
  variantsLoginsignupModalPosition: PropTypes.any,
  variantsLoginsignupModalHeight: PropTypes.any,
  variantsLoginsignupModalWidth: PropTypes.any,
  variantsLoginsignupModalTop: PropTypes.any,
  variantsLoginsignupModalRight: PropTypes.any,
  variantsLoginsignupModalBottom: PropTypes.any,
  variantsLoginsignupModalLeft: PropTypes.any,
};

export default VariantsLoginsignupModal;

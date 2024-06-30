import { useMemo } from "react";
import DeviceMobile1 from "./DeviceMobile1";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import PropTypes from "prop-types";

const VariantsVerifyAccount = ({
  className = "",
  orSignUpBy,
  getReadyToImmerseYourself,
  cTA,
  showGoogleIcon,
  variantsVerifyAccountPosition,
  variantsVerifyAccountTop,
  variantsVerifyAccountLeft,
  cTADesktopTabletBackgroundColor,
}) => {
  const variantsVerifyAccountStyle = useMemo(() => {
    return {
      position: variantsVerifyAccountPosition,
      top: variantsVerifyAccountTop,
      left: variantsVerifyAccountLeft,
    };
  }, [
    variantsVerifyAccountPosition,
    variantsVerifyAccountTop,
    variantsVerifyAccountLeft,
  ]);

  const sizeMediumStateSecondaryStyle = useMemo(() => {
    return {
      backgroundColor: cTADesktopTabletBackgroundColor,
    };
  }, [cTADesktopTabletBackgroundColor]);

  return (
    <div
      className={`rounded-3xl bg-neutral-800 max-w-full h-[456px] overflow-hidden flex flex-col items-center justify-start p-6 box-border relative gap-[16px] text-left text-xl text-neutral-200 font-overline-regular ${className}`}
      style={variantsVerifyAccountStyle}
    >
      <div className="flex flex-row items-center justify-center gap-[304px] z-[0]">
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowsbulkdirectionleft-011.svg"
        />
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfacesolidremove.svg"
        />
      </div>
      <DeviceMobile1
        text="Verify your account"
        orSignUpFontSize="20px"
        orSignUpLineHeight="28px"
        orSignUpFontWeight="unset"
        orSignUpColor="#e9e9e9"
      />
      <div className="w-[368px] h-[278px] overflow-hidden shrink-0 flex flex-row items-start justify-center z-[2]">
        <div className="self-stretch flex-1 relative leading-[28px]">
          {getReadyToImmerseYourself}
        </div>
      </div>
      <SizeMediumStateSecondary
        hugeIconinterfacesolidplu="/google.svg"
        text="Continue with Google"
        leftIcon
        sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
        sizeMediumStateSecondaryWidth="368px"
        sizeMediumStateSecondaryBorder="unset"
        sizeMediumStateSecondaryAlignSelf="unset"
        sizeMediumStateSecondaryMargin="0 !important"
        sizeMediumStateSecondaryPosition="absolute"
        sizeMediumStateSecondaryTop="388px"
        sizeMediumStateSecondaryLeft="24px"
      />
    </div>
  );
};

VariantsVerifyAccount.propTypes = {
  className: PropTypes.string,
  orSignUpBy: PropTypes.string,
  getReadyToImmerseYourself: PropTypes.string,
  cTA: PropTypes.string,
  showGoogleIcon: PropTypes.bool,

  /** Style props */
  variantsVerifyAccountPosition: PropTypes.any,
  variantsVerifyAccountTop: PropTypes.any,
  variantsVerifyAccountLeft: PropTypes.any,
  cTADesktopTabletBackgroundColor: PropTypes.any,
};

export default VariantsVerifyAccount;

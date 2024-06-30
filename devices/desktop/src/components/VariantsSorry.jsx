import { useMemo } from "react";
import HugeIconinterfaceoutlinewa1 from "./HugeIconinterfaceoutlinewa1";
import DeviceMobile1 from "./DeviceMobile1";
import StateInactiveSizeDefault from "./StateInactiveSizeDefault";
import PropTypes from "prop-types";

const VariantsSorry = ({
  className = "",
  hugeIconinterfaceoutlinew,
  orSignUpBy,
  hugeIconeducationsolidpen,
  showInputsCTA,
  showCTA,
  variantsSorryPosition,
  variantsSorryTop,
  variantsSorryLeft,
  inputsCTAAlignSelf,
  inputsCTAWidth,
  inputsCTAHeight,
  cTAAlignSelf,
  cTAWidth,
}) => {
  const variantsSorryStyle = useMemo(() => {
    return {
      position: variantsSorryPosition,
      top: variantsSorryTop,
      left: variantsSorryLeft,
    };
  }, [variantsSorryPosition, variantsSorryTop, variantsSorryLeft]);

  const inputsCTAStyle = useMemo(() => {
    return {
      alignSelf: inputsCTAAlignSelf,
      width: inputsCTAWidth,
      height: inputsCTAHeight,
    };
  }, [inputsCTAAlignSelf, inputsCTAWidth, inputsCTAHeight]);

  const stateInactiveSizeDefaultStyle = useMemo(() => {
    return {
      alignSelf: cTAAlignSelf,
      width: cTAWidth,
    };
  }, [cTAAlignSelf, cTAWidth]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] flex flex-col items-center justify-center p-6 box-border gap-[16px] ${className}`}
      style={variantsSorryStyle}
    >
      <HugeIconinterfaceoutlinewa1
        hugeIconinterfaceoutlinew="/hugeiconinterfaceoutlinewarning1.svg"
        hugeIconinterfaceoutlinewWidth="56px"
        hugeIconinterfaceoutlinewHeight="56px"
        hugeIconinterfaceoutlinewPosition="relative"
      />
      <DeviceMobile1
        text="Sorry we cannot share your video due to our copyright policy"
        orSignUpFontSize="24px"
        orSignUpLineHeight="32px"
        orSignUpFontWeight="600"
        orSignUpColor="#fff"
      />
      {showInputsCTA && (
        <div
          className="self-stretch flex flex-col items-start justify-start"
          style={inputsCTAStyle}
        >
        <button className={`btn-primary-active`}>Back</button>

        </div>
      )}
    </div>
  );
};

VariantsSorry.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlinew: PropTypes.string,
  orSignUpBy: PropTypes.string,
  hugeIconeducationsolidpen: PropTypes.string,
  showInputsCTA: PropTypes.bool,
  showCTA: PropTypes.bool,

  /** Style props */
  variantsSorryPosition: PropTypes.any,
  variantsSorryTop: PropTypes.any,
  variantsSorryLeft: PropTypes.any,
  inputsCTAAlignSelf: PropTypes.any,
  inputsCTAWidth: PropTypes.any,
  inputsCTAHeight: PropTypes.any,
  cTAAlignSelf: PropTypes.any,
  cTAWidth: PropTypes.any,
};

export default VariantsSorry;

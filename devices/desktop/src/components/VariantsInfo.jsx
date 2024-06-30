import { useMemo } from "react";
import SizeBiggerStateDefaultDe1 from "./SizeBiggerStateDefaultDe1";
import VariantIncomeTablet from "./VariantIncomeTablet";
import VariantTotal from "./VariantTotal";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import PropTypes from "prop-types";

const VariantsInfo = ({
  className = "",
  hugeIconmultimediaAndAudi,
  dropdown,
  hugeIconmultimediaAndAudi1,
  dropdown1,
  hugeIconinterfacesolidplu,
  showDropdown,
  showInput,
  variantsInfoWidth,
  variantsInfoPosition,
  variantsInfoTop,
  variantsInfoRight,
  variantsInfoLeft,
  dropdownHeight,
  dropdownAlignSelf,
  dropdownWidth,
  inputAlignSelf,
  inputWidth,
}) => {
  const variantsInfoStyle = useMemo(() => {
    return {
      width: variantsInfoWidth,
      position: variantsInfoPosition,
      top: variantsInfoTop,
      right: variantsInfoRight,
      left: variantsInfoLeft,
    };
  }, [
    variantsInfoWidth,
    variantsInfoPosition,
    variantsInfoTop,
    variantsInfoRight,
    variantsInfoLeft,
  ]);

  const sizeBiggerStateDefaultDeStyle = useMemo(() => {
    return {
      height: dropdownHeight,
      alignSelf: dropdownAlignSelf,
      width: dropdownWidth,
    };
  }, [dropdownHeight, dropdownAlignSelf, dropdownWidth]);

  const input2Style = useMemo(() => {
    return {
      alignSelf: inputAlignSelf,
      width: inputWidth,
    };
  }, [inputAlignSelf, inputWidth]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] flex flex-col items-end justify-start p-6 box-border gap-[16px] ${className}`}
      style={variantsInfoStyle}
    >
      <img
        className="w-8 relative h-8 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
      />
      <div className="self-stretch h-[360px] flex flex-col items-center justify-center py-0 px-6 box-border">
        <div className="self-stretch flex-1 flex flex-col items-center justify-between">
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            <SizeBiggerStateDefaultDe1
              labelText="Label"
              hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
              inputText="Genre"
              hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
              helperText="Add new card"
              helperText={false}
              label={false}
              leftIcon={false}
              rightIcon
              showInput
              sizeBiggerStateDefaultDeWidth="unset"
              sizeBiggerStateDefaultDePosition="unset"
              sizeBiggerStateDefaultDeTop="unset"
              sizeBiggerStateDefaultDeLeft="unset"
              sizeBiggerStateDefaultDeAlignSelf="stretch"
              sizeBiggerStateDefaultDeHeight="unset"
              labelWidth="320px"
              labelAlignSelf="unset"
              inputAlignSelf="stretch"
              inputWidth="unset"
              hugeIconmultimediaAndAudiOverflow="hidden"
              dropdownColor="#fff"
              helperTextWidth="320px"
              helperTextAlignSelf="unset"
              helperTextColor="#cc0f3c"
            />
            <SizeBiggerStateDefaultDe1
              labelText="Label"
              hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
              inputText="Country"
              hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
              helperText="Add new card"
              helperText={false}
              label={false}
              leftIcon={false}
              rightIcon
              showInput
              sizeBiggerStateDefaultDeWidth="unset"
              sizeBiggerStateDefaultDePosition="unset"
              sizeBiggerStateDefaultDeTop="unset"
              sizeBiggerStateDefaultDeLeft="unset"
              sizeBiggerStateDefaultDeAlignSelf="stretch"
              sizeBiggerStateDefaultDeHeight="unset"
              labelWidth="320px"
              labelAlignSelf="unset"
              inputAlignSelf="stretch"
              inputWidth="unset"
              hugeIconmultimediaAndAudiOverflow="hidden"
              dropdownColor="#fff"
              helperTextWidth="320px"
              helperTextAlignSelf="unset"
              helperTextColor="#cc0f3c"
            />
          </div>
          <div className="w-80 hidden flex-col items-start justify-start">
            <VariantIncomeTablet
              stText="Donation"
              ndText="$10"
              variantIncomeTabletWidth="unset"
              variantIncomeTabletAlignSelf="stretch"
              featureFontSize="16px"
              featureLineHeight="24px"
              premiumColor="#fff"
              premiumFontSize="16px"
              premiumLineHeight="24px"
              premiumFontWeight="bold"
            />
            <VariantIncomeTablet
              stText="Subtotal"
              ndText="$9"
              variantIncomeTabletWidth="unset"
              variantIncomeTabletAlignSelf="stretch"
              featureFontSize="16px"
              featureLineHeight="24px"
              premiumColor="#fff"
              premiumFontSize="16px"
              premiumLineHeight="24px"
              premiumFontWeight="bold"
            />
            <VariantTotal
              ndText="Total: $10"
              variantTotalWidth="189px"
              variantTotalAlignSelf="unset"
            />
          </div>
          <SizeMediumStateSecondary
            hugeIconinterfacesolidplu="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
            text="Next"
            leftIcon={false}
            sizeMediumStateSecondaryBackgroundColor="#cc0f3c"
            sizeMediumStateSecondaryWidth="unset"
            sizeMediumStateSecondaryBorder="unset"
            sizeMediumStateSecondaryAlignSelf="stretch"
            sizeMediumStateSecondaryMargin="unset"
            sizeMediumStateSecondaryPosition="unset"
            sizeMediumStateSecondaryTop="unset"
            sizeMediumStateSecondaryLeft="unset"
          />
        </div>
      </div>
    </div>
  );
};

VariantsInfo.propTypes = {
  className: PropTypes.string,
  hugeIconmultimediaAndAudi: PropTypes.string,
  dropdown: PropTypes.string,
  hugeIconmultimediaAndAudi1: PropTypes.string,
  dropdown1: PropTypes.string,
  hugeIconinterfacesolidplu: PropTypes.string,
  showDropdown: PropTypes.bool,
  showInput: PropTypes.bool,

  /** Style props */
  variantsInfoWidth: PropTypes.any,
  variantsInfoPosition: PropTypes.any,
  variantsInfoTop: PropTypes.any,
  variantsInfoRight: PropTypes.any,
  variantsInfoLeft: PropTypes.any,
  dropdownHeight: PropTypes.any,
  dropdownAlignSelf: PropTypes.any,
  dropdownWidth: PropTypes.any,
  inputAlignSelf: PropTypes.any,
  inputWidth: PropTypes.any,
};

export default VariantsInfo;

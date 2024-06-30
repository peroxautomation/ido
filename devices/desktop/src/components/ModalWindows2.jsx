import { useMemo } from "react";
import SizeBiggerStateDefaultDe1 from "./SizeBiggerStateDefaultDe1";
import VariantIncomeTablet from "./VariantIncomeTablet";
import VariantTotal from "./VariantTotal";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import PropTypes from "prop-types";

const ModalWindows2 = ({
  className = "",
  dropdown,
  showInput,
  propHeight,
  propAlignSelf,
  propWidth,
}) => {
  const dropdown1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const input7Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`absolute w-[calc(100%_-_1024px)] top-[284px] right-[512px] left-[512px] rounded-3xl bg-neutral-800 h-[456px] flex flex-col items-end justify-start p-6 box-border gap-[16px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
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
              hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
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
            {showDropdown && (
              <div
                className="w-80 hidden flex-col items-start justify-start"
                style={dropdown1Style}
              >
                <div className="w-80 hidden flex-row items-start justify-start pt-0 px-0 pb-1 box-border">
                  <div className="flex-1 relative leading-[24px]">Label</div>
                </div>
                {showInput && (
                  <div
                    className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]"
                    style={input7Style}
                  >
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
                    />
                    <div className="flex-1 relative leading-[24px]">Origin</div>
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/hugeiconarrowssoliddirectiondown-01.svg"
                    />
                  </div>
                )}
                <div className="w-80 hidden flex-row items-center justify-start py-1 px-0 box-border text-sm text-primary-500">
                  <div className="flex-1 relative leading-[20px]">
                    Add new card
                  </div>
                </div>
              </div>
            )}
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
            hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
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

ModalWindows2.propTypes = {
  className: PropTypes.string,
  dropdown: PropTypes.string,
  showInput: PropTypes.bool,

  /** Style props */
  propHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default ModalWindows2;

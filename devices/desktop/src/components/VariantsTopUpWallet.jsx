import { useMemo } from "react";
import SizeBiggerStateDefaultDe1 from "./SizeBiggerStateDefaultDe1";
import VariantIncomeTablet from "./VariantIncomeTablet";
import VariantTotal from "./VariantTotal";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import PropTypes from "prop-types";

const VariantsTopUpWallet = ({
  className = "",
  topUpWallet,
  hugeIconmultimediaAndAudi,
  dropdown,
  helperText,
  label1,
  hugeIconmultimediaAndAudi2,
  dropdown1,
  hugeIconarrowssoliddirect,
  hugeIconinterfacesolidplu,
  cTA,
  showDropdown,
  hugeIconmultimediaAndAudi1,
  showHelperText,
  label,
  info,
  variantsTopUpWalletWidth,
  variantsTopUpWalletPosition,
  variantsTopUpWalletTop,
  variantsTopUpWalletRight,
  variantsTopUpWalletLeft,
  modalWithButtonsHeight,
  modalWithButtonsGap,
  dropdownsHeight,
  dropdownsGap,
  dropdownAlignSelf,
  dropdownWidth,
  hugeIconmultimediaAndAudiOverflow,
  helperTextAlignSelf,
  helperTextWidth,
  helperTextColor,
  dropdownWidth1,
  dropdownAlignSelf1,
  labelWidth,
  labelAlignSelf,
  dropdownColor,
  helperTextColor1,
  infoWidth,
  infoAlignSelf,
}) => {
  const variantsTopUpWalletStyle = useMemo(() => {
    return {
      width: variantsTopUpWalletWidth,
      position: variantsTopUpWalletPosition,
      top: variantsTopUpWalletTop,
      right: variantsTopUpWalletRight,
      left: variantsTopUpWalletLeft,
    };
  }, [
    variantsTopUpWalletWidth,
    variantsTopUpWalletPosition,
    variantsTopUpWalletTop,
    variantsTopUpWalletRight,
    variantsTopUpWalletLeft,
  ]);

  const modalWithButtonsStyle = useMemo(() => {
    return {
      height: modalWithButtonsHeight,
      gap: modalWithButtonsGap,
    };
  }, [modalWithButtonsHeight, modalWithButtonsGap]);

  const dropdownsStyle = useMemo(() => {
    return {
      height: dropdownsHeight,
      gap: dropdownsGap,
    };
  }, [dropdownsHeight, dropdownsGap]);

  const sizeBiggerStateDefaultDeStyle = useMemo(() => {
    return {
      alignSelf: dropdownAlignSelf,
      width: dropdownWidth,
    };
  }, [dropdownAlignSelf, dropdownWidth]);

  const hugeIconmultimediaAndAudioStyle = useMemo(() => {
    return {
      overflow: hugeIconmultimediaAndAudiOverflow,
    };
  }, [hugeIconmultimediaAndAudiOverflow]);

  const helperText3Style = useMemo(() => {
    return {
      alignSelf: helperTextAlignSelf,
      width: helperTextWidth,
    };
  }, [helperTextAlignSelf, helperTextWidth]);

  const helperText4Style = useMemo(() => {
    return {
      color: helperTextColor,
    };
  }, [helperTextColor]);

  const sizeBiggerStateDefaultDeStyle1 = useMemo(() => {
    return {
      width: dropdownWidth1,
      alignSelf: dropdownAlignSelf1,
    };
  }, [dropdownWidth1, dropdownAlignSelf1]);

  const label2Style = useMemo(() => {
    return {
      width: labelWidth,
      alignSelf: labelAlignSelf,
    };
  }, [labelWidth, labelAlignSelf]);

  const dropdownStyle = useMemo(() => {
    return {
      color: dropdownColor,
    };
  }, [dropdownColor]);

  const helperText4Style1 = useMemo(() => {
    return {
      color: helperTextColor1,
    };
  }, [helperTextColor1]);

  const infoStyle = useMemo(() => {
    return {
      width: infoWidth,
      alignSelf: infoAlignSelf,
    };
  }, [infoWidth, infoAlignSelf]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] flex flex-col items-end justify-start p-6 box-border gap-[16px] text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={variantsTopUpWalletStyle}
    >
      <img
        className="w-8 relative h-8 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
      />
      <div
        className="self-stretch h-[360px] flex flex-col items-center justify-between py-0 px-6 box-border"
        style={modalWithButtonsStyle}
      >
        <div className="self-stretch relative leading-[32px]">
          {topUpWallet}
        </div>
        <div
          className="self-stretch h-[299px] flex flex-col items-center justify-between"
          style={dropdownsStyle}
        >
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            <SizeBiggerStateDefaultDe1
              labelText="Label"
              hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
              inputText="Choose card"
              hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
              helperText="Add new card"
              helperText
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
              helperTextWidth="unset"
              helperTextAlignSelf="stretch"
              helperTextColor="#cc0f3c"
            />
            <SizeBiggerStateDefaultDe1
              labelText="Label"
              hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
              inputText="From wallet"
              hugeIconarrowssoliddirect="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
              helperText="Helper text"
              helperText={false}
              label={false}
              leftIcon={false}
              rightIcon={false}
              showInput
              sizeBiggerStateDefaultDeWidth="320px"
              sizeBiggerStateDefaultDePosition="unset"
              sizeBiggerStateDefaultDeTop="unset"
              sizeBiggerStateDefaultDeLeft="unset"
              sizeBiggerStateDefaultDeAlignSelf="unset"
              sizeBiggerStateDefaultDeHeight="unset"
              labelWidth="320px"
              labelAlignSelf="unset"
              inputAlignSelf="stretch"
              inputWidth="unset"
              hugeIconmultimediaAndAudiOverflow="hidden"
              dropdownColor="#fff"
              helperTextWidth="320px"
              helperTextAlignSelf="unset"
              helperTextColor="#fff"
            />
          </div>
          {!info && (
            <div
              className="w-80 hidden flex-col items-start justify-start"
              style={infoStyle}
            >
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
          )}
          <SizeMediumStateSecondary
            hugeIconinterfacesolidplu="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
            text="Top up"
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

VariantsTopUpWallet.propTypes = {
  className: PropTypes.string,
  topUpWallet: PropTypes.string,
  hugeIconmultimediaAndAudi: PropTypes.string,
  dropdown: PropTypes.string,
  helperText: PropTypes.string,
  label1: PropTypes.string,
  hugeIconmultimediaAndAudi2: PropTypes.string,
  dropdown1: PropTypes.string,
  hugeIconarrowssoliddirect: PropTypes.string,
  hugeIconinterfacesolidplu: PropTypes.string,
  cTA: PropTypes.string,
  showDropdown: PropTypes.bool,
  hugeIconmultimediaAndAudi1: PropTypes.bool,
  showHelperText: PropTypes.bool,
  label: PropTypes.bool,
  info: PropTypes.bool,

  /** Style props */
  variantsTopUpWalletWidth: PropTypes.any,
  variantsTopUpWalletPosition: PropTypes.any,
  variantsTopUpWalletTop: PropTypes.any,
  variantsTopUpWalletRight: PropTypes.any,
  variantsTopUpWalletLeft: PropTypes.any,
  modalWithButtonsHeight: PropTypes.any,
  modalWithButtonsGap: PropTypes.any,
  dropdownsHeight: PropTypes.any,
  dropdownsGap: PropTypes.any,
  dropdownAlignSelf: PropTypes.any,
  dropdownWidth: PropTypes.any,
  hugeIconmultimediaAndAudiOverflow: PropTypes.any,
  helperTextAlignSelf: PropTypes.any,
  helperTextWidth: PropTypes.any,
  helperTextColor: PropTypes.any,
  dropdownWidth1: PropTypes.any,
  dropdownAlignSelf1: PropTypes.any,
  labelWidth: PropTypes.any,
  labelAlignSelf: PropTypes.any,
  dropdownColor: PropTypes.any,
  helperTextColor1: PropTypes.any,
  infoWidth: PropTypes.any,
  infoAlignSelf: PropTypes.any,
};

export default VariantsTopUpWallet;

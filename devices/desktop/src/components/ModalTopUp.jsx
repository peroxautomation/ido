import { useMemo, useState } from "react";

import SizeBiggerStateDefaultDe1 from "./SizeBiggerStateDefaultDe1";
import VariantIncomeTablet from "./VariantIncomeTablet";
import VariantTotal from "./VariantTotal";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import DropdownsMenuSavedCards from "./DropdownsMenuSavedCards";

const ModalTopUp = (props) => {
  const {
    className = "",
    topUpWallet,
    info,
    propHeight,
    propGap,
    propHeight1,
    propGap1,
    propWidth3,
    propAlignSelf3,
    closeModal,
  } = props;
  const [isSelectCard, setIsSelectCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  const modalWithButtons1Style = useMemo(() => {
    return {
      height: propHeight,
      gap: propGap,
    };
  }, [propHeight, propGap]);

  const dropdowns2Style = useMemo(() => {
    return {
      height: propHeight1,
      gap: propGap1,
    };
  }, [propHeight1, propGap1]);

  const info1Style = useMemo(() => {
    return {
      width: propWidth3,
      alignSelf: propAlignSelf3,
    };
  }, [propWidth3, propAlignSelf3]);

  async function ToggleChooseCard() {
    setIsSelectCard((prev) => !prev);
  }

  async function handleCardSelection() {
    setSelectedCard(true);
    setIsSelectCard(false);
  }

  return (
    <>
      <div
        className={`absolute top-[calc(50%_-_228px)] left-[calc(50%_-_208px)] rounded-3xl bg-neutral-800 w-[416px] h-[456px] flex flex-col items-end justify-start p-6 box-border gap-[16px] text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
      >
        <img
          className="cursor-pointer hover:opacity-80 w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfacesolidremove.svg"
          onClick={closeModal}
        />
        <div
          className="self-stretch h-[360px] flex flex-col items-center justify-between py-0 px-6 box-border"
          style={modalWithButtons1Style}
        >
          <div className="self-stretch relative leading-[32px]">
            {topUpWallet}
          </div>
          <div
            className="self-stretch h-[299px] flex flex-col items-center justify-between"
            style={dropdowns2Style}
          >
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
              <SizeBiggerStateDefaultDe1
                labelText="Label"
                hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
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
                onClick={ToggleChooseCard}
              />
              <SizeBiggerStateDefaultDe1
                labelText="Label"
                hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
                inputText="From wallet"
                hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
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
                style={info1Style}
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
              hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
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
              active={selectedCard}
            />
          </div>
        </div>
      </div>
      {isSelectCard && (
        <DropdownsMenuSavedCards
          all="4169 6372 9301 2884"
          propTop="180px"
          propLeft="48px"
          dropdownsMenuHeight="unset"
          onClick={handleCardSelection}
        />
      )}
    </>
  );
};

export default ModalTopUp;

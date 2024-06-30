import { useMemo } from "react";
import DeviceMobile1 from "./DeviceMobile1";
import StateDefaultSizeBigDevic from "./StateDefaultSizeBigDevic";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";

const VariantsEditPlaylist = (props) => {
  const {
    className = "",
    hugeIconinterfacesolidinf,
    hugeIconinterfacesolideye,
    hugeIconinterfacesolidplu,
    variantsEditPlaylistPosition,
    variantsEditPlaylistTop,
    variantsEditPlaylistLeft,
    closeEditPlaylist,
  } = props;
  const variantsEditPlaylistStyle = useMemo(() => {
    return {
      position: variantsEditPlaylistPosition,
      top: variantsEditPlaylistTop,
      left: variantsEditPlaylistLeft,
    };
  }, [
    variantsEditPlaylistPosition,
    variantsEditPlaylistTop,
    variantsEditPlaylistLeft,
  ]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] flex flex-col items-center justify-center p-6 box-border relative gap-[24px] ${className}`}
      style={variantsEditPlaylistStyle}
    >
      <div className="flex flex-col items-center justify-center pt-0 px-0 pb-[132px] gap-[24px] z-[0]">
        <DeviceMobile1
          text="Edit playlist"
          orSignUpFontSize="24px"
          orSignUpLineHeight="32px"
          orSignUpFontWeight="600"
          orSignUpColor="#fff"
        />
        <StateDefaultSizeBigDevic
          labelText="Title"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation4.svg"
          inputText="Want to try"
          hugeIconinterfacesolideye="/hugeiconinterfacesolidinformation4.svg"
          helperText="Helper text"
          label
          eye={false}
          infoIcon={false}
          helperText={false}
          showInputAndWord
          showInput
          stateDefaultSizeBigDevicAlignSelf="unset"
          stateDefaultSizeBigDevicWidth="340px"
          stateDefaultSizeBigDevicPosition="unset"
          stateDefaultSizeBigDevicTop="unset"
          stateDefaultSizeBigDevicRight="unset"
          stateDefaultSizeBigDevicLeft="unset"
          inputGap="8px"
          inputBorder="unset"
          inputOutline="unset"
          inputFontFamily="unset"
          inputFontSize="unset"
          inputColor="unset"
          inputAndWordFlex="1"
          inputAndWordWidth="unset"
          inputAndWordPadding="unset"
          inputAndWordBorder="unset"
          inputAndWordOutline="unset"
          inputAndWordFontFamily="unset"
          inputAndWordFontSize="unset"
          inputAndWordBackgroundColor="unset"
          inputAndWordColor="unset"
          inputColor1="#fff"
          inputLineHeight="24px"
          inputTextAlign="center"
          inputFlex="unset"
          inputFontSize1="16px"
          inputFontFamily1="Nunito"
          inputWidth="unset"
          inputHeight="unset"
          inputOverflow="unset"
          hugeIconinterfacesolideyeWidth="24px"
          hugeIconinterfacesolideyePosition="relative"
          hugeIconinterfacesolideyeHeight="24px"
          hugeIconinterfacesolideyeOverflow="hidden"
          hugeIconinterfacesolideyeFlexDirection="unset"
          hugeIconinterfacesolideyePadding="unset"
          helperTextAlignSelf="unset"
          helperTextWidth="340px"
          helperTextFlexDirection="row"
          helperTextPadding="4px 0px"
          helperTextFlex="unset"
          helperTextPosition="unset"
          helperTextFontSize="unset"
          helperTextLineHeight="unset"
          helperTextFontFamily="unset"
          helperTextColor="unset"
          helperTextTextAlign="unset"
          helperTextColor1="#fff"
        />
        <SizeMediumStateSecondary
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidinformation4.svg"
          text="Save"
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
      <img
        className="cursor-pointer hover:opacity-80 w-8 absolute !m-[0] top-[24px] left-[360px] h-8 overflow-hidden shrink-0 z-[1]"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
        onClick={closeEditPlaylist}
      />
    </div>
  );
};

export default VariantsEditPlaylist;

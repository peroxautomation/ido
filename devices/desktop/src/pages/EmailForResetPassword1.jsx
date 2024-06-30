import TitleTablet from "../components/TitleTablet";
import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";

const EmailForResetPassword1 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <TitleTablet
        titleOfPage="Reset password"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="40px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <div className="absolute top-[152px] left-[202px] flex flex-col items-start justify-start gap-[16px]">
        <StateDefaultSizeBigDevic
          labelText="Email"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation3.svg"
          inputText="someemail@gmail.com"
          hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
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
        <SizeBigStateSecondaryDev
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
          text="Send code"
          hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus1.svg"
          leftIcon={false}
          rightIcon={false}
          sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
          sizeBigStateSecondaryDevAlignSelf="unset"
          sizeBigStateSecondaryDevWidth="340px"
          sizeBigStateSecondaryDevPosition="unset"
          sizeBigStateSecondaryDevRight="unset"
          sizeBigStateSecondaryDevBottom="unset"
          sizeBigStateSecondaryDevLeft="unset"
          sizeBigStateSecondaryDevFlex="unset"
          sizeBigStateSecondaryDevBorder="unset"
          sizeBigStateSecondaryDevTop="unset"
          cTAColor="#fff"
        />
      </div>
    </div>
  );
};

export default EmailForResetPassword1;

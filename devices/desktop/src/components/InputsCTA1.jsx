import StateDefaultSizeBigDevic from "./StateDefaultSizeBigDevic";
import StateTabletTextArea from "./StateTabletTextArea";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import PropTypes from "prop-types";

const InputsCTA1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[228px] left-[312px] flex flex-col items-start justify-start gap-[16px] ${className}`}
    >
      <StateDefaultSizeBigDevic
        labelText="Full name"
        hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
        inputText="Enter your full name"
        hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
        helperText="Helper text"
        label
        eye={false}
        infoIcon={false}
        helperText={false}
        showInputAndWord
        showInput
        stateDefaultSizeBigDevicAlignSelf="unset"
        stateDefaultSizeBigDevicWidth="320px"
        stateDefaultSizeBigDevicPosition="unset"
        stateDefaultSizeBigDevicTop="unset"
        stateDefaultSizeBigDevicRight="unset"
        stateDefaultSizeBigDevicLeft="unset"
        inputGap="unset"
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
        inputColor1="rgba(255, 255, 255, 0.16)"
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
        helperTextWidth="320px"
        helperTextFlexDirection="row"
        helperTextPadding="4px 0px"
        helperTextFlex="unset"
        helperTextPosition="unset"
        helperTextFontSize="unset"
        helperTextLineHeight="unset"
        helperTextFontFamily="unset"
        helperTextColor="unset"
        helperTextTextAlign="unset"
        helperTextColor1="#424242"
      />
      <StateDefaultSizeBigDevic
        labelText="Email"
        hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
        inputText="Enter yor email"
        hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
        helperText="Helper text"
        label
        eye={false}
        infoIcon={false}
        helperText={false}
        showInputAndWord
        showInput
        stateDefaultSizeBigDevicAlignSelf="unset"
        stateDefaultSizeBigDevicWidth="320px"
        stateDefaultSizeBigDevicPosition="unset"
        stateDefaultSizeBigDevicTop="unset"
        stateDefaultSizeBigDevicRight="unset"
        stateDefaultSizeBigDevicLeft="unset"
        inputGap="unset"
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
        inputColor1="rgba(255, 255, 255, 0.16)"
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
        helperTextWidth="320px"
        helperTextFlexDirection="row"
        helperTextPadding="4px 0px"
        helperTextFlex="unset"
        helperTextPosition="unset"
        helperTextFontSize="unset"
        helperTextLineHeight="unset"
        helperTextFontFamily="unset"
        helperTextColor="unset"
        helperTextTextAlign="unset"
        helperTextColor1="#424242"
      />
      <StateTabletTextArea
        questionText="Your message"
        hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
        answerText="Your message"
        showInfo
        stateTabletTextAreaWidth="320px"
        stateTabletTextAreaAlignSelf="unset"
        textAreaHeight="140px"
        answerForQuestionColor="#424242"
      />
      <SizeMediumStateSecondary
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        text="Send message"
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
  );
};

InputsCTA1.propTypes = {
  className: PropTypes.string,
};

export default InputsCTA1;

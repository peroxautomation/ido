import StateDefaultSizeBigDevic from "./StateDefaultSizeBigDevic";
import StateErrorSizeBigDevice from "./StateErrorSizeBigDevice";
import PropTypes from "prop-types";

const InputsBtns = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_404px)] top-[152px] right-[202px] left-[202px] flex flex-col items-center justify-center gap-[16px] ${className}`}
    >
      <StateDefaultSizeBigDevic
        labelText="New password"
        hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
        inputText="Enter your new password"
        hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
        helperText="Helper text"
        label
        eye={false}
        infoIcon={false}
        helperText={false}
        showInputAndWord
        showInput
        stateDefaultSizeBigDevicAlignSelf="stretch"
        stateDefaultSizeBigDevicWidth="unset"
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
        helperTextColor1="#424242"
      />
      <StateErrorSizeBigDevice
        labelText="Confirm new password"
        inputText="Passwords didn't match"
        hugeIconinterfaceoutlinew="/hugeiconinterfaceoutlinewarningerror1.svg"
        helperText="Helper text"
        label
        eye={false}
        helperText={false}
        helperTextAlignSelf="unset"
        helperTextWidth="340px"
      />
       <ButtonDefault leftIcon={""} text="Reset" rightIcon={""} />
    </div>
  );
};

InputsBtns.propTypes = {
  className: PropTypes.string,
};

export default InputsBtns;

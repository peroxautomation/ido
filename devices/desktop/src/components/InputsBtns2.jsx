import StateDefaultSizeBigDevic from "./StateDefaultSizeBigDevic";
import TermsAndConditionsForgotPa from "./TermsAndConditionsForgotPa";
import StateSecondarySizeBig from "./StateSecondarySizeBig";
import VariantLogin from "./VariantLogin";
import PropTypes from "prop-types";

const InputsBtns21 = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_404px)] top-[156px] right-[202px] left-[202px] flex flex-col items-center justify-center gap-[16px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <StateDefaultSizeBigDevic
              labelText="Email"
              hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
              inputText="Enter your email"
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
            <StateDefaultSizeBigDevic
              labelText="Password"
              hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
              inputText="Enter your password"
              hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
              helperText="Helper text"
              label
              eye
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
          </div>
        </div>
      </div>
      <TermsAndConditionsForgotPa
        termsAndConditionsForgotPAlignSelf="stretch"
        termsAndConditionsForgotPWidth="unset"
        forgotPasswordTextDecoration="unset"
      />
       <ButtonDefault leftIcon={""} text="Login" rightIcon={""} />
      <StateSecondarySizeBig
        hugeIconinterfacesolidplu="/google.svg"
        text="Continue with Google"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus1.svg"
        rightIcon={false}
        leftIcon
        stateSecondarySizeBigAlignSelf="stretch"
        stateSecondarySizeBigPosition="unset"
        stateSecondarySizeBigTop="unset"
        stateSecondarySizeBigLeft="unset"
        stateSecondarySizeBigWidth="unset"
        stateSecondarySizeBigHeight="unset"
      />
      <StateSecondarySizeBig
        hugeIconinterfacesolidplu="/apple.svg"
        text="Continue with Apple"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus.svg"
        rightIcon={false}
        leftIcon
        stateSecondarySizeBigAlignSelf="stretch"
        stateSecondarySizeBigPosition="unset"
        stateSecondarySizeBigTop="unset"
        stateSecondarySizeBigLeft="unset"
        stateSecondarySizeBigWidth="unset"
        stateSecondarySizeBigHeight="unset"
      />
      <StateSecondarySizeBig
        hugeIconinterfacesolidplu="/facebook.svg"
        text="Continue with  Facebook"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus1.svg"
        rightIcon={false}
        leftIcon
        stateSecondarySizeBigAlignSelf="stretch"
        stateSecondarySizeBigPosition="unset"
        stateSecondarySizeBigTop="unset"
        stateSecondarySizeBigLeft="unset"
        stateSecondarySizeBigWidth="unset"
        stateSecondarySizeBigHeight="unset"
      />
      <VariantLogin
        alreadyHaveAnAccount="Don’t have an account? "
        login="Sign up"
        variantLoginAlignSelf="stretch"
        variantLoginPosition="unset"
        variantLoginTop="unset"
        variantLoginLeft="unset"
        variantLoginWidth="unset"
        loginTextDecoration="unset"
      />
    </div>
  );
};

InputsBtns21.propTypes = {
  className: PropTypes.string,
};

export default InputsBtns21;

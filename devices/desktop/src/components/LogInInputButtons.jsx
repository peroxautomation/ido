import Property1Desktop1 from "./Property1Desktop1";
import StateDefaultSizeBigDevic from "./StateDefaultSizeBigDevic";
import Input from "./Input";
import TermsAndConditionsForgotPa from "./TermsAndConditionsForgotPa";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import DeviceMobile1 from "./DeviceMobile1";
import VariantLogin from "./VariantLogin";


const LogInInputButtons = (props) => {
  const { className = "" } = props;
  return (
    <div
      className={`absolute w-[calc(100%_-_1120px)] top-[calc(50%_-_309px)] right-[560px] left-[560px] flex flex-col items-start justify-start gap-[16px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <Property1Desktop1
        text="Log in"
        property1DesktopAlignSelf="stretch"
        property1DesktopPosition="unset"
        property1DesktopTop="unset"
        property1DesktopLeft="unset"
        property1DesktopWidth="unset"
        property1DesktopBottom="unset"
        property1DesktopHeight="unset"
      />
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
          <StateDefaultSizeBigDevic
            labelText="Email"
            hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
            inputText="Helper text"
            label
            infoIcon={false}
            showInputAndWord={false}
            showInput
            stateDefaultSizeBigDevicAlignSelf="stretch"
            stateDefaultSizeBigDevicWidth="unset"
            stateDefaultSizeBigDevicPosition="unset"
            stateDefaultSizeBigDevicTop="unset"
            stateDefaultSizeBigDevicRight="unset"
            stateDefaultSizeBigDevicLeft="unset"
            inputGap="unset"
            inputBorder="none"
            inputOutline="none"
            inputFontFamily="Nunito"
            inputFontSize="16px"
            inputColor="rgba(255, 255, 255, 0.16)"
            inputAndWordFlex="unset"
            inputAndWordWidth="320px"
            inputAndWordPadding="4px 0px"
            inputAndWordBorder="unset"
            inputAndWordOutline="unset"
            inputAndWordFontFamily="unset"
            inputAndWordFontSize="unset"
            inputAndWordBackgroundColor="unset"
            inputAndWordColor="unset"
            inputColor1="#424242"
            inputLineHeight="20px"
            inputTextAlign="left"
            inputFlex="1"
            inputFontSize1="14px"
            inputFontFamily1="Nunito"
            inputWidth="unset"
            inputHeight="unset"
            inputOverflow="unset"
          />
          <Input
            inputLabel="Password"
            inputPlaceholder="Enter your password"
            helperText="Helper text"
            label
            eye
            infoIcon={false}
            helperText={false}
            showHelperText
          />
        </div>
        <TermsAndConditionsForgotPa
          termsAndConditionsForgotPAlignSelf="stretch"
          termsAndConditionsForgotPWidth="unset"
          forgotPasswordTextDecoration="none"
        />
      </div>
      <SizeMediumStateSecondary
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        text="Login"
        leftIcon={false}
        sizeMediumStateSecondaryBackgroundColor="#cc0f3c"
        sizeMediumStateSecondaryWidth="unset"
        sizeMediumStateSecondaryBorder="none"
        sizeMediumStateSecondaryAlignSelf="stretch"
        sizeMediumStateSecondaryMargin="unset"
        sizeMediumStateSecondaryPosition="unset"
        sizeMediumStateSecondaryTop="unset"
        sizeMediumStateSecondaryLeft="unset"
      />
      <DeviceMobile1
        text="Or log in by"
        orSignUpFontSize="16px"
        orSignUpLineHeight="24px"
        orSignUpFontWeight="600"
        orSignUpColor="#fff"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <SizeMediumStateSecondary
          hugeIconinterfacesolidplu="/google.svg"
          text="Continue with Google"
          leftIcon
          sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeMediumStateSecondaryWidth="unset"
          sizeMediumStateSecondaryBorder="none"
          sizeMediumStateSecondaryAlignSelf="stretch"
          sizeMediumStateSecondaryMargin="unset"
          sizeMediumStateSecondaryPosition="unset"
          sizeMediumStateSecondaryTop="unset"
          sizeMediumStateSecondaryLeft="unset"
        />
        <SizeMediumStateSecondary
          hugeIconinterfacesolidplu="/apple.svg"
          text="Continue with Apple"
          leftIcon
          sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeMediumStateSecondaryWidth="unset"
          sizeMediumStateSecondaryBorder="none"
          sizeMediumStateSecondaryAlignSelf="stretch"
          sizeMediumStateSecondaryMargin="unset"
          sizeMediumStateSecondaryPosition="unset"
          sizeMediumStateSecondaryTop="unset"
          sizeMediumStateSecondaryLeft="unset"
        />
        <SizeMediumStateSecondary
          hugeIconinterfacesolidplu="/facebook.svg"
          text="Continue with Facebook"
          leftIcon
          sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeMediumStateSecondaryWidth="unset"
          sizeMediumStateSecondaryBorder="none"
          sizeMediumStateSecondaryAlignSelf="stretch"
          sizeMediumStateSecondaryMargin="unset"
          sizeMediumStateSecondaryPosition="unset"
          sizeMediumStateSecondaryTop="unset"
          sizeMediumStateSecondaryLeft="unset"
        />
      </div>
      <VariantLogin
        alreadyHaveAnAccount="Don’t have an account? "
        login="Sign up"
        variantLoginAlignSelf="stretch"
        variantLoginPosition="unset"
        variantLoginTop="unset"
        variantLoginLeft="unset"
        variantLoginWidth="unset"
        loginTextDecoration="none"
      />
    </div>
  );
};


export default LogInInputButtons;

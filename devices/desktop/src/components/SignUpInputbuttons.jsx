import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Property1Desktop1 from "./Property1Desktop1";
import StateDefaultSizeBigDevic from "./StateDefaultSizeBigDevic";
import Input from "./Input";
import SizeBiggerStateDefaultDe1 from "./SizeBiggerStateDefaultDe1";
import SizeMediumStateSecondary from "./SizeMediumStateSecondary";
import Property1Desktop from "./Property1Desktop";
import VariantLoginSizeDesktop from "./VariantLoginSizeDesktop";

const SignUpInputbuttons = (props) => {
  const { className = "" } = props;

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isGoogle, setIsGoogle] = useState(false);
  const [isFacebook, setIsFacebook] = useState(false);
  const [isApple, setIsApple] = useState(false);

  async function signUpRedirect() {
    navigate("/d-sign-up");
  }
  async function googleRedirect() {
    navigate("/google-auth");
  }
  async function facebookRedirect() {
    navigate("/google-auth");
  }
  async function appleRedirect() {
    navigate("/google-auth");
  }

  return (
    <div
      className={`absolute top-[calc(50%_-_436px)] left-[calc(50%_-_160px)] flex flex-col items-start justify-start gap-[16px] ${className}`}
    >
      <Property1Desktop1
        text="Sign up"
        property1DesktopAlignSelf="unset"
        property1DesktopPosition="unset"
        property1DesktopTop="unset"
        property1DesktopLeft="unset"
        property1DesktopWidth="320px"
        property1DesktopBottom="unset"
        property1DesktopHeight="unset"
      />
      <StateDefaultSizeBigDevic
        labelText="Email"
        hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
        inputText="Helper text"
        label
        infoIcon={false}
        showInputAndWord={false}
        showInput
        stateDefaultSizeBigDevicAlignSelf="unset"
        stateDefaultSizeBigDevicWidth="320px"
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
      <StateDefaultSizeBigDevic
        labelText="Username"
        hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
        inputText="Helper text"
        label
        infoIcon={false}
        showInputAndWord={false}
        showInput
        stateDefaultSizeBigDevicAlignSelf="unset"
        stateDefaultSizeBigDevicWidth="320px"
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
        label
        infoIcon={false}
        helperText
        showHelperText={false}
        propAlignSelf="unset"
        propWidth="320px"
        propBorder="unset"
        propOutline="unset"
        propFontFamily="unset"
        propFontSize="unset"
        propColor="unset"
        propWidth1="unset"
        propPadding="unset"
        propBorder1="none"
        propOutline1="none"
        propFontFamily1="Nunito"
        propFontSize1="16px"
        propBackgroundColor="transparent"
        propFlex="1"
        propColor1="rgba(255, 255, 255, 0.16)"
        propFlex1="unset"
        propFontSize2="unset"
        propLineHeight="unset"
        propFontFamily2="unset"
        propColor2="unset"
        propTextAlign="unset"
        propBorder2="none"
        propPadding1="0"
        propBackgroundColor1="transparent"
        propWidth2="24px"
        propHeight="24px"
        propOverflow="hidden"
      />
      <Input
        inputLabel="Confirm password"
        label
        infoIcon={false}
        helperText
        showHelperText={false}
        propAlignSelf="unset"
        propWidth="320px"
        propBorder="unset"
        propOutline="unset"
        propFontFamily="unset"
        propFontSize="unset"
        propColor="unset"
        propWidth1="unset"
        propPadding="unset"
        propBorder1="none"
        propOutline1="none"
        propFontFamily1="Nunito"
        propFontSize1="16px"
        propBackgroundColor="transparent"
        propFlex="1"
        propColor1="rgba(255, 255, 255, 0.16)"
        propFlex1="unset"
        propFontSize2="unset"
        propLineHeight="unset"
        propFontFamily2="unset"
        propColor2="unset"
        propTextAlign="unset"
        propBorder2="none"
        propPadding1="0"
        propBackgroundColor1="transparent"
        propWidth2="24px"
        propHeight="24px"
        propOverflow="hidden"
      />
      <SizeBiggerStateDefaultDe1
        labelText="Label"
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        inputText="Birthday"
        hugeIconarrowssoliddirect="/hugeiconinterfaceoutlinecalendar.svg"
        helperText="Helper text"
        helperText={false}
        label={false}
        leftIcon={false}
        rightIcon
        showInput
        sizeBiggerStateDefaultDeWidth="unset"
        sizeBiggerStateDefaultDePosition="unset"
        sizeBiggerStateDefaultDeTop="unset"
        sizeBiggerStateDefaultDeLeft="unset"
        sizeBiggerStateDefaultDeAlignSelf="unset"
        sizeBiggerStateDefaultDeHeight="unset"
        labelWidth="320px"
        labelAlignSelf="unset"
        inputAlignSelf="unset"
        inputWidth="320px"
        hugeIconmultimediaAndAudiOverflow="hidden"
        dropdownColor="#fff"
        helperTextWidth="320px"
        helperTextAlignSelf="unset"
        helperTextColor="#fff"
      />
      <SizeBiggerStateDefaultDe1
        labelText="Label"
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        inputText="Gender"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
        helperText="Helper text"
        helperText={false}
        label={false}
        leftIcon={false}
        rightIcon
        showInput
        sizeBiggerStateDefaultDeWidth="unset"
        sizeBiggerStateDefaultDePosition="unset"
        sizeBiggerStateDefaultDeTop="unset"
        sizeBiggerStateDefaultDeLeft="unset"
        sizeBiggerStateDefaultDeAlignSelf="unset"
        sizeBiggerStateDefaultDeHeight="unset"
        labelWidth="320px"
        labelAlignSelf="unset"
        inputAlignSelf="unset"
        inputWidth="320px"
        hugeIconmultimediaAndAudiOverflow="hidden"
        dropdownColor="#fff"
        helperTextWidth="320px"
        helperTextAlignSelf="unset"
        helperTextColor="#fff"
      />
      <SizeMediumStateSecondary
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
        text="Sign up"
        leftIcon={false}
        sizeMediumStateSecondaryBackgroundColor="#cc0f3c"
        sizeMediumStateSecondaryWidth="320px"
        sizeMediumStateSecondaryBorder="none"
        sizeMediumStateSecondaryAlignSelf="unset"
        sizeMediumStateSecondaryMargin="unset"
        sizeMediumStateSecondaryPosition="unset"
        sizeMediumStateSecondaryTop="unset"
        sizeMediumStateSecondaryLeft="unset"
      />
      <Property1Desktop text="Or sign up by" />
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <SizeMediumStateSecondary
          hugeIconinterfacesolidplu="/google.svg"
          text="Continue with Google"
          leftIcon
          sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeMediumStateSecondaryWidth="320px"
          sizeMediumStateSecondaryBorder="none"
          sizeMediumStateSecondaryAlignSelf="unset"
          sizeMediumStateSecondaryMargin="unset"
          sizeMediumStateSecondaryPosition="unset"
          sizeMediumStateSecondaryTop="unset"
          sizeMediumStateSecondaryLeft="unset"
          loginPage={googleRedirect}
        />
        <SizeMediumStateSecondary
          hugeIconinterfacesolidplu="/apple.svg"
          text="Continue with Apple"
          leftIcon
          sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeMediumStateSecondaryWidth="320px"
          sizeMediumStateSecondaryBorder="none"
          sizeMediumStateSecondaryAlignSelf="unset"
          sizeMediumStateSecondaryMargin="unset"
          sizeMediumStateSecondaryPosition="unset"
          sizeMediumStateSecondaryTop="unset"
          sizeMediumStateSecondaryLeft="unset"
          loginPage={facebookRedirect}
        />
        <SizeMediumStateSecondary
          hugeIconinterfacesolidplu="/facebook.svg"
          text="Continue with Facebook"
          leftIcon
          sizeMediumStateSecondaryBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeMediumStateSecondaryWidth="320px"
          sizeMediumStateSecondaryBorder="none"
          sizeMediumStateSecondaryAlignSelf="unset"
          sizeMediumStateSecondaryMargin="unset"
          sizeMediumStateSecondaryPosition="unset"
          sizeMediumStateSecondaryTop="unset"
          sizeMediumStateSecondaryLeft="unset"
          loginPage={appleRedirect}
        />
        <VariantLoginSizeDesktop
          alreadyHaveAnAccount="Already have an account?"
          login="Login"
          loginTextDecoration="none"
        />
      </div>
    </div>
  );
};

export default SignUpInputbuttons;

import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Property1Desktop1 from "../components/Property1Desktop1";
import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";
import Input from "../components/Input";
import TermsAndConditionsForgotPa from "../components/TermsAndConditionsForgotPa";
import SizeMediumStateSecondary from "../components/SizeMediumStateSecondary";
import DeviceMobile1 from "../components/DeviceMobile1";
import VariantLogin from "../components/VariantLogin";

const DLogin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isGoogle, setIsGoogle] = useState(false);
  const [isFacebook, setIsFacebook] = useState(false);
  const [isApple, setIsApple] = useState(false);

  async function loginRedirect() {
    navigate("/");
  }

  async function forgotPasswordRedirect() {
    navigate("/d-reset-password");
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
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <div
        className={`absolute w-[calc(100%_-_1120px)] top-[calc(50%_-_309px)] right-[560px] left-[560px] flex flex-col items-start justify-start gap-[16px] text-left text-base text-neutral-100 font-overline-regular`}
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
            onClick={forgotPasswordRedirect}
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
          onClick={loginRedirect}
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
            onClick={googleRedirect}
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
            onClick={facebookRedirect}
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
            onClick={appleRedirect}
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
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[56px] left-[48px] w-[9.2px] h-[19.2px]">
        <img
          className="absolute top-[0px] left-[0px] w-[9.2px] h-[19.2px] object-contain"
          alt=""
          src="/vector-175-stroke.svg"
        />
      </button>
    </div>
  );
};

export default DLogin;

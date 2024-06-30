import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Property1Desktop1 from "../components/Property1Desktop1";
import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";
import SizeBiggerStateDefaultDe1 from "../components/SizeBiggerStateDefaultDe1";
import SizeMediumStateSecondary from "../components/SizeMediumStateSecondary";
import Property1Desktop from "../components/Property1Desktop";
import SocialButtons from "../components/SocialButtons";
import StateWithStrokeSizeSmall from "../components/StateWithStrokeSizeSmall";
import Processing from "./Processing";
import OTPVerification from "../components/OTPVerification";

const DSignUp = () => {
  const navigate = useNavigate();

  const [isHome, setIsHome] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOTPError, setIsOTPError] = useState(false);
  const [isOTP, setIsOTP] = useState(false);

  const [isLogin, setIsLogin] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isGoogle, setIsGoogle] = useState(false);
  const [isFacebook, setIsFacebook] = useState(false);
  const [isApple, setIsApple] = useState(false);
  const [isGender, setIsGender] = useState(false);

  async function previousSignUpPage() {
    navigate("/d-sign-up-question-1");
  }

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

  async function openGenderModel() {
    setIsGender((prev) => !prev);
  }

  async function redirectLogin() {
    navigate("/d-login");
  }

  async function successRedirect() {
    setIsSuccess(true);
    navigate("/");
  }

  async function otpScreen() {
    setIsHome(false);
    setIsProcessing(false);
    setIsOTP(true);
  }

  async function processingScreen() {
    setIsHome(false);
    setIsProcessing(true);
    setIsOTP(false);
  }

  // redirect to processing screen after a few seconds and then  password updated screen for testing purposes
  useEffect(() => {
    if (isProcessing) {
      setTimeout(() => {
        otpScreen();
      }, 1000);
    }
  }, [isProcessing]);

  useEffect(() => {
    if (isOTP) {
      setTimeout(() => {
        successRedirect();
      }, 2000);
    }
  }, [isOTP]);

  return (
    <>
      {isHome && (
        <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_436px)] left-[calc(50%_-_160px)] flex flex-col items-start justify-start gap-[16px]">
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
              inputText="Enter your email"
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
              labelText="Username"
              hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
              inputText="Username"
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
              labelText="Password"
              hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
              inputText="Create password"
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
              labelText="Confirm password"
              hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
              inputText="Confirm your password"
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
              onClick={openGenderModel}
            />
            <SizeMediumStateSecondary
              hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
              text="Sign up"
              leftIcon={false}
              sizeMediumStateSecondaryBackgroundColor="#cc0f3c"
              sizeMediumStateSecondaryWidth="320px"
              sizeMediumStateSecondaryBorder="unset"
              sizeMediumStateSecondaryAlignSelf="unset"
              sizeMediumStateSecondaryMargin="unset"
              sizeMediumStateSecondaryPosition="unset"
              sizeMediumStateSecondaryTop="unset"
              sizeMediumStateSecondaryLeft="unset"
              onClick={processingScreen}
            />
            <Property1Desktop text="Or signup by" />
            <SocialButtons
              googleRedirect={googleRedirect}
              facebookRedirect={facebookRedirect}
              appleRedirect={appleRedirect}
            />
          </div>
          {isGender && (
            <div className="absolute top-[604px] left-[calc(50%_-_160px)] shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-xl w-80 overflow-hidden flex flex-col items-start justify-start">
              <StateWithStrokeSizeSmall
                hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
                hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
                text="Male"
                icon={false}
                stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
                stateWithStrokeSizeSmallAlignSelf="stretch"
                stateWithStrokeSizeSmallWidth="unset"
                hugeIcontimeAndDatesolidOverflow="hidden"
                allTextDecoration="unset"
              />
              <StateWithStrokeSizeSmall
                hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
                hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
                text="Female"
                icon={false}
                stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
                stateWithStrokeSizeSmallAlignSelf="stretch"
                stateWithStrokeSizeSmallWidth="unset"
                hugeIcontimeAndDatesolidOverflow="hidden"
                allTextDecoration="unset"
              />
              <StateWithStrokeSizeSmall
                hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
                hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
                text="I don't want to say"
                icon={false}
                stateWithStrokeSizeSmallBorderBottom="unset"
                stateWithStrokeSizeSmallAlignSelf="stretch"
                stateWithStrokeSizeSmallWidth="unset"
                hugeIcontimeAndDatesolidOverflow="hidden"
                allTextDecoration="unset"
              />
            </div>
          )}

          <img
            className="cursor-pointer hover:opacity-80 absolute top-[56px] left-[48px] w-[9.2px] h-[19.2px]"
            alt=""
            src="/direction-left.svg"
            onClick={previousSignUpPage}
          />
        </div>
      )}
      {isOTP && <OTPVerification />}
      {isProcessing && <Processing />}
    </>
  );
};

export default DSignUp;

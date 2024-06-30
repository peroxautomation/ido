import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import TitleTablet from "../components/TitleTablet";
import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";
import StateInactiveSizeSmallDe from "../components/StateInactiveSizeSmallDe";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";
import VariantTabletFeature from "../components/VariantTabletFeature";
import VariantTotal from "../components/VariantTotal";
import Processing from "./Processing";
import OTPVerification from "../components/OTPVerification";

const PaymentPremiumPlan = () => {

  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOTPError, setIsOTPError] = useState(false);
  const [isOTP, setIsOTP] = useState(false);

  console.log({ isSuccess });

  async function subscribe() {
    setIsSuccess(true);
    navigate("/d-premium-plan-active");
  }

  async function homeScreen() {
    setIsHome(true);
    setIsProcessing(false);
    setIsOTP(false);
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

  async function successScreen() {
    setIsHome(false);
    setIsProcessing(false);
    setIsOTP(true);
    // navigate("/d-premium-plan-active");
  }

  // redirect to processing screen after a few seconds and then  premium plan active screen for testing purposes
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
        subscribe();
      }, 2000);
    }
  }, [isOTP]);

  return (
    <>
    {isHome &&  <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <TitleTablet
        titleOfPage="Start premium plan"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="40px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
        returnToPrevious={""}
      />
      <div className="flex flex-col xl:flex-row justify-center items-center gap-2 w-full h-full">
      <div className="w-[calc(100%_-_356px)] min-w-[388px] max-w-[400px] top-[380px] rounded-2xl bg-neutral-800 flex flex-col items-start justify-start p-6 box-border gap-[16px]">
        <StateDefaultSizeBigDevic
          labelText="Card holder name"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
          inputText="Enter card holder name"
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
          labelText="Card number"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
          inputText="Enter card number"
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
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
          <StateInactiveSizeSmallDe
            labelText="MM/YY"
            hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
            inputText="03/26"
            helperText="Helper text"
            label
            infoIcon={false}
            helperText={false}
            showInput
            stateInactiveSizeSmallDeFlex="1"
            inputAndWordBorder="unset"
            inputAndWordOutline="unset"
            inputAndWordFontFamily="unset"
            inputAndWordFontSize="unset"
            inputAndWordBackgroundColor="unset"
            inputAndWordColor="unset"
            inputFlex="1"
            inputPosition="relative"
            inputFontSize="16px"
            inputLineHeight="24px"
            inputFontFamily="Nunito"
            inputColor="#424242"
            inputTextAlign="left"
            inputWidth="unset"
            inputFlexDirection="unset"
            inputPadding="unset"
            helperTextWidth="160px"
            helperTextFlexDirection="row"
            helperTextPadding="4px 0px"
            helperTextFlex="unset"
            helperTextPosition="unset"
            helperTextFontSize="unset"
            helperTextLineHeight="unset"
            helperTextFontFamily="unset"
            helperTextColor="unset"
            helperTextTextAlign="unset"
          />
          <StateInactiveSizeSmallDe
            labelText="CVV"
            hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
            inputText="***"
            helperText="Helper text"
            label
            infoIcon={false}
            helperText={false}
            showInput
            stateInactiveSizeSmallDeFlex="1"
            inputAndWordBorder="unset"
            inputAndWordOutline="unset"
            inputAndWordFontFamily="unset"
            inputAndWordFontSize="unset"
            inputAndWordBackgroundColor="unset"
            inputAndWordColor="unset"
            inputFlex="1"
            inputPosition="relative"
            inputFontSize="16px"
            inputLineHeight="24px"
            inputFontFamily="Nunito"
            inputColor="#424242"
            inputTextAlign="left"
            inputWidth="unset"
            inputFlexDirection="unset"
            inputPadding="unset"
            helperTextWidth="160px"
            helperTextFlexDirection="row"
            helperTextPadding="4px 0px"
            helperTextFlex="unset"
            helperTextPosition="unset"
            helperTextFontSize="unset"
            helperTextLineHeight="unset"
            helperTextFontFamily="unset"
            helperTextColor="unset"
            helperTextTextAlign="unset"
          />
        </div>
        <SizeBigStateSecondaryDev
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
          text="Start my Ido premium plan"
          hugeIconinterfacesolidplu1="/hugeiconinterfacesolidstar.svg"
          leftIcon={false}
          rightIcon
          sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
          sizeBigStateSecondaryDevAlignSelf="stretch"
          sizeBigStateSecondaryDevWidth="unset"
          sizeBigStateSecondaryDevPosition="unset"
          sizeBigStateSecondaryDevRight="unset"
          sizeBigStateSecondaryDevBottom="unset"
          sizeBigStateSecondaryDevLeft="unset"
          sizeBigStateSecondaryDevFlex="unset"
          sizeBigStateSecondaryDevBorder="unset"
          sizeBigStateSecondaryDevTop="unset"
          cTAColor="#fff"
          onClick={processingScreen}
        />
      </div>
      <div 
      className="absolute w-[calc(100%_-_404px)] top-[136px] right-[202px] left-[202px] flex flex-col items-center justify-center gap-[8px]"
      >
        <VariantTabletFeature
          stText="Features 1 and description"
          variantTabletFeatureWidth="340px"
          variantTabletFeatureAlignSelf="unset"
        />
        <VariantTabletFeature
          stText="Features 2 and description"
          variantTabletFeatureWidth="340px"
          variantTabletFeatureAlignSelf="unset"
        />
        <VariantTabletFeature
          stText="Features 3 and description"
          variantTabletFeatureWidth="340px"
          variantTabletFeatureAlignSelf="unset"
        />
        <VariantTotal
          ndText="Total: $10 / Per month"
          variantTotalWidth="340px"
          variantTotalAlignSelf="unset"
        />
      </div>
      </div>
      
    </div>}
    {isOTP && <OTPVerification />}
      {isProcessing && <Processing />}
    </>
   
  );
};

export default PaymentPremiumPlan;

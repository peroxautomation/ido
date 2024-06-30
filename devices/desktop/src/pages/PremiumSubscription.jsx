import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import VariantTabletFeature from "../components/VariantTabletFeature";
import VariantTotal from "../components/VariantTotal";
import Input from "../components/Input";
import Input3 from "../components/Input1";
import PaymentHistory from "../components/PaymentHistory";
import ButtonDefault from "../components/ButtonDefault";
import Processing from "./Processing";
import OTPVerification from "../components/OTPVerification";

const PremiumSubscription = () => {
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
      {isHome && (
        <div className="w-screen relative bg-neutral-900 h-screen overflow-hidden">
          <div className="flex flex-row justify-center items-center gap-2  w-full h-full">
            <div className="w-[340px] flex  top-[410px] flex-col items-center justify-center gap-[8px]">
              <VariantTabletFeature
                stText="Features 1 and description"
                variantTabletFeatureWidth="unset"
                variantTabletFeatureAlignSelf="stretch"
              />
              <VariantTabletFeature
                stText="Features 2 and description"
                variantTabletFeatureWidth="unset"
                variantTabletFeatureAlignSelf="stretch"
              />
              <VariantTabletFeature
                stText="Features 3 and description"
                variantTabletFeatureWidth="unset"
                variantTabletFeatureAlignSelf="stretch"
              />
              <VariantTotal
                ndText="Total: $10 / Per month"
                variantTotalWidth="unset"
                variantTotalAlignSelf="stretch"
              />
            </div>

            <div className="w-[calc(100%_-_1052px)] min-w-[388px] max-w-[400px] top-[334px] rounded-2xl bg-neutral-800 flex flex-col items-start justify-start p-6 box-border gap-[16px]">
              <Input
                inputLabel="Card holder name"
                inputPlaceholder="Enter card holder name"
                helperText=""
                label
                infoIcon=""
                showHelperText
                propWidth1="340px"
                propPadding="4px 0px"
                propFlex1="1"
                propFontSize2="14px"
                propLineHeight="20px"
                propFontFamily2="Nunito"
                propColor2="#424242"
                propTextAlign="left"
                icon={""}
              />
              <Input
                inputLabel="Card number"
                inputPlaceholder="Enter card number"
                helperText=""
                label
                infoIcon=""
                showHelperText
                propWidth1="340px"
                propPadding="4px 0px"
                propFlex1="1"
                propFontSize2="14px"
                propLineHeight="20px"
                propFontFamily2="Nunito"
                propColor2="#424242"
                propTextAlign="left"
                icon={""}
              />
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
                {/* <StateInactiveSizeSmallDe
              labelText="MM/YY"
              hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
              label
              infoIcon={false}
              helperText
              showInput={false}
              stateInactiveSizeSmallDeFlex="1"
              inputAndWordBorder="none"
              inputAndWordOutline="none"
              inputAndWordFontFamily="Nunito"
              inputAndWordFontSize="16px"
              inputAndWordBackgroundColor="transparent"
              inputAndWordColor="#424242"
              inputFlex="unset"
              inputPosition="unset"
              inputFontSize="unset"
              inputLineHeight="unset"
              inputFontFamily="unset"
              inputColor="unset"
              inputTextAlign="unset"
              inputWidth="160px"
              inputFlexDirection="row"
              inputPadding="4px 0px"
              helperTextWidth="unset"
              helperTextFlexDirection="unset"
              helperTextPadding="unset"
              helperTextFlex="1"
              helperTextPosition="relative"
              helperTextFontSize="14px"
              helperTextLineHeight="20px"
              helperTextFontFamily="Nunito"
              helperTextColor="#424242"
              helperTextTextAlign="left"
            /> */}
                <Input3
                  title={"MM/YY"}
                  inputPlaceholder={"03/26"}
                  info={false}
                />

                <Input3 title={"CCV"} inputPlaceholder={"***"} info={true} />
              </div>
              <ButtonDefault
                leftIcon={""}
                text={"Start my Ido premium plan"}
                rightIcon={"/hugeiconinterfacesolidstar.svg"}
                onClick={processingScreen}
              />
            </div>
          </div>

          <PaymentHistory
            paymentHistory="Start premium plan"
            showHugeIconarrowsbulkdirecti
            hugeIconarrowsbulkdirectiVisible
            propTop="40px"
            // propLeft="calc(50% - 672px)"
            propGap="unset"
          />
        </div>
      )}
      {isOTP && <OTPVerification />}
      {isProcessing && <Processing />}
    </>
  );
};

export default PremiumSubscription;

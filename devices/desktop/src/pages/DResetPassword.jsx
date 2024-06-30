import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";
import PaymentHistory from "../components/PaymentHistory";
import Input from "../components/Input";
import Processing from "./Processing";
import OTPVerification from "../components/OTPVerification";

const DResetPassword = () => {
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOTPError, setIsOTPError] = useState(false);
  const [isOTP, setIsOTP] = useState(false);

  async function successRedirect() {
    setIsSuccess(true);
    navigate("/d-password-reset-success");
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
          <div className="absolute w-[calc(100%_-_1100px)] top-[302px] right-[540px] left-[560px] flex flex-col items-center justify-center gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  {" "}
                  <Input
                    inputLabel="Email"
                    inputPlaceholder="Enter your email"
                    helperText=""
                    label
                    infoIcon=""
                    showHelperText
                    propAlignSelf="stretch"
                    propWidth1="340px"
                    propPadding="4px 0px"
                    propFlex1="1"
                    propFontSize2="14px"
                    propLineHeight="20px"
                    propFontFamily2="Nunito"
                    propColor2="#424242"
                    propTextAlign="left"
                    icon={"/union.svg"}
                  />
                </div>
              </div>
            </div>
            <SizeBigStateSecondaryDev
              hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
              text="Send code"
              hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus1.svg"
              leftIcon={false}
              rightIcon={false}
              sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
              sizeBigStateSecondaryDevAlignSelf="stretch"
              sizeBigStateSecondaryDevWidth="unset"
              sizeBigStateSecondaryDevPosition="unset"
              sizeBigStateSecondaryDevRight="unset"
              sizeBigStateSecondaryDevBottom="unset"
              sizeBigStateSecondaryDevLeft="unset"
              sizeBigStateSecondaryDevFlex="unset"
              sizeBigStateSecondaryDevBorder="none"
              sizeBigStateSecondaryDevTop="unset"
              cTAColor="#fff"
              onClick={processingScreen}
            />
          </div>

          <PaymentHistory
            paymentHistory="Reset password"
            showHugeIconarrowsbulkdirecti
            hugeIconarrowsbulkdirectiVisible
          />
        </div>
      )}

      {isOTP && <OTPVerification />}
      {isProcessing && <Processing />}
    </>
  );
};

export default DResetPassword;

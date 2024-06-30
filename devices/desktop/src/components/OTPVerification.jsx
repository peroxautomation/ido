import React, { useState, useEffect, useMemo } from "react";
import OTPHeader from "./OTPHeader";
import OtpAgainCode from "./OtpAgainCode";
import OTPInput from "./OTPInput";
import TitleTablet from "./TitleTablet";

const OTPVerification = () => {
  const [isError, setIsError] = useState(false);
  return (
    <div className="w-screen relative bg-neutral-900 h-screen overflow-hidden">
      <div
        className={`absolute top-[calc(50%_-_170px)] left-[calc(50%_-_168px)] flex flex-col items-center justify-start gap-[24px] text-center text-xl text-neutral-100 font-overline-regular`}
      >
        <div className="hidden xl:flex">
          <OTPHeader
            text="OTP verification"
            property1DesktopAlignSelf="unset"
            property1DesktopPosition="unset"
            property1DesktopTop="unset"
            property1DesktopLeft="unset"
            property1DesktopWidth="320px"
            property1DesktopBottom="unset"
            property1DesktopHeight="unset"
          />
        </div>

        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="w-[335px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[28px] font-semibold">
              Enter 6-digit code
            </div>
          </div>
          <div className="w-[335px] flex flex-row items-center justify-center text-base">
            <div className="flex-1 relative leading-[24px]">
              Your code was sent to somemail@gmail.com
            </div>
          </div>
        </div>

        <OTPInput
          stateDefaultWidth="335px"
          stateDefaultGap="13px"
          stateDefaultBorder="unset"
          stateDefaultOutline="unset"
          stateDefaultBackgroundColor="unset"
          otpInputFlex="1"
          otpInputWidth="unset"
          otpInputFlex1="1"
          otpInputWidth1="unset"
          otpInputFlex2="1"
          otpInputWidth2="unset"
          otpInputFlex3="1"
          otpInputWidth3="unset"
          otpInputFlex4="1"
          otpInputWidth4="unset"
          otpInputFlex5="1"
          otpInputWidth5="unset"
          isError={isError}
        />

        <div className="flex flex-col items-start justify-start gap-[16px] text-left text-base">
          <div className="w-[335px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[24px]">
              Resend code 21s
            </div>
          </div>
          <OtpAgainCode
            askAgain=" Send again"
            otpAgainCodeAlignSelf="unset"
            otpAgainCodeWidth="335px"
            askAgainTextDecoration="none"
          />
        </div>
      </div>
      <div className="flex xl:hidden">
        <TitleTablet
          titleOfPage="OTP verification"
          hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
          showTitleOfPage
          hugeIconarrowssoliddirectTop="40px"
          hugeIconarrowssoliddirectWidth="unset"
          propOpacity="0"
          returnToPrevious={""}
        />
      </div>
    </div>
  );
};

export default OTPVerification;

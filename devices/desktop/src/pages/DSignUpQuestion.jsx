import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";
import StateFilledCheckboxDevice from "../components/StateFilledCheckboxDevice";
import WhowhatInfluencedYou from "../components/WhowhatInfluencedYou";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";
import Property1Desktop1 from "../components/Property1Desktop1";
import ButtonDefault from "../components/ButtonDefault";

const DSignUpQuestion = () => {
  const navigate = useNavigate();

  async function previousSignUpPage() {
    navigate("/d-sign-up-screen-1");
  }

  async function nextSignUpPage() {
    navigate("/d-sign-up");
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <div className="absolute w-[calc(100%_-_1100px)] top-[139px] right-[550px] left-[550px] h-[789px] overflow-y-auto flex flex-col items-start justify-start gap-[40px]">
        <StateDefaultSizeBigDevic
          labelText="When did you start dancing?"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
          inputText="Year"
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <StateFilledCheckboxDevice
            questionText="Why did you start dancing?"
            hugeIconinterfacesolidche="/hugeiconinterfacesolidcheckrectangle.svg"
            placeholderText=" I enjoy it"
            question
            stateFilledCheckboxDeviceWidth="unset"
            stateFilledCheckboxDeviceAlignSelf="stretch"
            questionWidth="335px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="Entertaining friends and family"
            question={false}
            stateFilledCheckboxDeviceWidth="unset"
            stateFilledCheckboxDeviceAlignSelf="stretch"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="It relieves stress"
            question={false}
            stateFilledCheckboxDeviceWidth="unset"
            stateFilledCheckboxDeviceAlignSelf="stretch"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="I had nothing to do during the pandemic, so I started dancing"
            question={false}
            stateFilledCheckboxDeviceWidth="unset"
            stateFilledCheckboxDeviceAlignSelf="stretch"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="I was completing an assignment for school"
            question={false}
            stateFilledCheckboxDeviceWidth="unset"
            stateFilledCheckboxDeviceAlignSelf="stretch"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="I entered a competition"
            question={false}
            stateFilledCheckboxDeviceWidth="unset"
            stateFilledCheckboxDeviceAlignSelf="stretch"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="I wanted to earn a living "
            question={false}
            stateFilledCheckboxDeviceWidth="unset"
            stateFilledCheckboxDeviceAlignSelf="stretch"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="Other"
            question={false}
            stateFilledCheckboxDeviceWidth="unset"
            stateFilledCheckboxDeviceAlignSelf="stretch"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
        </div>
        <WhowhatInfluencedYou
          propAlignSelf="stretch"
          propWidth="unset"
          propAlignSelf1="stretch"
          propWidth1="unset"
          propAlignSelf2="stretch"
          propWidth2="unset"
          propAlignSelf3="stretch"
          propWidth3="unset"
          propAlignSelf4="stretch"
          propWidth4="unset"
          propAlignSelf5="stretch"
          propWidth5="unset"
          propAlignSelf6="stretch"
          propWidth6="unset"
          propAlignSelf7="stretch"
        />
      </div>
      <SizeBigStateSecondaryDev
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        text="Next"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus.svg"
        leftIcon={false}
        rightIcon={false}
        sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
        sizeBigStateSecondaryDevAlignSelf="unset"
        sizeBigStateSecondaryDevWidth="calc(100% - 1100px)"
        sizeBigStateSecondaryDevPosition="absolute"
        sizeBigStateSecondaryDevRight="550px"
        sizeBigStateSecondaryDevBottom="40px"
        sizeBigStateSecondaryDevLeft="550px"
        sizeBigStateSecondaryDevFlex="unset"
        sizeBigStateSecondaryDevBorder="unset"
        sizeBigStateSecondaryDevTop="unset"
        cTAColor="#fff"
        onClick={nextSignUpPage}
      />
      {/* <ButtonDefault
        leftIcon={""}
        text="Next"
        rightIcon={""}
        onClick={nextSignUpPage}
        classStyle={"absolute bottom-[40px] w-[500px] left-[550px]"}
      /> */}
      <img
        className="cursor-pointer hover:opacity-80 absolute top-[56px] left-[48px] w-[9.2px] h-[19.2px]"
        alt=""
        src="/direction-left.svg"
        onClick={previousSignUpPage}
      />
      <Property1Desktop1
        text="Questions"
        property1DesktopAlignSelf="unset"
        property1DesktopPosition="absolute"
        property1DesktopTop="56px"
        property1DesktopLeft="calc(50% - 166px)"
        property1DesktopWidth="320px"
        property1DesktopBottom="unset"
        property1DesktopHeight="unset"
      />
    </div>
  );
};

export default DSignUpQuestion;

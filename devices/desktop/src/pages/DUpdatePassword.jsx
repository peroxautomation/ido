import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Property1Variant from "../components/Property1Variant";
import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";
import TermsAndConditionsForgotPa from "../components/TermsAndConditionsForgotPa";
import SizeMediumStateSecondary from "../components/SizeMediumStateSecondary";

const DUpdatePassword = () => {
  const navigate = useNavigate();

  async function returnTab() {
    navigate("/d-settings");
  }
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <Property1Variant
        text="Update password"
        showLayers
        property1Variant2Width="1090px"
        property1Variant2Position="absolute"
        property1Variant2Top="140px"
        property1Variant2Left="302px"
        returnTab={returnTab}
      />
      <div className="absolute top-[254px] left-[calc(50%_-_29px)] flex flex-col items-start justify-start gap-[16px]">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <StateDefaultSizeBigDevic
              labelText="Current password"
              hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
              inputText="Enter your current password"
              hugeIconinterfacesolideye="/hugeiconinterfacesolideyedisable.svg"
              helperText="Helper text"
              label
              eye
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
              labelText="New password"
              hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
              inputText="Enter new password"
              hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
              helperText="Helper text"
              label
              eye
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
              labelText="Confim password"
              hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
              inputText="Confirm new password"
              hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
              helperText="Helper text"
              label
              eye
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
          </div>
          <TermsAndConditionsForgotPa
            termsAndConditionsForgotPAlignSelf="unset"
            termsAndConditionsForgotPWidth="320px"
            forgotPasswordTextDecoration="unset"
          />
        </div>
        <SizeMediumStateSecondary
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
          text="Update"
          leftIcon={false}
          sizeMediumStateSecondaryBackgroundColor="#cc0f3c"
          sizeMediumStateSecondaryWidth="320px"
          sizeMediumStateSecondaryBorder="unset"
          sizeMediumStateSecondaryAlignSelf="unset"
          sizeMediumStateSecondaryMargin="unset"
          sizeMediumStateSecondaryPosition="unset"
          sizeMediumStateSecondaryTop="unset"
          sizeMediumStateSecondaryLeft="unset"
        />
      </div>
    </div>
  );
};

export default DUpdatePassword;

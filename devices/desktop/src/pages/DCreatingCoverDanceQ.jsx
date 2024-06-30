import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Property1Variant from "../components/Property1Variant";
import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";
import RadioBtns from "../components/RadioBtns";
import StateTabletTextArea from "../components/StateTabletTextArea";
import SizeBiggerStateDefaultDe1 from "../components/SizeBiggerStateDefaultDe1";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";

const DCreatingCoverDanceQ = () => {
  const navigate = useNavigate();
  // update to the desired redirect path
  async function returnTab() {
    navigate("/d-settings");
  }
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Property1Variant
        text="Creating challenge"
        showLayers
        property1Variant2Width="1344px"
        property1Variant2Position="absolute"
        property1Variant2Top="40px"
        property1Variant2Left="48px"
        returnTab={returnTab}
      />
      <div className="absolute top-[calc(50%_-_360px)] left-[calc(50%_-_170px)] h-[770px] overflow-y-auto flex flex-col items-start justify-start gap-[16px]">
        <StateDefaultSizeBigDevic
          labelText="What is the title of your dance?"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
          inputText="Insert year"
          hugeIconinterfacesolideye="/hugeiconinterfacesolideye.svg"
          helperText="Helper text"
          label
          eye={false}
          infoIcon={false}
          helperText={false}
          showInputAndWord
          showInput
          stateDefaultSizeBigDevicAlignSelf="unset"
          stateDefaultSizeBigDevicWidth="340px"
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
        <RadioBtns
          question="Does the title have any meaning?"
          question1="Question"
        />
        <StateTabletTextArea
          questionText="If yes please explain your answer"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
          answerText="Answer for question"
          showInfo
          stateTabletTextAreaWidth="340px"
          stateTabletTextAreaAlignSelf="unset"
          textAreaHeight="140px"
          answerForQuestionColor="#424242"
        />
        <StateTabletTextArea
          questionText="What inspired the title of your dance?"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
          answerText="Answer for question"
          showInfo
          stateTabletTextAreaWidth="340px"
          stateTabletTextAreaAlignSelf="unset"
          textAreaHeight="140px"
          answerForQuestionColor="#424242"
        />
        <RadioBtns
          question="Do any of the moves in the dance have meaning?"
          question1="Does the title have any meaning?"
        />
        <StateTabletTextArea
          questionText="If yes please explain your answer"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
          answerText="Answer for question"
          showInfo
          stateTabletTextAreaWidth="340px"
          stateTabletTextAreaAlignSelf="unset"
          textAreaHeight="140px"
          answerForQuestionColor="#424242"
        />
        <StateTabletTextArea
          questionText="What aspect of this dance did you create?"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
          answerText="Answer for question"
          showInfo
          stateTabletTextAreaWidth="340px"
          stateTabletTextAreaAlignSelf="unset"
          textAreaHeight="140px"
          answerForQuestionColor="#424242"
        />
        <SizeBiggerStateDefaultDe1
          labelText="Which cultural heritage inspired this dance?"
          hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
          inputText="Select country"
          hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
          helperText="Helper text"
          helperText={false}
          label
          leftIcon={false}
          rightIcon
          showInput
          sizeBiggerStateDefaultDeWidth="340px"
          sizeBiggerStateDefaultDePosition="unset"
          sizeBiggerStateDefaultDeTop="unset"
          sizeBiggerStateDefaultDeLeft="unset"
          sizeBiggerStateDefaultDeAlignSelf="unset"
          sizeBiggerStateDefaultDeHeight="unset"
          labelWidth="340px"
          labelAlignSelf="unset"
          inputAlignSelf="stretch"
          inputWidth="unset"
          hugeIconmultimediaAndAudiOverflow="hidden"
          dropdownColor="#fff"
          helperTextWidth="340px"
          helperTextAlignSelf="unset"
          helperTextColor="#fff"
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
        sizeBigStateSecondaryDevWidth="340px"
        sizeBigStateSecondaryDevPosition="absolute"
        sizeBigStateSecondaryDevRight="unset"
        sizeBigStateSecondaryDevBottom="unset"
        sizeBigStateSecondaryDevLeft="550px"
        sizeBigStateSecondaryDevFlex="unset"
        sizeBigStateSecondaryDevBorder="unset"
        sizeBigStateSecondaryDevTop="938px"
        cTAColor="#fff"
      />
    </div>
  );
};

export default DCreatingCoverDanceQ;

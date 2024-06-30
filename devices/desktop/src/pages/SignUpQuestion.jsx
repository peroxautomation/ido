import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";
import StateFilledCheckboxDevice from "../components/StateFilledCheckboxDevice";
import WhowhatInfluencedYou from "../components/WhowhatInfluencedYou";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";

const SignUpQuestion = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <div className="absolute top-[40px] left-[202px] h-[976px] overflow-y-auto flex flex-col items-start justify-start gap-[40px]">
        <StateDefaultSizeBigDevic
          labelText="When did you start dancing?"
          hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation1.svg"
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
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfacesolidcheckrectangle.svg"
            placeholderText=" I enjoy it"
            question
            stateFilledCheckboxDeviceWidth="340px"
            stateFilledCheckboxDeviceAlignSelf="unset"
            questionWidth="335px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="Entertaining friends and family"
            question={false}
            stateFilledCheckboxDeviceWidth="340px"
            stateFilledCheckboxDeviceAlignSelf="unset"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="It relieves stress"
            question={false}
            stateFilledCheckboxDeviceWidth="340px"
            stateFilledCheckboxDeviceAlignSelf="unset"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="I had nothing to do during the pandemic, so I started dancing"
            question={false}
            stateFilledCheckboxDeviceWidth="340px"
            stateFilledCheckboxDeviceAlignSelf="unset"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="I was completing an assignment for school"
            question={false}
            stateFilledCheckboxDeviceWidth="340px"
            stateFilledCheckboxDeviceAlignSelf="unset"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="I entered a competition"
            question={false}
            stateFilledCheckboxDeviceWidth="340px"
            stateFilledCheckboxDeviceAlignSelf="unset"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="I wanted to earn a living "
            question={false}
            stateFilledCheckboxDeviceWidth="340px"
            stateFilledCheckboxDeviceAlignSelf="unset"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
          <StateFilledCheckboxDevice
            questionText="Question"
            hugeIconinterfacesolidche="/hugeiconinterfaceoutlinecheckrectangle.svg"
            placeholderText="Other"
            question={false}
            stateFilledCheckboxDeviceWidth="340px"
            stateFilledCheckboxDeviceAlignSelf="unset"
            questionWidth="340px"
            questionAlignSelf="unset"
          />
        </div>
        <WhowhatInfluencedYou />
      </div>
      <SizeBigStateSecondaryDev
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        text="Next"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus.svg"
        leftIcon={false}
        rightIcon={false}
        sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
        sizeBigStateSecondaryDevAlignSelf="unset"
        sizeBigStateSecondaryDevWidth="calc(100% - 404px)"
        sizeBigStateSecondaryDevPosition="absolute"
        sizeBigStateSecondaryDevRight="202px"
        sizeBigStateSecondaryDevBottom="40px"
        sizeBigStateSecondaryDevLeft="202px"
        sizeBigStateSecondaryDevFlex="unset"
        sizeBigStateSecondaryDevBorder="unset"
        sizeBigStateSecondaryDevTop="unset"
        cTAColor="#fff"
      />
      <img
        className="absolute top-[193px] right-[16px] w-0 h-[455px] object-contain"
        alt=""
        src="/line-551.svg"
      />
    </div>
  );
};

export default SignUpQuestion;

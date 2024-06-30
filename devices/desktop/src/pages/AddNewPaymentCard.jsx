import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";
import StateInactiveSizeSmallDe from "../components/StateInactiveSizeSmallDe";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";

const AddNewPaymentCard = (props) => {
  const { closeModal } = props;
  return (
    <div
      // className="absolute w-[calc(100%_-_356px)] top-[380px] right-[178px] left-[178px] rounded-2xl bg-neutral-800 flex flex-col items-start justify-start p-6 box-border gap-[16px]"
      className={`absolute top-[calc(50%_-_228px)] left-[calc(50%_-_208px)] rounded-3xl bg-neutral-800 w-[416px] h-[456px] flex flex-col items-end justify-start p-6 box-border gap-[16px] text-center text-5xl text-neutral-100 font-overline-regular`}
    >
      <img
        className="cursor-pointer hover:opacity-80 w-8 relative h-8 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
        onClick={closeModal}
      />
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
        text="Add"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidstar.svg"
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
        sizeBigStateSecondaryDevBorder="unset"
        sizeBigStateSecondaryDevTop="unset"
        cTAColor="#fff"
      />
    </div>
  );
};

export default AddNewPaymentCard;

import StateDefaultSizeBigDevic from "../components/StateDefaultSizeBigDevic";
import DeviceMobile1 from "../components/DeviceMobile1";
import StateSecondarySizeBig from "../components/StateSecondarySizeBig";
import VariantLogin from "../components/VariantLogin";
import TitleTablet from "../components/TitleTablet";

const SelectGender = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <StateDefaultSizeBigDevic
        labelText="Email"
        hugeIconinterfacesolidinf="/hugeiconinterfacesolidinformation.svg"
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
        stateDefaultSizeBigDevicWidth="340px"
        stateDefaultSizeBigDevicPosition="absolute"
        stateDefaultSizeBigDevicTop="156px"
        stateDefaultSizeBigDevicRight="unset"
        stateDefaultSizeBigDevicLeft="202px"
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
      {/* <DeviceMobile1
        text="Or Sign up by"
        deviceMobileWidth="340px"
        deviceMobileAlignSelf="unset"
        deviceMobilePosition="absolute"
        deviceMobileTop="244px"
        deviceMobileLeft="202px"
        orSignUpFontSize="16px"
        orSignUpLineHeight="24px"
        orSignUpFontWeight="600"
        orSignUpColor="#fff"
      /> */}
       <DeviceMobile1
        text="Or Sign up by"
        orSignUpFontSize="16px"
        orSignUpLineHeight="24px"
        orSignUpFontWeight="600"
        orSignUpColor="#fff"
      />
      <StateSecondarySizeBig
        hugeIconinterfacesolidplu="/google.svg"
        text="Continue with Google"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus1.svg"
        rightIcon={false}
        leftIcon
        stateSecondarySizeBigAlignSelf="unset"
        stateSecondarySizeBigPosition="absolute"
        stateSecondarySizeBigTop="300px"
        stateSecondarySizeBigLeft="202px"
        stateSecondarySizeBigWidth="340px"
        stateSecondarySizeBigHeight="44px"
      />
      <StateSecondarySizeBig
        hugeIconinterfacesolidplu="/apple.svg"
        text="Continue with Apple"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus.svg"
        rightIcon={false}
        leftIcon
        stateSecondarySizeBigAlignSelf="unset"
        stateSecondarySizeBigPosition="absolute"
        stateSecondarySizeBigTop="360px"
        stateSecondarySizeBigLeft="202px"
        stateSecondarySizeBigWidth="340px"
        stateSecondarySizeBigHeight="44px"
      />
      <StateSecondarySizeBig
        hugeIconinterfacesolidplu="/facebook.svg"
        text="Continue with  Facebook"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus1.svg"
        rightIcon={false}
        leftIcon
        stateSecondarySizeBigAlignSelf="unset"
        stateSecondarySizeBigPosition="absolute"
        stateSecondarySizeBigTop="420px"
        stateSecondarySizeBigLeft="202px"
        stateSecondarySizeBigWidth="340px"
        stateSecondarySizeBigHeight="44px"
      />
      <VariantLogin
        alreadyHaveAnAccount="Already have an account"
        login="Login"
        variantLoginAlignSelf="unset"
        variantLoginPosition="absolute"
        variantLoginTop="480px"
        variantLoginLeft="202px"
        variantLoginWidth="340px"
        loginTextDecoration="unset"
      />
      <TitleTablet
        titleOfPage="Sign up"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="60px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
    </div>
  );
};

export default SelectGender;

import Property1Loggining from "../components/HeaderTablet";
import VariantsTopUpWallet from "../components/VariantsTopUpWallet";

const Donation = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <Property1Loggining
        hugeIconmenuoutlinemenuLi="/hugeiconmenuoutlinemenulinehorizontal.svg"
        ellipse1254="/ellipse-1254@2x.png"
        property1LogginingPosition="absolute"
        property1LogginingTop="40px"
        property1LogginingLeft="0px"
        property1LogginingWidth="100%"
        property1LogginingRight="0px"
      />
      <VariantsTopUpWallet
        topUpWallet="Donate"
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        dropdown="Choose card"
        helperText="Helper text"
        label1="Label"
        hugeIconmultimediaAndAudi2="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        dropdown1="From wallet"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
        cTA="Donate"
        showDropdown
        hugeIconmultimediaAndAudi1={false}
        showHelperText={false}
        label={false}
        info
        variantsTopUpWalletWidth="calc(100% - 328px)"
        variantsTopUpWalletPosition="absolute"
        variantsTopUpWalletTop="338px"
        variantsTopUpWalletRight="164px"
        variantsTopUpWalletLeft="164px"
        modalWithButtonsHeight="unset"
        modalWithButtonsGap="16px"
        dropdownsHeight="unset"
        dropdownsGap="8px"
        dropdownAlignSelf="stretch"
        dropdownWidth="unset"
        hugeIconmultimediaAndAudiOverflow="hidden"
        helperTextAlignSelf="unset"
        helperTextWidth="320px"
        helperTextColor="#fff"
        dropdownWidth1="unset"
        dropdownAlignSelf1="stretch"
        labelWidth="320px"
        labelAlignSelf="unset"
        dropdownColor="#fff"
        helperTextColor1="#fff"
        infoWidth="unset"
        infoAlignSelf="stretch"
      />
    </div>
  );
};

export default Donation;

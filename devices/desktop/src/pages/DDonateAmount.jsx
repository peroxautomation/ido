import Header from "../components/Header";
import Property1DesktopTitle from "../components/Property1DesktopTitle";
import PaymentMethods from "../components/PaymentMethods";
import Subscriptions2 from "../components/Subscriptions2";
import MyWallet from "../components/MyWallet";
import VariantsTopUpWallet from "../components/VariantsTopUpWallet";

const DDonateAmount = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
     <Header user={true} />
      <div className="absolute h-[calc(100%_-_126px)] w-[calc(100%_-_360px)] top-[148px] right-[55px] bottom-[-22px] left-[305px] overflow-y-auto flex flex-col items-start justify-start gap-[24px]">
        <Property1DesktopTitle
          text="Payment history"
          showLayers
          property1DesktopTitlePosition="unset"
          property1DesktopTitleTop="unset"
          property1DesktopTitleLeft="unset"
          property1DesktopTitleWidth="1080px"
          property1DesktopTitleAlignSelf="unset"
        />
        <PaymentMethods />
        <Subscriptions2 />
        <MyWallet />
      </div>
      <div className="modal_background_tint" />
      <VariantsTopUpWallet
        topUpWallet="Donate"
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        dropdown="Choose card"
        helperText="Add new card"
        label1="Amount"
        hugeIconmultimediaAndAudi2="/hugeiconmultimedia-and-audiosolidmusic-015.svg"
        dropdown1="200"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-012.svg"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        cTA="Next"
        showDropdown={false}
        hugeIconmultimediaAndAudi1={false}
        showHelperText={false}
        label
        info={false}
        variantsTopUpWalletWidth="calc(100% - 1024px)"
        variantsTopUpWalletPosition="absolute"
        variantsTopUpWalletTop="284px"
        variantsTopUpWalletRight="512px"
        variantsTopUpWalletLeft="512px"
        modalWithButtonsHeight="360px"
        modalWithButtonsGap="unset"
        dropdownsHeight="299px"
        dropdownsGap="unset"
        dropdownAlignSelf="unset"
        dropdownWidth="320px"
        hugeIconmultimediaAndAudiOverflow="hidden"
        helperTextAlignSelf="unset"
        helperTextWidth="320px"
        helperTextColor="#cc0f3c"
        dropdownWidth1="320px"
        dropdownAlignSelf1="unset"
        labelWidth="unset"
        labelAlignSelf="stretch"
        dropdownColor="#424242"
        helperTextColor1="#424242"
        infoWidth="320px"
        infoAlignSelf="unset"
      />
    </div>
  );
};

export default DDonateAmount;

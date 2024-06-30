import Header from "../components/Header";
import Property1DesktopTitle from "../components/Property1DesktopTitle";
import PaymentMethods from "../components/PaymentMethods";
import Subscriptions2 from "../components/Subscriptions2";
import MyWallet from "../components/MyWallet";
import ModalWindows11 from "../components/ModalWindows";
import DropdownsMenuSavedCards from "../components/DropdownsMenuSavedCards";

const DDonateSelectingCard1 = () => {
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
        <div className="w-[3px] relative h-0.5 overflow-hidden shrink-0" />
        <PaymentMethods />
        <Subscriptions2 />
        <MyWallet />
      </div>
      <div className="modal_background_tint" />
      <ModalWindows11
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
        hugeIconmultimediaAndAudi1={false}
        showHelperText={false}
        label={false}
        info
        propHeight="unset"
        propGap="16px"
        propHeight1="unset"
        propGap1="8px"
        propOverflow="hidden"
        propAlignSelf="unset"
        propWidth="320px"
        propColor="#fff"
        propWidth1="unset"
        propAlignSelf1="stretch"
        propWidth2="320px"
        propAlignSelf2="unset"
        propColor1="#fff"
        propColor2="#fff"
        propWidth3="unset"
        propAlignSelf3="stretch"
      />
      <DropdownsMenuSavedCards
        all="4169 6372 9301 2884"
        propTop="456px"
        propLeft="559px"
        dropdownsMenuHeight="168px"
      />
    </div>
  );
};

export default DDonateSelectingCard1;

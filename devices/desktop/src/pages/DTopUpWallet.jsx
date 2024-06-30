import Header from "../components/Header";
import Property1DesktopTitle from "../components/Property1DesktopTitle";
import PaymentMethods from "../components/PaymentMethods";
import Subscriptions2 from "../components/Subscriptions2";
import MyWallet from "../components/MyWallet";
import ModalWindows11 from "../components/ModalWindows";

const DTopUpWallet = () => {
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
      <ModalWindows11
        topUpWallet="Top up wallet"
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        dropdown="Choose card"
        helperText="Add new card"
        label1="Label"
        hugeIconmultimediaAndAudi2="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        dropdown1="From wallet"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-01.svg"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
        cTA="Top up"
        hugeIconmultimediaAndAudi1={false}
        showHelperText
        label={false}
        info={false}
      />
    </div>
  );
};

export default DTopUpWallet;

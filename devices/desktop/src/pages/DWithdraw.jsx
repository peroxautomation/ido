import Header from "../components/Header";
import Property1DesktopTitle from "../components/Property1DesktopTitle";
import PaymentMethods from "../components/PaymentMethods";
import Subscriptions2 from "../components/Subscriptions2";
import MyWallet from "../components/MyWallet";
import ModalWindows11 from "../components/ModalWindows";

const DWithdraw = () => {
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
        topUpWallet="Withdraw"
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        dropdown="Choose card"
        helperText="Add new card"
        label1="Amount"
        hugeIconmultimediaAndAudi2="/hugeiconmultimedia-and-audiosolidmusic-015.svg"
        dropdown1="200"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectiondown-012.svg"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        cTA="Withdraw"
        hugeIconmultimediaAndAudi1={false}
        showHelperText={false}
        label
        info={false}
        propHeight="360px"
        propGap="unset"
        propHeight1="299px"
        propGap1="unset"
        propOverflow="hidden"
        propAlignSelf="unset"
        propWidth="320px"
        propColor="#cc0f3c"
        propWidth1="320px"
        propAlignSelf1="unset"
        propWidth2="unset"
        propAlignSelf2="stretch"
        propColor1="#424242"
        propColor2="#424242"
        propWidth3="320px"
        propAlignSelf3="unset"
      />
    </div>
  );
};

export default DWithdraw;

import Header from "../components/Header";
import DeviceTabletSizeStateHa from "../components/DeviceTabletSizeStateHa";
import ModalWindows2 from "../components/ModalWindows2";
import Autosuggest from "../components/Autosuggest";

const DGenre1 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <DeviceTabletSizeStateHa
        subtract="/subtract1.svg"
        star5="/star-52.svg"
        unrelate="Follow"
        hugeIconarrowsoutlinezoom="/hugeiconarrowsoutlinezoom-outrectangle.svg"
        hugeIconinterfaceoutlines="/hugeiconinterfaceoutlinestar2.svg"
        hugeIconcommunicationoutl="/hugeiconcommunicationoutlinechat-02.svg"
        contentContainerConponent="/content-container-conponents.svg"
        contentContainerConponent1="/content-container-conponents1.svg"
        hugeIconfinanceAndPayment="/hugeiconfinance-and-paymentoutlinedonate.svg"
        deviceTabletSizeStateHaWidth="calc(100% - 922px)"
        deviceTabletSizeStateHaHeight="calc(100% - 224px)"
        deviceTabletSizeStateHaBackgroundImage="url('/moves@3x.png')"
        deviceTabletSizeStateHaPosition="absolute"
        deviceTabletSizeStateHaTop="148px"
        deviceTabletSizeStateHaRight="329px"
        deviceTabletSizeStateHaBottom="76px"
        deviceTabletSizeStateHaLeft="593px"
      />
      <DeviceTabletSizeStateHa
        subtract="/subtract1.svg"
        star5="/star-52.svg"
        unrelate="Follow"
        hugeIconarrowsoutlinezoom="/hugeiconarrowsoutlinezoom-outrectangle.svg"
        hugeIconinterfaceoutlines="/hugeiconinterfaceoutlinestar2.svg"
        hugeIconcommunicationoutl="/hugeiconcommunicationoutlinechat-02.svg"
        contentContainerConponent="/content-container-conponents.svg"
        contentContainerConponent1="/content-container-conponents1.svg"
        hugeIconfinanceAndPayment="/hugeiconfinance-and-paymentoutlinedonate.svg"
        deviceTabletSizeStateHaWidth="calc(100% - 922px)"
        deviceTabletSizeStateHaHeight="calc(100% - 224px)"
        deviceTabletSizeStateHaBackgroundImage="url('/moves@3x.png')"
        deviceTabletSizeStateHaPosition="absolute"
        deviceTabletSizeStateHaTop="988px"
        deviceTabletSizeStateHaRight="329px"
        deviceTabletSizeStateHaBottom="-764px"
        deviceTabletSizeStateHaLeft="593px"
      />
      <div className="modal_background_tint" />
      <ModalWindows2
        dropdown="Genre"
        showInput
        propHeight="unset"
        propAlignSelf="stretch"
        propWidth="unset"
      />
      <Autosuggest propTop="408px" propLeft="560px" />
    </div>
  );
};

export default DGenre1;

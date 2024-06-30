import Header from "../components/Header";
import DeviceTabletSizeStateHa from "../components/DeviceTabletSizeStateHa";
import ModalWindows2 from "../components/ModalWindows2";

const DAddInfo = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <DeviceTabletSizeStateHa
        subtract="/subtract.svg"
        star5="/star-5.svg"
        unrelate="Follow"
        hugeIconarrowsoutlinezoom="/hugeiconarrowsoutlinezoom-outrectangle1.svg"
        hugeIconinterfaceoutlines="/hugeiconinterfaceoutlinestar3.svg"
        hugeIconcommunicationoutl="/hugeiconcommunicationoutlinechat-021.svg"
        contentContainerConponent="/content-container-conponents3.svg"
        contentContainerConponent1="/content-container-conponents4.svg"
        hugeIconfinanceAndPayment="/hugeiconfinance-and-paymentoutlinedonate1.svg"
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
        subtract="/subtract.svg"
        star5="/star-5.svg"
        unrelate="Follow"
        hugeIconarrowsoutlinezoom="/hugeiconarrowsoutlinezoom-outrectangle1.svg"
        hugeIconinterfaceoutlines="/hugeiconinterfaceoutlinestar3.svg"
        hugeIconcommunicationoutl="/hugeiconcommunicationoutlinechat-021.svg"
        contentContainerConponent="/content-container-conponents3.svg"
        contentContainerConponent1="/content-container-conponents4.svg"
        hugeIconfinanceAndPayment="/hugeiconfinance-and-paymentoutlinedonate1.svg"
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
        dropdown="Select country"
        showInput={false}
        propHeight="44px"
        propAlignSelf="unset"
        propWidth="320px"
      />
    </div>
  );
};

export default DAddInfo;

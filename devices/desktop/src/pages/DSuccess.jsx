import Header from "../components/Header";
import DeviceTabletSizeStateHa from "../components/DeviceTabletSizeStateHa";
import VariantsSorry from "../components/VariantsSorry";

const DSuccess = () => {
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
        star5="/star-53.svg"
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
      <VariantsSorry
        hugeIconinterfaceoutlinew="/hugeiconinterfaceoutlinecheckcircle.svg"
        orSignUpBy="Your challenge has been uploaded"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
        showInputsCTA={false}
        showCTA={false}
        variantsSorryPosition="absolute"
        variantsSorryTop="calc(50% - 228px)"
        variantsSorryLeft="calc(50% - 208px)"
        inputsCTAAlignSelf="unset"
        inputsCTAWidth="368px"
        inputsCTAHeight="44px"
        cTAAlignSelf="unset"
        cTAWidth="368px"
      />
    </div>
  );
};

export default DSuccess;

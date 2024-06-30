import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import DeviceTabletSizeStateHa from "../components/DeviceTabletSizeStateHa";
import VariantsStoryDeviceTablet from "../components/VariantsStoryDeviceTablet";

const Story = () => {
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
      <TitleTablet
        titleOfPage="Moves"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <DeviceTabletSizeStateHa
        subtract="/subtract.svg"
        star5="/star-51.svg"
        unrelate="Relate"
        hugeIconarrowsoutlinezoom="/hugeiconarrowsoutlinezoom-outrectangle.svg"
        hugeIconinterfaceoutlines="/hugeiconinterfaceoutlinestar2.svg"
        hugeIconcommunicationoutl="/hugeiconcommunicationoutlinechat-02.svg"
        contentContainerConponent="/content-container-conponents.svg"
        contentContainerConponent1="/content-container-conponents1.svg"
        hugeIconfinanceAndPayment="/hugeiconfinance-and-paymentoutlinedonate.svg"
        deviceTabletSizeStateHaWidth="calc(100% - 226px)"
        deviceTabletSizeStateHaHeight="calc(100% - 333px)"
        deviceTabletSizeStateHaBackgroundImage="url('/moves@3x.png')"
        deviceTabletSizeStateHaPosition="absolute"
        deviceTabletSizeStateHaTop="252px"
        deviceTabletSizeStateHaRight="113px"
        deviceTabletSizeStateHaBottom="81px"
        deviceTabletSizeStateHaLeft="113px"
      />
      <VariantsStoryDeviceTablet
        variantsStoryDeviceTabletWidth="calc(100% - 226px)"
        variantsStoryDeviceTabletHeight="calc(100% - 525px)"
        variantsStoryDeviceTabletPosition="absolute"
        variantsStoryDeviceTabletTop="444px"
        variantsStoryDeviceTabletRight="113px"
        variantsStoryDeviceTabletBottom="81px"
        variantsStoryDeviceTabletLeft="113px"
      />
    </div>
  );
};

export default Story;

import Header from "../components/Header";
import VariantsStoryDeviceTablet from "../components/VariantsStoryDeviceTablet";
import DeviceTabletSizeStateHa from "../components/DeviceTabletSizeStateHa";

const DStory = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <div className="absolute top-[148px] left-[334px] flex flex-row items-start justify-start">
        <VariantsStoryDeviceTablet
          variantsStoryDeviceTabletWidth="518px"
          variantsStoryDeviceTabletHeight="800px"
          variantsStoryDeviceTabletPosition="relative"
          variantsStoryDeviceTabletTop="unset"
          variantsStoryDeviceTabletRight="unset"
          variantsStoryDeviceTabletBottom="unset"
          variantsStoryDeviceTabletLeft="unset"
        />
        <DeviceTabletSizeStateHa
          subtract="/subtract1.svg"
          star5="/star-52.svg"
          unrelate="Relate"
          hugeIconarrowsoutlinezoom="/hugeiconarrowsoutlinezoom-outrectangle.svg"
          hugeIconinterfaceoutlines="/hugeiconinterfaceoutlinestar2.svg"
          hugeIconcommunicationoutl="/hugeiconcommunicationoutlinechat-02.svg"
          contentContainerConponent="/content-container-conponents.svg"
          contentContainerConponent1="/content-container-conponents1.svg"
          hugeIconfinanceAndPayment="/hugeiconfinance-and-paymentoutlinedonate.svg"
          deviceTabletSizeStateHaWidth="518px"
          deviceTabletSizeStateHaHeight="800px"
          deviceTabletSizeStateHaBackgroundImage="url('/moves@3x.png')"
          deviceTabletSizeStateHaPosition="relative"
          deviceTabletSizeStateHaTop="unset"
          deviceTabletSizeStateHaRight="unset"
          deviceTabletSizeStateHaBottom="unset"
          deviceTabletSizeStateHaLeft="unset"
        />
      </div>
    </div>
  );
};

export default DStory;

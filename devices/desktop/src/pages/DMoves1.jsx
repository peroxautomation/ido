import Header from "../components/Header";
import DeviceTabletSizeStateHa from "../components/DeviceTabletSizeStateHa";
import ModalWindows1 from "../components/ModalWindows1";
import UserPost from "../components/UserPost";

const DMoves1 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <div
        // className="overflow-y-scroll h-[898px]"
        className="overflow-y-scroll h-[898px]"
      >
        <UserPost />
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
          // deviceTabletSizeStateHaPosition="absolute"
          deviceTabletSizeStateHaPosition="relative"
          deviceTabletSizeStateHaTop="148px"
          deviceTabletSizeStateHaRight="329px"
          deviceTabletSizeStateHaBottom="76px"
          deviceTabletSizeStateHaLeft="593px"
        />
        <DeviceTabletSizeStateHa
          subtract="/subtract.svg"
          star5="/star-51.svg"
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
          // deviceTabletSizeStateHaPosition="absolute"
          // deviceTabletSizeStateHaPosition="relative"
          deviceTabletSizeStateHaTop="988px"
          deviceTabletSizeStateHaRight="329px"
          deviceTabletSizeStateHaBottom="-764px"
          deviceTabletSizeStateHaLeft="593px"
        />
      </div>

      {/* <div className="modal_background_tint" />
      <ModalWindows1
        hugeIconfilesAndFolderout="/hugeiconfiles-and-folderoutlinefilevideo.svg"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil3@2x.png"
      /> */}
    </div>
  );
};

export default DMoves1;

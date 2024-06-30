import Header from "../components/Header";
import DeviceTabletSizeStateFu from "../components/DeviceTabletSizeStateFu";

const DMovesComment = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />

      <div className="modal_background_tint" />
      <DeviceTabletSizeStateFu
        subtract="/subtract1.svg"
        star5="/star-52.svg"
        subtract1="/subtract1.svg"
        star51="/star-52.svg"
        unrelate="Relate"
        viewStory="View story"
        contentContainerConponent="/content-container-conponents8.svg"
        hugeIconarrowsoutlinezoom="/hugeiconarrowsoutlinezoom-inrectangle1.svg"
        hugeIconinterfaceoutlines="/hugeiconinterfaceoutlinestar3.svg"
        hugeIconcommunicationoutl="/hugeiconcommunicationoutlinechat-021.svg"
        contentContainerConponent1="/content-container-conponents6.svg"
        contentContainerConponent2="/content-container-conponents4.svg"
        hugeIconfinanceAndPayment="/hugeiconfinance-and-paymentoutlinedonate1.svg"
        showMiniBtn
        showContentContainerConponent
        deviceTabletSizeStateFuWidth="744px"
        deviceTabletSizeStateFuHeight="100%"
        deviceTabletSizeStateFuBackgroundImage="url('/moves2@3x.png')"
        deviceTabletSizeStateFuPosition="absolute"
        deviceTabletSizeStateFuTop="0px"
        deviceTabletSizeStateFuRight="unset"
        deviceTabletSizeStateFuBottom="0px"
        deviceTabletSizeStateFuLeft="calc(50% - 372px)"
        viewStoryWidth="78px"
        viewStoryDisplay="inline-block"
      />
    </div>
  );
};

export default DMovesComment;

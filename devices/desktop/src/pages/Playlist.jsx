import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import Card from "../components/Card";
import DeviceTablet1 from "../components/DeviceTablet1";

const Playlist = () => {
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
        titleOfPage="Playlist"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <div className="absolute h-[calc(100%_-_971px)] w-[calc(100%_-_48px)] top-[776px] right-[24px] bottom-[195px] left-[24px] flex flex-row items-start justify-start gap-[16px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <DeviceTablet1
        front="/front2@2x.png"
        titleText="Want to try"
        creatorText="Sabina Jeyhunzade"
        numOfVideoText="7 video"
        info
        deviceTabletWidth="calc(100% - 48px)"
        deviceTabletPosition="absolute"
        deviceTabletTop="236px"
        deviceTabletRight="24px"
        deviceTabletLeft="24px"
        deviceTabletBorderRadius="unset"
        deviceTabletBackgroundColor="unset"
        deviceTabletHeight="unset"
        deviceTabletPadding="unset"
        frontIconAlignSelf="stretch"
        frontIconHeight="400px"
        frontIconWidth="unset"
        infoEditBtnAlignSelf="stretch"
        infoEditBtnWidth="unset"
        infoEditBtnPadding="unset"
      />
    </div>
  );
};

export default Playlist;

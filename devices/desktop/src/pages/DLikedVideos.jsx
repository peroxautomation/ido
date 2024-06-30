import Header from "../components/Header";
import SizeDesktopCard from "../components/SizeDesktopCard";
import Property1DesktopTitle from "../components/Property1DesktopTitle";
import MenuItem from "../components/MenuItem";

const DLikedVideos = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <div className="absolute top-[244px] left-[312px] flex flex-row items-start justify-start gap-[24px]">
        <SizeDesktopCard
          likeText="783"
          viewText="1043"
          sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
          sizeDesktopCardPosition="relative"
          sizeDesktopCardWidth="252px"
          sizeDesktopCardHeight="252px"
          sizeDesktopCardAlignSelf="unset"
          sizeDesktopCardFlex="unset"
          sizeDesktopCardTop="unset"
          sizeDesktopCardLeft="unset"
        />
        <SizeDesktopCard
          likeText="783"
          viewText="1043"
          sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
          sizeDesktopCardPosition="relative"
          sizeDesktopCardWidth="252px"
          sizeDesktopCardHeight="252px"
          sizeDesktopCardAlignSelf="unset"
          sizeDesktopCardFlex="unset"
          sizeDesktopCardTop="unset"
          sizeDesktopCardLeft="unset"
        />
        <SizeDesktopCard
          likeText="783"
          viewText="1043"
          sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
          sizeDesktopCardPosition="relative"
          sizeDesktopCardWidth="252px"
          sizeDesktopCardHeight="252px"
          sizeDesktopCardAlignSelf="unset"
          sizeDesktopCardFlex="unset"
          sizeDesktopCardTop="unset"
          sizeDesktopCardLeft="unset"
        />
        <SizeDesktopCard
          likeText="783"
          viewText="1043"
          sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
          sizeDesktopCardPosition="relative"
          sizeDesktopCardWidth="252px"
          sizeDesktopCardHeight="252px"
          sizeDesktopCardAlignSelf="unset"
          sizeDesktopCardFlex="unset"
          sizeDesktopCardTop="unset"
          sizeDesktopCardLeft="unset"
        />
      </div>
      <Property1DesktopTitle
        text="Liked videos"
        showLayers
        property1DesktopTitlePosition="absolute"
        property1DesktopTitleTop="148px"
        property1DesktopTitleLeft="312px"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
      <MenuItem
        text="Remove from liked"
        hugeIconecommerceoutlineb="/hugeiconinterfaceoutlinetrash1.svg"
        menuItemPosition="absolute"
        menuItemTop="300px"
        menuItemLeft="unset"
        menuItemRight="884px"
        menuItemMargin="unset"
      />
    </div>
  );
};

export default DLikedVideos;

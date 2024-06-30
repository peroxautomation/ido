import DeviceTablet from "../components/DeviceTablet";
import SizeDesktopCard from "../components/SizeDesktopCard";
import SizeDesktopGenre from "../components/SizeDesktopGenre";
import StateUserDeviceHalf from "../components/StateUserDeviceHalf";
import VariantAllNotifications from "../components/VariantAllNotifications";
import Header from "../components/Header";

const DNotificationSidebar = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <div className="absolute h-[calc(100%_-_368px)] w-[calc(100%_-_360px)] top-[352px] right-[48px] bottom-[16px] left-[312px] flex flex-col items-start justify-start gap-[40px]">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <DeviceTablet
            text="Trending now"
            rightBtn
            deviceTabletWidth="unset"
            deviceTabletAlignSelf="stretch"
          />
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[24px]">
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <DeviceTablet
            text="Recently added"
            rightBtn
            deviceTabletWidth="unset"
            deviceTabletAlignSelf="stretch"
          />
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[24px]">
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
            <SizeDesktopCard
              likeText="783"
              viewText="1043"
              sizeDesktopCardBackgroundImage="url('/card1@3x.png')"
              sizeDesktopCardPosition="relative"
              sizeDesktopCardWidth="unset"
              sizeDesktopCardHeight="unset"
              sizeDesktopCardAlignSelf="stretch"
              sizeDesktopCardFlex="1"
              sizeDesktopCardTop="unset"
              sizeDesktopCardLeft="unset"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_232px)] top-[159px] right-[-80px] left-[312px] h-[130px] flex flex-row items-start justify-start gap-[24px]">
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="unset"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="unset"
          sizeDesktopGenreAlignSelf="stretch"
          sizeDesktopGenreFlex="1"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="unset"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="unset"
          sizeDesktopGenreAlignSelf="stretch"
          sizeDesktopGenreFlex="1"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="unset"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="unset"
          sizeDesktopGenreAlignSelf="stretch"
          sizeDesktopGenreFlex="1"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="unset"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="unset"
          sizeDesktopGenreAlignSelf="stretch"
          sizeDesktopGenreFlex="1"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="unset"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="unset"
          sizeDesktopGenreAlignSelf="stretch"
          sizeDesktopGenreFlex="1"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="unset"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="unset"
          sizeDesktopGenreAlignSelf="stretch"
          sizeDesktopGenreFlex="1"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="unset"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="unset"
          sizeDesktopGenreAlignSelf="stretch"
          sizeDesktopGenreFlex="1"
          genreNameLeft="21px"
        />
        <SizeDesktopGenre
          genreName="Genre name"
          sizeDesktopGenreWidth="unset"
          sizeDesktopGenreBackgroundImage="url('/card2@3x.png')"
          sizeDesktopGenrePosition="relative"
          sizeDesktopGenreTop="unset"
          sizeDesktopGenreLeft="unset"
          sizeDesktopGenreHeight="unset"
          sizeDesktopGenreAlignSelf="stretch"
          sizeDesktopGenreFlex="1"
          genreNameLeft="21px"
        />
      </div>
      <div className="absolute bottom-[0px] left-[0px] flex flex-row items-start justify-start">
        <StateUserDeviceHalf
          hugeIconinterfaceoutlineh="/hugeiconmultimedia-and-audiooutlinevideotick.svg"
          hugeIcontimeAndDatesolidt="/hugeiconinterfaceoutlinehome-04.svg"
          hugeIcondeviceoutlinenoti="/hugeiconinterfacesolidnotification-04@2x.png"
          menuDesktopBorderRadius="12px"
          menuDesktopBackgroundColor="#fff"
        />
        <VariantAllNotifications titleOfPage="Notifications" />
      </div>
      <Header user={true} />
    </div>
  );
};

export default DNotificationSidebar;

import Property1Loggining from "../components/HeaderTablet";
import DeviceTablet2 from "../components/DeviceTablet2";
import DeviceMobile from "../components/DeviceMobile";
import StateInactiveSizeDefault from "../components/StateInactiveSizeDefault";
import TitleTablet from "../components/TitleTablet";

const Comparison2 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <Property1Loggining
        hugeIconmenuoutlinemenuLi="/hugeiconmenuoutlinemenulinehorizontal1.svg"
        ellipse1254="/ellipse-12541@2x.png"
        property1LogginingPosition="absolute"
        property1LogginingTop="40px"
        property1LogginingLeft="0px"
        property1LogginingWidth="100%"
        property1LogginingRight="0px"
      />
      <DeviceTablet2
        createdName="Ronald Hilson"
        star5="/star-5.svg"
        style="Original"
        percentage="100%"
        prop="/1@2x.png"
        deviceTabletPosition="absolute"
        deviceTabletTop="236px"
        deviceTabletLeft="calc(50% - 372px)"
      />
      <DeviceTablet2
        createdName="Ronald Hilson"
        star5="/star-5.svg"
        style="Challenged"
        percentage="76%"
        prop="/11@2x.png"
        deviceTabletPosition="absolute"
        deviceTabletTop="624px"
        deviceTabletLeft="calc(50% - 372px)"
      />
      <DeviceMobile
        hugeIconarrowsoutlineprev="/hugeiconarrowsoutlinepreviousarrow1.svg"
        hugeIconarrowsoutlinenext="/hugeiconarrowsoutlinenextarrow1.svg"
        showHugeIconarrowsoutlineprev={false}
        showHugeIconarrowsoutlinenext={false}
        deviceMobileWidth="696px"
        deviceMobilePosition="absolute"
        deviceMobileTop="1072px"
        deviceMobileLeft="calc(50% - 348px)"
        deviceMobileHeight="40px"
        hugeIconarrowsoutlineprevWidth="40px"
        hugeIconarrowsoutlineprevHeight="40px"
        hugeIconarrowsoutlinenextWidth="40px"
        hugeIconarrowsoutlinenextHeight="40px"
      />
      <StateInactiveSizeDefault
        text="Show results"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        icon={false}
        stateInactiveSizeDefaultBackgroundColor="#cc0f3c"
        stateInactiveSizeDefaultPosition="absolute"
        stateInactiveSizeDefaultTop="unset"
        stateInactiveSizeDefaultLeft="188px"
        stateInactiveSizeDefaultWidth="calc(100% - 376px)"
        stateInactiveSizeDefaultRight="188px"
        stateInactiveSizeDefaultBottom="77px"
        stateInactiveSizeDefaultGap="8px"
        stateInactiveSizeDefaultFlex="unset"
        stateInactiveSizeDefaultAlignSelf="unset"
        hugeIconeducationsolidpenWidth="16px"
        hugeIconeducationsolidpenHeight="16px"
      />
      <TitleTablet
        titleOfPage="Comparison"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="124px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
    </div>
  );
};

export default Comparison2;

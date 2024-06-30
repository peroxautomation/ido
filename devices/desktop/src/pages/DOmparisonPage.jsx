import Header from "../components/Header";
import OmparisonCard2 from "../components/OmparisonCard";
import DeviceMobile from "../components/DeviceMobile";
import StateInactiveSizeDefault from "../components/StateInactiveSizeDefault";

const DOmparisonPage = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <OmparisonCard2 rectangle2010="/rectangle-20102@2x.png" />
      <OmparisonCard2
        rectangle2010="/rectangle-20103@2x.png"
        propLeft="864px"
      />
      <DeviceMobile
        hugeIconarrowsoutlineprev="/hugeiconarrowsoutlinepreviousarrow1.svg"
        hugeIconarrowsoutlinenext="/hugeiconarrowsoutlinenextarrow1.svg"
        showHugeIconarrowsoutlineprev
        showHugeIconarrowsoutlinenext
        deviceMobileWidth="696px"
        deviceMobilePosition="absolute"
        deviceMobileTop="957px"
        deviceMobileLeft="calc(50% - 216px)"
        deviceMobileHeight="unset"
        hugeIconarrowsoutlineprevWidth="40px"
        hugeIconarrowsoutlineprevHeight="40px"
        hugeIconarrowsoutlinenextWidth="40px"
        hugeIconarrowsoutlinenextHeight="40px"
      />
      <StateInactiveSizeDefault
        text="Show results"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
        icon={false}
        stateInactiveSizeDefaultBackgroundColor="#cc0f3c"
        stateInactiveSizeDefaultPosition="absolute"
        stateInactiveSizeDefaultTop="unset"
        stateInactiveSizeDefaultLeft="669px"
        stateInactiveSizeDefaultWidth="calc(100% - 1072px)"
        stateInactiveSizeDefaultRight="403px"
        stateInactiveSizeDefaultBottom="83px"
        stateInactiveSizeDefaultGap="8px"
        stateInactiveSizeDefaultFlex="unset"
        stateInactiveSizeDefaultAlignSelf="unset"
        hugeIconeducationsolidpenWidth="16px"
        hugeIconeducationsolidpenHeight="16px"
      />
    </div>
  );
};

export default DOmparisonPage;

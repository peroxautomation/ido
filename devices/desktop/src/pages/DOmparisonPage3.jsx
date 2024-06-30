import Header from "../components/Header";
import StateInactiveSizeDefault from "../components/StateInactiveSizeDefault";
import HIndexIcon from "../components/HIndexIcon";
import Property1DesktopTitle from "../components/Property1DesktopTitle";

const DOmparisonPage3 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-xl text-neutral-100 font-overline-regular">
    <Header user={true} />
      <StateInactiveSizeDefault
        text="Show results"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        icon={false}
        stateInactiveSizeDefaultBackgroundColor="#cc0f3c"
        stateInactiveSizeDefaultPosition="absolute"
        stateInactiveSizeDefaultTop="unset"
        stateInactiveSizeDefaultLeft="669px"
        stateInactiveSizeDefaultWidth="calc(100% - 1072px)"
        stateInactiveSizeDefaultRight="403px"
        stateInactiveSizeDefaultBottom="11px"
        stateInactiveSizeDefaultGap="8px"
        stateInactiveSizeDefaultFlex="unset"
        stateInactiveSizeDefaultAlignSelf="unset"
        hugeIconeducationsolidpenWidth="16px"
        hugeIconeducationsolidpenHeight="16px"
      />
      <div className="absolute top-[228px] left-[312px] flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-6">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              Ronald Hilson
            </div>
            <HIndexIcon
              subtract="/subtract.svg"
              star5="/star-5.svg"
              hIndexIconPosition="relative"
            />
            <div className="relative leading-[28px] text-center">Original</div>
          </div>
          <div className="relative leading-[28px] text-center">100%</div>
        </div>
        <img
          className="w-[528px] relative h-[673px] object-cover"
          alt=""
          src="/rectangle-20102@2x.png"
        />
      </div>
      <div className="absolute top-[228px] left-[864px] flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-6">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative leading-[28px] font-semibold">
              Ronald Hilson
            </div>
            <HIndexIcon
              subtract="/subtract.svg"
              star5="/star-5.svg"
              hIndexIconPosition="relative"
            />
            <div className="relative leading-[28px] text-center">Original</div>
          </div>
          <div className="relative leading-[28px] text-center">76%</div>
        </div>
        <img
          className="w-[528px] relative h-[673px] object-cover"
          alt=""
          src="/rectangle-20103@2x.png"
        />
      </div>
      <Property1DesktopTitle
        text="Сomparison"
        showLayers
        property1DesktopTitlePosition="absolute"
        property1DesktopTitleTop="132px"
        property1DesktopTitleLeft="312px"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
    </div>
  );
};

export default DOmparisonPage3;

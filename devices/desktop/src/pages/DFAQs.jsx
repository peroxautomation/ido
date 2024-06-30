import Header from "../components/Header";
import StateClosedDeviceTablet from "../components/StateClosedDeviceTablet";
import StateOpenedDeviceTablet from "../components/StateOpenedDeviceTablet";
import Property1DesktopTitle from "../components/Property1DesktopTitle";

const DFAQs = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
       <Header user={true} />
      <div className="absolute top-[244px] left-[312px] h-[780px] flex flex-col items-start justify-start gap-[8px]">
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateOpenedDeviceTablet
          questionText="Various versions have evolved over the years"
          answerText="Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
          stateOpenedDeviceTabletAlignSelf="unset"
          stateOpenedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
        <StateClosedDeviceTablet
          questionText="Various versions have evolved over the years"
          stateClosedDeviceTabletAlignSelf="unset"
          stateClosedDeviceTabletWidth="1080px"
        />
      </div>
      <Property1DesktopTitle
        text="FAQs"
        showLayers={false}
        property1DesktopTitlePosition="absolute"
        property1DesktopTitleTop="148px"
        property1DesktopTitleLeft="312px"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
    </div>
  );
};

export default DFAQs;

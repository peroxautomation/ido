import Header from "../components/Header";
import Cards from "../components/Cards";
import Property1DesktopTitle from "../components/Property1DesktopTitle";

const DHistory = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <Cards />
      <Property1DesktopTitle
        text="History"
        showLayers
        property1DesktopTitlePosition="absolute"
        property1DesktopTitleTop="148px"
        property1DesktopTitleLeft="312px"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
    </div>
  );
};

export default DHistory;

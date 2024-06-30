import Header from "../components/Header";
import Property1DesktopTitle from "../components/Property1DesktopTitle";
import InputsCTA1 from "../components/InputsCTA1";

const DContactUs = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <Property1DesktopTitle
        text="Contact us"
        showLayers={false}
        property1DesktopTitlePosition="absolute"
        property1DesktopTitleTop="156px"
        property1DesktopTitleLeft="312px"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
      <InputsCTA1 />
    </div>
  );
};

export default DContactUs;

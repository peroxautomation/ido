import Header from "../components/Header";
import StateSelected1 from "../components/StateSelected1";
import Property1DesktopTitle from "../components/Property1DesktopTitle";

const DUpgrade = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Header user={true} />
      <StateSelected1
        amountText="$10 "
        feature1="Create unlimited"
        feature2="Create unlimited"
        feature3="Create unlimited"
        feature4="Create unlimited"
        feature5="Create unlimited"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
        stateSelectedPosition="absolute"
        stateSelectedTop="276px"
        stateSelectedLeft="864px"
        stateSelectedBoxShadow="0px 4px 25px rgba(204, 15, 60, 0.3)"
        stateSelectedBorder="2px solid #cc0f3c"
      />
      <StateSelected1
        amountText="$0 "
        feature1="Create unlimited"
        feature2="Create unlimited"
        feature3="Create unlimited"
        feature4="Create unlimited"
        feature5="Create unlimited"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
        stateSelectedPosition="absolute"
        stateSelectedTop="276px"
        stateSelectedLeft="496px"
        stateSelectedBoxShadow="unset"
        stateSelectedBorder="unset"
      />
      <Property1DesktopTitle
        text="Pricing"
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

export default DUpgrade;

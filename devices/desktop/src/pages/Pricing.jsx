import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import StateSelected1 from "../components/StateSelected1";

const Pricing = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <Property1Loggining
        hugeIconmenuoutlinemenuLi="/hugeiconmenuoutlinemenulinehorizontal1.svg"
        ellipse1254="/ellipse-12542@2x.png"
        property1LogginingPosition="absolute"
        property1LogginingTop="40px"
        property1LogginingLeft="0px"
        property1LogginingWidth="100%"
        property1LogginingRight="0px"
      />
      <TitleTablet
        titleOfPage="Pricing"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <StateSelected1
        amountText="$10 "
        feature1="Create unlimited"
        feature2="Create unlimited"
        feature3="Create unlimited"
        feature4="Create unlimited"
        feature5="Create unlimited"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
        stateSelectedPosition="absolute"
        stateSelectedTop="252px"
        stateSelectedLeft="198px"
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
        stateSelectedTop="664px"
        stateSelectedLeft="200px"
        stateSelectedBoxShadow="unset"
        stateSelectedBorder="unset"
      />
    </div>
  );
};

export default Pricing;

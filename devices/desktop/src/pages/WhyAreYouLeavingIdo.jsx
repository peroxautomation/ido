import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";
import TitleTablet from "../components/TitleTablet";
import VariantsWhyAreYouLeavingI from "../components/VariantsWhyAreYouLeavingI";

const WhyAreYouLeavingIdo = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <SizeBigStateSecondaryDev
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        text="Next"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus.svg"
        leftIcon={false}
        rightIcon={false}
        sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
        sizeBigStateSecondaryDevAlignSelf="unset"
        sizeBigStateSecondaryDevWidth="calc(100% - 404px)"
        sizeBigStateSecondaryDevPosition="absolute"
        sizeBigStateSecondaryDevRight="202px"
        sizeBigStateSecondaryDevBottom="40px"
        sizeBigStateSecondaryDevLeft="202px"
        sizeBigStateSecondaryDevFlex="unset"
        sizeBigStateSecondaryDevBorder="unset"
        sizeBigStateSecondaryDevTop="unset"
        cTAColor="#fff"
      />
      <TitleTablet
        titleOfPage="Creating cover dance"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage={false}
        hugeIconarrowssoliddirectTop="40px"
        hugeIconarrowssoliddirectWidth="307px"
        propOpacity="0"
      />
      <VariantsWhyAreYouLeavingI
        reason1="Lost interest"
        reason2="Didn’t meet my expectations"
        reason3="Found a better alternative"
        reason4="Encountered too many bugs or issues"
        reason5="App is too difficult to use"
        reason6="Not useful for my needs"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil3@2x.png"
        showCTA={false}
        variantsWhyAreYouLeavingIPosition="absolute"
        variantsWhyAreYouLeavingITop="calc(50% - 453.5px)"
        variantsWhyAreYouLeavingILeft="calc(50% - 208px)"
        variantsWhyAreYouLeavingIBackgroundColor="unset"
      />
    </div>
  );
};

export default WhyAreYouLeavingIdo;

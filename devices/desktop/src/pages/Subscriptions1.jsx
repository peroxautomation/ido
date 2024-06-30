import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import VariantIncomeTablet from "../components/VariantIncomeTablet";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";
import AreYouSureModal from "../components/AreYouSureModal";

const Subscriptions1 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <Property1Loggining
        hugeIconmenuoutlinemenuLi="/hugeiconmenuoutlinemenulinehorizontal.svg"
        ellipse1254="/ellipse-1254@2x.png"
        property1LogginingPosition="absolute"
        property1LogginingTop="40px"
        property1LogginingLeft="0px"
        property1LogginingWidth="100%"
        property1LogginingRight="0px"
      />
      <TitleTablet
        titleOfPage="Subscriptions"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <div className="absolute w-[calc(100%_-_48px)] top-[236px] right-[24px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
        <VariantIncomeTablet
          stText="Plan"
          ndText="Premium"
          variantIncomeTabletWidth="unset"
          variantIncomeTabletAlignSelf="stretch"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Duration"
          ndText="Monthly"
          variantIncomeTabletWidth="unset"
          variantIncomeTabletAlignSelf="stretch"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Status"
          ndText="Active"
          variantIncomeTabletWidth="unset"
          variantIncomeTabletAlignSelf="stretch"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Renewal date"
          ndText="18th May"
          variantIncomeTabletWidth="unset"
          variantIncomeTabletAlignSelf="stretch"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Amount"
          ndText="$10"
          variantIncomeTabletWidth="unset"
          variantIncomeTabletAlignSelf="stretch"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
      </div>
      <SizeBigStateSecondaryDev
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus2.svg"
        text="Cancel subscription"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus2.svg"
        leftIcon={false}
        rightIcon={false}
        sizeBigStateSecondaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
        sizeBigStateSecondaryDevAlignSelf="unset"
        sizeBigStateSecondaryDevWidth="calc(100% - 404px)"
        sizeBigStateSecondaryDevPosition="absolute"
        sizeBigStateSecondaryDevRight="200px"
        sizeBigStateSecondaryDevBottom="505px"
        sizeBigStateSecondaryDevLeft="204px"
        sizeBigStateSecondaryDevFlex="unset"
        sizeBigStateSecondaryDevBorder="unset"
        sizeBigStateSecondaryDevTop="unset"
        cTAColor="#cc240e"
      />
      <div className="absolute top-[calc(50%_-_566.5px)] left-[calc(50%_-_372px)] bg-gray-100 w-[744px] h-[1133px]" />
      <AreYouSureModal
        questionText="Are you sure want to cancel subscription?"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil7@2x.png"
        cTA="Yes"
        hugeIconeducationsolidpen1="/hugeiconeducationsolidpencil@2x.png"
        cTA1="No"
        areYouSureModalPosition="absolute"
        areYouSureModalTop="calc(50% - 73.5px)"
        areYouSureModalLeft="calc(50% - 125px)"
      />
    </div>
  );
};

export default Subscriptions1;

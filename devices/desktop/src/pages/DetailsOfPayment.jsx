import Property1Loggining from "../components/HeaderTablet";
import TitleTablet from "../components/TitleTablet";
import VariantIncomeTablet from "../components/VariantIncomeTablet";

const DetailsOfPayment = () => {
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
        titleOfPage="Payment details"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="140px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
      <div className="absolute top-[236px] left-[calc(50%_-_348px)] flex flex-col items-start justify-start gap-[16px]">
        <VariantIncomeTablet
          stText="From"
          ndText="Sofia Kuchenko"
          variantIncomeTabletWidth="696px"
          variantIncomeTabletAlignSelf="unset"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Amount"
          ndText="+$35"
          variantIncomeTabletWidth="696px"
          variantIncomeTabletAlignSelf="unset"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#0c9f6e"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Date/time"
          ndText="18.04.2024/10:31"
          variantIncomeTabletWidth="696px"
          variantIncomeTabletAlignSelf="unset"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Service"
          ndText="Donation"
          variantIncomeTabletWidth="696px"
          variantIncomeTabletAlignSelf="unset"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
      </div>
    </div>
  );
};

export default DetailsOfPayment;

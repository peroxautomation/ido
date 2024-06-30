import Property1Loggining from "../components/HeaderTablet";
import Card from "../components/Card";
import VariantWithFilter from "../components/VariantWithFilter";
import VariantsFiltersModal from "../components/VariantsFiltersModal";
import Autosuggest1 from "../components/Autosuggest1";

const Year = () => {
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
      <div className="absolute h-[calc(100%_-_971px)] w-[calc(100%_-_48px)] top-[204px] right-[24px] bottom-[767px] left-[24px] flex flex-row items-start justify-start gap-[16px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <VariantWithFilter
        text="Search"
        leftIcon
        variantWithFilterWidth="calc(100% - 48px)"
        variantWithFilterPosition="absolute"
        variantWithFilterTop="140px"
        variantWithFilterRight="24px"
        variantWithFilterLeft="24px"
      />
      <div className="modal_background_tint" />
      <VariantsFiltersModal
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        variantsFiltersModalWidth="calc(100% - 328px)"
        variantsFiltersModalPosition="absolute"
        variantsFiltersModalTop="339px"
        variantsFiltersModalRight="164px"
        variantsFiltersModalLeft="164px"
      />
      <Autosuggest1
        all="2017"
        all1="2018"
        allHref="https://www.britannica.com/place/Cambodia"
        all2="2019"
        allHref1="https://www.britannica.com/place/Denmark"
        all3="2020"
        allHref2="https://www.britannica.com/place/Ecuador"
        all4="2021"
        allHref3="https://www.britannica.com/place/Finland"
        all5="2022"
        allHref4="https://www.britannica.com/place/Germany"
        all6="2023"
        allHref5="https://www.britannica.com/place/Zimbabwe"
        all7="2024"
        propTop="587px"
        propLeft="196px"
        propTextDecoration="none"
      />
    </div>
  );
};

export default Year;

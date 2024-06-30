import Property1Loggining from "../components/HeaderTablet";
import Card from "../components/Card";
import VariantWithFilter from "../components/VariantWithFilter";

const SearchResult = () => {
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
    </div>
  );
};

export default SearchResult;

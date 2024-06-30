import Property1Loggining from "../components/HeaderTablet";
import Card from "../components/Card";
import VariantWithFilter from "../components/VariantWithFilter";
import VariantsFiltersModal from "../components/VariantsFiltersModal";
import Property from "../components/Property";

const Raiting = () => {
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
      <div className="absolute top-[587px] left-[380px] rounded-2xl w-[168px] overflow-hidden flex flex-col items-start justify-start">
        <Property
          hugeIconinterfacesolidsta="/hugeiconinterfacesolidstar.svg"
          hugeIconinterfacesolidsta1="/hugeiconinterfacesolidstar.svg"
          hugeIconinterfacesolidsta2="/hugeiconinterfacesolidstar.svg"
          hugeIconinterfacesolidsta3="/hugeiconinterfacesolidstar.svg"
          property15AlignSelf="stretch"
        />
        <Property
          hugeIconinterfacesolidsta="/hugeiconinterfacesolidstar.svg"
          hugeIconinterfacesolidsta1="/hugeiconinterfacesolidstar.svg"
          hugeIconinterfacesolidsta2="/hugeiconinterfacesolidstar.svg"
          hugeIconinterfacesolidsta3="/hugeiconinterfacesolidstar1.svg"
          property15AlignSelf="stretch"
        />
        <Property
          hugeIconinterfacesolidsta="/hugeiconinterfacesolidstar.svg"
          hugeIconinterfacesolidsta1="/hugeiconinterfacesolidstar.svg"
          hugeIconinterfacesolidsta2="/hugeiconinterfacesolidstar1.svg"
          hugeIconinterfacesolidsta3="/hugeiconinterfacesolidstar1.svg"
          property15AlignSelf="stretch"
        />
        <Property
          hugeIconinterfacesolidsta="/hugeiconinterfacesolidstar.svg"
          hugeIconinterfacesolidsta1="/hugeiconinterfacesolidstar1.svg"
          hugeIconinterfacesolidsta2="/hugeiconinterfacesolidstar1.svg"
          hugeIconinterfacesolidsta3="/hugeiconinterfacesolidstar1.svg"
          property15AlignSelf="stretch"
        />
        <Property
          hugeIconinterfacesolidsta="/hugeiconinterfacesolidstar1.svg"
          hugeIconinterfacesolidsta1="/hugeiconinterfacesolidstar1.svg"
          hugeIconinterfacesolidsta2="/hugeiconinterfacesolidstar1.svg"
          hugeIconinterfacesolidsta3="/hugeiconinterfacesolidstar1.svg"
          property15AlignSelf="stretch"
        />
      </div>
    </div>
  );
};

export default Raiting;

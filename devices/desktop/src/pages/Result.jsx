import HugeIconinterfaceoutlinech from "../components/HugeIconinterfaceoutlinech";
import SizeBigStateSecondaryDev from "../components/SizeBigStateSecondaryDev";

const Result = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden text-center text-21xl text-neutral-100 font-overline-regular">
      <HugeIconinterfaceoutlinech
        hugeIconinterfaceoutlinec="/hugeiconinterfaceoutlinecheckcircle.svg"
        hugeIconinterfaceoutlinecWidth="56px"
        hugeIconinterfaceoutlinecHeight="56px"
        hugeIconinterfaceoutlinecPosition="absolute"
        hugeIconinterfaceoutlinecTop="calc(50% - 137.5px)"
        hugeIconinterfaceoutlinecLeft="calc(50% - 26px)"
      />
      <div className="absolute w-[calc(100%_-_203px)] top-[525px] right-[101px] left-[102px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[48px]">
          Successfully started a premium initiative for IDO
        </div>
      </div>
      <SizeBigStateSecondaryDev
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        text="get started"
        hugeIconinterfacesolidplu1="/hugeiconinterfacesolidplus.svg"
        leftIcon={false}
        rightIcon={false}
        sizeBigStateSecondaryDevBackgroundColor="#cc0f3c"
        sizeBigStateSecondaryDevAlignSelf="unset"
        sizeBigStateSecondaryDevWidth="calc(100% - 404px)"
        sizeBigStateSecondaryDevPosition="absolute"
        sizeBigStateSecondaryDevRight="202px"
        sizeBigStateSecondaryDevBottom="428px"
        sizeBigStateSecondaryDevLeft="202px"
        sizeBigStateSecondaryDevFlex="unset"
        sizeBigStateSecondaryDevBorder="unset"
        sizeBigStateSecondaryDevTop="unset"
        cTAColor="#fff"
      />
    </div>
  );
};

export default Result;

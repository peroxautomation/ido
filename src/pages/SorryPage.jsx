import UnsuccessfulIcon from "../components/mobile/UnsuccessfulIcon";
import Button2 from "../components/mobile/Button2";

const SorryPage = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1.25rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-items-center">
      <div className="absolute w-[20.938rem] flex flex-row items-center justify-center">
        <div className="top-[40vh] flex-1 relative leading-[1.75rem] font-semibold grid grid-flow-row justify-items-center">
          <UnsuccessfulIcon
            hugeIconinterfaceoutlinew="/hugeiconinterfaceoutlinewarning.svg"
            hugeIconinterfaceoutlinewWidth="14.93%"
            hugeIconinterfaceoutlinewPosition="relative"
          />
          Sorry we cannot share your video due to our copyright policy!
        </div>
      </div>

      <Button2
        cTATop="unset"
        cTALeft="1.25rem"
        cTAWidth="calc(100% - 40px)"
        cTARight="1.25rem"
        cTABottom="2.5rem"
        cTA="Back to home"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        cTABackgroundColor="#cc0f3c"
        cTAPosition="absolute"
        cTAGap="0.5rem"
        cTAFlex="unset"
        hugeIconeducationsolidpenWidth="1rem"
        hugeIconeducationsolidpenHeight="1rem"
      />
    </div>
  );
};

export default SorryPage;

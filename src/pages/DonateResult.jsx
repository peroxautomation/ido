import Button2 from "../components/mobile/Button2";

const WidthdrawResult = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-silver-200 font-button-1-regular grid grid-flow-row items-center">
      <Button2
        cTATop="unset"
        cTALeft="1.25rem"
        cTAWidth="calc(100% - 40px)"
        cTARight="1.25rem"
        cTABottom="3.813rem"
        cTA="Back"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        cTABackgroundColor="#cc0f3c"
        cTAPosition="absolute"
        cTAGap="0.5rem"
        cTAFlex="unset"
        hugeIconeducationsolidpenWidth="1rem"
        hugeIconeducationsolidpenHeight="1rem"
      />
      <div className="absolute top-[17.813rem] w-full flex flex-col items-center gap-[1rem] text-center text-neutral-100">
        <img
          className="w-[3.5rem] relative h-[3.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfaceoutlinecheckcircle.svg"
        />
        <div className="w-[20.938rem] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem]">Donated successful</div>
        </div>
      </div>
    </div>
  );
};

export default WidthdrawResult;

import SizeSmallStatePrimaryDev from "../components/SizeSmallStatePrimaryDev";

const Result2 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden text-center text-21xl text-neutral-100 font-overline-regular">
      <div className="absolute w-[calc(100%_-_203px)] top-[525px] right-[101px] left-[102px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[48px]">
          Are you ready to upload your challenge ?
        </div>
      </div>
      <SizeSmallStatePrimaryDev
        text="Delete"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
        rightIcon={false}
        sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
        sizeSmallStatePrimaryDevWidth="calc(100% - 492px)"
        sizeSmallStatePrimaryDevPosition="absolute"
        sizeSmallStatePrimaryDevRight="380px"
        sizeSmallStatePrimaryDevBottom="428px"
        sizeSmallStatePrimaryDevLeft="112px"
        cTAColor="#fff"
      />
      <SizeSmallStatePrimaryDev
        text="Upload"
        hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
        rightIcon={false}
        sizeSmallStatePrimaryDevBackgroundColor="#cc0f3c"
        sizeSmallStatePrimaryDevWidth="calc(100% - 492px)"
        sizeSmallStatePrimaryDevPosition="absolute"
        sizeSmallStatePrimaryDevRight="112px"
        sizeSmallStatePrimaryDevBottom="428px"
        sizeSmallStatePrimaryDevLeft="380px"
        cTAColor="#fff"
      />
    </div>
  );
};

export default Result2;

import SizeSmallStatePrimaryDev from "../components/SizeSmallStatePrimaryDev";

const DAreYouReady = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden text-center text-21xl text-neutral-100 font-overline-regular">
      <div className="absolute top-[422px] left-[calc(50%_-_271px)] w-[541px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[48px]">
          Are you ready to upload your challenge ?
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_920px)] right-[461px] bottom-[422px] left-[459px] flex flex-row items-start justify-start gap-[16px]">
        <SizeSmallStatePrimaryDev
          text="Delete"
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
          rightIcon={false}
          sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeSmallStatePrimaryDevWidth="252px"
          sizeSmallStatePrimaryDevPosition="unset"
          sizeSmallStatePrimaryDevRight="unset"
          sizeSmallStatePrimaryDevBottom="unset"
          sizeSmallStatePrimaryDevLeft="unset"
          cTAColor="#fff"
        />
        <SizeSmallStatePrimaryDev
          text="Upload"
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
          rightIcon={false}
          sizeSmallStatePrimaryDevBackgroundColor="#cc0f3c"
          sizeSmallStatePrimaryDevWidth="252px"
          sizeSmallStatePrimaryDevPosition="unset"
          sizeSmallStatePrimaryDevRight="unset"
          sizeSmallStatePrimaryDevBottom="unset"
          sizeSmallStatePrimaryDevLeft="unset"
          cTAColor="#fff"
        />
      </div>
    </div>
  );
};

export default DAreYouReady;

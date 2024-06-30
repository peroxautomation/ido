import ToggleMenuProcessBar from "../components/ToggleMenuProcessBar";

const DUploading = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden text-center text-base text-neutral-100 font-overline-regular">
      <div className="absolute w-[calc(100%_-_1105px)] top-[calc(50%_-_56px)] right-[553px] left-[552px] flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[24px]">Uploading</div>
        </div>
        <ToggleMenuProcessBar />
      </div>
    </div>
  );
};

export default DUploading;

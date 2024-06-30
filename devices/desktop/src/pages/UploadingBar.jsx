import ToggleMenuProcessBar from "../components/ToggleMenuProcessBar";

const UploadingBar = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden text-center text-base text-neutral-100 font-overline-regular">
      <div className="absolute w-[calc(100%_-_409px)] top-[calc(50%_-_28.5px)] right-[205px] left-[204px] flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[24px]">Uplaoding</div>
        </div>
        <ToggleMenuProcessBar />
      </div>
    </div>
  );
};

export default UploadingBar;

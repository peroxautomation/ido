import PrimaryButton from "../components/mobile/PrimaryButton";
import UnsuccessfulIcon from "../components/mobile/UnsuccessfulIcon";

const UploadUnsuccessful = () => {
  return (
    <div className="w-full fixed bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-silver font-button-1-regular">
      <div className="absolute w-[calc(100%_-_40px)] top-[calc(50%_-_60.5px)] right-[1.25rem] left-[1.25rem] flex flex-col items-center justify-start gap-[0.5rem] text-center text-neutral-100">
        <UnsuccessfulIcon />
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem] whitespace-pre-wrap">
            Your challenge has not been uploaded
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem]">
            Please try again
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-[90%]">
        <PrimaryButton
          cTA="Back"
          onCTAClick={() => history.back()}
          isActive={true}
        />
      </div>
    </div>
  );
};

export default UploadUnsuccessful;

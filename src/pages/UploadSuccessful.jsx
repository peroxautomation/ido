import { useNavigate } from "react-router-dom";
import Button2 from "../components/mobile/Button2";
import ConfirmedIcon from "../components/mobile/ConfirmedIcon";

const UploadSuccessful = () => {
  const navigate = useNavigate();

  const onViewClick = () => {
    navigate('/moves/creator-view/temp-video-id-12-34-45')
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-silver font-button-1-regular">
      <Button2
        onClick={onViewClick}
        cTAWidth="calc(100% - 40px)"
        cTARight="1.25rem"
        cTABottom="3.813rem"
        cTATop="unset"
        cTAPosition="absolute"
        cTALeft="1.25rem"
        cTABackgroundColor="#cc0f3c"
        cTAGap="0.5rem"
        cTAFlex="unset"
        cTA="View"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        hugeIconeducationsolidpenWidth="1rem"
        hugeIconeducationsolidpenHeight="1rem"
      />
      <div className="absolute w-[calc(100%_-_40px)] top-[calc(50%_-_48.5px)] right-[1.25rem] left-[1.25rem] flex flex-col items-center justify-start gap-[1rem] text-center text-neutral-100">
        <ConfirmedIcon />
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem]">
            Your challenge has been uploaded
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSuccessful;

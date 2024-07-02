import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/mobile/PrimaryButton";
import ConfirmedIcon from "../components/mobile/ConfirmedIcon";

const UploadSuccessful = () => {
  /************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();

  /**************************************************************** */
  /***************************{ Methods}*************************** */
  /**************************************************************** */
  const onViewClick = () => {
    navigate("/moves/creator/temp-id-123", {
      state: { view: "creator", videoId: "temp-id-123" },
    });
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-silver font-button-1-regular">
      <div className="absolute w-[calc(100%_-_40px)] top-[calc(50%_-_48.5px)] right-[1.25rem] left-[1.25rem] flex flex-col items-center justify-start gap-[1rem] text-center text-neutral-100">
        <ConfirmedIcon />
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem]">
            Your challenge has been uploaded
          </div>
        </div>
      </div>
      <div className="bottom-0 absolute w-[90%] left-[1.25rem] right-[2.5rem">
        <PrimaryButton onCTAClick={onViewClick} cTA="View" isActive={true} />
      </div>
    </div>
  );
};

export default UploadSuccessful;

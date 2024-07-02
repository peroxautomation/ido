import { useNavigate, useParams } from "react-router-dom";
import SecondaryButton from "../components/mobile/SecondaryButton";

const ConfrimUpload = () => {
  const navigate = useNavigate();
  const { flow } = useParams();

  // On delete click
  const onDeleteClick = () => {
    navigate(`/create/${flow}`);
  };
  // On upload click
  const onUploadClick = () => {
    navigate(`/create/${flow}/uploading`, { state: { flow: flow } });
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1.25rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-center">
      <div className="relative w-[90vw] top-[10vh] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[1.75rem] font-semibold text-[1.2em]">
          Are you ready to upload your challenge ?
        </div>
      </div>
      <div className="relative w-[90vw] flex flex-row gap-[0.937rem] h-[80%] items-end">
        <SecondaryButton
          onClick={onDeleteClick}
           className="bg-white-8 w-[10rem]"
          cTA="Delete"
        />
        <SecondaryButton
          onClick={onUploadClick}
          cTA="Upload"
          className="relative bg-[#cc0f3c]"
        />
      </div>
    </div>
  );
};

export default ConfrimUpload;

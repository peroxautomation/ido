import { useNavigate, useParams } from "react-router-dom";
import Button3 from "../components/mobile/Button2";

const ConfrimUpload = () => {
  const navigate = useNavigate();
  const {flow} = useParams();

  // On delete click
  const onDeleteClick = () => {
    navigate(`/create/${flow}`);
  }
  // On upload click
  const onUploadClick = () => {
    navigate(`/create/${flow}/uploading`, {state: {flow: flow}});
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1.25rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-center">
      <div className="relative w-[90vw] top-[10vh] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[1.75rem] font-semibold text-[1.2em]">
          Are you ready to upload your challenge ?
        </div>
      </div>
      <div className="relative w-[90vw] flex flex-row gap-[0.937rem] h-[80%] items-end">
        <Button3
          onClick={onDeleteClick}
          cTAWidth="unset"
          cTARight="unset"
          cTABottom="unset"
          cTATop="unset"
          cTAPosition="unset"
          cTALeft="unset"
          cTABackgroundColor="rgba(255, 255, 255, 0.08)"
          cTAGap="unset"
          cTAFlex="1"
          cTA="Delete"
          hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
          hugeIconeducationsolidpenWidth="1.5rem"
          hugeIconeducationsolidpenHeight="1.5rem"
        />
        <Button3
          onClick={onUploadClick}
          cTAWidth="unset"
          cTARight="unset"
          cTABottom="unset"
          cTATop="unset"
          cTAPosition="unset"
          cTALeft="unset"
          cTABackgroundColor="#cc0f3c"
          cTAGap="unset"
          cTAFlex="1"
          cTA="Upload"
          hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
          hugeIconeducationsolidpenWidth="1.5rem"
          hugeIconeducationsolidpenHeight="1.5rem"
        />
      </div>
    </div>
  );
};

export default ConfrimUpload;

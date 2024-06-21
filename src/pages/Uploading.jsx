import { useNavigate, useParams } from "react-router-dom";
import UploadBar from "../components/mobile/UploadBar";

const Uploading = () => {
  const { flow } = useParams();
  const navigate = useNavigate();

  setTimeout(()=> {
    navigate(`/create/${flow}/upload-successful`)
  }, 4000);
  
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-silver font-button-1-regular">
      <div className="absolute w-[calc(100%_-_40px)] top-[calc(50%_-_0.5px)] right-[1.25rem] left-[1.25rem] flex flex-col items-start justify-start gap-[1rem] text-center text-neutral-100">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem]">Uploading</div>
        </div>
        <UploadBar />
      </div>
    </div>
  );
};

export default Uploading;

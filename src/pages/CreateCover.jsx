import GalleryAndCameraIcon from "../components/mobile/GalleryAndCameraIcon";
import Exit from "../components/mobile/Exit";
import NextButton from "../components/mobile/NextButton";
import SelectedVideoContainer1 from "../components/mobile/SelectedVideoContainer1";
import GalleryVideoRow from "../components/mobile/GalleryVideoRow";
import CreatePicker from "../components/mobile/CreatePicker";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

/**
 * Create cover screen
 * @returns
 */
const CreateCover = () => {
  /***************************************************************** */
  /***************************{Variables}*************************** */
  /***************************************************************** */
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(
    "/choosing-video-container@2x.png"
  );

  /**************************************************************** */
  /***************************{Methods}*************************** */
  /*************************************************************** */
  /**
   *  Navigate to Create Challege
   */
  const onNextClick = useCallback(() => {
    navigate(`/create/cover/preview`, { state: { flow: "cover" } });
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden text-center text-[1rem] text-neutral-100 font-overline-semibold">
      <CreatePicker current={"cover"} />
      <div className="absolute w-[calc(100%_-_40px)] top-[6rem] right-[1.25rem] left-[1.25rem] flex flex-row items-start justify-between">
        <Exit onClick={() => navigate(-1)} />
        <NextButton onNextClick={onNextClick} cta={"Next"} />
      </div>
      <div className="absolute w-[calc(100%_-_40px)] top-[8.5rem] right-[1.25rem] left-[1.25rem] h-[33.188rem] flex flex-col items-start justify-start gap-[0.5rem]">
        <SelectedVideoContainer1 selectedImage={selectedImage} />
        <GalleryAndCameraIcon flow={"cover"} />
        <div className="relative self-stretch grid grid-flow-rows auto-rows-max min-h-[calc(100vh_-_40em)] overflow-y-scroll overflow-x-hidden items-start justify-start gap-[0.125rem]">
          <GalleryVideoRow
            imageSrc="/mini-videos@2x.png"
            onImageClick={setSelectedImage}
          />
          <GalleryVideoRow
            imageSrc="/choosing-video-container@2x.png"
            onImageClick={setSelectedImage}
          />
          <GalleryVideoRow
            imageSrc="/mini-videos@2x.png"
            onImageClick={setSelectedImage}
          />
          <GalleryVideoRow
            imageSrc="/choosing-video-container@2x.png"
            onImageClick={setSelectedImage}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateCover;

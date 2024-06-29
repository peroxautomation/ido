import { useNavigate } from "react-router-dom";
import CreatePicker from "../components/mobile/CreatePicker";
import SelectedVideoContainer1 from "../components/mobile/SelectedVideoContainer1";
import GalleryVideoRow from "../components/mobile/GalleryVideoRow";
import Exit from "../components/mobile/Exit";
import NextButton from "../components/mobile/NextButton";
import GalleryAndCameraIcon from "../components/mobile/GalleryAndCameraIcon";
import { useState } from "react";

/**
 * Create new cover/challenge screen
 * @returns
 */
const CreateNew = () => {
  /*************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(
    "/choosing-video-container@2x.png"
  );

  /**************************************************************** */
  /***************************{Methods}*************************** */
  /*************************************************************** */
  // Navigate to Create Challege
  const onNextClick = () => {
    navigate(`/create/new-challenge/preview`, {
      state: { flow: "new-challenge", returnTo: "/create" },
    });
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-items-center">
      <CreatePicker current={"new-challenge"} />
      <section className="absolute w-[calc(100%_-_40px)] top-[8.5rem] right-[1.25rem] left-[1.25rem] h-[33.188rem] flex flex-col items-start justify-start gap-[0.5rem]">
        <SelectedVideoContainer1 selectedImage={selectedImage} />
        <GalleryAndCameraIcon flow={"new-challenge"} />
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
      </section>
      <div className="absolute w-[calc(100%_-_40px)] top-[6rem] right-[1.25rem] left-[1.25rem] flex flex-row items-start justify-between">
        <Exit onClick={() => navigate(-1)} />
        <NextButton onNextClick={onNextClick} cta={"Next"} />
      </div>
    </div>
  );
};

export default CreateNew;

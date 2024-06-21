import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CreatePicker from "../components/mobile/CreatePicker";
import SelectedVideoContainer1 from "../components/mobile/SelectedVideoContainer1";
import MiniVideosRow from "../components/mobile/MiniVideosRow";
import Exit1 from "../components/mobile/Exit1";
import NextButton from "../components/mobile/NextButton";
import GalleryAndCameraIcon from "../components/mobile/GalleryAndCameraIcon";

/**
 * Create new cover/challenge screen
 * @returns 
 */
const CreateNew = () => {
  const navigate = useNavigate();
  
  // Navigate to Create Challege
  const onNextClick = useCallback(() => {
    navigate(`/create/new-challenge/preview`, {state: {flow: 'new-challenge', returnTo: "/create"}});
  }, [navigate]);

  // Navigate to home page
  const onExitClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);


  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-items-center">
      <CreatePicker current={"new-challenge"} />
      <section className="absolute w-[calc(100%_-_40px)] top-[8.5rem] right-[1.25rem] left-[1.25rem] h-[33.188rem] flex flex-col items-start justify-start gap-[0.5rem]">
        <SelectedVideoContainer1 />
        <GalleryAndCameraIcon flow={"new-challenge"}/>
        <div className="relative self-stretch grid grid-flow-rows auto-rows-max min-h-[calc(100vh_-_40em)] overflow-y-scroll overflow-x-hidden items-start justify-start gap-[0.125rem]">
          <MiniVideosRow />
          <MiniVideosRow />
          <MiniVideosRow />
          <MiniVideosRow />
          <MiniVideosRow />
          <MiniVideosRow />
          <MiniVideosRow />
        </div>
      </section>
      <div className="absolute w-[calc(100%_-_40px)] top-[6rem] right-[1.25rem] left-[1.25rem] flex flex-row items-start justify-between">
        <Exit1 ctaClick={onExitClick}/>
        <NextButton onNextClick={onNextClick} cta={"Next"} />
      </div>
    </div>
  );
};

export default CreateNew;

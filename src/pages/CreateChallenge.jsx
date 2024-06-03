import CreateTitle from "../components/mobile/CreateTitle";
import GalleryAndCameraIcon from "../components/mobile/GalleryAndCameraIcon";
import Exit1 from "../components/mobile/Exit1";
import NextButton from "../components/mobile/NextButton";
import MiniVideosRow from "../components/mobile/MiniVideosRow";
import SelectedVideoContainer1 from "../components/mobile/SelectedVideoContainer1";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";

const CreateChallenge = () => {
  const navigate = useNavigate();
  const { flow } = useParams();

  // Navigate to Create Challege Preview
  const onNextClick = useCallback(() => {
    navigate(`/create/${flow}/preview`, {state: {flow: flow}});
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1rem] text-neutral-100 font-overline-semibold">
      <CreateTitle titleText="Challenge" />
      <div className="absolute w-[calc(100%_-_40px)] top-[8.5rem] right-[1.25rem] left-[1.25rem] h-[33.188rem] flex flex-col items-start justify-start gap-[0.5rem]">
        <SelectedVideoContainer1 />
        <GalleryAndCameraIcon flow={flow}/>
        <div className="relative self-stretch grid grid-flow-rows auto-rows-max min-h-[calc(100vh_-_40em)] overflow-y-scroll overflow-x-hidden items-start justify-start gap-[0.125rem]">
          <MiniVideosRow />
          <MiniVideosRow />
          <MiniVideosRow />
          <MiniVideosRow />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_40px)] top-[6rem] right-[1.25rem] left-[1.25rem] flex flex-row items-start justify-between">
        <Exit1 />
        <NextButton
          onNextClick={onNextClick}
          cta={"Next"}
        />
      </div>
    </div>
  );
};

export default CreateChallenge;

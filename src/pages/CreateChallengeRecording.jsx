import Exit1 from "../components/mobile/Exit1";
import NextButton from "../components/mobile/NextButton";
import RecordingVideoContainer from "../components/mobile/RecordingVideoContainer";
import SelectGalleryButton from "../components/mobile/SelectGalleryButton";
import RecordButton from "../components/mobile/RecordButton";
import FlipCameraButton from "../components/mobile/FlipCameraButton";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateChallengeRecording = () => {
  const navigate = useNavigate();
  const { flow } = useParams();

  // Navigate to Create Challege Preview
  const onNextClick = useCallback(() => {
    navigate(`/create/${flow}/preview`, {
      state: { flow: flow, returnTo: `/create/${flow}/recording` },
    });
  }, [navigate]);

  // Open Native gallery
  const onGalleryClick = useCallback(() => {
    console.log("Opening gallery...");
  }, [navigate]);

  // Begin recording user
  const onRecordClick = useCallback(() => {
    console.log("Recording user...");
  }, [navigate]);

  // Flip user's camera
  const onFlipClick = useCallback(() => {
    console.log("Flipping camera...");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1rem] text-neutral-100 font-overline-semibold">
      <div className="relative top-[5vh] left-[calc(50%_-_167.5px)] w-[20.938rem] flex flex-row items-start justify-between">
        <Exit1 ctaClick={() => navigate("/create")} />
        <NextButton onNextClick={onNextClick} cta={"Next"} />
      </div>
      <RecordingVideoContainer className="left-[calc(50%_-_167.5px)] top-[15vh]" />
      <div className="relative top-[80vh] left-[calc(50%_-_167.5px)] w-[20.938rem] flex flex-row items-center justify-between">
        <SelectGalleryButton ctaClick={onGalleryClick} />
        <RecordButton ctaClick={onRecordClick} />
        <FlipCameraButton ctaClick={onFlipClick} />
      </div>
    </div>
  );
};

export default CreateChallengeRecording;

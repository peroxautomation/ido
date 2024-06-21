import Exit1 from "../components/mobile/Exit1";
import NextButton from "../components/mobile/NextButton";
import MusicTimeline from "../components/mobile/MusicTimeline";
import MusicDynamicTimeline from "../components/mobile/MusicDynamicTimeline";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";

const AddMusic = () => {
  const navigate = useNavigate();
  const { flow } = useParams();

  // Navigate to Create Challege
  const onNextClick = useCallback(() => {
    if (flow == "new-challenge")
      navigate(`/create/new-challenge/challenge-question-1`, {
        state: { flow: flow },
      });
    else navigate(`/create/cover/cover-add-info`, { state: { flow: flow } });
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-center">
      <div className="relative top-[2.5rem] rounded-xl w-[20.938rem] h-[90vh] overflow-hidden bg-[url('/public/frame-7100@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="relative top-[1.5rem] w-[20.938rem] flex flex-row items-start justify-between py-[0rem] px-[1.25rem] box-border">
          <Exit1 ctaClick={() => history.back()} />
          <NextButton cta="Next" onNextClick={onNextClick} />
        </div>
        <div className="relative top-[60vh] h-[8.125rem] flex flex-col items-center justify-start gap-[2.5rem]">
          <MusicTimeline />
          <MusicDynamicTimeline />
        </div>
      </div>
    </div>
  );
};

export default AddMusic;

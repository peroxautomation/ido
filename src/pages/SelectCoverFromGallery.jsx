import CreateTitle from "../components/mobile/CreateTitle";
import GalleryAndCameraIcon from "../components/mobile/GalleryAndCameraIcon";
import Exit1 from "../components/mobile/Exit1";
import NextButton from "../components/mobile/NextButton";
import { useNavigate, useParams } from "react-router-dom";
import MiniVideosRow from "../components/mobile/MiniVideosRow";

const SelectCoverFromGallery = () => {
  const navigate = useNavigate();
  const {flow} = useParams();

  // Navigate to Add Info for Challenge
  const onNextClick = () => {
    if(flow === 'challenge')
      navigate(`/create/${flow}/confrim-upload`, {state: {flow: flow}});
    else
      navigate(`/create/${flow}/add-info`, {state: {flow: flow}});
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1rem] text-neutral-100 font-overline-semibold">
      <CreateTitle titleText="Select cover image" />
      <div className="absolute w-[calc(100%_-_40px)] top-[8.5rem] right-[1.25rem] left-[1.25rem] h-[33.188rem] flex flex-col items-start justify-start gap-[0.5rem]">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[20.938rem] shrink-0 object-fill"
          alt=""
          src="/choosing-video-container@2x.png"
        />
        <GalleryAndCameraIcon flow="select-cover-image" />
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

export default SelectCoverFromGallery;

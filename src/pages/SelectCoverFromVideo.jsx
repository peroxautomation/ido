import { useMemo } from "react";
import Button2 from "../components/mobile/Button2";
import Exit1 from "../components/mobile/Exit1";
import NextButton from "../components/mobile/NextButton";
import SelectCoverContainer from "../components/mobile/SelectCoverContainer";
import SelectCoverFrame from "../components/mobile/SelectCoverFrame";
import { useNavigate, useParams } from "react-router-dom";
import CoverBtn from "../components/mobile/CoverBtn";

const SelectCoverFromVideo = () => {
  const navigate = useNavigate();
  const {flow} = useParams();

  // Style for the selected frame
  const selectedStyle = useMemo(() => {
    return {
      width: '4rem',
      height: '4.5rem',
      overflow: 'hidden',
      objectFit: 'cover',
      zIndex: 10,
    };
  });

  // Navigate to From Gallery
  const onDeviceClick = () => {
    navigate(`/create/${flow}/select-cover/from-gallery`, {state: {flow: flow}});
  }

  // Navigate to Add Info for Challenge
  const onNextClick = () => {
    if(flow === 'challenge')
      navigate(`/create/${flow}/confrim-upload`, {state: {flow: flow}});
    else
      navigate(`/create/${flow}/add-info`, {state: {flow: flow}});
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1rem] text-neutral-100 font-overline-semibold grid grid-flow-row justify-items-center">
      <div className="absolute top-[2.5rem] left-[calc(50%_-_167.5px)] w-[20.938rem] flex flex-row items-start justify-between">
        <Exit1 />
        <CoverBtn cta="From device" className="text-[0.8em] text-nowrap bottom-0" ctaClick={onDeviceClick} />
        <NextButton
          cta={ (flow == 'challenge')? 'Upload' : 'Next'}
          onNextClick={ onNextClick }
        />
      </div>
      <SelectCoverContainer choosingVideoContainer="/choosing-video-container@2x.png" className="left-[calc(50%_-_167.5px)]"/>
      <div className="relative flex flex-row top-[35.938rem] max-w-[90%] overflow-x-scroll overflow-y-hidden">
        <SelectCoverFrame />
        <SelectCoverFrame />
        <SelectCoverFrame />
        <SelectCoverFrame style={selectedStyle} />
        <SelectCoverFrame />
        <SelectCoverFrame />
        <SelectCoverFrame />
        <SelectCoverFrame />
        <SelectCoverFrame />
        <SelectCoverFrame />
        <SelectCoverFrame />
        <SelectCoverFrame />
      </div>
    </div>
  );
};

export default SelectCoverFromVideo;
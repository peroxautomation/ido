import { useMemo, useState } from "react";
import Exit from "../components/mobile/Exit";
import NextButton from "../components/mobile/NextButton";
import SelectCoverContainer from "../components/mobile/SelectCoverContainer";
import SelectCoverFrame from "../components/mobile/SelectCoverFrame";
import { useNavigate, useParams } from "react-router-dom";
import CoverBtn from "../components/mobile/CoverBtn";

const SelectCoverFromVideo = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();
  const { flow } = useParams();
  const [selecetdFrame, setSelecetdFrame] = useState(
    "/choosing-video-container@2x.png"
  );

  // Style for the selected frame
  const selectedStyle = useMemo(() => {
    return {
      width: "4rem",
      height: "4.5rem",
      overflow: "hidden",
      objectFit: "cover",
      zIndex: 10,
    };
  });

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Navigate to From Gallery
   */
  const onDeviceClick = () => {
    navigate(`/create/${flow}/select-cover/from-gallery`, {
      state: { flow: flow },
    });
  };

  /**
   * Navigate to Add Info for Challenge
   */
  const onNextClick = () => {
    if (flow === "challenge")
      navigate(`/create/${flow}/confrim-upload`, { state: { flow: flow } });
    else if (flow === "cover") navigate("/create/cover/cover-add-info");
    else navigate(`/create/${flow}/add-info`, { state: { flow: flow } });
  };

  /**
   * Handle update selected frame
   * @param {*} event 
   * @param {*} selecetdFrame 
   */
  const onFrameSelect = (event, selecetdFrame) => {
    const frame = event.currentTarget;
    const frameContainer = frame.parentElement.children;

    for (let items of frameContainer) {
      items.style.width = null;
      items.style.height = null;
      items.style.overflow = null;
      items.style.objectFit = null;
      items.style.zIndex = null;
    }

    Object.assign(frame.style, selectedStyle);
    setSelecetdFrame(selecetdFrame);
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-center text-[1rem] text-neutral-100 font-overline-semibold grid grid-flow-row justify-items-center">
      <div className="absolute top-[2.5rem] left-[calc(50%_-_167.5px)] w-[20.938rem] flex flex-row items-start justify-between">
        <Exit onClick={() => navigate(-1)} />
        <div className="absolute left-[1.25rem] right-[2.5rem] text-[0.75rem]">
          <CoverBtn cta="From device" ctaClick={onDeviceClick} />
        </div>
        <NextButton
          cta={flow == "challenge" ? "Upload" : "Next"}
          onNextClick={onNextClick}
        />
      </div>
      <SelectCoverContainer selectedFrameSrc={selecetdFrame} />
      <div className="relative flex flex-row top-[35.938rem] max-w-[90%] overflow-x-scroll overflow-y-hidden">
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          style={selectedStyle}
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
        <SelectCoverFrame
          onClick={onFrameSelect}
          src="/choosing-video-container@2x.png"
        />
      </div>
    </div>
  );
};

export default SelectCoverFromVideo;

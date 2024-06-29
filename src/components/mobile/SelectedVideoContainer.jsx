import PlayButton from "./PlayButton";
import CoverBtn from "./CoverBtn";

/**
 * Selected video container component
 * @param {*} props 
 * @returns 
 */
const SelectedVideoContainer = (props) => {
  const { ctaClick } = props;
  return (
    <div
      className={`selected-video bg-[url('/public/choosingvideocontainer@2x.png')]`}
    >
      <PlayButton />
      <div className="absolute bottom-8 left-[1.25rem] right-[2.5rem]">
        <CoverBtn cta="Edit cover" ctaClick={ctaClick} />
      </div>
    </div>
  );
};

export default SelectedVideoContainer;

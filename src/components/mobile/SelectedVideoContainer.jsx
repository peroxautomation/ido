import PlayButton from "./PlayButton";
import PropTypes from "prop-types";
import CoverBtn from "./CoverBtn";

const SelectedVideoContainer = ({ className = "", ctaClick }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_225.5px)] left-[calc(50%_-_167.5px)] rounded-2xl w-[20.938rem] h-[20.938rem] overflow-hidden bg-[url('/public/choosingvideocontainer@2x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[0.75rem] text-neutral-100 font-overline-semibold ${className}`}
    >
      <PlayButton />
      <CoverBtn cta="Edit cover" ctaClick={ctaClick} />
    </div>
  );
};

SelectedVideoContainer.propTypes = {
  className: PropTypes.string,
};

export default SelectedVideoContainer;

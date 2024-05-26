import { useMemo } from "react";
import ViewsIcon from "./ViewsIcon";
import LikesIcon from "./LikesIcon";
import PropTypes from "prop-types";

const VideoCard = ({ className = "", cardLeft }) => {
  const cardStyle = useMemo(() => {
    return {
      left: cardLeft,
    };
  }, [cardLeft]);

  return (
    <div
      className={`relative rounded-xl w-[14rem] min-h-full overflow-hidden text-left text-[0.875rem] text-neutral-100 font-button-1-regular mx-[0.5rem] ${className}`}
    >
      <img 
        className="absolute object-scale-down h-[10rem] w-full"
        src="./card@3x.png"
      ></img>
      <div className="absolute top-[7.175rem] left-[1rem] flex flex-row items-center gap-[1.4em]">
        <ViewsIcon />
        <LikesIcon />
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  className: PropTypes.string,

  /** Style props */
  cardLeft: PropTypes.any,
};

export default VideoCard;

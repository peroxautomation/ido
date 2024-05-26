import ViewsIcon from "./ViewsIcon";
import LikesIcon from "./LikesIcon";
import VideoOptionsBtn from "./VideoOptionsBtn";
import PropTypes from "prop-types";
import SaveToPlaylistBtn from "./SaveToPlaylistBtn";

const HomeVideoCard2 = ({ className = "" }) => {
  // Returned Component
  return (
    <div
      className={`flex-1 relative rounded-xl h-[10rem] overflow-hidden bg-[url('/public/card2@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
    >
      <SaveToPlaylistBtn />
      <div className="absolute top-[6.875rem] left-[0rem] flex flex-row gap-[2em] justify-center w-[10rem] h-[3.125rem]">
        <ViewsIcon viewsTop="8.25rem" viewsLeft="1.5rem" />
        <LikesIcon likesTop="8.25rem" likesLeft="6.313rem" />
      </div>
      <VideoOptionsBtn/>
    </div>
  );
};

HomeVideoCard2.propTypes = {
  className: PropTypes.string,
};

export default HomeVideoCard2;

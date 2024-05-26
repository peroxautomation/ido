import ViewsIcon from "./ViewsIcon";
import LikesIcon from "./LikesIcon";
import AddToPlaylistBtn1 from "./AddToPlaylistBtn1";
import PropTypes from "prop-types";

const HomeVideoCard = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 relative rounded-xl h-[10rem] overflow-hidden bg-[url('/public/card1@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
    >
      <div className="absolute top-[6.875rem] left-[0rem] flex flex-row gap-[2em] justify-center w-[10rem] h-[3.125rem]">
        <ViewsIcon viewsTop="8.25rem" viewsLeft="1.5rem" />
        <LikesIcon likesTop="8.25rem" likesLeft="6.313rem" />
      </div>
      <AddToPlaylistBtn1 />
    </div>
  );
};

HomeVideoCard.propTypes = {
  className: PropTypes.string,
};

export default HomeVideoCard;

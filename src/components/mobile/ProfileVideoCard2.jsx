import ViewsIcon from "./ViewsIcon";
import LikesIcon from "./LikesIcon";
import VideoOptionsBtn from "./VideoOptionsBtn";
import PropTypes from "prop-types";
import SaveToPlaylistBtn from "./SaveToPlaylistBtn";
import ProfileMenuItem from "./ProfileMenuItem";

const ProfileVideoCard2 = ({ className = "", current }) => {
  
  const onDeleteClick = () => {
    const element = document.getElementById('ProfileDeleteDancePopup');
    element.classList.toggle('hidden');
  }

  // Returned Component
  return (
    <div
      className={`flex-1 relative rounded-xl h-[10rem] bg-[url('/public/card1@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
    >
      <ProfileMenuItem
        onClick={onDeleteClick}
        className="text-nowrap absolute top-[18%] left-[0.1rem] z-10 hidden rounded-xl"
        saveToPlaylist={`Remove from ${current}`}
        hugeIconinterfaceoutlinet="/hugeiconinterfaceoutlinetrash.svg"
      />
      <div className="absolute top-[6.875rem] left-[0rem] flex flex-row gap-[2em] justify-center w-[10rem] h-[3.125rem]">
        <ViewsIcon viewsTop="8.25rem" viewsLeft="1.5rem" />
        <LikesIcon likesTop="8.25rem" likesLeft="6.313rem" />
      </div>
      <VideoOptionsBtn/>
    </div>
  );
};

ProfileVideoCard2.propTypes = {
  className: PropTypes.string,
};

export default ProfileVideoCard2;

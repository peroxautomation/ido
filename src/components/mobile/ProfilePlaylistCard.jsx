import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Profile playlist card
 * @param imgSrc The playlist cover image source
 * @param playlistName The playlist title
 * @param createdDate The date the playlist was created
 * @returns
 */
const ProfilePlaylistCard = (props) => {
  /************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const { imgSrc, playlistName, createdDate, videoOptions } = props;
  const [isOptionsActive, setIsOptionsActive] = useState(false);
  const navigate = useNavigate();
  const Element = videoOptions;
  /**************************************************************** */
  /***************************{ Methods }************************** */
  /**************************************************************** */
  /**
   * On playlist click function
   */
  const onPlaylistClick = () => {
    navigate("/profile/playlist");
  };

  const onOptionsClick = (event) => {
    event.stopPropagation();
    setIsOptionsActive(!isOptionsActive);
  };

  return (
    <div onClick={onPlaylistClick} className={`profile-playlist`}>
      {isOptionsActive && Element}
      <img
        className="flex-1 relative rounded-xl max-w-full overflow-hidden h-[6.25rem] object-cover"
        alt=""
        src={imgSrc}
      />
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="relative text-[1rem] leading-[1.5rem] text-neutral-100">
          {playlistName}
        </div>
        <div className="relative leading-[1.25rem]">Playlist</div>
        <div className="relative leading-[1.25rem]">
          Created - {createdDate}
        </div>
      </div>
      <button className="profile-playlist-btn" onClick={onOptionsClick}>
        <img
          className="absolute h-[52.08%] w-[10.42%] top-[20.83%] right-[47.92%] bottom-[27.08%] left-[41.67%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/more--vertical@2x.png"
        />
      </button>
    </div>
  );
};

export default ProfilePlaylistCard;

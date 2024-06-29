import { useNavigate } from "react-router-dom";
import SaveToPlaylistBtn from "./SaveToPlaylistBtn";
import ProfileMenuItem from "./ProfileVideoMenuItem";
import { useState } from "react";

/**
 * Profile video card for main profile screen
 * @param view The current view. The user's or another person
 * @param imgSrc The video cover image source
 * @param viewCount The number of views the video has
 * @param likeCount The number of likes the video has
 * @param className Aditional classes to include
 * @param videoOptions  The video options
 * @param setSelected Handler to set the selected video id in parent
 * @param videoId The video id
 * @returns A jSX element
 */
const ProfileVideoCard = (props) => {
  /************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const {
    view = "user",
    imgSrc,
    viewCount,
    likeCount,
    className,
    videoOptions,
    setSelected,
    videoId,
  } = props;
  const navigate = useNavigate();
  const [isOptionsActive, setIsOptionsActive] = useState(false);
  const Element = videoOptions;
  /**************************************************************** */
  /***************************{ Methods }************************** */
  /**************************************************************** */

  /**
   * On video click
   */
  const onVideoClick = () => {
    navigate("/moves/creator/temp-id-123", {
      state: { view: "creator", videoId: "temp-id-123" },
    });
  };

  /**
   * Toggle the video options and update the selected video in parent.
   * @param {*} event 
   */
  const onOptionsClick = (event) => {
    event.stopPropagation();
    setIsOptionsActive(!isOptionsActive);
    setSelected(videoId); //Lag issue here! Update the selected video id in parent 
  };

  return (
    <div
      onClick={onVideoClick}
      className={`profile-video-card ${className}`}
      style={{
        backgroundImage: `url(/public/${imgSrc})`,
      }}
    >
      {isOptionsActive && Element}
      <div className="absolute top-[6.875rem] left-[0rem] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_rgba(0,_0,_0,_0.5))] w-[10rem] h-[3.125rem]" />
      <div className="absolute top-[85%] left-[1.5rem] flex flex-row items-center justify-start gap-[0.125rem]">
        <img
          className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
          alt=""
          src="/views-icon.svg"
        />
        <div className="relative leading-[1.25rem] font-semibold">
          {viewCount}
        </div>
      </div>
      <div className="absolute top-[85%] left-[6.313rem] flex flex-row items-center justify-start gap-[0.125rem]">
        <img
          className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
          alt=""
          src="/heart-icons.svg"
        />
        <div className="relative leading-[1.25rem] font-semibold">
          {likeCount}
        </div>
      </div>
      <div
        onClick={onOptionsClick}
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0.5rem] right-[0.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
      >
        <img
          className="absolute h-[10.42%] w-[52.08%] top-[41.67%] right-[20.83%] bottom-[47.92%] left-[27.08%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/morehorizontal@2x.png"
        />
      </div>
    </div>
  );
};

export default ProfileVideoCard;

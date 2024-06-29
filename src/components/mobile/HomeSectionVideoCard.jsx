import VideoCardIcon from "./VideoCardIcon";
import VideoOptionsBtn from "./VideoOptionsBtn";
import SaveToPlaylistBtn from "./SaveToPlaylistBtn";
import { useState } from "react";

/**
 * Home Section Video Card component
 * @param likes number of likes the moves has
 * @param views number of views the moves has
 * @param src moves cover image source
 * @param onVideoClick function to perfrom when the video is clicked
 * @param optionsMenu The element options
 * @returns A JSX
 */
const HomeSectionVideoCard = (props) => {
  /************************************************************************* */
  /********************************{props}********************************** */
  /************************************************************************* */
  const { likes, views, src, onVideoClick, optionsMenu, setSelected, videoId } =
    props;
  const Element = optionsMenu;
  const [isOptionsActive, setIsOptionsActive] = useState(false);

  /**
   * Toggle the video options and update the selected video in parent.
   * @param {*} event
   */
  const onOptionClick = (event) => {
    event.stopPropagation();
    setIsOptionsActive(!isOptionsActive);
    setSelected(videoId); //Update the selected video id in parent
  };

  return (
    <div
      onClick={onVideoClick}
      className={`home-page-section-video-card`}
      style={{
        backgroundImage: `url(/public/${src})`,
      }}
    >
      {isOptionsActive && Element}
      <div className="absolute top-[6.875rem] left-[0rem] flex flex-row gap-[2em] justify-center w-[10rem] h-[3.125rem]">
        <VideoCardIcon count={views} src="/views-icon.svg" />
        <VideoCardIcon count={likes} src="/heart-icons.svg" />
      </div>
      <VideoOptionsBtn onClick={onOptionClick} />
    </div>
  );
};

export default HomeSectionVideoCard;

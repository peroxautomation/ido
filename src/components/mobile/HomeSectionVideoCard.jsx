import VideoCardIcon from "./VideoCardIcon";
import VideoOptionsBtn from "./VideoOptionsBtn";
import SaveToPlaylistBtn from "./SaveToPlaylistBtn";

/**
 * Home Section Video Card component
 * @param likes number of likes the moves has
 * @param views number of views the moves has
 * @param src moves cover image source
 * @returns A JSX
 */
const HomeSectionVideoCard = (props) => {
  /************************************************************************* */
  /********************************{props}********************************** */
  /************************************************************************* */
  const { likes, views, src } = props;
  return (
    <div className={`home-page-section-video-card bg-[url('/public/${src}')]`}>
      <SaveToPlaylistBtn />
      <div className="absolute top-[6.875rem] left-[0rem] flex flex-row gap-[2em] justify-center w-[10rem] h-[3.125rem]">
        <VideoCardIcon count={views} src="/views-icon.svg" />
        <VideoCardIcon count={likes} src="/heart-icons.svg" />
      </div>
      <VideoOptionsBtn />
    </div>
  );
};

export default HomeSectionVideoCard;

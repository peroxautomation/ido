import { useNavigate } from "react-router-dom";
import VideoCardIcon from "./VideoCardIcon";
/**
 * Video card component
 * @param {*} likes video likes
 * @param {*} views video view
 * @param {*} src Video source
 * @returns A JSX element
 */
const VideoCard = (props) => {
  const { likes, views, src } = props;
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/moves/others/temp-id-123", {
      state: { view: "others", videoId: "temp-id-123" },
    });
  };

  return (
    <div onClick={onClick} className={`video-card`}>
      <img
        className="absolute object-scale-down h-[10rem] w-full"
        src={src}
      ></img>
      <div className="absolute top-[80%] w-full flex flex-row justify-center gap-[1.4em]">
        <VideoCardIcon count={views} src="views-icon.svg" />
        <VideoCardIcon count={likes} src="heart-icons.svg" />
      </div>
    </div>
  );
};

export default VideoCard;

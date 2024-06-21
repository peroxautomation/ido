/**
 * Video card icon for views or like
 * @param count the number of views or likes
 * @param src icon image source
 * @returns A JSX element
 */
const VideoCardIcon = (props) => {
  const { count, src } = props;
  return (
    <div
      className={`video-card-icon`}
    >
      <img
        className="video-card-icon-image"
        alt=""
        src={src}
      />
      <div className="video-card-icon-tex">{count}</div>
    </div>
  );
};

export default VideoCardIcon;
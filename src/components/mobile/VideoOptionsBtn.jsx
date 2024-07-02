/**
 * Save to playlist button
 * @param {*} onClick On click functiont to display the video options
 * @returns 
 */
const VideoOptionsBtn = (props) => {
  const { onClick } = props;

  // Returned Component
  return (
    <button
      className={`save-to-playlist-options`}
      onClick={onClick}
    >
      <img
        className="absolute h-[10.42%] w-[52.08%] top-[41.67%] right-[20.83%] bottom-[47.92%] left-[27.08%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/morehorizontal@2x.png"
      />
    </button>
  );
};

export default VideoOptionsBtn;

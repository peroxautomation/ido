/**
 * Save to playlist button
 * @param {*} props 
 * @returns 
 */
const VideoOptionsBtn = (props) => {
  const {} = props;
  // Display the Add To Playlist component
  const onClickCTA = (event) => {
    const targetElement = event.currentTarget.parentElement.children[0];
    targetElement.classList.toggle("flex");
    targetElement.classList.toggle("hidden");
  };

  // Returned Component
  return (
    <button
      className={`save-to-playlist-options`}
      onClick={onClickCTA}
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

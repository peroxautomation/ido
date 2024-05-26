import PropTypes from "prop-types";

const VideoOptionsBtn = ({ className = "" }) => {

  // Display the Add To Playlist component
  const onClickCTA = (event) => {
    const targetElement = event.target.parentElement.children[0];

    // Prevent hiding another element
    if(targetElement.getAttribute("name") == "saveToPlaylist")
    {
      targetElement.classList.toggle('flex')
      targetElement.classList.toggle('hidden')
    }
  }

  // Returned Component
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0.5rem] right-[0.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden ${className}`}
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

VideoOptionsBtn.propTypes = {
  className: PropTypes.string,
};

export default VideoOptionsBtn;

import PropTypes from "prop-types";

/**
 * Save to playlist button
 * @param {*} param0 
 * @returns JSX Element
 */
const SaveToPlaylistBtn = ({ className = "" }) => {
  // Opens save to playlist popup
  const onClick = () => {
    const popup = document.getElementById('saveToPlaylistPopup');
    popup.classList.toggle('hidden');
  }

  // Returned Component
  return (
    <button
      name="saveToPlaylist"
      className={`hidden absolute top-[20%] right-[5%] rounded-lg bg-neutral-800 h-[2.5rem] grid grid-flow-col items-center justify-between p-[0.5rem] box-border gap-[0.5rem] text-[0.875rem] text-neutral-100 font-button-2-bold ${className}`}      onClick={onClick}
    >
      <div className="relative leading-[1.25rem] text-nowrap">Save to playlist</div>
      <img
        className="w-[1.25rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src="/savePlaylistIcon.svg"
      />
    </button>
  );
};

SaveToPlaylistBtn.propTypes = {
  className: PropTypes.string,
};

export default SaveToPlaylistBtn;

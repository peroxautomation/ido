/**
 * Save to playlist button
 * @param {*}
 * @returns JSX Element
 */
const SaveToPlaylistBtn = (props) => {
  const {} = props;
  /**************************************************************************** */
  /********************************{Methods}********************************** */
  /**************************************************************************** */
  /**
   * Opens save to playlist popup
   */
  const onClick = () => {
    const popup = document.getElementById("saveToPlaylistPopup");
    popup.classList.toggle("hidden");
  };

  return (
    <button
      name="saveToPlaylist"
      className={`hidden btn-save-to-playlist`}
      onClick={onClick}
    >
      <div className="relative leading-[1.25rem] text-nowrap">
        Save to playlist
      </div>
      <img
        className="w-[1.25rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src="/savePlaylistIcon.svg"
      />
    </button>
  );
};

export default SaveToPlaylistBtn;

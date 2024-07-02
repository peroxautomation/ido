/**
 * Save to playlist button
 * @param {*}
 * @returns JSX Element
 */
const SaveToPlaylistBtn = (props) => {
  const { onClick } = props;
  /**************************************************************************** */
  /********************************{Methods}********************************** */
  /**************************************************************************** */

  return (
    <button
      name="saveToPlaylist"
      className={`btn-save-to-playlist`}
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

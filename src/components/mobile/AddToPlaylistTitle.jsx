/**
 * Save to playlist popup title
 * @param {*} param0
 * @returns
 */
const AddToPlaylistTitle = (props) => {
  const {} = props;
  return (
    <div className={`save-to-playlist-title`}>
      <div className="relative leading-[1.5rem]">Save video to...</div>
      <div className="save-to-playlist-title-new-playlist">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/playlistPlusSolid.svg"
        />
        <div className="relative leading-[1.5rem]">New playlist</div>
      </div>
    </div>
  );
};

export default AddToPlaylistTitle;

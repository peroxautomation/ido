/**
 * Input for editing playlist title
 * @param playlistTitle The value of the input
 * @param handleSetTitle  handler to update the input
 * @param placeholder placeholder for the input
 * @returns A JSX element
 */
const PlaylistEditTitleInput = (props) => {
  const { playlistTitle, handleSetTitle, placeholder } = props;

  return (
    <div className={`edit-playlist-input-tile`}>
      <div className="w-[20.938rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
        <div className="flex-1 relative leading-[1.5rem]">Title</div>
      </div>
      <input
        value={playlistTitle}
        onInput={(e) => handleSetTitle(e.currentTarget.value)}
        className="edit-playlist-title-input"
        placeholder={placeholder}
        type="text"
      />
      <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

export default PlaylistEditTitleInput;

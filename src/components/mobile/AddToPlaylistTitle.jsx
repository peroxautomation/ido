import PropTypes from "prop-types";

const AddToPlaylistTitle = ({ className = "" }) => {
  return (
    <div
      className={`w-[20.938rem] h-[2.75rem] flex flex-row items-center justify-between py-[0.5rem] px-[0rem] box-border text-center text-[1rem] text-neutral-100 font-button-2-bold ${className}`}
    >
      <div className="relative leading-[1.5rem]">Save video to...</div>
      <div className="flex flex-row items-center justify-start gap-[0.25rem] text-primary-500">
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

AddToPlaylistTitle.propTypes = {
  className: PropTypes.string,
};

export default AddToPlaylistTitle;

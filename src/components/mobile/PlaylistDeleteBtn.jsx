import PropTypes from "prop-types";

const PlaylistDeleteBtn = ({ className = "" }) => {
  return (
    <button
      className={`hidden cursor-pointer [border:none] p-[0.5rem] bg-neutral-800 absolute top-[2rem] right-[1rem] rounded-lg h-[2.25rem] flex flex-row items-center justify-center box-border gap-[0.5rem] ${className}`}
    >
      <div className="relative text-[0.875rem] leading-[1.25rem] font-button-1-regular text-neutral-100 text-center">
        Delete playlist
      </div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlinetrash.svg"
      />
    </button>
  );
};

PlaylistDeleteBtn.propTypes = {
  className: PropTypes.string,
};

export default PlaylistDeleteBtn;

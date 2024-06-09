import PropTypes from "prop-types";

const PlaylistEditTitleInput = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="w-[20.938rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
        <div className="flex-1 relative leading-[1.5rem]">Title</div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
          alt=""
        />
      </div>
      <input
        className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 w-[20.938rem] rounded-xl flex flex-row items-center justify-start py-[0.625rem] px-[1rem] box-border text-neutral-100"
        placeholder="Want to try"
        type="text"
      />
      <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

PlaylistEditTitleInput.propTypes = {
  className: PropTypes.string,
};

export default PlaylistEditTitleInput;

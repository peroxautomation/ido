import PropTypes from "prop-types";

const MusicInfo = ({ className = "", rectangle2002 }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-center justify-start gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <img
        className="w-[3rem] relative rounded-lg h-[3rem] object-cover"
        alt=""
        src={rectangle2002}
      />
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch relative leading-[1.5rem] font-semibold">
          Music name
        </div>
        <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] text-neutral-400">
          Singer name
        </div>
      </div>
    </div>
  );
};

MusicInfo.propTypes = {
  className: PropTypes.string,
  rectangle2002: PropTypes.string,
};

export default MusicInfo;

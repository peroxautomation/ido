import PropTypes from "prop-types";

const LikesIcon = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start  text-left text-[0.875rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconhealthoutlineheart.svg"
      />
      <div className="relative leading-[1.25rem] font-semibold">54</div>
    </div>
  );
};

LikesIcon.propTypes = {
  className: PropTypes.string,
};

export default LikesIcon;

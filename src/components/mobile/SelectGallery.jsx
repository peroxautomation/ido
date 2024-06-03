import PropTypes from "prop-types";

const SelectGallery = ({ ctaClick, className = "" }) => {
  return (
    <div
      onClick={ctaClick}
      className={`flex flex-row items-start justify-start gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-overline-semibold ${className}`}
    >
      <div className="relative leading-[1.5rem]">Recents</div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowssoliddirectiondown-01.svg"
      />
    </div>
  );
};

SelectGallery.propTypes = {
  className: PropTypes.string,
};

export default SelectGallery;

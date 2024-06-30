import PropTypes from "prop-types";

const CTADesktopSmallPrimary = ({
  className = "",
  text = "CTA",
  hugeIconinterfacesolidplu,
  rightIcon = true,
}) => {
  return (
    <div
      className={`w-40 rounded-xl bg-primary-500 flex flex-row items-center justify-center py-2.5 px-2 box-border text-center text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="relative leading-[24px] font-semibold">{text}</div>
      {rightIcon && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacesolidplu}
        />
      )}
    </div>
  );
};

CTADesktopSmallPrimary.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  hugeIconinterfacesolidplu: PropTypes.string,
  rightIcon: PropTypes.bool,
};

export default CTADesktopSmallPrimary;

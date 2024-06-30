import PropTypes from "prop-types";

const StateOfflineDeviceTablet = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-[4px] text-left text-xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="w-3 relative rounded-[50%] bg-danger-500 h-3" />
      <div className="relative leading-[28px]">Offline</div>
    </div>
  );
};

StateOfflineDeviceTablet.propTypes = {
  className: PropTypes.string,
};

export default StateOfflineDeviceTablet;

import StatePrimaryDeviceTablet from "./StatePrimaryDeviceTablet";
import PropTypes from "prop-types";

const StateRelateRequestDeviceD = ({
  className = "",
  rectangle2002,
  userName = "User name",
  lastMessage = "Desc",
}) => {
  return (
    <div
      className={`w-[368px] max-w-full flex flex-row items-center justify-start py-3 px-5 box-border gap-[24px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
        <img
          className="w-12 relative rounded-3xl h-12 object-cover"
          alt=""
          src={rectangle2002}
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[24px] font-semibold">
            {userName}
          </div>
          <div className="self-stretch relative text-sm leading-[20px] text-neutral-400">
            {lastMessage}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start">
        <StatePrimaryDeviceTablet
          text="Unrelate"
          statePrimaryDeviceTabletBackgroundColor="#0b0b0b"
          statePrimaryDeviceTabletWidth="64px"
          statePrimaryDeviceTabletHeight="unset"
          statePrimaryDeviceTabletPosition="unset"
          statePrimaryDeviceTabletTop="unset"
          statePrimaryDeviceTabletLeft="unset"
          unrelateLineHeight="16px"
        />
      </div>
    </div>
  );
};

StateRelateRequestDeviceD.propTypes = {
  className: PropTypes.string,
  rectangle2002: PropTypes.string,
  userName: PropTypes.string,
  lastMessage: PropTypes.string,
};

export default StateRelateRequestDeviceD;

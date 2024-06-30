import StatePrimaryDeviceTablet from "./StatePrimaryDeviceTablet";
import PropTypes from "prop-types";

const User21 = ({ className = "" }) => {
  return (
    <div
      className={`w-[696px] flex flex-row items-center justify-start py-4 px-5 box-border gap-[24px] text-left text-5xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
        <img
          className="w-14 relative rounded-9xl h-14 object-cover"
          alt=""
          src="/rectangle-20022@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[32px] font-semibold">
            User name
          </div>
          <div className="self-stretch relative text-base leading-[24px] text-neutral-400">
            Desc
          </div>
        </div>
      </div>
      <StatePrimaryDeviceTablet
        text="Unrelate"
        statePrimaryDeviceTabletBackgroundColor="#1b1b1b"
        statePrimaryDeviceTabletWidth="73px"
        statePrimaryDeviceTabletHeight="32px"
        statePrimaryDeviceTabletPosition="unset"
        statePrimaryDeviceTabletTop="unset"
        statePrimaryDeviceTabletLeft="unset"
        unrelateLineHeight="20px"
      />
    </div>
  );
};

User21.propTypes = {
  className: PropTypes.string,
};

export default User21;

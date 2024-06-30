import StatePrimaryDeviceTablet from "./StatePrimaryDeviceTablet";
import PropTypes from "prop-types";

const StateDefault3 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start py-[18px] px-6 gap-[8px] text-left text-xs text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[4px]">
        <img
          className="w-[42px] relative rounded-3xl h-[42px] object-cover"
          alt=""
          src="/rectangle-20023@2x.png"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="w-[81px] relative leading-[16px] font-semibold inline-block">
            User name
          </div>
          <div className="w-[81px] relative text-3xs leading-[12px] text-neutral-400 inline-block">
            Desc
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[4px]">
        <StatePrimaryDeviceTablet
          text="Confirm"
          statePrimaryDeviceTabletBackgroundColor="#cc0f3c"
          statePrimaryDeviceTabletWidth="64px"
          statePrimaryDeviceTabletHeight="24px"
          statePrimaryDeviceTabletPosition="unset"
          statePrimaryDeviceTabletTop="unset"
          statePrimaryDeviceTabletLeft="unset"
          unrelateLineHeight="16px"
        />
        <StatePrimaryDeviceTablet
          text="Delete"
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

StateDefault3.propTypes = {
  className: PropTypes.string,
};

export default StateDefault3;

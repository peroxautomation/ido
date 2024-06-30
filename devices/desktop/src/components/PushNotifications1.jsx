import Property1DesktopTitle from "./Property1DesktopTitle";
import StateOffDeviceMobile from "./StateOffDeviceMobile";
import PropTypes from "prop-types";

const PushNotifications1 = ({
  className = "",
  toggle,
  toggle1,
  toggle2,
  toggle3,
}) => {
  return (
    <div
      className={`absolute top-[148px] left-[312px] flex flex-col items-start justify-start ${className}`}
    >
      <Property1DesktopTitle
        text="Push notifications"
        showLayers={false}
        property1DesktopTitlePosition="unset"
        property1DesktopTitleTop="unset"
        property1DesktopTitleLeft="unset"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
      <div className="w-[335px] flex flex-col items-start justify-start gap-[16px]">
        <StateOffDeviceMobile
          text="Pause all"
          toggle="/toggle2.svg"
          stateOffDeviceMobileAlignSelf="stretch"
          stateOffDeviceMobileWidth="unset"
        />
        <StateOffDeviceMobile
          text="Post, comment"
          toggle="/toggle3.svg"
          stateOffDeviceMobileAlignSelf="stretch"
          stateOffDeviceMobileWidth="unset"
        />
        <StateOffDeviceMobile
          text="Messages"
          toggle="/toggle2.svg"
          stateOffDeviceMobileAlignSelf="stretch"
          stateOffDeviceMobileWidth="unset"
        />
        <StateOffDeviceMobile
          text="From Ido"
          toggle="/toggle2.svg"
          stateOffDeviceMobileAlignSelf="stretch"
          stateOffDeviceMobileWidth="unset"
        />
      </div>
    </div>
  );
};

PushNotifications1.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.string,
  toggle1: PropTypes.string,
  toggle2: PropTypes.string,
  toggle3: PropTypes.string,
};

export default PushNotifications1;

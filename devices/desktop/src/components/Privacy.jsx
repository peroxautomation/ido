import Property1DesktopTitle from "./Property1DesktopTitle";
import StateOffDeviceMobile from "./StateOffDeviceMobile";

const Privacy = (props) => {
  const { toggle } = props;
  return (
    <div
      className={`absolute top-[484px] left-[312px] flex flex-col items-start justify-start`}
    >
      <Property1DesktopTitle
        text="Privacy"
        showLayers={false}
        property1DesktopTitlePosition="unset"
        property1DesktopTitleTop="unset"
        property1DesktopTitleLeft="unset"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
      <StateOffDeviceMobile
        text="Activity status"
        toggle="/toggle2.svg"
        stateOffDeviceMobileAlignSelf="unset"
        stateOffDeviceMobileWidth="335px"
      />
    </div>
  );
};

export default Privacy;

import { useMemo } from "react";
import StateInactiveSizeDefault from "./StateInactiveSizeDefault";
import PropTypes from "prop-types";

const VariantsSelectFromDevice = ({
  className = "",
  hugeIconfilesAndFolderout,
  hugeIconeducationsolidpen,
  variantsSelectFromDeviceWidth,
  variantsSelectFromDeviceHeight,
  variantsSelectFromDevicePosition,
  variantsSelectFromDeviceTop,
  variantsSelectFromDeviceRight,
  variantsSelectFromDeviceBottom,
  variantsSelectFromDeviceLeft,
}) => {
  const variantsSelectFromDeviceStyle = useMemo(() => {
    return {
      width: variantsSelectFromDeviceWidth,
      height: variantsSelectFromDeviceHeight,
      position: variantsSelectFromDevicePosition,
      top: variantsSelectFromDeviceTop,
      right: variantsSelectFromDeviceRight,
      bottom: variantsSelectFromDeviceBottom,
      left: variantsSelectFromDeviceLeft,
    };
  }, [
    variantsSelectFromDeviceWidth,
    variantsSelectFromDeviceHeight,
    variantsSelectFromDevicePosition,
    variantsSelectFromDeviceTop,
    variantsSelectFromDeviceRight,
    variantsSelectFromDeviceBottom,
    variantsSelectFromDeviceLeft,
  ]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] flex flex-col items-center justify-center py-6 px-8 box-border relative gap-[16px] text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={variantsSelectFromDeviceStyle}
    >
      <img
        className="w-10 relative h-10 overflow-hidden shrink-0 z-[0]"
        alt=""
        src={hugeIconfilesAndFolderout}
      />
      <div className="relative leading-[32px] z-[1]">Drag video here</div>
      <StateInactiveSizeDefault
        text="Select from device"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil8@2x.png"
        icon={false}
        stateInactiveSizeDefaultBackgroundColor="#cc0f3c"
        stateInactiveSizeDefaultPosition="unset"
        stateInactiveSizeDefaultTop="unset"
        stateInactiveSizeDefaultLeft="unset"
        stateInactiveSizeDefaultWidth="unset"
        stateInactiveSizeDefaultRight="unset"
        stateInactiveSizeDefaultBottom="unset"
        stateInactiveSizeDefaultGap="8px"
        stateInactiveSizeDefaultFlex="unset"
        stateInactiveSizeDefaultAlignSelf="stretch"
        hugeIconeducationsolidpenWidth="16px"
        hugeIconeducationsolidpenHeight="16px"
      />
      <img
        className="w-8 absolute !m-[0] top-[24px] left-[360px] h-8 overflow-hidden shrink-0 z-[3]"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
      />
    </div>
  );
};

VariantsSelectFromDevice.propTypes = {
  className: PropTypes.string,
  hugeIconfilesAndFolderout: PropTypes.string,
  hugeIconeducationsolidpen: PropTypes.string,

  /** Style props */
  variantsSelectFromDeviceWidth: PropTypes.any,
  variantsSelectFromDeviceHeight: PropTypes.any,
  variantsSelectFromDevicePosition: PropTypes.any,
  variantsSelectFromDeviceTop: PropTypes.any,
  variantsSelectFromDeviceRight: PropTypes.any,
  variantsSelectFromDeviceBottom: PropTypes.any,
  variantsSelectFromDeviceLeft: PropTypes.any,
};

export default VariantsSelectFromDevice;

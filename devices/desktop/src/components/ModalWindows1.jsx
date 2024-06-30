import StateInactiveSizeDefault from "./StateInactiveSizeDefault";
import PropTypes from "prop-types";

const ModalWindows1 = ({
  className = "",
  hugeIconfilesAndFolderout,
  hugeIconeducationsolidpen,
}) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_228px)] left-[calc(50%_-_208px)] rounded-3xl bg-neutral-800 w-[416px] h-[456px] flex flex-col items-center justify-center py-6 px-8 box-border gap-[16px] text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
    >
      <img
        className="w-10 relative h-10 overflow-hidden shrink-0 z-[0]"
        alt=""
        src={hugeIconfilesAndFolderout}
      />
      <div className="relative leading-[32px] z-[1]">Drag video here</div>
      <StateInactiveSizeDefault
        text="Select from device"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil2@2x.png"
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

ModalWindows1.propTypes = {
  className: PropTypes.string,
  hugeIconfilesAndFolderout: PropTypes.string,
  hugeIconeducationsolidpen: PropTypes.string,
};

export default ModalWindows1;

import { useMemo } from "react";
import SizeSmallStateDefault from "./SizeSmallStateDefault";
import StateInactiveSizeDefault from "./StateInactiveSizeDefault";
import PropTypes from "prop-types";

const VariantsFiltersModal = ({
  className = "",
  hugeIconeducationsolidpen,
  variantsFiltersModalWidth,
  variantsFiltersModalPosition,
  variantsFiltersModalTop,
  variantsFiltersModalRight,
  variantsFiltersModalLeft,
}) => {
  const variantsFiltersModalStyle = useMemo(() => {
    return {
      width: variantsFiltersModalWidth,
      position: variantsFiltersModalPosition,
      top: variantsFiltersModalTop,
      right: variantsFiltersModalRight,
      left: variantsFiltersModalLeft,
    };
  }, [
    variantsFiltersModalWidth,
    variantsFiltersModalPosition,
    variantsFiltersModalTop,
    variantsFiltersModalRight,
    variantsFiltersModalLeft,
  ]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] flex flex-col items-center justify-center py-6 px-8 box-border text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={variantsFiltersModalStyle}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[16px]">
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfacesolidremove.svg"
        />
        <div className="self-stretch flex flex-col items-center justify-center gap-[148px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
            <div className="relative leading-[32px]">Filters</div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-center gap-[16px]">
                <SizeSmallStateDefault
                  labelText="Label"
                  inputText="Genre"
                  helperText="Helper text"
                  helperText={false}
                  label={false}
                  rightIcon
                  sizeSmallStateDefaultFlex="1"
                  labelAlignSelf="unset"
                  labelWidth="160px"
                />
                <SizeSmallStateDefault
                  labelText="Label"
                  inputText="Country"
                  helperText="Helper text"
                  helperText={false}
                  label={false}
                  rightIcon
                  sizeSmallStateDefaultFlex="1"
                  labelAlignSelf="unset"
                  labelWidth="160px"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[16px]">
                <SizeSmallStateDefault
                  labelText="Label"
                  inputText="Year"
                  helperText="Helper text"
                  helperText={false}
                  label={false}
                  rightIcon
                  sizeSmallStateDefaultFlex="1"
                  labelAlignSelf="unset"
                  labelWidth="160px"
                />
                <SizeSmallStateDefault
                  labelText="Label"
                  inputText="Raiting"
                  helperText="Helper text"
                  helperText={false}
                  label={false}
                  rightIcon
                  sizeSmallStateDefaultFlex="1"
                  labelAlignSelf="unset"
                  labelWidth="160px"
                />
              </div>
            </div>
          </div>
          <StateInactiveSizeDefault
            text="Apply"
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
        </div>
      </div>
    </div>
  );
};

VariantsFiltersModal.propTypes = {
  className: PropTypes.string,
  hugeIconeducationsolidpen: PropTypes.string,

  /** Style props */
  variantsFiltersModalWidth: PropTypes.any,
  variantsFiltersModalPosition: PropTypes.any,
  variantsFiltersModalTop: PropTypes.any,
  variantsFiltersModalRight: PropTypes.any,
  variantsFiltersModalLeft: PropTypes.any,
};

export default VariantsFiltersModal;

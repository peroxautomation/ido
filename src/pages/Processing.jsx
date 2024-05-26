import { useCallback } from "react";
import ProcessingIcon from "../components/mobile/ProcessingIcon";

/**
 * Processing Page
 * @returns JSX element
 */
const Processing = () => {
  const onProcessingContainerClick = useCallback(() => {
    // Please sync "Processing" to the project
  }, []);

  return (
    <div
      className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden cursor-pointer text-left text-base text-silver font-sf-pro-text"
      onClick={onProcessingContainerClick}
    >
      <div className="absolute w-[calc(100%_-_40px)] top-[230px] right-[20px] left-[20px] flex flex-col items-center justify-start gap-[19px] text-center text-xl text-white font-button-1-semibold">
        <ProcessingIcon />
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[28px] font-semibold">
            Processing
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;

import ProcessingIcon from "../components/mobile/ProcessingIcon";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Processing Page
 * @returns JSX element
 */
const Processing = () => {
  /*********************************************************************************** */
  /********************************{Global Variables}********************************* */
  /*********************************************************************************** */
  const navigate = useNavigate();
  const location = useLocation();

  if (location.state !== null) {
    // Navigation placeholder until backend is complete
    setTimeout(() => {
      navigate(location.state.proceedTo);
    }, 3000);
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden text-left text-base text-silver font-sf-pro-text">
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

import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/mobile/PrimaryButton";

/**
 * Reset password result screen for the user settings
 * @returns
 */
const ResetPasswordResult = ({ proceedTo }) => {
  /*********************************************************************************** */
  /********************************{Global vairables}********************************* */
  /*********************************************************************************** */
  const navigate = useNavigate();

  /*********************************************************************************** */
  /********************************{ Functions }************************************** */
  /*********************************************************************************** */

  /**
   * Navigate back to profile screen
   */
  const onBackClick = () => {
    navigate(proceedTo);
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-silver font-h3-semibold grid grid-flow-row justify-items-center">
      <div className="relative top-[17.813rem] flex flex-col items-center justify-start gap-[1rem] text-center text-neutral-100">
        <img
          className="w-[3.5rem] relative h-[3.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfaceoutlinecheckcircle.svg"
        />
        <div className="w-[20.938rem] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem]">
            Your password has been updated!
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-[90%]">
        <PrimaryButton onCTAClick={onBackClick} cTA="Back" isActive={true} />
      </div>
    </div>
  );
};

export default ResetPasswordResult;

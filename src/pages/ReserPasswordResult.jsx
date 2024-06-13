import { useNavigate } from "react-router-dom";
import Button2 from "../components/mobile/Button2";

/**
 * Reset password result screen for the user settings
 * @returns 
 */
const ReserPasswordResult = () => {
  const navigate = useNavigate();

  /**
   * Navigate back to profile screen
   */
  const onBackClick = () => {
    navigate('/profile')
  }

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
      <Button2
        onClick={onBackClick}
        cTATop="unset"
        cTALeft="1.25rem"
        cTAWidth="calc(100% - 40px)"
        cTARight="1.25rem"
        cTABottom="3.813rem"
        cTA="Back"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        cTABackgroundColor="#cc0f3c"
        cTAPosition="absolute"
        cTAGap="0.5rem"
        cTAFlex="unset"
        hugeIconeducationsolidpenWidth="1rem"
        hugeIconeducationsolidpenHeight="1rem"
        cTAAlignSelf="unset"
      />
    </div>
  );
};

export default ReserPasswordResult;

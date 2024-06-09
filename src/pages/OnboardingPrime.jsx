import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button1 from "../components/mobile/Button1";

/**
 * Onboarding Page
 * @returns JSX element
 */
const OnboardingPrime = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="grid grid-rows-3 justify-items-center w-full fixed bg-white h-[100vh] overflow-hidden text-center text-xl text-white font-button-1-semibold">
      <img
        className="absolute w-[100vw] min-h-screen overflow-hidden object-cover"
        alt=""
        src="/devicemobile.svg"
      />
      <img
        className="relative top-[5vh] w-[300px] h-[348px] object-cover"
        alt=""
        src="/polygons@2x.png"
      />
      <div className="relative top-[calc(348px_-_35vh)] w-[335px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[28px] font-semibold">
          Get ready to immerse yourself
        </div>
      </div>
      <Button1
        onCTAClick={onCTAClick}
        cTAAlignSelf="unset"
        cTAPosition="absolute"
        cTATop="86%"
        cTALeft="calc(50% - 167.5px)"
        cTAWidth="335px"
        cTA="Get started"
      />
    </div>
  );
};

export default OnboardingPrime;

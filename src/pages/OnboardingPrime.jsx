import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/mobile/PrimaryButton";

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
      <div className="absolute w-[90%] bottom-5">
        <PrimaryButton
          onCTAClick={onCTAClick}
          isActive={true}
          cTA="Get started"
        />
      </div>
    </div>
  );
};

export default OnboardingPrime;

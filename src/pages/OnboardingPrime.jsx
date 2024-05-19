import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/mobile/LoginButton";

const OnboardingPrime = () => {
  const navigate = useNavigate();

  const onCTAClick = () => {
    navigate("/login");
  }

  return (
    <div className="w-full relative bg-white h-[667px] overflow-hidden text-center text-xl text-white font-button-2-semibold">
      <img
        className="absolute top-[calc(50%_-_333.5px)] left-[calc(50%_-_187.5px)] w-[375px] h-[667px] overflow-hidden"
        alt=""
        src="/bg.svg"
      />
      <div className="absolute top-[461px] left-[20px] w-[335px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[28px] font-semibold">
          Get ready to immerse yourself
        </div>
      </div>
      <LoginButton
        text="Get started"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        icon={false}
        statePrimarySizeDefaultVBorder="none"
        statePrimarySizeDefaultVTextDecoration="unset"
        statePrimarySizeDefaultVAlignSelf="unset"
        statePrimarySizeDefaultVPosition="absolute"
        statePrimarySizeDefaultVTop="583px"
        statePrimarySizeDefaultVLeft="calc(50% - 167.5px)"
        statePrimarySizeDefaultVWidth="335px"
        onCTAClick={onCTAClick}
      />
      <img
        className="absolute top-[56px] left-[37px] w-[300px] h-[348px]"
        alt=""
        src="/polygons.svg"
      />
    </div>
  );
};

export default OnboardingPrime;

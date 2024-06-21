import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/mobile/PrimaryButton";
import ConfirmedIcon from "../components/mobile/ConfirmedIcon";

const PremiumResut = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full fixed bg-neutral-900 h-[100vh] overflow-hidden text-left text-[1rem] text-silver font-button-2-bold grid grid-flow-row justify-items-center">
      <div className="relative w-[calc(100%_-_40px)] top-[calc(100vh_-_70vh)] flex flex-col items-center justify-start gap-[1rem] text-center text-neutral-100">
        <ConfirmedIcon />
        <div className="relative self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem]">
            Successfully started a premium initiative for IDO
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 w-[90%]">
        <PrimaryButton onCTAClick={onCTAClick} cTA="Back" isActive={true} />
      </div>
    </div>
  );
};

export default PremiumResut;

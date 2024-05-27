import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button1 from "../components/mobile/Button1";
import ConfirmedIcon from "../components/mobile/ConfirmedIcon";

const PremiumResut = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden text-left text-[1rem] text-silver font-button-2-bold">
      <div className="relative w-[calc(100%_-_40px)] top-[calc(100vh_-_70vh)] right-[1.25rem] left-[1.25rem] flex flex-col items-center justify-start gap-[1rem] text-center text-neutral-100">
        <ConfirmedIcon />
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[1.5rem]">
            Successfully started a premium initiative for IDO
          </div>
        </div>
      </div>
      <Button1
        onCTAClick={onCTAClick}
        cTAAlignSelf="unset"
        cTAPosition="absolute"
        cTATop="88vh"
        cTALeft="calc(50vw - 45vw)"
        cTAWidth="calc(100% - 40px)"
        cTA="Back"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        hugeIconeducationsolidpen1={false}
      />
    </div>
  );
};

export default PremiumResut;

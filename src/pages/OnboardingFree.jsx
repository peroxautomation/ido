import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PlanPicker from "../components/mobile/PlanPicker";
import Button1 from "../components/mobile/Button1";
import Exit from "../components/mobile/Exit";

const OnboardingFree = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHugeIconinterfaceoutlinereClick = useCallback(() => {
    navigate("/sign-up-all-info");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <section className="absolute w-full right-[0rem] top-[20vh] h-full left-[0rem] rounded-t-21xl rounded-b-none bg-neutral-800 flex flex-col items-end justify-start pt-[1.25rem] px-[1.25rem] pb-[2.5rem] box-border gap-[2em] text-center text-[2rem] text-neutral-100 font-button-2-bold">
        <Exit />
        <PlanPicker/>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center py-[0rem] px-[0.5rem] border-r-[1px] border-solid border-neutral-700">
            <div className="relative leading-[2.5rem] font-semibold">{`$0 `}</div>
          </div>
          <div className="flex flex-row items-center justify-center py-[0rem] px-[0.5rem] text-left text-[0.875rem]">
            <div className="relative leading-[1.25rem] font-semibold">
              <p className="m-0">{`per `}</p>
              <p className="m-0">month</p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-[1rem]">
          <div className="self-stretch flex flex-row items-center justify-center p-[0.5rem]">
            <div className="flex-1 relative leading-[1.5rem] font-semibold">
              Watch
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-[0.5rem]">
            <div className="flex-1 relative leading-[1.5rem] font-semibold">
              Playlist
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-[0.5rem]">
            <div className="flex-1 relative leading-[1.5rem] font-semibold">
              Follow
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-[0.5rem]">
            <div className="flex-1 relative leading-[1.5rem] font-semibold">
              Create 5 videos
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-[0.5rem]">
            <div className="flex-1 relative leading-[1.5rem] font-semibold">
              Challenge 5 videos
            </div>
          </div>
        </div>
        <div className=" flex-grow flex flex-col items-center min-w-[100%] max-h-[11%] justify-end">
          <Button1
            onCTAClick={onCTAClick}
            cTAAlignSelf="stretch"
            cTAPosition="unset"
            cTATop="unset"
            cTALeft="unset"
            cTAWidth="unset"
            cTA="Get started"
            hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
            hugeIconeducationsolidpen1={false}
            cTARight="unset"
            cTABottom="unset"
          />
        </div>
      </section>
    </div>
  );
};

export default OnboardingFree;
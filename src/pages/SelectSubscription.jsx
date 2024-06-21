import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanPicker from "../components/mobile/PlanPicker";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Exit from "../components/mobile/Exit";

/**
 * Select subscription page
 * @returns A JSX element
 */
const SelectSubscription = () => {
  /********************************************************************************** */
  /********************************{Local variables}********************************* */
  /********************************************************************************** */
  const navigate = useNavigate();
  const [selectedPlan, setCurrentPlan] = useState("free");

  /**************************************************************************** */
  /********************************{ Methods }********************************* */
  /**************************************************************************** */
  /**
   *  Navigate to appropriate page when on free
   */
  const onFreeClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  /**
   * Navigate to appropriate page when on premium
   */
  const onPremiumClick = useCallback(() => {
    navigate("/start-subscription-premium");
  }, [navigate]);

  /**
   * Free plan component
   */
  const freePlan = () => {
    return (
      <div className="">
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
      </div>
    );
  };

  /**
   * Premium plan component
   */
  const premiumPlan = () => {
    return (
      <div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center py-[0rem] px-[0.5rem] border-r-[1px] border-solid border-neutral-700">
            <div className="relative leading-[2.5rem] font-semibold">{`$10 `}</div>
          </div>
          <div className="flex flex-row items-center justify-center py-[0rem] px-[0.5rem] text-left text-[0.875rem]">
            <div className="relative leading-[1.25rem] font-semibold">
              <p className="m-0">{`per `}</p>
              <p className="m-0">month</p>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[12.5rem] flex flex-col items-start justify-start text-[1rem]">
          <div className="self-stretch flex flex-row items-center justify-center p-[0.5rem]">
            <div className="flex-1 relative leading-[1.5rem] font-semibold">
              All from free
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-[0.5rem]">
            <div className="flex-1 relative leading-[1.5rem] font-semibold">
              Unlimited creating videos
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-[0.5rem]">
            <div className="flex-1 relative leading-[1.5rem] font-semibold">
              Unlimited challenge
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <section className="absolute w-full right-[0rem] top-[20vh] h-[calc(100vh_-_20vh)] left-[0rem] rounded-t-21xl rounded-b-none bg-neutral-800 grid grid-flow-row justify-items-center  pt-[1.25rem] px-[1.25rem] pb-[2.5rem] box-border gap-[2rem] text-center text-[2rem] text-neutral-100 font-button-2-bold">
        <Exit className="justify-self-end" />
        <PlanPicker setCurrent={setCurrentPlan} currPlan={selectedPlan} />
        {selectedPlan == "free" ? freePlan() : premiumPlan()}
        <PrimaryButton
          onCTAClick={selectedPlan == "free" ? onFreeClick : onPremiumClick}
          cTA="Get started"
          isActive={true}
        />
      </section>
    </div>
  );
};

export default SelectSubscription;

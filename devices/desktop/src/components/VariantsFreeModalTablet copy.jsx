import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import StateOf3OriginalColumn from "./StateOf3OriginalColumn";
import MonthlyPayment from "./MonthlyPayment";

const VariantsFreeModalTablet = (props) => {
  const { closePlans } = props;
  const navigate = useNavigate();
  const [isFreePlan, setFreePlan] = useState(true);
  const [isPremiumPlan, setPremiumPlan] = useState(false);

  async function redirectUser() {
    navigate("/payment-premium-plan");
  }

  return (
    <div className="modal-position">
      <div className={`modal_container`}>
        <div className="flex flex-row items-center justify-center gap-[304px] z-[0]">
          <div className="" />
          <img
            className="ursor-pointer w-8 relative h-8 overflow-hidden shrink-0 "
            alt=""
            src="/hugeiconinterfacesolidremove.svg"
            onClick={closePlans}
          />
        </div>

        <div className="self-stretch flex flex-col items-center justify-start py-0 px-6 gap-[32px]">
          <StateOf3OriginalColumn
            isFreePlan={isFreePlan}
            setFreePlan={setFreePlan}
            isPremiumPlan={isPremiumPlan}
            setPremiumPlan={setPremiumPlan}
          />

          {isFreePlan && (
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
              <MonthlyPayment amount="$0 " />
              <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                <div className="self-stretch relative leading-[24px]">
                  Watch
                </div>
                <div className="self-stretch relative leading-[24px]">
                  Playlist
                </div>
                <div className="self-stretch relative leading-[24px]">
                  Relate
                </div>
                <div className="self-stretch relative leading-[24px]">
                  Create 5 videos
                </div>
                <div className="self-stretch relative leading-[24px]">
                  Challenge 5 videos
                </div>
              </div>
            </div>
          )}
          {isPremiumPlan && (
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
              <MonthlyPayment amount="$10 " />
              <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                <div className="self-stretch relative leading-[24px]">
                  All from free
                </div>
                <div className="self-stretch relative leading-[24px]">
                  Unlimited creating videos
                </div>
                <div className="self-stretch relative leading-[24px]">
                  Unlimited challenge
                </div>
                <div className="self-stretch relative leading-[24px]">
                  Unlimited cover
                </div>
                <div className="self-stretch relative leading-[24px]">
                  Unlimited cover
                </div>
                {/* <div className="self-stretch relative leading-[24px]" /> */}
              </div>
            </div>
          )}

          <button
            className={`btn-primary-active w-[252px]`}
            onClick={redirectUser}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};


export default VariantsFreeModalTablet;

import { useState } from "react";
import FreePlan from "./FreePlan"
import PremiumPlan from "./PremiumPlan";

const PlanModal = () => {

    const [isFreePlan, setFreePlan] = useState(true)
    const [isPremiumPlan, setPremiumPlan]= useState(false)
    
    const handleFreeClick = () =>{
        setFreePlan(true)
        setPremiumPlan(false)

    }
    const handlePriemumClick = ()=>{
        setPremiumPlan(true)
        setFreePlan(false)
        
    }

  return (
    <div className="absolute top-[calc(50%_-_228px)] left-[calc(50%_-_208px)] rounded-3xl bg-neutral-800 w-[416px] h-[456px] flex flex-col items-end justify-start py-3.5 px-4 box-border text-center text-13xl text-neutral-100 font-body-regular">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-8 relative h-8 overflow-hidden shrink-0">
        <img
          className="absolute h-[41.56%] w-[41.56%] top-[29.06%] right-[29.37%] bottom-[29.37%] left-[29.06%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/remove.svg"
        />
      </button>

      <div className="self-stretch flex flex-col items-center justify-start py-0 px-6 gap-[32px]">
        <div className="self-stretch rounded-xl bg-neutral-800 flex flex-row items-center justify-center">
          <button 
          onClick = {handleFreeClick}
          className={`cursor-pointer [border:none] py-3 px-1 flex-1 rounded-xl flex flex-row items-center justify-center
            ${(isFreePlan === true)? 'bg-neutral-700 text-neutral-100':'bg-[transparent] text-neutral-500'}`}>
            <div className="relative text-xs leading-[16px] font-semibold font-body-regular text-left">
              Free
            </div>
          </button>
          <button 
          onClick = {handlePriemumClick}
          className={`cursor-pointer [border:none] py-3 px-1 flex-1 rounded-xl flex flex-row items-center justify-center
          ${(isPremiumPlan === true)? 'bg-neutral-700 text-neutral-100':'bg-[transparent] text-neutral-500'}`}>
            <div className="relative text-xs leading-[16px] font-body-regular text-left">
              Premium
            </div>
          </button>
        </div>
        
        
        {isFreePlan && <FreePlan/>}
        {isPremiumPlan && <PremiumPlan/>}

        <a className="[text-decoration:none] w-[252px] rounded-xl bg-primary-500 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] text-base text-[inherit]">
          <div className="relative leading-[24px] font-semibold">Continue</div>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconinterfacesolidplus1.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default PlanModal;

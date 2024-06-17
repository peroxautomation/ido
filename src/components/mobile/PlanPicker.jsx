import { useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom/dist";

const PlanPicker = ({
  className = "",
  currPlan

}) => {
  const navigate = useNavigate();

  //Switch to free subscription page
  const switchFree = () => {
    navigate('/subscription-free')
  }
  //Switch to premium subscription page
  const switchPremium = () => {
    navigate('/subscription-premium')
  }
  const path = window.location.pathname;

  if( path == "/subscription-free") {
    return (
      <div
        className={`w-full self-stretch rounded-xl bg-neutral-800 flex flex-row items-center justify-center text-left text-[0.75rem] text-neutral-100 font-button-2-bold ${className}`}
      >
        <div
          className="flex-1 rounded-xl bg-neutral-700 flex flex-row items-center justify-center py-[0.75rem] px-[0.25rem]"
        >
          <div
            className="relative leading-[1rem] font-semibold"
          >
            Free
          </div>
        </div>
        <div
          onClick={switchPremium}
          className="flex-1 rounded-xl flex flex-row items-center justify-center py-[0.75rem] px-[0.25rem] text-neutral-500"
        >
          <div className="relative leading-[1rem]">
            Premium
          </div>
        </div>
      </div>
    );
  }
  else if(path == "/subscription-premium") {
    return (
      <div
        className={`self-stretch rounded-xl bg-neutral-800 flex flex-row items-center justify-center text-left text-[0.75rem] text-neutral-100 font-button-2-bold ${className}`}
      >
        <div
          onClick={switchFree}
          className="flex-1 rounded-xl flex flex-row items-center justify-center py-[0.75rem] px-[0.25rem] text-neutral-500"
        >
          <div className="relative leading-[1rem]">
            Free
          </div>
        </div>
        <div
          className="flex-1 rounded-xl bg-neutral-700 flex flex-row items-center justify-center py-[0.75rem] px-[0.25rem]"
        >
          <div
            className="relative leading-[1rem] font-semibold"
          >
            Premium
          </div>
        </div>
      </div>
    );
  }
 
};

PlanPicker.propTypes = {
  className: PropTypes.string,
};

export default PlanPicker;

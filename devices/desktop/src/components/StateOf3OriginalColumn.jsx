const StateOf3OriginalColumn = (props) => {
  const { isFreePlan, setFreePlan, isPremiumPlan, setPremiumPlan } = props;

  function chooseFreePlan() {
    setFreePlan(true);
    setPremiumPlan(false);
  }

  function choosePremiumPlan() {
    setFreePlan(false);
    setPremiumPlan(true);
  }

  return (
    <div
      className={`rounded-xl bg-neutral-800 flex flex-row items-center justify-center text-left text-xs text-neutral-100 font-overline-regular self-stretch`}
    >
      <div
        className={`${
          isFreePlan ? "btn-secondary-active" : "btn-secondary-inactive"
        }`}
        onClick={chooseFreePlan}
      >
        <div
          className={`relative leading-[16px] font-semibold ${
            isFreePlan ? "font-semibold text-[#fff]" : "text-[#6c6c6c]"
          }`}
        >
          Free
        </div>
      </div>
      <div
        className={`${
          isPremiumPlan ? "btn-secondary-active" : "btn-secondary-inactive"
        }`}
        onClick={choosePremiumPlan}
      >
        <div
          className={`relative leading-[16px] ${
            isPremiumPlan ? "font-semibold text-[#fff]" : "text-[#6c6c6c]"
          }`}
        >
          Premium
        </div>
      </div>
    </div>
  );
};

export default StateOf3OriginalColumn;

/**
 * Subscription plan picker component
 * @param {*} currPlan The current selected plan
 *  @param {*} setCurrent handler to set current plan
 * @returns A JSX element
 */
const PlanPicker = (props) => {
  const { currPlan, setCurrent } = props;

  if (currPlan == "free") {
    return (
      <div className={`subscription-plan-picker`}>
        <div className="subscription-plan-picker-selected">
          <div className="relative leading-[1rem] font-semibold">Free</div>
        </div>
        <div
          onClick={() => setCurrent("premium")}
          className="subscription-plan-picker-unselected"
        >
          <div className="relative leading-[1rem]">Premium</div>
        </div>
      </div>
    );
  } else if (currPlan == "premium") {
    return (
      <div className={`subscription-plan-picker`}>
        <div
          onClick={() => setCurrent("free")}
          className="subscription-plan-picker-unselected"
        >
          <div className="relative leading-[1rem]">Free</div>
        </div>
        <div className="subscription-plan-picker-selected">
          <div className="relative leading-[1rem] font-semibold">Premium</div>
        </div>
      </div>
    );
  }
};

export default PlanPicker;

import Title from "../components/mobile/Title";
import DeletePopup from "../components/mobile/DeletePopup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Subscriptions page
 * @returns
 */
const Subscriptions = () => {
  /*********************************************************************************** */
  /********************************{States & vairables}******************************* */
  /*********************************************************************************** */
  const [isPopupActive, setIspopActive] = useState(false);
  const navigate = useNavigate();
  /*********************************************************************************** */
  /********************************{ Functions }************************************** */
  /*********************************************************************************** */
  const onButtonClick = () => {
    setIspopActive(true);
  };

  /**
   * On no delete click
   */
  const onNoClick = () => {
    setIspopActive(false);
  };

  /**
   * On yes delete click
   */
  const onYesClick = () => {
    setIspopActive(false);
    navigate('/subscription-cancled')
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular">
      <Title pageName="Subscriptions" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-center justify-between border-b-[1px] border-solid border-neutral-700">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.75rem] px-[0rem]">
            <div className="flex-1 relative leading-[1.5rem]">Plan</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end py-[0.75rem] px-[0rem] text-right">
            <b className="flex-1 relative leading-[1.5rem]">Premium</b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between border-b-[1px] border-solid border-neutral-700">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.75rem] px-[0rem]">
            <div className="flex-1 relative leading-[1.5rem]">Duration</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end py-[0.75rem] px-[0rem] text-right">
            <b className="flex-1 relative leading-[1.5rem]">Monthly</b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between border-b-[1px] border-solid border-neutral-700">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.75rem] px-[0rem]">
            <div className="flex-1 relative leading-[1.5rem]">Status</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end py-[0.75rem] px-[0rem] text-right">
            <b className="flex-1 relative leading-[1.5rem]">Active</b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between border-b-[1px] border-solid border-neutral-700">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.75rem] px-[0rem]">
            <div className="flex-1 relative leading-[1.5rem]">Renewal date</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end py-[0.75rem] px-[0rem] text-right">
            <b className="flex-1 relative leading-[1.5rem]">18th May</b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between border-b-[1px] border-solid border-neutral-700">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.75rem] px-[0rem]">
            <div className="flex-1 relative leading-[1.5rem]">Amount</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end py-[0.75rem] px-[0rem] text-right">
            <b className="flex-1 relative leading-[1.5rem]">$10</b>
          </div>
        </div>
      </div>
      <button
        onClick={onButtonClick}
        className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-neutral-800 absolute w-[calc(100%_-_200px)] right-[6.75rem] bottom-[15.688rem] left-[6.75rem] rounded-lg flex flex-row items-center justify-center box-border`}
      >
        <div className="relative text-[1rem] leading-[1.5rem] font-semibold  text-danger-500 text-center text-nowrap px-1">
          Cancel subscription
        </div>
      </button>
      {isPopupActive && (
        <DeletePopup
          message={"Are you sure want to cancel subscription?"}
          current="Subscription"
          onYesClick={onYesClick}
          onNoClick={onNoClick}
        />
      )}
    </div>
  );
};

export default Subscriptions;

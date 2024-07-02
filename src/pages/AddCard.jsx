import { useState } from "react";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  /*********************************************************************************** */
  /********************************{Global vairables}********************************* */
  /*********************************************************************************** */
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardDate, setCardDate] = useState("");
  const navigate = useNavigate();

  /*********************************************************************************** */
  /********************************{ Functions }************************************** */
  /*********************************************************************************** */
  /**
   * Set button to active or inactive state
   * @returns True if active, else false.
   */
  const isButtonActive = () => {
    if (
      cardHolderName === "" ||
      cardNumber === "" ||
      cardCvv === "" ||
      cardDate === ""
    ) {
      return false;
    }
    return true;
  };

  const onButtonClick = () => {
    navigate("/profile/payment-methods");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-items-center">
      <Title pageName="Add payment mehtod" />
      <div className="relative w-[calc(100%_-_40px)] top-[6.75rem] flex flex-col justify-start gap-[2.562rem]">
        <div className="flex flex-col items-start justify-start gap-[1.5rem] w-[100%]">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[20.938rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
              <div className="flex-1 relative leading-[1.5rem]">
                Card holder name
              </div>
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
            <input
              className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 w-[20.938rem] rounded-xl flex flex-row items-center justify-center py-[0.625rem] px-[1rem] box-border text-neutral-100"
              placeholder="Full name"
              type="text"
              value={cardHolderName}
              onInput={(e) => setCardHolderName(e.currentTarget.value)}
            />
            <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem] text-neutral-100">
              <div className="flex-1 relative leading-[1.25rem]">
                Helper text
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="w-[20.938rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
              <div className="flex-1 relative leading-[1.5rem]">
                Card number
              </div>
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
            <input
              className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 w-[20.938rem] rounded-xl flex flex-row items-center justify-center py-[0.625rem] px-[1rem] box-border text-neutral-100"
              placeholder="0000 0000 0000 0000"
              type="text"
              value={cardNumber}
              onInput={(e) => setCardNumber(e.currentTarget.value)}
            />
            <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem] text-neutral-100">
              <div className="flex-1 relative leading-[1.25rem]">
                Helper text
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.937rem]">
            <div className="w-[10rem] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
                <div className="flex-1 relative leading-[1.5rem]">MM/YY</div>
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/hugeiconinterfacesolidinformation12.svg"
                />
              </div>
              <input
                className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-start py-[0.625rem] px-[1rem] text-neutral-100"
                placeholder="MM/YY"
                type="text"
                value={cardDate}
                onInput={(e) => setCardDate(e.currentTarget.value)}
              />
              <div className="w-[10rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem] text-neutral-600">
                <div className="flex-1 relative leading-[1.25rem]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-[10rem] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]">
                <div className="flex-1 relative leading-[1.5rem]">CVV</div>
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/importantIcon.svg"
                />
              </div>
              <input
                className="[border:none] [outline:none] bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-start py-[0.625rem] px-[1rem] font-button-1-regular text-[1rem] text-neutral-100"
                type="text"
                value={cardCvv}
                onInput={(e) => setCardCvv(e.currentTarget.value)}
              />
              <div className="w-[10rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem] text-neutral-600">
                <div className="flex-1 relative leading-[1.25rem]">
                  Helper text
                </div>
              </div>
            </div>
          </div>
        </div>
        <PrimaryButton
          cTA="Add card"
          isActive={isButtonActive()}
          onCTAClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default AddCard;

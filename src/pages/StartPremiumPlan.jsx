import { useState } from "react";
import Input from "../components/mobile/Input";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom/dist";

/**
 * Start premium plan screen
 * @returns A JSX Element
 */
const StartPremiumPlan = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [card, setCard] = useState({
    cardhodlerName: null,
    cardNumber: null,
    expiryDate: null,
    cvv: null,
  });

  /********************************************************************************** */
  /********************************{Local variables}********************************* */
  /********************************************************************************** */
  const navigate = useNavigate();

  /**************************************************************************** */
  /********************************{ Methods }********************************* */
  /**************************************************************************** */

  /**
   * Navigate to next page
   */
  const onStartClick = () => {
    if (
      card.cardNumber !== null &&
      card.cardhodlerName !== null &&
      card.month !== null &&
      card.year !== null &&
      card.expiryDate !== null &&
      card.cvv !== null
    ) {
      navigate("/start-subscription-premium/processing", {
        state: { proceedTo: "/start-subscription-premium/otp" },
      });
    }
  };

  /**
   * Set the cardholder name
   */
  const handleCardHolderName = (name) => {
    setCard({
      ...card,
      cardhodlerName: name,
    });
  };

  /**
   * Set the card number
   */
  const handleCardNumber = (number) => {
    setCard({
      ...card,
      cardNumber: number,
    });
  };

  /**
   * Set the card expiry date
   */
  const handleCarExpiryDate = (cardDate) => {
    setCard({
      ...card,
      expiryDate: cardDate,
    });
  };

  /**
   * Set the card year
   */
  const handleCardCvv = (cardCvv) => {
    setCard({
      ...card,
      cvv: cardCvv,
    });
  };

  console.log(card);

  return (
    <div className="w-full grid grid-flow-row justify-center relative bg-neutral-900 h-[100vh] overflow-hidden text-[1rem] text-neutral-100 font-button-2-bold">
      <Title pageName="Start premium plan" />
      <div className="relative top-[5rem] overflow-hidden grid grid-flow-row justify-items-center w-full h-[14rem] mb-2">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.5rem] px-[0rem]">
            <div className="flex flex-row items-center justify-center gap-[0.5rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/checkCircleGreen.svg"
              />
              <div className="relative leading-[1.5rem]">All from free</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.5rem] px-[0rem]">
            <div className="flex flex-row items-center justify-center gap-[0.5rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/checkCircleGreen.svg"
              />
              <div className="relative leading-[1.5rem]">
                Unlimited creating videos
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.5rem] px-[0rem]">
            <div className="flex flex-row items-center justify-center gap-[0.5rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/checkCircleGreen.svg"
              />
              <div className="relative leading-[1.5rem]">
                Unlimited challenge
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.5rem] px-[0rem]">
            <div className="flex flex-row items-center justify-center gap-[0.5rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/checkCircleGreen.svg"
              />
              <div className="relative leading-[1.5rem]">Unlimited Cover</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-center text-[1.5rem]">
          <div className="flex-1 flex flex-row items-center justify-start py-[0.5rem] px-[0rem]">
            <h3 className="m-0 flex-1 relative text-inherit leading-[2rem] font-semibold font-inherit">
              Total: $10 / Per month
            </h3>
          </div>
        </div>
      </div>
      <div className="relative w-screen p-5 grid grid-flow-row justify-items-start rounded-t-xl rounded-b-none bg-neutral-800">
        <Input
          label="Card holder name"
          isRequired={false}
          inputPlaceholder="Enter card holder name"
          value={card.cardhodlerName}
          handleSetValue={handleCardHolderName}
        />
        <Input
          label="Card number"
          isRequired={false}
          inputPlaceholder="Enter card number"
          value={card.cardNumber}
          handleSetValue={handleCardNumber}
        />
        <div className="relative grid grid-cols-2 gap-5 justify-self-center">
          <div className="relative">
            <Input
              label="MM/YY"
              isRequired={false}
              inputPlaceholder="MM/YY"
              value={card.expiryDate}
              handleSetValue={handleCarExpiryDate}
            />
          </div>
          <div className="relative">
            <Input
              label="CVV"
              isImportant={true}
              inputPlaceholder=""
              value={card.cvv}
              handleSetValue={handleCardCvv}
            />
          </div>
        </div>
        <PrimaryButton
          onCTAClick={onStartClick}
          cTA="Start premium plan"
          className="relative justify-self-center top-2 h-[3.7em]"
          showImage={true}
          isActive={true}
        />
      </div>
    </div>
  );
};

export default StartPremiumPlan;

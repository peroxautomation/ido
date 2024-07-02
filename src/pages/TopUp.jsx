import CardDropdown from "../components/mobile/CardDropdown";
import Title from "../components/mobile/Title";
import CardDropdownMenu from "../components/mobile/CardDropdownMenu";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/mobile/PrimaryButton";
import { useState } from "react";

const TopUp = () => {
  /*********************************************************************************** */
  /********************************{Global vairables}********************************* */
  /*********************************************************************************** */
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState({
    number: "4169 8883 4320 1284",
    type: "master",
  });
  const [isCardDropdownActive, setIsCardDropdownActive] = useState(false);
  const [topUpAmount, setTopupAmount] = useState("");
  const userCards = [
    {
      number: "4169 9028 3716 5583",
      type: "master",
    },
    {
      number: "44169 4763 6720 7390",
      type: "master",
    },
    {
      number: "9073 6379 7134 8104",
      type: "visa",
    },
    {
      number: "4169 8376 5730 0029",
      type: "master",
    },
  ];

  /*********************************************************************************** */
  /********************************{ Functions }************************************** */
  /*********************************************************************************** */
  /**
   * Navigate to top up processing page
   */
  const onTopUpClick = () => {
    navigate("/profile/my-wallet/top-up/processing", {
      state: { proceedTo: "/profile/my-wallet/top-up/result" },
    });
  };

  /**
   * Handle selecting card from card dropdown menu
   * @param {*} cardNo
   * @param {*} cardType
   */
  const handleSelectCard = (cardNo, cardType) => {
    setSelectedCard({
      number: cardNo,
      type: cardType,
    });
  };

  /**
   * Toggle button active state
   * @returns True if conditions are met, else false.
   */
  const isButtonActive = () => {
    if (topUpAmount.length != 0) {
      return true;
    } else return false;
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-600 font-button-1-regular grid justify-center">
      <Title pageName="Top up" />
      <div className="relative top-[6.75rem] flex flex-col items-start justify-start gap-[1rem]">
        <CardDropdown
          value={selectedCard}
          onDropdownClick={() => setIsCardDropdownActive(!isCardDropdownActive)}
        />
        {isCardDropdownActive && (
          <CardDropdownMenu cards={userCards} onCardSelect={handleSelectCard} />
        )}
        <div className="flex flex-col items-start justify-start">
          <div className="w-[20.938rem] flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border text-neutral-100">
            <div className="flex-1 relative leading-[1.5rem]">Amount</div>
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
              alt=""
            />
          </div>
          <input
            value={topUpAmount}
            onInput={(e) => setTopupAmount(e.currentTarget.value)}
            className="w-[20.938rem] rounded-xl bg-white-8 flex flex-row py-[0.625rem] px-[1rem] box-border text-left text-white focus:outline-none text-[1em]"
            placeholder="Enter amount"
          />
          <div className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
            <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
          </div>
        </div>
        <div className=" mt-3 w-full">
          <PrimaryButton
            onCTAClick={onTopUpClick}
            cTA="Top up"
            isActive={isButtonActive()}
          />
        </div>
      </div>
    </div>
  );
};

export default TopUp;

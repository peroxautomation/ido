import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";
import CardDropdown from "../components/mobile/CardDropdown";
import CardDropdownMenu from "../components/mobile/CardDropdownMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * Select Payment method for donation
 * @returns A JSX element
 */
const DonateSelectPayment = () => {
  /*********************************************************************************** */
  /********************************{states & vairables}******************************* */
  /*********************************************************************************** */
  const [selectedCard, setSelectedCard] = useState({
    number: null,
    type: null,
  });
  const [isCardDropdownActive, setIsCardDropdownActive] = useState(false);
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
  const [isFromWallet, setIsFromWallet] = useState(false);
  const [isfromCard, setIsFromCard] = useState(false);
  const navigate = useNavigate();

  /*********************************************************************************** */
  /********************************{ Functions }************************************** */
  /*********************************************************************************** */
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

    setIsFromWallet(false); //set is from wallet to false
    setIsFromCard(true); //set is from card to true
  };

  const handleSelectWallet = () => {
    setIsFromWallet(true); //set is from wallet to true
    setIsFromCard(false); //set is from card to false
  };

  const isButtonActive = () => {
    if (!isfromCard && !isFromWallet) return false;
    else return true;
  };

  const onDonateClick = () => {
    navigate("/donate/processing", { state: { proceedTo: "/donate/result" } });
  };

  return (
    <div className="w-full fixed bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular grid grid-flow-row justify-center">
      <Title pageName="Donate" />
      <div className="relative top-[14vh] w-[20.938rem] flex flex-col h-[87vh]">
        <div className="w-[20.938rem] flex flex-col items-start justify-start h-max">
          <CardDropdown
            value={selectedCard}
            onDropdownClick={() =>
              setIsCardDropdownActive(!isCardDropdownActive)
            }
          />
          {isCardDropdownActive && (
            <CardDropdownMenu
              cards={userCards}
              onCardSelect={handleSelectCard}
            />
          )}
        </div>
        <button
          onClick={handleSelectWallet}
          className="mt-3 cursor-pointer [border:none] p-0 bg-[transparent] w-[20.938rem] flex flex-col items-start justify-start h-max"
        >
          <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] text-neutral-100 px-[1rem] gap-[0.5rem] leading-[1.5rem] font-button-1-regular text-[1rem] w-full">
            From wallet
          </div>
        </button>
        <div className="relative">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.75rem] px-[0rem]">
            <div className="flex-1 relative leading-[1.5rem]">Donation</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end py-[0.75rem] px-[0rem] text-right">
            <b className="flex-1 relative leading-[1.5rem]">$10</b>
          </div>
        </div>
        <div className="relative box-border w-[20.938rem] flex flex-row items-center justify-between border-b-[1px] border-solid border-neutral-700">
          <div className="flex-1 flex flex-row items-center justify-center py-[0.75rem] px-[0rem]">
            <div className="flex-1 relative leading-[1.5rem]">Subtotal</div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-end py-[0.75rem] px-[0rem] text-right">
            <b className="flex-1 relative leading-[1.5rem]">$9</b>
          </div>
        </div>
        <div className="relative w-[20.938rem] flex flex-row items-center justify-center text-center text-[1.5rem]">
          <div className="flex-1 flex flex-row items-center justify-start py-[0.5rem] px-[0rem]">
            <div className="flex-1 relative leading-[2rem] font-semibold">
              Total: $10
            </div>
          </div>
        </div>
      </div>
      <PrimaryButton
        cTA="Donate"
        isActive={isButtonActive()}
        onCTAClick={onDonateClick}
      />
    </div>
  );
};

export default DonateSelectPayment;
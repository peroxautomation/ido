import PaymentMethodBox from "../components/mobile/PaymentMethodBox";
import AddPaymentMethodBtn from "../components/mobile/AddPaymentMethodBtn";
import Title from "../components/mobile/Title";
import DeletePopup from "../components/mobile/DeletePopup";
import { useState } from "react";

const PaymentMethods = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // Selected card id
  const [cards, setCard] = useState([
    {
      id: 0,
      cardNum: "4160 4573 9374 0013",
    },
    {
      id: 1,
      cardNum: "4160 4573 9374 0013",
    },
    {
      id: 2,
      cardNum: "4160 4573 9374 0013",
    },
    {
      id: 3,
      cardNum: "4160 4573 9374 0013",
    },
    {
      id: 4,
      cardNum: "4160 4573 9374 0013",
    },
  ]);
  
  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Render users payment methods
   */
  const renderPaymentMethods = () => {
    return cards.map((element, index) => (
      <PaymentMethodBox
        key={index}
        card={element.cardNum}
        id={element.id}
        onDeleteClick={handleDeleteCard}
      />
    ));
  };

  /**
   * On yes delete. Handle deleting card
   */
  const onYesClick = () => {
    const newArray = cards.filter((card) => card.id != selectedCard);
    setCard(newArray);
    setIsPopupActive(false);
  };

  /**
   * On no delete
   */
  const onNoClick = () => {
    setIsPopupActive(false);
  };

  /**
   * On delete button selected. Trigger popup and set selected card
   */
  const handleDeleteCard = (id) => {
    setSelectedCard(id);
    setIsPopupActive(true);
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-center">
      <Title pageName="Payment methods" />
      <div className="relative top-[15vh] flex flex-col items-start justify-start gap-[1.5rem] max-h-[70vh] overflow-y-scroll overflow-x-hidden">
        {renderPaymentMethods()}
      </div>
      <div className="relative self-start">
        <AddPaymentMethodBtn />
      </div>
      {isPopupActive && (
        <DeletePopup
          message={"Are you sure want to delete card?"}
          onNoClick={onNoClick}
          onYesClick={onYesClick}
        />
      )}
    </div>
  );
};

export default PaymentMethods;

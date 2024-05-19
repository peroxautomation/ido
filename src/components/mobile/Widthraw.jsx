import React, {useState} from 'react'
//rafc: a shortcut for creating react arrow function component

export const Withdraw = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */

  //chosenCard = {cardhodlerName, cardNumber, ExpireDate {month, year}, cvv}  Example scenerio
  const [chosenCard, setChosenCard] = useState({});
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  return <div>Withdraw</div>;
};

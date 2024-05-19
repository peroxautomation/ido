import React, {useState} from 'react'
//rafc: a shortcut for creating react arrow function component

export const TopUp = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */

  //chosenCard = {cardhodlerName, cardNumber, ExpireDate {month, year}, cvv}  Example scenerio
  const [chosenCard, setChosenCard] = useState({});
  const [topupAmount, setTopupAmount] = useState(0);

  return <div>Top up</div>;
};

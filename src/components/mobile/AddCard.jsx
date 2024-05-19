import React, {useState} from 'react'
//rafc: a shortcut for creating react arrow function component

export const AddCard = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */

  const [cardhodlerName, setCardhodlerName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  //ExpireDate = {month, year}  Example scenerio
  const [expiryDate, setExpiryDate] = useState({});
  const [cvv, setCvv] = useState(0);

  //card = {cardhodlerName, cardNumber, ExpireDate {month, year}, cvv}  Example scenerio
  const [card, setCard] = useState({});
  return <div>Add Card</div>;
};

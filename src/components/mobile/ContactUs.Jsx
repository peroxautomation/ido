import React, {useState} from 'react'
//rafc: a shortcut for creating react arrow function component

export const ContactUs = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
 
  return <div>Contact Us</div>;
};

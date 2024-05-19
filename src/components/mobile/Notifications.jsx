import React, {useState} from 'react'
//rafc: a shortcut for creating react arrow function component

export const ContactUs = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */

  const [pauseAll, setPauseAll] = useState(false);
  const [postsComments, setPostsComments] = useState(false);
  const [messages, setMessages] = useState(false);
  const [fromIdo, setFromIdo] = useState(false);
 
  return <div>Notifications</div>;
};

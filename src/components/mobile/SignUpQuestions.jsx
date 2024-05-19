import React, { useState } from 'react'

export const SignUpQuestions = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [startYear, setStartYear] = useState('');   // Year started dancing
  const [danceReason, setDanceReason] = useState(''); // Reason for dancing

  // danceReason = ['I enjoy it','Entertaining friends and family','It relieves stress']  Example scenrio
  const [danceReason, setanceReason] = useState([]);

  // startedDancing = ['I have always loved dancing','My family','My friend']  Example scenrio
  const [influencedYou, setInfluencedYou] = useState([]);
  return <div>Signup Questions</div>;
}
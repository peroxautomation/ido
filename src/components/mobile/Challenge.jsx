import React, { useState } from 'react'

//CreateChallenge 
export const CreateChallenge = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [wasPostedBefore, setWasPostedBefore] = useState(false);    
  const [music, setMusic] = useState('');                          
  const [danceTtile, setDanceTitle] = useState('');                
  const [titleHasMeaning, setTitleHasMeaning] = useState(false);  
  const [titleMeaning, setTitleMeaning] = useState('');           
  const [titleInspiration, setTitleInspiration] = useState('');    
  const [movesIsMeaningful, setMovesIsMeaningful] = useState(false);
  const [movesMeaning, setMovesMeaning] = useState('');
  const [aspectCreated, setAspectCreated] = useState('');
  const [genre, setGenre] = useState('');
  const [country, setCountry] = useState('');

  const [challengeQuestions, setChallengeQuestions] = useState({});
  
  return <div>Create Challenge</div>
}
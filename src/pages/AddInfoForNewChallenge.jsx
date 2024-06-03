import Button from "../components/mobile/Button";
import SelectMusicButton from "../components/mobile/SelectMusicButton";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../components/mobile/Title";

const AddInfoForNewChallenge = () => {
  const navigate = useNavigate();
  const { flow } = useParams();
  
  // Navigate to the select music page
  const onSelectClick = () => {
    navigate(`/create/${flow}/select-music`, { state: {flow: flow}});
  }
  
  //Navigate to question screen
  const onNextClick = () => {
    if(flow === "challenge")
      navigate(`/create/new-challenge/challenge-question-1`);
    else
      navigate('/create/cover/cover-add-info')
  }

  return (
    <div className="w-full flex flex-col items-center relative bg-neutral-900 h-screen overflow-hidden">
      <Title
        pageName = { (flow === 'cover')? "New cover" : "New challenge" }
      />
      <SelectMusicButton onCTAClick={onSelectClick}/>
     <div className="flex h-[90%] justify-center items-end">
      <Button cta={"Next"} onCTAClick={onNextClick} />
     </div>
    </div>
  );
};

export default AddInfoForNewChallenge;

import PrimaryButton from "../components/mobile/PrimaryButton";
import SelectMusicButton from "../components/mobile/SelectMusicButton";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../components/mobile/Title";

const AddInfoForNewChallenge = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();
  const { flow } = useParams();

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Navigate to the select music page
   */
  const onSelectClick = () => {
    navigate(`/create/${flow}/select-music`, { state: { flow: flow } });
  };

  /**
   * Navigate to question screen
   */
  const onNextClick = () => {
    if (flow === "new-challenge")
      navigate(`/create/new-challenge/challenge-question-1`);
    else navigate("/create/cover/cover-add-info");
  };

  return (
    <div className="w-full flex flex-col items-center relative bg-neutral-900 h-screen overflow-hidden">
      <Title pageName={flow === "cover" ? "New cover" : "New challenge"} />
      <SelectMusicButton onCTAClick={onSelectClick} />
      <div className="absolute w-[90%] left-[1.25rem] right-[2.5rem] bottom-0">
        <PrimaryButton cTA={"Next"} onCTAClick={onNextClick} isActive={true} />
      </div>
    </div>
  );
};

export default AddInfoForNewChallenge;

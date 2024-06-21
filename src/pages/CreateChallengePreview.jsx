import SelectedVideoContainer from "../components/mobile/SelectedVideoContainer";
import PrimaryButton from "../components/mobile/PrimaryButton";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";
import Title from "../components/mobile/Title";

const CreateChallengePreview = () => {
  const navigate = useNavigate();
  const { flow } = useParams();

  // Navigate to Select Cover From Video
  const onEditClick = useCallback(() => {
    navigate(`/create/${flow}/select-cover`, { state: { flow: flow } });
  }, [navigate]);

  // Navigate to appropriately
  const onContinueClick = useCallback(() => {
    if (flow === "challenge")
      navigate(`/create/${flow}/confrim-upload`, { state: { flow: flow } });
    else navigate(`/create/${flow}/add-info`, { state: { flow: flow } });
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <Title pageName={flow === "cover" ? "New cover" : "New challenge"} />
      <SelectedVideoContainer ctaClick={onEditClick} />
      <div className="absolute bottom-0 w-[90%] left-[1.25rem] right-[2.5rem]">
        <PrimaryButton
          cTA={"Countinue"}
          onCTAClick={onContinueClick}
          isActive={true}
        />
      </div>
    </div>
  );
};

export default CreateChallengePreview;

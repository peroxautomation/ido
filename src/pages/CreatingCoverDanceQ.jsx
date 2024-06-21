import CoverInput from "../components/mobile/CoverInput";
import CoverSource from "../components/mobile/CoverSource";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom";

const CreatingCoverDanceQ = () => {
  const navigate = useNavigate();

  // Navigate to cover click
  const onNextClick = () => {
    navigate("/create/cover", { state: { flow: "cover" } });
  };

  return (
    <div className="w-full fixed bg-neutral-900 h-screen overflow-hidden">
      <Title pageName="New cover" />
      <div className="relative w-[calc(100%_-_40px)] top-[5.25rem] right-[1.25rem] left-[1.25rem] h-[73vh] overflow-y-auto flex flex-col items-start justify-start gap-[1rem]">
        <CoverInput
          label="What is the title of the dance?  "
          placeholder="Answer"
        />
        <CoverInput
          label="Who is the creator of the dance?"
          placeholder="Answer"
        />
        <CoverInput
          label="Where did you find this dance?"
          placeholder="Answer"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
          <CoverSource cTA="YouTube" />
          <CoverSource cTA="TikTok" />
          <CoverSource cTA="Instagram" />
          <CoverSource cTA="Facebook" />
          <CoverSource cTA="Other" />
        </div>
        <CoverInput label="Link" placeholder="URL" />
      </div>
      <div className="absolute bottom-0 w-[90%] left-[1.25rem] right-[2.5rem]">
        <PrimaryButton onCTAClick={onNextClick} cTA="Next" isActive={true} />
      </div>
    </div>
  );
};

export default CreatingCoverDanceQ;

import CoverInput from "../components/mobile/CoverInput";
import CoverSource from "../components/mobile/CoverSource";
import Button3 from "../components/mobile/Button2";
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
      <div className="absolute w-[calc(100%_-_40px)] top-[5.25rem] right-[1.25rem] left-[1.25rem] h-[73vh] overflow-y-auto flex flex-col items-start justify-start gap-[1rem]">
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
      <Button3
        onClick={onNextClick}
        cTAWidth="calc(100% - 40px)"
        cTARight="1.25rem"
        cTABottom="2.5rem"
        cTATop="unset"
        cTAPosition="absolute"
        cTALeft="1.25rem"
        cTABackgroundColor="#cc0f3c"
        cTAGap="0.5rem"
        cTAFlex="unset"
        cTA="Next"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil1@2x.png"
        hugeIconeducationsolidpenWidth="1rem"
        hugeIconeducationsolidpenHeight="1rem"
      />
    </div>
  );
};

export default CreatingCoverDanceQ;

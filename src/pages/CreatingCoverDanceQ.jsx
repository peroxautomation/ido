import { useState } from "react";
import CoverInput from "../components/mobile/CoverInput";
import CoverSource from "../components/mobile/CoverSource";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom";

const CreatingCoverDanceQ = () => {
  const navigate = useNavigate();
  const [danceTitle, setDanceTitle] = useState("");
  const [danceCreator, setDanceCreator] = useState("");
  const [danceSource, setDanceSource] = useState("");
  const [findDance, setFindDance] = useState("");
  const [danceLink, setDanceLink] = useState("");

  // Navigate to cover click
  const onNextClick = () => {
    navigate("/create/cover", { state: { flow: "cover" } });
  };

  //Set button to active
  const isActive = () => {
    if (
      danceTitle !== "" &&
      danceCreator !== "" &&
      danceSource !== "" &&
      danceLink
    ) {
      return true;
    }
    return false;
  };
  console.log(danceTitle);
  console.log(danceCreator);
  console.log(danceSource);
  console.log(danceLink);

  return (
    <div className="w-full fixed bg-neutral-900 h-screen overflow-hidden">
      <Title pageName="New cover" />
      <div className="relative w-[calc(100%_-_40px)] top-[5.25rem] right-[1.25rem] left-[1.25rem] h-[73vh] overflow-y-auto flex flex-col items-start justify-start gap-[1rem]">
        <CoverInput
          label="What is the title of the dance?  "
          placeholder="Answer"
          value={danceTitle}
          valueHandler={setDanceTitle}
        />
        <CoverInput
          label="Who is the creator of the dance?"
          placeholder="Answer"
          value={danceCreator}
          valueHandler={setDanceCreator}
        />
        <CoverInput
          label="Where did you find this dance?"
          placeholder="Answer"
          value={findDance}
          valueHandler={setFindDance}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
          <CoverSource
            value="YouTube"
            onClick={setDanceSource}
            selectedValue={danceSource}
          />
          <CoverSource
            value="TikTok"
            onClick={setDanceSource}
            selectedValue={danceSource}
          />
          <CoverSource
            value="Instagram"
            onClick={setDanceSource}
            selectedValue={danceSource}
          />
          <CoverSource
            value="Facebook"
            onClick={setDanceSource}
            selectedValue={danceSource}
          />
          <CoverSource
            value="Other"
            onClick={setDanceSource}
            selectedValue={danceSource}
          />
        </div>
        <CoverInput
          label="Link"
          placeholder="URL"
          value={danceLink}
          valueHandler={setDanceLink}
        />
      </div>
      <div className="absolute bottom-0 w-[90%] left-[1.25rem] right-[2.5rem]">
        <PrimaryButton
          onCTAClick={onNextClick}
          cTA="Next"
          isActive={isActive()}
        />
      </div>
    </div>
  );
};

export default CreatingCoverDanceQ;

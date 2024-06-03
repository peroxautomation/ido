import Dropdown from "../components/mobile/Dropdown";
import GenreDropdown1 from "../components/mobile/GenreDropdown1";
import Button2 from "../components/mobile/Button2";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom";

const AddInfoForNewChallenge2 = () => {
  const navigate = useNavigate();

  // Display dropdown menu
  const onDropdownClick = () => {
    document.querySelector('#challengeDropdownMenu').classList.toggle('hidden');
  }

  // Upload new challenge
  const onUploadClick = () => {
    navigate('/create/new-challenge/uploading');
  }

  // Discard new challenge
  const onDeletClick = () => {
    navigate('/create');
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[41.688rem] overflow-hidden">
      <div className="absolute w-[calc(100%_-_40px)] top-[6.75rem] right-[1.25rem] left-[1.25rem] flex flex-col items-start justify-start">
        <Dropdown
          onCTAClick={onDropdownClick}
          showLabel={false}
          labelAlignSelf="unset"
          labelWidth="20.938rem"
          label="Label"
          dropdown="Genre"
          dropdownAlignSelf="stretch"
          inputAlignSelf="stretch"
          inputWidth="unset"
          dropdownPosition="unset"
          dropdownTop="unset"
          dropdownLeft="unset"
        />
      </div>
      <div className="absolute w-[calc(100%_-_40px)] right-[1.25rem] bottom-[2.5rem] left-[1.25rem] flex flex-row items-start justify-start gap-[0.937rem]">
        <Button2
          onClick={onDeletClick}
          cTA="Delete"
          hugeIconeducationsolidpen="/hugeiconeducationsolidpencil2@2x.png"
          cTABackgroundColor="rgba(255, 255, 255, 0.08)"
          cTAPosition="unset"
          cTAGap="unset"
          cTAFlex="1"
          hugeIconeducationsolidpenWidth="1.5rem"
          hugeIconeducationsolidpenHeight="1.5rem"
        />
        <Button2
          onClick={onUploadClick}
          cTA="Upload"
          hugeIconeducationsolidpen="/hugeiconeducationsolidpencil3@2x.png"
          cTABackgroundColor="#cc0f3c"
          cTAPosition="unset"
          cTAGap="unset"
          cTAFlex="1"
          hugeIconeducationsolidpenWidth="1.5rem"
          hugeIconeducationsolidpenHeight="1.5rem"
        />
      </div>
      <Title
        className = ""
        returnPage = ""
        pageName="New challenge"
      />
      <GenreDropdown1 />
    </div>
  );
};

export default AddInfoForNewChallenge2;

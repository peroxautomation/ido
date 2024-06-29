import { useState } from "react";
import Dropdown from "../components/mobile/Dropdown";
import GenreDropdown from "../components/mobile/GenreDropdown";
import SecondaryButton from "../components/mobile/SecondaryButton";
import Title from "../components/mobile/Title";
import { useNavigate } from "react-router-dom";

const AddInfoForNewChallenge2 = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState(null);

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Upload new challenge
   */
  const onUploadClick = () => {
    navigate("/create/new-challenge/uploading", {
      state: { flow: "/new-challenge" },
    });
  };

  /**
   *  Discard new challenge
   */
  const onDeleteClick = () => {
    navigate("/create");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[41.688rem] overflow-hidden">
      <Title className="" pageName="New challenge" />
      <div className="w-[90%] absolute top-[16vh] left-[1.25rem] right-[2.5rem]">
        <Dropdown
          selected={selectedGenre}
          name="Genre"
          DropdownOptions={
            <GenreDropdown selectHandler={setSelectedGenre}></GenreDropdown>
          }
        />
      </div>
      <div className="absolute grid grid-flow-col gap-4 h-[2.7em] w-[90%] bottom-10 left-[1.25rem] right-[2.5rem]">
        <SecondaryButton
          onClick={onDeleteClick}
          className="bg-white-8 w-[10rem]"
          cTA="Delete"
        />
        <SecondaryButton onClick={onUploadClick} cTA="Upload" />
      </div>
    </div>
  );
};

export default AddInfoForNewChallenge2;

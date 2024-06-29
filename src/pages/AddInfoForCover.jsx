import { useNavigate } from "react-router-dom";
import SecondaryButton from "../components/mobile/SecondaryButton";
import Dropdown from "../components/mobile/Dropdown";
import Title from "../components/mobile/Title";
import CountryDropdown from "../components/mobile/CountryDropdown";
import { useState } from "react";

const AddInfoForCover = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Navigate to the create new cover
   */
  const onCancleClick = () => {
    navigate("/create/cover");
  };

  /**
   * Navigate to the create new cover
   */
  const onShareClick = () => {
    navigate("/moves");
  };

  return (
    <div className="w-full fixed bg-neutral-900 h-screen overflow-hidden grid grid-flows-row justify-items-center">
      <Title pageName="New cover" />
      <div className="w-[90%] absolute top-[16vh]">
        <Dropdown
          selected={selectedCountry}
          name="Country"
          DropdownOptions={
            <CountryDropdown
              selectHandler={setSelectedCountry}
            ></CountryDropdown>
          }
        />
      </div>
      <div className="absolute grid grid-flow-col gap-4 h-[2.7em] w-[90%] bottom-10">
        <SecondaryButton
          onClick={onCancleClick}
          className="bg-white-8 w-[10rem]"
          cTA="Cancel"
        />
        <SecondaryButton onClick={onShareClick} cTA="Share" />
      </div>
    </div>
  );
};

export default AddInfoForCover;

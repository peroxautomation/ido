import { useNavigate } from "react-router-dom";
import Button3 from "../components/mobile/Button2";
import Dropdown from "../components/mobile/Dropdown";
import Title from "../components/mobile/Title";

const AddInfoForCover = () => {
  const navigate = useNavigate();

  // Navigate to the create new cover
  const onCancleClick = () => {
    navigate('/create/cover');
  }
  // Navigate to the create new cover
  const onShareClick = () => {
    navigate('/moves');
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flows-row justify-items-center">
      <Title pageName="New cover" />
      <Dropdown
        showLabel={false}
        labelAlignSelf="unset"
        labelWidth="20.938rem"
        label="Label"
        dropdown="Country"
        dropdownAlignSelf="unset"
        inputAlignSelf="unset"
        inputWidth="20.938rem"
        dropdownPosition="relative"
        dropdownTop="6.75rem"
        dropdownLeft="0em"
      />
      <div className="relative grid grid-flow-col gap-4 h-[2.7em] top-[35vh]">
      <Button3
        onClick={onCancleClick}
        cTAWidth="10rem"
        cTARight="0em"
        cTABottom="0em"
        cTATop="0em"
        cTAPosition="relative"
        cTALeft="0em"
        cTABackgroundColor="rgba(255, 255, 255, 0.08)"
        cTAGap="unset"
        cTAFlex="unset"
        cTA="Cancel"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil3@2x.png"
        hugeIconeducationsolidpenWidth="1.5rem"
        hugeIconeducationsolidpenHeight="1.5rem"
      />
      <Button3
        onClick={onShareClick}
        cTAWidth="10rem"
        cTARight="0em"
        cTABottom="0em"
        cTATop="0em"
        cTAPosition="relative"
        cTALeft="0em"
        cTABackgroundColor="#cc0f3c"
        cTAGap="unset"
        cTAFlex="unset"
        cTA="Share"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil2@2x.png"
        hugeIconeducationsolidpenWidth="1.5rem"
        hugeIconeducationsolidpenHeight="1.5rem"
      />
      </div>
    </div>
  );
};

export default AddInfoForCover;

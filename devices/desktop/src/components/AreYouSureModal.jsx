import { useMemo } from "react";
import StateDefaultSizeSmallVar from "./StateDefaultSizeSmallVar";

const AreYouSureModal = (props) => {
  const {
    className = "",
    questionText = "Are you sure want to delete?",
    hugeIconeducationsolidpen,
    cTA,
    hugeIconeducationsolidpen1,
    cTA1,
    areYouSureModalPosition,
    areYouSureModalTop,
    areYouSureModalLeft,
    confirmDeleteAccount,
    rejectingDelete,
  } = props;
  const areYouSureModalStyle = useMemo(() => {
    return {
      position: areYouSureModalPosition,
      top: areYouSureModalTop,
      left: areYouSureModalLeft,
    };
  }, [areYouSureModalPosition, areYouSureModalTop, areYouSureModalLeft]);

  return (
    <div
      className={`w-[250px] rounded-2xl bg-neutral-700 h-[148px] overflow-hidden text-center text-xl text-neutral-100 font-overline-regular ${className}`}
      style={areYouSureModalStyle}
    >
      <div className="absolute top-[16px] left-[calc(50%_-_109px)] leading-[28px] font-semibold inline-block w-[218px]">
        {questionText}
      </div>
      <StateDefaultSizeSmallVar
        confirmDeleteAccount={rejectingDelete}
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil6@2x.png"
        text="Cancel"
        icon={false}
        stateDefaultSizeSmallVarWidth="101px"
        stateDefaultSizeSmallVarBackgroundColor="#1b1b1b"
        stateDefaultSizeSmallVarPosition="absolute"
        stateDefaultSizeSmallVarTop="88px"
        stateDefaultSizeSmallVarLeft="16px"
        stateDefaultSizeSmallVarFlex="unset"
        hugeIconeducationsolidpenOverflow="hidden"
      />
      <StateDefaultSizeSmallVar
        confirmDeleteAccount={confirmDeleteAccount}
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil6@2x.png"
        text="Delete"
        icon={false}
        stateDefaultSizeSmallVarWidth="101px"
        stateDefaultSizeSmallVarBackgroundColor="#cc0f3c"
        stateDefaultSizeSmallVarPosition="absolute"
        stateDefaultSizeSmallVarTop="88px"
        stateDefaultSizeSmallVarLeft="133px"
        stateDefaultSizeSmallVarFlex="unset"
        hugeIconeducationsolidpenOverflow="hidden"
      />
    </div>
  );
};

export default AreYouSureModal;

import { useState } from "react";
import Title from "../components/mobile/Title";
import ToggleMenu from "../components/mobile/ToggleMenu";

/**
 * User privacy page
 * @returns A JSX element
 */
const Privacy = () => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const [isActivity, setActivity] = useState(false);
  
  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Switch the toggle between selected and not selected
   * @param {*} event
   */
  const onToggleClick = () => {
    setActivity(!isActivity);
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row">
      <Title pageName="Privacy" />
      <div className="absolute w-[calc(100%_-_40px)] top-[6.938rem] right-[1.25rem] left-[1.25rem] flex flex-col items-start justify-start gap-[1rem]">
        <ToggleMenu
          label="Activity status"
          onClick={onToggleClick}
          class2={isActivity ? "left-[50%]" : ""}
          class1={isActivity ? "bg-primary-500" : ""}
        />
      </div>
    </div>
  );
};

export default Privacy;

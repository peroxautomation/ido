import { useState } from "react";

/**
 * Radio button used in challenge question screens
 * @param  value The value of the radio button
 * @param  radioName  The radio button name
 * @param  label  The radio button label
 * @param  handleSetValue Handler to update the value in parent element
 * @returns A JSX element
 */
const Radio1 = (props) => {
  /**************************************************************************** */
  /***************************{ Variables & States }*************************** */
  /*************************************************************************** */
  const { value, radioName, label, handleSetValue, selectedValue } = props;

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  /**
   * Set selected value in parent
   */
  const onClick = () => {
    handleSetValue(value);
  };

  /**
   * Check if the radio is selected or not
   * @returns Boolen true if the element is selected, else false
   */
  const isSelected = () => {
    //Hide the unchecked radio selected image
    if (selectedValue == value) {
      return true;
    }
    return false;
  };

  return (
    <label className={`primary-radio `}>
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-[0.75rem] px-[1rem] gap-[0.5rem]">
        <div
          className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0`}
        >
          <input
            onClick={onClick}
            type="radio"
            name={radioName}
            value={value}
            className="absolute opacity-0 w-0 h-0"
          />
          <img
            className={`w-[1Ž5rem] relative h-[1.25rem] overflow-hidden shrink-0`}
            alt="Selected Radio"
            src={
              isSelected() ? "/radio-button-filled.svg" : "/ellipse-1248.svg"
            }
          />
        </div>
        <div className="flex-1 relative leading-[1.5rem] font-semibold">
          {label}
        </div>
      </div>
    </label>
  );
};

export default Radio1;

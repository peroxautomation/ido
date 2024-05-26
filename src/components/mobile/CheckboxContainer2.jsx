import Checkbox2 from "./Checkbox2";
import PropTypes from "prop-types";

/**
 * Checkbox container for SaveToPlaylistPopop
 * @returns JSX element
 */
const CheckboxContainer2 = ({ className = "", saveCard}) => {
  return (
    <div
      className={`w-[20.938rem] relative flex flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border gap-[0.5rem] text-left text-[0.875rem] text-neutral-100 font-button-2-bold ${className}`}
    >
      <Checkbox2 vector="/checkbox1Outline.svg" />
      <div className="flex-1 relative leading-[1.25rem]">{saveCard}</div>
    </div>
  );
};

CheckboxContainer2.propTypes = {
  className: PropTypes.string,
  saveCard: PropTypes.string,
  vector: PropTypes.string,
};

export default CheckboxContainer2;

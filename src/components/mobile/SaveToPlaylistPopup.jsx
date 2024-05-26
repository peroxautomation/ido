import AddToPlaylistTitle from "./AddToPlaylistTitle";
import CheckboxContainer2 from "./CheckboxContainer2";
import Button1Inactive from "./Button1Inactive";
import PropTypes from "prop-types";

const SaveToPlaylistPopup = ({ className = "" }) => {
  return (
    <div
      id="saveToPlaylistPopup"
      className={`absolute z-10 w-full h-[38vh] ]right-[0rem] bottom-[0rem] left-[0rem] rounded-t-[2.5em] rounded-b-none bg-neutral-900 flex flex-col items-start justify-start py-[1.5rem] px-[1.25rem] box-border gap-[1rem] text-center text-[1rem] text-neutral-100 font-button-2-bold ${className}`}
    >
      <AddToPlaylistTitle />
     <div className="h-[52%] overflow-y-auto grid grid-cols-1">
      <CheckboxContainer2 saveCard="Interesting dances"/>
      <CheckboxContainer2 saveCard="Want to try"/>
     </div>
      <Button1Inactive
        label="save"
        className="bottom-[1em]"
      />
    </div>
  );
};

SaveToPlaylistPopup.propTypes = {
  className: PropTypes.string,
};

export default SaveToPlaylistPopup;

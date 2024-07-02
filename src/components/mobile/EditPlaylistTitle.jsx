import { useState } from "react";
import ProfileVideoMenuItem from "./ProfileVideoMenuItem";

/**
 * Edit playlist title
 * @param {*} setIsEdit Handler to set edit mode to false
 * @param {*} setTitle  Handler to update title on save
 * @param {*} setIsDeletePopupActive Handler to set popup active
 * @param {*} isDeletePopupActive Boolen to check if popup is active
 * @returns A JSX element
 */
const EditPlaylistTitle = (props) => {
  /********************************************************************* */
  /***************************{ Variables & States }******************** */
  /********************************************************************* */
  const { setIsEdit, setTitle, setIsDeletePopupActive, isDeletePopupActive } = props;
  const [isOptionsActive, setIsOptionsActive] = useState(false);

  /**************************************************************** */
  /***************************{ Methods }************************** */
  /**************************************************************** */
  /**
   * Toggle the playlist title options
   */
  const showPlaylistOptions = () => {
    setIsOptionsActive(!isOptionsActive);
  };

  /**
   * On back click
   */
  const handleSaveChanges = () => {
    setTitle();
    setIsEdit(false);
  };

  return (
    <div className={` edit-playlist-title `}>
      {isOptionsActive && (
        <div className="absolute top-[70%] right-5">
          <ProfileVideoMenuItem
            onClick={()=>(setIsDeletePopupActive(!isDeletePopupActive))}
            placeholder="Delete playlist"
            imageSrc="/hugeiconinterfaceoutlinetrash.svg"
          ></ProfileVideoMenuItem>
        </div>
      )}
      <img
        onClick={handleSaveChanges}
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-2.svg"
      />
      <div className="relative leading-[1.75rem] font-semibold">
        Edit playlist
      </div>
      <button
        onClick={showPlaylistOptions}
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
      >
        <img
          className="absolute h-[52.08%] w-[10.42%] top-[20.83%] right-[47.92%] bottom-[27.08%] left-[41.67%] max-w-full overflow-hidden max-h-full object-cover [transform:_rotate(180deg)]"
          alt=""
          src="/more--vertical@2x.png"
        />
      </button>
    </div>
  );
};

export default EditPlaylistTitle;

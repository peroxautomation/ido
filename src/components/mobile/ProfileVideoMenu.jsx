import ProfileMenuItem from "./ProfileMenuItem";
import PropTypes from "prop-types";

const ProfileVideoMenu = ({ className = "" }) => {
  const onDeleteClick = () => {
    const element = document.getElementById('ProfileDeleteDancePopup');
    element.classList.toggle('hidden');
  }

  return (
    <div
      className={`hidden absolute z-10 top-[20%] left-[17%] rounded-lg overflow-hidden flex flex-col items-start justify-start ${className}`}
    >
      <ProfileMenuItem
        menuItemGap="unset"
        menuItemAlignSelf="stretch"
        saveToPlaylist="Edit dance"
        hugeIconinterfaceoutlinet="/hugeiconeducationoutlinepencil1.svg"
      />
      <ProfileMenuItem
        onClick={onDeleteClick}
        saveToPlaylist="Delete dance"
        hugeIconinterfaceoutlinet="/hugeiconinterfaceoutlinetrash.svg"
      />
    </div>
  );
};

ProfileVideoMenu.propTypes = {
  className: PropTypes.string,
};

export default ProfileVideoMenu;

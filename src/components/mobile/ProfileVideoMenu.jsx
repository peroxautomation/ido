import ProfileMenuItem from "./ProfileMenuItem";

const ProfileVideoMenu = (props) => {
  const {} = props;
  const onDeleteClick = () => {
    const element = document.getElementById("ProfileDeleteDancePopup");
    element.classList.toggle("hidden");
  };

  return (
    <div
      className={`hidden absolute z-10 top-[20%] left-[15%] rounded-lg overflow-hidden flex flex-col items-start justify-start w-[80%]`}
    >
      <ProfileMenuItem
        menuItemGap="unset"
        menuItemAlignSelf="stretch"
        saveToPlaylist="Edit dance"
        imageSrc="/hugeiconeducationoutlinepencil1.svg"
      />
      <ProfileMenuItem
        onClick={onDeleteClick}
        saveToPlaylist="Delete dance"
        imageSrc="/hugeiconinterfaceoutlinetrash.svg"
      />
    </div>
  );
};

export default ProfileVideoMenu;

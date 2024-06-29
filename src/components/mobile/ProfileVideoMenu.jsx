import ProfileVideoMenuItem from "./ProfileVideoMenuItem";

/**
 * Options menu for profile video card 1
 * @param onClickOption1 On click option 1 function
 * @param onClickOption2 On click option 2 function
 * @returns
 */
const ProfileVideoMenu = (props) => {
  const { onClickOption1, onClickOption2 } = props;

  return (
    <div className={`profile-video-card-menu`}>
      <ProfileVideoMenuItem
        onClick={onClickOption1}
        placeholder="Edit dance"
        imageSrc="/hugeiconeducationoutlinepencil1.svg"
      />
      <ProfileVideoMenuItem
        onClick={onClickOption2}
        placeholder="Delete dance"
        imageSrc="/hugeiconinterfaceoutlinetrash.svg"
      />
    </div>
  );
};

export default ProfileVideoMenu;

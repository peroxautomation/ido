/**
 * Profile video menu item
 * @param placeholder Options prompt
 * @param imageSrc The image soruce of the option
 * @param onClick On click function for the option
 * @returns A JSX element
 */
const ProfileVideoMenuItem = (props) => {
  const { placeholder, imageSrc, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={`profile-video-menu-item`}
    >
      <div className="relative text-[0.875rem] leading-[1.25rem] text-neutral-100 text-center justify-self-start">
        {placeholder}
      </div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src={imageSrc}
      />
    </button>
  );
};

export default ProfileVideoMenuItem;

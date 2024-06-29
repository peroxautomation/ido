/**
 * Logout button for profile menu
 * @param {*} props
 * @returns
 */
const ProfileMenuButton = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className={"profile-menu-btn"}>
      <div className="relative text-[1rem] leading-[1.5rem] font-button-1-regular text-neutral-100 text-center">
        Log out
      </div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowsoutlineout.svg"
      />
    </button>
  );
};

export default ProfileMenuButton;

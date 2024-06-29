/**
 * Menu item for ProfileMenu Component
 * @param title Title of the 
 * @param onClick On click function
 * @returns 
 */
const ProfileMenuItem1 = (props) => {
  const { title, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`profile-menu-item`}
    >
      <div className="relative leading-[1.5rem]">{title}</div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-contain"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-10@2x.png"
      />
    </div>
  );
};

export default ProfileMenuItem1;

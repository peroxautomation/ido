/**
 * Profile menu item for sub profile screens such as setting and payment.
 * @param label The menu label
 * @param onClick On click function
 * @returns 
 */
const ProfileMenuItem2 = (props) => {
  const { label, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`profile-menu-item-2`}
    >
      <div className="self-stretch rounded-2xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem] w-[90vw]">
        <div className="flex-1 relative leading-[1.5rem]">{label}</div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowssoliddirectionright-011.svg"
        />
      </div>
    </div>
  );
};

export default ProfileMenuItem2;

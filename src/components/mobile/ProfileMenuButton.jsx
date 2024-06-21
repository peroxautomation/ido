const ProfileMenuButton = (props) => {
  const {} = props;
  return (
    <button
      className={`cursor-pointer [border:none] py-[0.5rem] px-[0rem] bg-[transparent] w-[17.5rem] flex flex-row items-center justify-between box-border `}
    >
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

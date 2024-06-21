const ProfileBtn = (props) => {
  const { onClick, cTA, className} = props;

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-neutral-800 relative top-[5.5rem] left-[1rem] rounded-xl w-[6.313rem] flex flex-row items-center justify-center box-border gap-[0.5rem] ${className}`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        {cTA}
      </div>
    </button>
  );
};

export default ProfileBtn;

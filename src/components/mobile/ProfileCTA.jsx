const ProfileCTA = (props) => {
  const { hugeIconeducationoutlinep, cTA } = props;
  return (
    <button
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-neutral-800 w-[6.313rem] rounded-xl flex flex-row items-center justify-center box-border gap-[0.5rem]`}
    >
      <img
        className="w-[1rem] relative h-[1rem]"
        alt=""
        src={hugeIconeducationoutlinep}
      />
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        {cTA}
      </div>
    </button>
  );
};

export default ProfileCTA;

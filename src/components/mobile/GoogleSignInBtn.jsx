/**
 * 
 * @returns
 */
const GoogleSignInBtn = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-white-8 relative w-full rounded-xl flex flex-row items-center justify-center box-border gap-[0.5rem]`}
    >
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src="/google.svg"
      />
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-h3-semibold text-neutral-100 text-center">
        Continue with Google
      </div>
    </button>
  );
};

export default GoogleSignInBtn;

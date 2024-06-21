const ProfileMenuItem = (props) => {
  const { saveToPlaylist, imageSrc, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer [border:none] p-[0.5rem] bg-neutral-800 h-[2.5rem] grid grid-flow-col items-center box-border gap-[0.5rem] w-full text-nowrap absolute top-[18%] left-[0.1rem] z-10 hidden rounded-xl`}
    >
      <div className="relative text-[0.875rem] leading-[1.25rem] font-button-1-regular text-neutral-100 text-center justify-self-start">
        {saveToPlaylist}
      </div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
        alt=""
        src={imageSrc}
      />
    </button>
  );
};

export default ProfileMenuItem;

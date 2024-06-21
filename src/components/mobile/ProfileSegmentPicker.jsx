const ProfileSegmentPicker = (props) => {
  const { current, onClick } = props;
  const boxClass = "bg-neutral-700 rounded-xl";
  const textClass = "!text-neutral-100";

  if (current == "MyDance") {
    return (
      <div
        className={`self-stretch rounded-xl bg-neutral-800 flex flex-row items-center justify-center`}
      >
        <button
          name="MyDance"
          onClick={onClick}
          className={`cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[7.063rem] text-neutral-100 rounded-xl flex flex-row items-center justify-center box-border ${boxClass}`}
        >
          <div
            className={`relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left ${textClass}`}
          >
            My dance
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.27609 6.35466C4.44859 6.13903 4.76324 6.10407 4.97887 6.27658L7.99986 8.69337L11.0208 6.27658C11.2365 6.10407 11.5511 6.13903 11.7236 6.35466C11.8961 6.57029 11.8612 6.88494 11.6455 7.05745L8.3122 9.72411C8.12959 9.8702 7.87012 9.8702 7.68751 9.72411L4.35417 7.05745C4.13854 6.88494 4.10358 6.57029 4.27609 6.35466Z"
              fill="#f5f5f5"
            />
          </svg>
        </button>
        <button
          name="Cover"
          onClick={onClick}
          className="cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[7.063rem] rounded-xl flex flex-row items-center justify-center box-border"
        >
          <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left">
            Cover
          </div>
        </button>
        <button
          name="Playlist"
          onClick={onClick}
          className="cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[6.938rem] rounded-xl flex flex-row items-center justify-center box-border"
        >
          <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left">
            Playlist
          </div>
        </button>
      </div>
    );
  } else if (current == "Cover") {
    return (
      <div
        className={`self-stretch rounded-xl bg-neutral-800 flex flex-row items-center justify-center`}
      >
        <button
          name="MyDance"
          onClick={onClick}
          className="cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[7.063rem] text-neutral-100 rounded-xl flex flex-row items-center justify-center box-border"
        >
          <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left">
            My dance
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.27609 6.35466C4.44859 6.13903 4.76324 6.10407 4.97887 6.27658L7.99986 8.69337L11.0208 6.27658C11.2365 6.10407 11.5511 6.13903 11.7236 6.35466C11.8961 6.57029 11.8612 6.88494 11.6455 7.05745L8.3122 9.72411C8.12959 9.8702 7.87012 9.8702 7.68751 9.72411L4.35417 7.05745C4.13854 6.88494 4.10358 6.57029 4.27609 6.35466Z"
              fill="#737373"
            />
          </svg>
        </button>
        <button
          name="Cover"
          onClick={onClick}
          className={`cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[7.063rem] rounded-xl flex flex-row items-center justify-center box-border ${boxClass}`}
        >
          <div
            className={`relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left ${textClass}`}
          >
            Cover
          </div>
        </button>
        <button
          name="Playlist"
          onClick={onClick}
          className="cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[6.938rem] rounded-xl flex flex-row items-center justify-center box-border"
        >
          <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left">
            Playlist
          </div>
        </button>
      </div>
    );
  } else if (current == "Playlist") {
    return (
      <div
        className={`self-stretch rounded-xl bg-neutral-800 flex flex-row items-center justify-center`}
      >
        <button
          name="MyDance"
          onClick={onClick}
          className="cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[7.063rem] text-neutral-100 rounded-xl flex flex-row items-center justify-center box-border"
        >
          <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left">
            My dance
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.27609 6.35466C4.44859 6.13903 4.76324 6.10407 4.97887 6.27658L7.99986 8.69337L11.0208 6.27658C11.2365 6.10407 11.5511 6.13903 11.7236 6.35466C11.8961 6.57029 11.8612 6.88494 11.6455 7.05745L8.3122 9.72411C8.12959 9.8702 7.87012 9.8702 7.68751 9.72411L4.35417 7.05745C4.13854 6.88494 4.10358 6.57029 4.27609 6.35466Z"
              fill="#737373"
            />
          </svg>
        </button>
        <button
          name="Cover"
          onClick={onClick}
          className="cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[7.063rem] rounded-xl flex flex-row items-center justify-center box-border"
        >
          <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left">
            Cover
          </div>
        </button>
        <button
          name="Playlist"
          onClick={onClick}
          className={`cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[6.938rem] rounded-xl flex flex-row items-center justify-center box-border ${boxClass}`}
        >
          <div
            className={`relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left ${textClass}`}
          >
            Playlist
          </div>
        </button>
      </div>
    );
  }
};

export default ProfileSegmentPicker;

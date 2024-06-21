import PlaylistDeleteBtn from "./PlaylistDeleteBtn";

const PlaylistTitle = (props) => {
  const {} = props;
  const showPlaylistDelete = (event) => {
    const element = event.currentTarget.parentElement.children[0];
    element.classList.toggle("hidden");
  };

  return (
    <div
      className={`absolute w-[calc(100%_-_40px)] top-[2.5rem] right-[1.25rem] left-[1.25rem] h-[2.75rem] flex flex-row items-center justify-between py-[0.5rem] px-[0rem] box-border text-center text-[1.25rem] text-neutral-100 font-button-1-regular `}
    >
      <PlaylistDeleteBtn />
      <img
        onClick={() => {
          history.back();
        }}
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-2.svg"
      />
      <div className="relative leading-[1.75rem] font-semibold">
        Edit playlist
      </div>
      <button
        onClick={showPlaylistDelete}
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 [transform:_rotate(-180deg)]"
      >
        <img
          className="absolute h-[52.08%] w-[10.42%] top-[20.83%] right-[47.92%] bottom-[27.08%] left-[41.67%] max-w-full overflow-hidden max-h-full object-cover [transform:_rotate(180deg)]"
          alt=""
          src="/more--vertical@2x.png"
        />
      </button>
    </div>
  );
};

export default PlaylistTitle;

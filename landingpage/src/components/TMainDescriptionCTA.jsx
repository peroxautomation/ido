const TMainDescriptionCTA = () => {
  return (
    <div
      className={`absolute top-[132px] left-[188px] overflow-hidden flex flex-col items-start justify-end gap-[16px] text-left text-5xl text-neutral-100 font-button-1-regular`}
    >
      <div className="flex flex-row items-center justify-start gap-[15px]">
        <div className="relative leading-[32px] font-semibold">
          Share your dance with
        </div>
        <div className="relative text-14xl leading-[52.76px] font-pacifico text-transparent !bg-clip-text [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Ido
        </div>
      </div>
      <div className="w-[335px] flex flex-row items-center justify-center text-base">
        <div className="flex-1 relative leading-[24px]">
          Discover a vibrant community of dancers and enthusiasts on Ido, your
          ultimate destination for dance inspiration and connection
        </div>
      </div>
      <img className="w-[138px] relative h-10 active:opacity-80" alt="" src="/app-store1.svg" />
      <img className="w-[138px] relative h-10 active:opacity-80" alt="" src="/google-play1.svg"/>
    </div>
  );
};

export default TMainDescriptionCTA;

import MBothIphones from "./MBothIphones";

const MHomepage = () => {
  return (
    <div
      className={`absolute top-[0px] left-[calc(50%_-_215px)] bg-neutral-900 w-[430px] h-[625px] overflow-hidden text-left text-5xl text-neutral-100 font-button-2-regular`}
    >
      <img
        className="absolute top-[24px] right-[33px] w-10 h-10 overflow-hidden object-cover active:opacity-70"
        alt=""
        src="/hugeiconmenusolidmenulinehorizontal@2x.png"
      />
      <img
        className="absolute top-[557px] left-[calc(50%_-_181px)] w-40 h-[46px] active:opacity-70"
        alt=""
        src="/app-store.svg"
      />
      <img
        className="absolute top-[557px] left-[222px] w-40 h-[46px] active:opacity-70"
        alt=""
        src="/google-play.svg"
      />
      <div className="absolute top-[80px] left-[calc(50%_-_155px)] flex flex-row items-center justify-start gap-[15px]">
        <div className="relative leading-[32px] font-semibold">
          Share your dance with
        </div>
        <div className="relative text-14xl leading-[52.76px] font-pacifico text-transparent !bg-clip-text [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Ido
        </div>
      </div>
      <div className="absolute top-[152px] left-[calc(50%_-_168px)] w-[335px] flex flex-row items-center justify-center text-center text-base text-neutral-200">
        <div className="flex-1 relative leading-[24px]">
          Discover a vibrant community of dancers and enthusiasts on Ido, your
          ultimate destination for dance inspiration and connection
        </div>
      </div>
      <MBothIphones />
      <div className="touch-btn-primary absolute top-[29px] right-[86px] w-[73px] h-8 flex flex-row items-center justify-center p-1.5 box-border">
        <div className="relative leading-[16px] ">Get started</div>
      </div>
      <div className="absolute top-[21px] left-[20px] shadow-[0px_2.5px_3.56px_rgba(0,_0,_0,_0.65)] w-[100px] h-[50px] flex flex-row items-center justify-start py-0 px-[4.9px] box-border gap-[6.7px] text-14xl font-pacifico">
        <img
          className="w-[35px] relative h-[33.1px] z-[0]"
          alt=""
          src="/vector-851.svg"
        />
        <div className="relative leading-[52.76px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
          Ido
        </div>
        <div className="w-[5.1px] absolute !m-[0] top-[12.9px] left-[12.3px] rounded-[50%] [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] h-[5.1px] z-[2]" />
      </div>
    </div>
  );
};

export default MHomepage;

import MFooterNav from "./MFooterNav";
import MFooterDownload from "./MFooterDownload";
const MFooter = () => {
  return (
    <div
      className={`absolute top-[4104px] left-[calc(50%_-_215px)] bg-neutral-900 w-[430px] h-[584px] overflow-hidden text-left text-base text-neutral-100 font-button-2-regular`}
    >
      <div className="absolute top-[104px] left-[calc(50%_-_168px)] w-[335px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[24px]">
          Stay connected with us! Explore our app on all your devices for
          seamless access and efficiency.
        </div>
      </div>
      <MFooterNav />
      <MFooterDownload />
      <div className="absolute top-[520px] left-[calc(50%_-_160px)] flex flex-row items-start justify-start text-center">
        <img className="w-6 relative h-6" alt="" src="/copyright.svg" />
        <div className="flex flex-row items-center justify-center">
          <div className="relative leading-[24px]">
            Copyright 2024 .IDO. All Right Reserved.
          </div>
        </div>
      </div>
      <div className="absolute top-[18px] left-[20px] shadow-[0px_4px_5.8px_rgba(0,_0,_0,_0.65)] flex flex-row items-center justify-start py-0 px-2 gap-[11px] text-34xl-8 font-pacifico">
        <img
          className="w-[57px] relative h-[53.9px] z-[0]"
          alt=""
          src="/vector-8511.svg"
        />
        <div className="relative leading-[86px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
          Ido
        </div>
        <div className="w-[8.4px] absolute !m-[0] top-[21px] left-[20px] rounded-[50%] [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] h-[8.4px] z-[2]" />
      </div>
    </div>
  );
};

export default MFooter;

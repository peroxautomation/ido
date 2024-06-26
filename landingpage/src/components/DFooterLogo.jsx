const DFooterLogo = () => {
  return (
    <div
      className={`absolute top-[55px] left-[95px] w-[335px] h-[158px] text-left text-base text-neutral-100 font-body-semibold`}
    >
      <div className="absolute top-[86px] left-[0px] w-[335px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[24px]">
          Stay connected with us! Explore our app on all your devices for
          seamless access and efficiency.
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_5.8px_rgba(0,_0,_0,_0.65)] flex flex-row items-center justify-start py-0 px-2 gap-[11px] text-34xl-8 font-pacifico">
        <img
          className="w-[57px] relative h-[53.9px] z-[0]"
          alt=""
          src="/vector-851.svg"
        />
        <div className="relative leading-[86px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
          Ido
        </div>
        <div className="w-[8.4px] absolute !m-[0] top-[21px] left-[20px] rounded-[50%] [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] h-[8.4px] z-[2]" />
      </div>
    </div>
  );
};

export default DFooterLogo;

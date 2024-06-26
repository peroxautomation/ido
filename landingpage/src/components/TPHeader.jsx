const TPHeader = () => {
  return (
    <div
      className={`absolute top-[0px] left-[calc(50%_-_512px)] [backdrop-filter:blur(24px)] bg-gray-100 w-[1024px] h-[92px] flex flex-col items-center justify-center p-6 box-border text-left text-14xl font-pacifico`}
    >
      <div className="w-[710px] flex flex-row items-center justify-start">
        <div className="h-11 flex flex-row items-center justify-center">
          <div className="w-[100px] shadow-[0px_2.5px_3.56px_rgba(0,_0,_0,_0.65)] h-[50px] flex flex-row items-center justify-start py-0 px-[4.9px] box-border relative gap-[6.7px]">
            <img
              className="w-[35px] relative h-[33.1px] z-[0]"
              alt=""
              src="/vector-8511.svg"
            />
            <div className="relative leading-[52.76px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
              Ido
            </div>
            <div className="w-[5.1px] absolute !m-[0] top-[12.9px] left-[12.3px] rounded-[50%] [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] h-[5.1px] z-[2]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TPHeader;

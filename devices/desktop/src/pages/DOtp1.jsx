import AllInfo from "../components/AllInfo";

const DOtp1 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <AllInfo />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[56px] left-[48px] w-[9.2px] h-[19.2px]">
        <img
          className="absolute top-[0px] left-[0px] w-[9.2px] h-[19.2px] object-contain"
          alt=""
          src="/vector-175-stroke.svg"
        />
      </button>
    </div>
  );
};

export default DOtp1;

import { useNavigate } from "react-router-dom";
const TPartners = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tablet-partner');
  };
  return (
    <div
      className={`absolute top-[2528px] left-[calc(50%_-_512px)] bg-neutral-100 w-[1024px] h-[266px] overflow-hidden text-left text-5xl text-neutral-900 font-button-1-regular`}
      data-scroll-to="TpartnersPage"
    >
      <div className="absolute top-[112px] left-[calc(50%_-_372px)] w-[744px] h-[46px] overflow-hidden flex flex-row items-center justify-start gap-[40px]">
        <img
          className="w-[106px] relative h-9 object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <img
          className="w-20 relative h-[46px] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
        <img
          className="w-[66px] relative h-9 object-cover"
          alt=""
          src="/image-4@2x.png"
        />
        <img
          className="w-[76px] relative h-[42px] object-cover"
          alt=""
          src="/image-5@2x.png"
        />
        <img
          className="w-16 relative h-[30px] object-contain"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className="w-[68px] relative h-5 object-cover"
          alt=""
          src="/image-7@2x.png"
        />
        <img
          className="w-[86px] relative h-5 object-cover"
          alt=""
          src="/image-8@2x.png"
        />
        <img
          className="w-[106px] relative h-9 object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <img
          className="w-20 relative h-[46px] object-cover"
          alt=""
          src="/image-3@2x.png"
        />
        <img
          className="w-[66px] relative h-9 object-cover"
          alt=""
          src="/image-4@2x.png"
        />
        <img
          className="w-[76px] relative h-[42px] object-cover"
          alt=""
          src="/image-5@2x.png"
        />
        <img
          className="w-16 relative h-[30px] object-contain"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className="w-[68px] relative h-5 object-cover"
          alt=""
          src="/image-7@2x.png"
        />
        <img
          className="w-[86px] relative h-5 object-cover"
          alt=""
          src="/image-8@2x.png"
        />
      </div>
      <div className="absolute top-[40px] left-[calc(50%_-_372px)] w-[744px] flex flex-row items-start justify-between py-4 px-0 box-border">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[32px] font-semibold">
          Our partners
        </div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
      </div>
      <button
        onClick={handleClick}
        className="touch-btn-secondary absolute top-[182px] left-[calc(50%_-_126px)]  w-[252px] flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px]"
      >
        <div className="relative leading-[24px] font-semibold">
          Join our partners family
        </div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconinterfacesolidplus1.svg"
        />
      </button>
    </div>
  );
};

export default TPartners;

import { useNavigate } from "react-router-dom";
const DPartners = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/desktop-partner');
  };
  return (
    <div
      className={`absolute top-[3182px] left-[calc(50%_-_720px)] bg-neutral-100 w-[1440px] h-[350px] overflow-hidden text-left text-13xl text-neutral-900 font-body-semibold`}
      data-scroll-to="DpartnersPage"
    >
      <div className="absolute top-[40px] left-[calc(50%_-_640px)] w-[1280px] flex flex-row items-start justify-between py-4 px-0 box-border">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[40px] font-semibold">
          Our partners
        </div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
      </div>
      <img
        className="absolute top-[143.2px] left-[0px] w-[1440.3px] h-[82.8px] overflow-hidden object-contain"
        alt=""
        src="/desktop@2x.png"
      />
      <button
        onClick={handleClick}
        className="desktop-btn-primary absolute top-[266px] left-[calc(50%_-_126px)] rounded-xs  w-[252px] flex flex-row items-center justify-center py-2.5 px-2  gap-[8px]"
      >
        <div className="relative leading-[24px] font-semibold">
          Join our partners family
        </div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconinterfacesolidplus.svg"
        />
      </button>
    </div>
  );
};

export default DPartners;

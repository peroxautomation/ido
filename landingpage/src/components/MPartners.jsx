import { useNavigate } from "react-router-dom";
const MPartners = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/mobile-partner');
  };
  return (
    <div
      className={`absolute top-[2686px] left-[calc(50%_-_215px)] bg-neutral-100 w-[430px] h-[186px] overflow-hidden text-left text-5xl text-neutral-900 font-button-2-regular`}
      data-scroll-to="MpartnersPage"
    >
      <div className="absolute top-[0px] left-[calc(50%_-_126px)] flex flex-row items-start justify-start py-4 px-0 gap-[16px]">
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
      <div className="absolute top-[72px] left-[calc(50%_-_188px)] w-[375px] h-[46px] overflow-hidden flex flex-row items-center justify-start gap-[16px]">
        <img
          className="w-16 relative h-[22px] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <img
          className="w-[50px] relative h-7 object-cover"
          alt=""
          src="/image-3@2x.png"
        />
        <img
          className="w-10 relative h-[22px] object-cover"
          alt=""
          src="/image-4@2x.png"
        />
        <img
          className="w-[46px] relative h-[26px] object-cover"
          alt=""
          src="/image-5@2x.png"
        />
        <img
          className="w-10 relative h-[18px] object-contain"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className="w-10 relative h-3 object-cover"
          alt=""
          src="/image-7@2x.png"
        />
        <img
          className="w-[52px] relative h-3 object-cover"
          alt=""
          src="/image-8@2x.png"
        />
        <img
          className="w-12 relative h-4 object-cover"
          alt=""
          src="/image-15@2x.png"
        />
        <img
          className="w-[50px] relative h-7 object-cover"
          alt=""
          src="/image-3@2x.png"
        />
        <img
          className="w-10 relative h-[22px] object-cover"
          alt=""
          src="/image-4@2x.png"
        />
        <img
          className="w-[46px] relative h-[26px] object-cover"
          alt=""
          src="/image-5@2x.png"
        />
        <img
          className="w-10 relative h-[18px] object-contain"
          alt=""
          src="/image-6@2x.png"
        />
        <img
          className="w-10 relative h-3 object-cover"
          alt=""
          src="/image-7@2x.png"
        />
        <img
          className="w-[52px] relative h-3 object-cover"
          alt=""
          src="/image-8@2x.png"
        />
        <img
          className="w-12 relative h-4 object-cover"
          alt=""
          src="/image-15@2x.png"
        />
      </div>
      <button
        onClick={handleClick}
        className="absolute top-[134px] left-[calc(50%_-_80px)] w-40 flex flex-row items-center justify-center py-2.5 px-2 box-border touch-btn-secondary-textxs"
      >
        <div className="relative leading-[16px]">Join our partners family</div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src="/hugeiconeducationsolidpencil1@2x.png"
        />
      </button>
    </div>
  );
};

export default MPartners;

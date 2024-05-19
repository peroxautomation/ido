import Card from "./Card";

const RecentlyAddedSection = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start text-center text-5xl text-neutral-100 font-body-regular">
      <div className="self-stretch h-14 flex flex-row items-center justify-between pt-0 px-0 pb-4 box-border">
        <div className="relative leading-[32px] font-semibold">
          Recently added
        </div>
        <a className="[text-decoration:none] rounded-2xl flex flex-row items-center justify-center py-2 px-0 gap-[8px] text-base text-primary-500">
          <div className="relative leading-[24px] font-semibold">View all</div>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 object-contain"
            alt=""
            src="/hugeiconarrowsoutlinedirectionright@2x.png"
          />
        </a>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[24px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default RecentlyAddedSection;

import MReviewFrame from "./MReviewFrame";

const MReviews = () => {
  return (
    <div
      className={`absolute top-[2406px] left-[calc(50%_-_215px)] bg-neutral-100 w-[430px] h-[280px] overflow-hidden text-center text-xl text-neutral-900 font-button-2-regular`}
    >
      <div className="absolute top-[40px] left-[calc(50%_-_168px)] w-[335px] h-11 flex flex-row items-center justify-between py-2 px-0 box-border">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <b className="relative leading-[28px]">
          What people are saying about us
        </b>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-contain opacity-[0]"
          alt=""
          src="/hugeiconarrowssoliddirectionleft-3@2x.png"
        />
      </div>
      <MReviewFrame />
    </div>
  );
};

export default MReviews;

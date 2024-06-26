import TReviewSlider from "./TReviewSlider";
const TReviews = () => {
  return (
    <div
      className={`absolute top-[2032px] left-[calc(50%_-_512px)] bg-neutral-100 w-[1024px] h-[593px] overflow-hidden text-left text-base text-neutral-600 font-button-1-regular`}
    >
      <TReviewSlider />
      <div className="absolute top-[112px] left-[calc(50%_-_372px)] w-[744px] h-12 flex flex-row items-center justify-center text-center">
        <div className="w-[335px] relative leading-[24px] hidden">
          <p className="m-0">{`Discover why dancers around the world love our app! `}</p>
          <p className="m-0">
            Hear what our users have to say about their transformative dance
            experiences
          </p>
        </div>
      </div>
      <div className="absolute top-[40px] left-[calc(50%_-_372px)] w-[744px] flex flex-row items-start justify-between py-4 px-0 box-border text-5xl text-neutral-900">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[32px] font-semibold">
          What people are saying about us
        </div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
      </div>
    </div>
  );
};

export default TReviews;

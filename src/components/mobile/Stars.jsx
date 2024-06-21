/**
 * Start icon component for ratings filter
 * @param {*} props
 * @returns
 */
const Stars = (props) => {
  const { star1, star2, star3, star4, star5, valueHandler, value } = props;
  return (
    <div
      onClick={() => valueHandler(value)}
      className={`bg-neutral-700 flex flex-row items-start justify-start py-[0.625rem] px-[1.25rem]`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={star1}
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={star2}
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={star3}
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={star4}
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={star5}
      />
    </div>
  );
};

export default Stars;

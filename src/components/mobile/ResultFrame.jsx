import { useNavigate } from "react-router-dom";

const ResultFrame = (props) => {
  const {} = props;
  const navigate = useNavigate();
  // Navigate to Frame comparison
  const onClick = () => {
    navigate("/moves/comparison-results/frames");
  };

  return (
    <div
      onClick={onClick}
      className={`relative w-[4.063rem] h-[5.063rem] overflow-hidden shrink-0 text-center text-[0.875rem] text-neutral-100 font-button-1-regular `}
    >
      <img
        className="w-[4.063rem] h-[5.063rem] overflow-hidden object-cover"
        src="/result-img@3x.png"
      ></img>
      <div className="absolute top-[calc(50%_-_9.5px)] left-[calc(50%_-_15.5px)] leading-[1.25rem]">
        64%
      </div>
    </div>
  );
};

export default ResultFrame;

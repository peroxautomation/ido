import { useNavigate } from "react-router-dom";

/**
 * Comparison result video frame
 * @param {*} rate similarity rate 
 * @returns 
 */
const ResultFrame = (props) => {
  const { rate } = props;
  const navigate = useNavigate();
  // Navigate to Frame comparison
  const onClick = () => {
    navigate("/moves/comparison-results/frames");
  };

  return (
    <div
      onClick={onClick}
      className={`comparison-result-frame`}
    >
      <img
        className="w-[4.063rem] h-[5.063rem] overflow-hidden object-cover"
        src="/result-img@3x.png"
      ></img>
      <div className="absolute top-[calc(50%_-_9.5px)] left-[calc(50%_-_15.5px)] leading-[1.25rem]">
       {rate}
      </div>
    </div>
  );
};

export default ResultFrame;

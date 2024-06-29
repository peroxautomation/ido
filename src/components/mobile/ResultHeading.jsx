import { useNavigate } from "react-router-dom";

/**
 * Moves comparison result heading component
 * @param {*} props
 * @returns
 */
const ResultHeading = (props) => {
  const {} = props;
  const navigate = useNavigate();
  return (
    <div className={`comparison-result-title`}>
      <img
        onClick={() => navigate(-1)}
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-2.svg"
      />
      <div className="relative leading-[1.75rem] font-semibold">Сomparison</div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-contain [transform:_rotate(90deg)] opacity-[0]"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-31@2x.png"
      />
    </div>
  );
};

export default ResultHeading;

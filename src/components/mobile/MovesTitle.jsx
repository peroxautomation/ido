import { useNavigate } from "react-router-dom";
import MovesBtn from "./MovesBtn";

/**
 * Moves title section
 * @param {*} isCreator Boolean to check if on creators view
 * @param creatorName Dance creator name
 * @param onRelateClick On relate click function
 * @param isRelating Boolean to check if the user is already relating to creator
 * @returns
 */
const MovesTitle = (props) => {
  const { isCreator = false, creatorName, onRelateClick, isRelating } = props;
  const navigate = useNavigate();
  return (
    <div
      className={`moves-header-title`}
    >
      <img
        onClick={() => navigate(-1)}
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 cursor-pointer"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-2.svg"
      />
      <div className="flex flex-row items-center justify-end gap-[0.312rem]">
        <div className="w-[1.5rem] relative h-[2.25rem]">
          <img
            className="relative w-[1.375rem] h-[0.875rem] top-6"
            alt=""
            src="/subtract1.svg"
          />
          <img
            className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] rounded-12xs-3 max-w-full overflow-hidden max-h-full"
            alt=""
            src="/star-5.svg"
          />
          <div className="absolute top-[11.11%] left-[20.83%] leading-[1rem] font-semibold">
            17
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-left text-[1rem]">
          <div className="relative leading-[1.5rem] font-semibold">
            {creatorName}
          </div>
        </div>
        {!isCreator && (
          <MovesBtn handleRelate={onRelateClick} isRelating={isRelating} />
        )}
      </div>
    </div>
  );
};

export default MovesTitle;

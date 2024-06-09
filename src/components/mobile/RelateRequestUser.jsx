import RelateConfirmBtn from "./RelateConfirmBtn";
import RelateDeleteBtn from "./RelateDeleteBtn";
import PropTypes from "prop-types";

const RelateRequestUser = ({ className = "", rectangle2002 }) => {
  return (
    <div
      className={`w-[23.438rem] flex flex-row items-center justify-start py-[0.75rem] px-[1.25rem] box-border gap-[1.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem]">
        <img
          className="w-[3rem] relative rounded-3xl h-[3rem] object-cover"
          alt=""
          src={rectangle2002}
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[1.5rem] font-semibold">
            User name
          </div>
          <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] text-neutral-400">
            Desc
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0.5rem]">
        <RelateConfirmBtn />
        <RelateDeleteBtn />
      </div>
    </div>
  );
};

RelateRequestUser.propTypes = {
  className: PropTypes.string,
  rectangle2002: PropTypes.string,
};

export default RelateRequestUser;

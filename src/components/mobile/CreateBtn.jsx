import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CreateBtn = ({ className = "" }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/create')
  }

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer [border:none] p-[0.5rem] bg-primary-500 absolute top-[-2rem] left-[calc(90vw_-_45vw)] rounded-[10em] flex flex-row items-start justify-start ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlineplus.svg"
      />
    </button>
  );
};

CreateBtn.propTypes = {
  className: PropTypes.string,
};

export default CreateBtn;

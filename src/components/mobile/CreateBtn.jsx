import { useNavigate } from "react-router-dom";

/**
 * Buttom navbar create button component
 * @param {*} props
 * @returns A JSX element
 */
const CreateBtn = (props) => {
  const {} = props;
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/create");
  };

  return (
    <button onClick={onClick} className={`buttom-navbar-create-icon `}>
      <img
        className="buttom-navbar-create-icon-image"
        alt=""
        src="/createIcon.svg"
      />
    </button>
  );
};

export default CreateBtn;

import { useNavigate } from "react-router-dom";

// TODO: Check if this is the same as Exit component.
const Exit1 = (props) => {
  const { ctaClick } = props;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>
      <img
        className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 `}
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
      />
    </div>
  );
};

export default Exit1;

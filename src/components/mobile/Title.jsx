import { useNavigate } from "react-router-dom";

/**
 * Title component
 * @param {*} pageName Page heading
 * @returns A JSX element
 */
const Title = (props) => {
  /**************************************************************************************** */
  /********************************{Component Variables}********************************** */
  /*************************************************************************************** */
  const navigate = useNavigate();
  const { pageName } = props;

  /**************************************************************************************** */
  /********************************{Component Functions}********************************** */
  /*************************************************************************************** */
  /**
   * Return to appropriate page
   */
  const onReturnClick = () => {
    navigate(-1);
  };
  return (
    <header className={`title-primary`}>
      <div className={`title-primary-return`} onClick={onReturnClick}>
        <img
          className="title-primary-return-image"
          alt=""
          src="/direaction-left.svg"
        />
      </div>
      <div className="title-primary-heading">{pageName}</div>
    </header>
  );
};

export default Title;

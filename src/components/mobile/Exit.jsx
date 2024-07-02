
/**
 * Exit button component
 * @param className Additional styles to include.
 * @param onClick On click function 
 * @returns A JSX element
 */
const Exit = (props) => {
  const { className = "", onClick } = props;

  return (
    <button
      className={`exit-btn ${className}`}
      onClick={onClick}
    >
      <img
        className="exit-btn-image"
        alt=""
        src="/exitIcon.svg"
      />
    </button>
  );
};

export default Exit;

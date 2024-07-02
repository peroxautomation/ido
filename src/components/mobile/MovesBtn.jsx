/**
 * Moves title heading
 * @param className Additional tailwind customizations to added
 * @param handleRelate On relate click function
 * @param isRelating Boolean to check if the user is already relating to creator
 * @returns
 */
const MovesBtn = (props) => {
  const { className, handleRelate, isRelating } = props;
  return (
    <div
      onClick={() => handleRelate(!isRelating)}
      className={`btn-secondary ${className}`}
    >
      <div className="relative leading-[1rem]">
        {!isRelating ? "Relate" : "Relating"}
      </div>
    </div>
  );
};

export default MovesBtn;

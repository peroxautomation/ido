const MovesBtn = (props) => {
  const { placeholder, onClick, className } = props;
  return (
    <div
      onClick={onClick}
      className={`btn-secondary ${className}`}
    >
      <div className="relative leading-[1rem]">{placeholder}</div>
    </div>
  );
};

export default MovesBtn;

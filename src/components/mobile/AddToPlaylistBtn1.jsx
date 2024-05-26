import PropTypes from "prop-types";

const AddToPlaylistBtn1 = ({ className = "" }) => {
  const onClickCTA = () => {
    console.log("Open playlist popup")
  }
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0.5rem] right-[0.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden ${className}`}
      onClick={onClickCTA}
    >
      <img
        className="absolute h-[10.42%] w-[52.08%] top-[41.67%] right-[20.83%] bottom-[47.92%] left-[27.08%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/morehorizontal@2x.png"
      />
    </button>
  );
};

AddToPlaylistBtn1.propTypes = {
  className: PropTypes.string,
};

export default AddToPlaylistBtn1;

/**
 * Comparison result segment picker
 * @param {*} props 
 * @returns 
 */
const ResultSegmentedPicker = (props) => {
  const { currentSegment, setCurrent } = props;

  const selectedButton =
    "w-[6.938rem] rounded-xl bg-neutral-700 flex flex-row items-center justify-center py-[0.75rem] px-[0.25rem] box-border gap-[0.5rem]";
  const selectedText = "relative leading-[1rem] font-semibold text-white text-[0.75rem]";

  const normalButton =
    "cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[7.063rem] rounded-xl flex flex-row items-center justify-center box-border";
  const normalText =
    "relative text-[0.75rem] leading-[1rem]  text-neutral-500 text-left";

  return (
    <div
      className={`comparison-result-segment-picker`}
    >
      <button onClick={() => setCurrent("all")}  className={currentSegment == 'all' ? selectedButton : normalButton}>
        <div   className={currentSegment == 'all' ? selectedText : normalText}>All</div>
      </button>
      <button 
        onClick={() => setCurrent("similar")} 
        className={currentSegment == 'similar' ? selectedButton : normalButton}
      >
        <div className={currentSegment == 'similar' ? selectedText : normalText}>Similar</div>
      </button>
      <button
        onClick={() => setCurrent("dissimilar")}
        className={currentSegment == 'dissimilar' ? selectedButton : normalButton}
      >
        <div className={currentSegment == 'dissimilar' ? selectedText : normalText}>
          Dissimilar
        </div>
      </button>
    </div>
  );
};

export default ResultSegmentedPicker;

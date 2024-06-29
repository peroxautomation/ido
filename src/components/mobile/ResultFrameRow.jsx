import ResultFrame from "./ResultFrame";

/**
 * Comparison result frame row
 * @param {*} props
 * @returns
 */
const ResultFrameRow = (props) => {
  const {} = props;
  return (
    <div
      className={`comparison-result-frame-row`}
    >
      <ResultFrame rate={"64%"} />
      <ResultFrame rate={"64%"} />
      <ResultFrame rate={"64%"} />
      <ResultFrame rate={"64%"} />
      <ResultFrame rate={"64%"} />
    </div>
  );
};
export default ResultFrameRow;

import ResultFrame from "./ResultFrame";

const ResultFrameRow = (props) => {
  const {} = props;
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[0.125rem] text-center text-[0.875rem] text-neutral-100 font-button-1-regular w-full `}
    >
      <ResultFrame />
      <ResultFrame />
      <ResultFrame />
      <ResultFrame />
      <ResultFrame />
    </div>
  );
};
export default ResultFrameRow;

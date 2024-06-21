import ProcessBar from "./ProcessBar";

const UploadBar = (props) => {
  const {} = props;
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start gap-[0.562rem] text-center text-[0.75rem] text-neutral-100 font-button-1-regular `}
    >
      <ProcessBar />
      <div className="relative leading-[1rem]">43%</div>
    </div>
  );
};

export default UploadBar;

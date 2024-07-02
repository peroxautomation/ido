/**
 * Progress bar for uploading
 * @returns 
 */
const ProcessBar = (props) => {
  const { progress } = props;
  return (
    <div className="progress-bar-outter-container">
      <div
        className="progress-bar-inside-container"
        style={{ width: `${progress}%`, transition: "width 0.4s ease-out" }}
      />
    </div>
  );
};

export default ProcessBar;

import { useNavigate } from "react-router-dom";
import SegmentedButton2 from "./SegmentedButton2";
import PropTypes from "prop-types";
import { useCallback } from "react";

const CreatePicker = ({ className = "", current }) => {
  const navigate = useNavigate();
  const notSelected = "bg-transparent flex-1 text-[#6c6c6c]";

  // Navigate to challenge
  const onChallengeClick = useCallback(() => {
    navigate("/create");
  }, [navigate]);

  // Navigate to cover
  const onCoverClick = useCallback(() => {
    navigate("/create/cover/cover-question", { state: { flow: "cover" } });
  }, [navigate]);

  return current === "new-challenge" ? (
    <div
      className={`absolute w-[calc(100%_-_40px)] top-[2.5rem] right-[1.25rem] left-[1.25rem] rounded-xl bg-neutral-800 flex flex-row items-center justify-center text-left text-[0.75rem] text-neutral-100 font-overline-semibold ${className}`}
    >
      <SegmentedButton2 onClick={onChallengeClick} placeholder="Challenge" />
      <SegmentedButton2
        onClick={onCoverClick}
        placeholder="Cover"
        className={notSelected}
      />
    </div>
  ) : (
    <div
      className={`absolute w-[calc(100%_-_40px)] top-[2.5rem] right-[1.25rem] left-[1.25rem] rounded-xl bg-neutral-800 flex flex-row items-center justify-center text-left text-[0.75rem] text-neutral-100 font-overline-semibold ${className}`}
    >
      <SegmentedButton2
        onClick={onChallengeClick}
        placeholder="Challenge"
        className={notSelected}
      />
      <SegmentedButton2 onClick={onCoverClick} placeholder="Cover" />
    </div>
  );
};

CreatePicker.propTypes = {
  className: PropTypes.string,
  showDiv: PropTypes.bool,
};

export default CreatePicker;

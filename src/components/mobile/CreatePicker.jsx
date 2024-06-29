import { useNavigate } from "react-router-dom";
import SegmentedButton2 from "./SegmentedButton2";
import { useCallback } from "react";

/**
 * Create challenge/cover picker component
 * @param current The selected flow
 * @returns A JSX element
 */
const CreatePicker = (props) => {
  const { current } = props;
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
      className={`create-picker`}
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
      className={`create-picker `}
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

export default CreatePicker;

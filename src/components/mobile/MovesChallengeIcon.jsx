import PropTypes from "prop-types";

const MovesChallengeIcon = ({ className = "" }) => {
  return (
    <img
      className={`w-[1.5rem] relative h-[1.5rem] hidden ${className}`}
      alt=""
      src="/content-container-conponents2.svg"
    />
  );
};

MovesChallengeIcon.propTypes = {
  className: PropTypes.string,
};

export default MovesChallengeIcon;

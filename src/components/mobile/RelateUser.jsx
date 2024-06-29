import { useState } from "react";

/**
 * Relating user component
 * @param profileImage The profile image of the user
 * @param username The username of the user
 * @param description The user's profile description
 * @param id  The user id
 * @param onUnrelateClick Function to handle unrelate and relate
 * @returns
 */
const RelateUser = (props) => {
  /**************************************************************************** */
  /***************************{ Variables & States}*************************** */
  /*************************************************************************** */
  const { profileImage, username, description, id, onUnrelateClick } = props;
  const [isRelating, setIsRelating] = useState(true);

  /****************************************************************** */
  /***************************{ Methods }*************************** */
  /***************************************************************** */
  const handleUnrelate = () => {
    const action = !isRelating;
    onUnrelateClick(action, id);
    setIsRelating(action);
  };

  return (
    <div className={`relate-user `}>
      <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem]">
        <img
          className="w-[3rem] relative rounded-3xl h-[3rem] object-cover"
          alt=""
          src={profileImage}
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[1.5rem] font-semibold">
            {username}
          </div>
          <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] text-neutral-400">
            {description}
          </div>
        </div>
      </div>
      <button onClick={handleUnrelate} className="relate-user-btn">
        <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-100 text-right">
          {isRelating ? "Unrelate" : "Relate"}
        </div>
      </button>
    </div>
  );
};

export default RelateUser;

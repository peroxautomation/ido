/**
 * A comment box information
 * @param imageSrc The user profile image source
 * @param username The username
 * @param date the date of the comment
 * @param comment  the comment message
 * @returns A JSX elemnent
 */
const UserComment = (props) => {
  const { imageSrc, username, date, comment } = props;
  return (
    <div
      className={``}
    >
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem]">
          <img
            className="comment-box-user-comment-image"
            alt=""
            src={imageSrc}
          />
          <div className="flex-1 relative leading-[1.5rem] font-semibold w-[13rem] ">
            {username}
          </div>
        </div>
        <div className="comment-box-user-comment-date">
          {date}
        </div>
      </div>
      <div className="comment-box-user-comment-message">
        {comment}
      </div>
    </div>
  );
};

export default UserComment;

/**
 * Relate user question container
 * @param imageSrc The user profile image source
 * @param username The username
 * @param description The user profile description
 * @param id The user id
 * @param onConfirm On confirm request function
 * @param onDelete On delete request function
 * @returns A JSX element
 */
const RelateRequestUser = (props) => {
  const { imageSrc, username, description, id, onConfirm, onDelete } = props;
  return (
    <div
      className={`w-[23.438rem] flex flex-row items-center justify-start py-[0.75rem] px-[1.25rem] box-border gap-[1.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular `}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[0.5rem]">
        <img
          className="w-[3rem] relative rounded-3xl h-[3rem] object-cover"
          alt=""
          src={imageSrc}
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
      <div className="flex flex-row items-center justify-start gap-[0.5rem]">
        <button
          onClick={() => onConfirm(id)}
          className={`cursor-pointer [border:none] py-[0.25rem] px-[0.375rem] bg-primary-500 w-[4rem] rounded-md flex flex-row items-center justify-center box-border `}
        >
          <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-100 text-right">
            Confirm
          </div>
        </button>
        <button
          onClick={() => onDelete(id)}
          className={`cursor-pointer [border:none] py-[0.25rem] px-[0.375rem] bg-neutral-800 w-[4rem] rounded-md flex flex-row items-center justify-center box-border `}
        >
          <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-100 text-right">
            Delete
          </div>
        </button>
      </div>
    </div>
  );
};

export default RelateRequestUser;

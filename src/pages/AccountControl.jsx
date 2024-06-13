import { useNavigate } from "react-router-dom";
import Title from "../components/mobile/Title";

/**
 * Delete Account page
 * @returns A JSX element
 */
const AccountControl = () => {
  const navigate = useNavigate();

  /**
   *
   */
  const onDeleteClick = () => {
    navigate('/profile/settings/account-control/leaving-questions')
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <Title pageName="Account control" />
      <button
        onClick={onDeleteClick}
        className={`absolute top-[7.5rem] right-[1.25] left-[1.25rem] px-[0.5rem] py-[0.625rem] w-[calc(100%_-_40px)] cursor-pointer [border:none] p-[0.5rem] bg-neutral-800 rounded-[12px] flex flex-row items-center justify-center box-border`}
      >
        <div className="relative text-[1rem] font-button-1-regulartext-center text-danger-500 font-medium leading-[1.5rem]">
          Delete Account
        </div>
      </button>
    </div>
  );
};

export default AccountControl;

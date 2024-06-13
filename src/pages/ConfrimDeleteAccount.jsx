import Button2 from "../components/mobile/Button2";
import Title from "../components/mobile/Title";
import DeletePopup from "../components/mobile/DeletePopup";

/**
 * Confirm Delete account screen
 * @returns A JSX element
 */
const ConfrimDeleteAccount = () => {
  const onDeletClick = (event) => {
    const deletePopup = event.currentTarget.nextElementSibling;
    deletePopup.classList.toggle("hidden");
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden text-left text-[1rem] text-neutral-300 font-h3-semibold grid grid-flow-row justify-items-center">
      <Title pageName="Confrim Delete Account" />
      <div className="relative top-[6.75rem] grid grid-flow-row items-center justify-center text-[1.25rem] text-neutral-200 w-[90%] h-[8rem]">
        <div className="">Delete account</div>
        <div className="">
          Tapping "Delete account" will delete Ido account username.
        </div>
      </div>
      <Button2
        onClick={onDeletClick}
        cTABottom="calc(100vh - 19rem)"
        cTA="Delete account"
      />
      <DeletePopup
        message={"Are you sure want to delete account?"}
        current={"DeleteAccount"}
      ></DeletePopup>
    </div>
  );
};

export default ConfrimDeleteAccount;

import LOGO from "./LOGO";
import SearchBar from "./SearchBar";
import CreateChallengeBtn from "./CreateChallengeBtn";
import LoginButton from "./LoginButton";

const GuestHeader = () => {
  return (
    <header className="absolute w-full top-[0px] right-[0px] left-[0px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] bg-neutral-800 flex flex-row items-center justify-between py-8 px-12 box-border text-center text-13xl text-neutral-100 font-body-regular">
      <LOGO />
      <div className="flex flex-row items-center justify-start gap-[24px]">
        <SearchBar />
        <CreateChallengeBtn />
        <LoginButton />
      </div>
    </header>
  );
};

export default GuestHeader;

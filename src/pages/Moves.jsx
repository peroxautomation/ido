import Moves1 from "../components/mobile/Moves1";
import ButtomNavbar from "../components/mobile/ButtomNavbar";
import TopNavbar from "../components/mobile/TopNavbar";

/**
 * Moves screen
 * @returns A JSX element
 */
const Moves = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <div className="absolute top-[7.25rem] left-[0rem] h-[calc(100vh_-_10rem)] w-screen overflow-y-auto flex flex-col items-start justify-start gap-[1.5rem]">
        <Moves1 unrelate="Relate" cTA={false} showCTA={false} />
        <Moves1 unrelate="Follow"  cTA={false} showCTA={false} />
        <Moves1 unrelate="Relate" cTA={false} showCTA={false} />
        <Moves1 unrelate="Follow"  cTA={false} showCTA={false}A />
      </div>
      <ButtomNavbar
        currentPage="Moves"
      />
      <TopNavbar sidebarDesktopHeaderTop="2.5rem" />
    </div>
  );
};

export default Moves;
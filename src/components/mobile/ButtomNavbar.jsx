import NavIcon from "./NavIcon";
import CreateBtn from "./CreateBtn";

/**
 * Buttom Navbar Component
 * @param currentPage The screen we are currently on.
 * @returns JSX element
 */
const ButtomNavbar = (props) => {
  const { currentPage } = props;
  return (
    <nav
      className={`buttom-navbar`}
    >
      <img className="absolute h-[3.5rem]" alt="" src="/union2.svg" />
      <NavIcon
        isSelected={currentPage == "Home" ? true : false}
        selectedSrc="/homeselected.svg"
        notSelectedSrc="/homenotselected.svg"
        linkTo="/home" 
      />
      <NavIcon
        isSelected={currentPage == "Search" ? true : false}
        selectedSrc="/navbarSearchIconFilled.svg"
        notSelectedSrc="/navbarSearchIconOutline.svg"
        linkTo="/search"
      />
      <NavIcon
        isSelected={currentPage == "Moves" ? true : false}
        selectedSrc="/navMovesIconFilled.png"
        notSelectedSrc="/navMovesIcon.svg"
        linkTo="/moves"
      />
      <NavIcon
        isSelected={currentPage == "Profile" ? true : false}
        selectedSrc="/NavProfileIconSolid.png"
        notSelectedSrc="/NavProfileIcon.svg"
        linkTo="/profile"
      />
      <CreateBtn />
    </nav>
  );
};

export default ButtomNavbar;

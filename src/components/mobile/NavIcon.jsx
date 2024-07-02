/**
 * Buttom navbar icon component
 * @param isSelected Boolen flag. Are we on the selected page?
 * @param selectedSrc Selected image for the icon
 * @param notSelectedSrc unselected image src for the icon
 * @param linkTo page to link to
 * @returns A JSX element
 */
const NavIcon = (props) => {
  const { isSelected, selectedSrc, notSelectedSrc, linkTo} = props;
  return (
    <a className={`buttom-navbar-icon`} href={isSelected ? "" : `${linkTo}`}>
      <img
        className="buttom-navbar-icon-image"
        alt=""
        src={
          isSelected
            ? selectedSrc
            : notSelectedSrc
        }
      />
    </a>
  );
};

export default NavIcon;


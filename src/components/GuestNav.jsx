import NavBtn from "./NavBtn";
import UpgradeBtn from "./UpgradeBtn";

const GuestNav = () => {
  return (
    <nav className="m-0 absolute h-[calc(100%_-_108px)] top-[108px] bottom-[0px] left-[0px] bg-neutral-800 flex flex-col items-center justify-start p-12 box-border gap-[8px] text-left text-base text-neutral-800 font-body-regular">
      <NavBtn
        hugeIconinterfacesolidhom="/hugeiconinterfacesolidhome-04.svg"
        home="Home"
        showHugeIconinterfacesolidhom
        pro={false}
      />
      <NavBtn
        menuDesktopBorderRadius="unset"
        menuDesktopBackgroundColor="unset"
        hugeIconinterfacesolidhom="/hugeiconinterfacesolidsearch-02.svg"
        home="Search"
        homeColor="#fff"
        showHugeIconinterfacesolidhom
        pro={false}
      />
      <NavBtn
        menuDesktopBorderRadius="unset"
        menuDesktopBackgroundColor="unset"
        hugeIconinterfacesolidhom="/hugeiconinterfaceoutlinehome-04.svg"
        home="Moves"
        homeColor="#fff"
        showHugeIconinterfacesolidhom
        pro={false}
      />
      <NavBtn
        menuDesktopBorderRadius="12px"
        menuDesktopBackgroundColor="rgba(255, 255, 255, 0.08)"
        hugeIconinterfacesolidhom="/hugeiconcommunicationoutlinecall.svg"
        home="Contact us"
        homeColor="#fff"
        showHugeIconinterfacesolidhom
        pro={false}
      />
      <NavBtn
        menuDesktopBorderRadius="unset"
        menuDesktopBackgroundColor="unset"
        hugeIconinterfacesolidhom="/hugeiconinterfaceoutlineinformation.svg"
        home="About us"
        homeColor="#fff"
        showHugeIconinterfacesolidhom
        pro={false}
      />
      <NavBtn
        menuDesktopBorderRadius="unset"
        menuDesktopBackgroundColor="unset"
        hugeIconinterfacesolidhom="/hugeiconinterfaceoutlinehelp.svg"
        home="FAQ"
        homeColor="#fff"
        showHugeIconinterfacesolidhom
        pro={false}
      />
      <UpgradeBtn />
    </nav>
  );
};

export default GuestNav;

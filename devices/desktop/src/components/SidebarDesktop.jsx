import StateDefaultPropertyDeskto1 from "./StateDefaultPropertyDeskto1";
import MenuDesktop from "./MenuDesktop";
import PropTypes from "prop-types";

const SidebarDesktop2 = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[calc(100%_-_108px)] top-[108px] bottom-[0px] left-[0px] bg-neutral-800 flex flex-col items-center justify-start p-12 box-border gap-[8px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehome-04.svg"
        text="Home"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="transparent"
        stateDefaultPropertyDesktBorder="none"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconinterfacesolidsearch-023.svg"
        text="Search"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="transparent"
        stateDefaultPropertyDesktBorder="none"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconmultimedia-and-audiosolidvideotick@2x.png"
        text="Moves"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="12px"
        stateDefaultPropertyDesktBackgroundColor="#fff"
        stateDefaultPropertyDesktBorder="none"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#1b1b1b"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeicontime-and-datesolidtimequarter-past1@2x.png"
        text="History"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="12px"
        stateDefaultPropertyDesktBackgroundColor="rgba(255, 255, 255, 0.08)"
        stateDefaultPropertyDesktBorder="none"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/heart-icons.svg"
        text="Liked videos"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="unset"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconfinance-and-paymentoutlinecard1.svg"
        text="Payments"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconfinance-and-paymentoutlinemoney-bagdollar1.svg"
        text="Subscriptions"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <MenuDesktop text="Chat" rightIcon={false} leftIcon />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeicondeviceoutlinenotification-011.svg"
        text="Notifications"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeicondeviceoutlinesetting.svg"
        text="Settings"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconcommunicationoutlinecall1.svg"
        text="Contact us"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlineinformation1.svg"
        text="About us"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinehelp1.svg"
        text="FAQ"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconinterfaceoutlinestar1.svg"
        text="Upgrade to"
        rightIcon
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
      <StateDefaultPropertyDeskto1
        hugeIconinterfaceoutlineh="/hugeiconarrowssolidin2@2x.png"
        text="Log out"
        rightIcon={false}
        leftIcon
        stateDefaultPropertyDesktBorderRadius="unset"
        stateDefaultPropertyDesktBackgroundColor="unset"
        stateDefaultPropertyDesktBorder="unset"
        hugeIconinterfaceoutlinehOverflow="hidden"
        homeColor="#fff"
      />
    </div>
  );
};

SidebarDesktop2.propTypes = {
  className: PropTypes.string,
};

export default SidebarDesktop2;

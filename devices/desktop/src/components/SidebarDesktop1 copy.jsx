import StateDefaultPropertyDeskto1 from "./StateDefaultPropertyDeskto1";

const menuItem = [
  {
    title: "Home",
    icon: "/hugeiconinterfaceoutlinehome-041.svg",
    active: false,
  },
  {
    title: "Search",
    icon: "/hugeiconinterfacesolidsearch-023.svg",
    active: false,
  },
  {
    title: "Moves",
    icon: "/hugeiconinterfaceoutlinehome-041.svg",
    active: false,
  },
  {
    title: "History",
    icon: "/hugeicontime-and-datesolidtimequarter-past1@2x.png",
    active: false,
  },
  {
    title: "Liked videos",
    icon: "/heart-icons.svg",
    active: false,
  },
  {
    title: "Payments",
    icon: "/hugeiconinterfacesolidhome-041.svg",
    active: true,
  },
  {
    title: "Subscriptions",
    icon: "/hugeiconfinance-and-paymentoutlinemoney-bagdollar1.svg",
    active: false,
  },
  {
    title: "Chat",
    icon: "/vector-3014.svg",
    active: false,
  },
  {
    title: "Notifications",
    icon: "/hugeicondeviceoutlinenotification-011.svg",
    active: false,
  },
  {
    title: "Settings",
    icon: "/hugeicondeviceoutlinesetting.svg",
    active: false,
  },
  {
    title: "Contact us",
    icon: "/hugeiconcommunicationoutlinecall1.svg",
    active: false,
  },
  {
    title: "About us",
    icon: "/hugeiconinterfaceoutlineinformation1.svg",
    active: false,
  },
  {
    title: "FAQ",
    icon: "/hugeiconinterfaceoutlinehelp1.svg",
    active: false,
  },
  {
    title: "Upgrade to",
    icon: "/hugeiconinterfaceoutlinestar1.svg",
    active: false,
  },
  {
    title: "Log out",
    icon: "/hugeiconarrowssolidin2@2x.png",
    active: false,
  },
];

const menuItemLoggedOut = [
  {
    title: "Home",
    icon: "/hugeiconinterfaceoutlinehome-041.svg",
    active: false,
  },
  {
    title: "Search",
    icon: "/hugeiconinterfacesolidsearch-023.svg",
    active: false,
  },
  {
    title: "Moves",
    icon: "/hugeiconinterfaceoutlinehome-041.svg",
    active: false,
  },
  {
    title: "Contact us",
    icon: "/hugeiconcommunicationoutlinecall1.svg",
    active: false,
  },
  {
    title: "About us",
    icon: "/hugeiconinterfaceoutlineinformation1.svg",
    active: false,
  },
  {
    title: "FAQ",
    icon: "/hugeiconinterfaceoutlinehelp1.svg",
    active: false,
  },
  {
    title: "Upgrade to",
    icon: "/hugeiconinterfaceoutlinestar1.svg",
    active: false,
  },
];

const SidebarDesktop1 = (props) => {
  const { user, openPlans } = props;

  return (
    <div
      className={`absolute h-screen top-[108px] bottom-[0px] left-[0px] bg-neutral-800 flex flex-col items-center justify-start p-12 box-border gap-[8px]`}
    >
      <>
        {user ? (
          <>
            {menuItem &&
              menuItem.map((item) => (
                <>
                  {item.active ? (
                    <>
                      {" "}
                      <StateDefaultPropertyDeskto1
                        hugeIconinterfaceoutlineh={item?.icon}
                        text={item?.title}
                        rightIcon={false}
                        leftIcon
                        stateDefaultPropertyDesktBorderRadius="12px"
                        stateDefaultPropertyDesktBackgroundColor="#fff"
                        stateDefaultPropertyDesktBorder="unset"
                        hugeIconinterfaceoutlinehOverflow="hidden"
                        homeColor="#1b1b1b"
                        active={item.active}
                        openPlans={openPlans}
                      />
                    </>
                  ) : (
                    <StateDefaultPropertyDeskto1
                      hugeIconinterfaceoutlineh={item?.icon}
                      text={item?.title}
                      rightIcon={false}
                      leftIcon
                      stateDefaultPropertyDesktBorderRadius="unset"
                      stateDefaultPropertyDesktBackgroundColor="unset"
                      stateDefaultPropertyDesktBorder="unset"
                      hugeIconinterfaceoutlinehOverflow="hidden"
                      homeColor="#fff"
                      active={item.active}
                      openPlans={openPlans}

                    />
                  )}
                </>
              ))}
          </>
        ) : (
          <>
            {menuItemLoggedOut &&
              menuItemLoggedOut.map((item) => (
                <>
                  {item.active ? (
                    <>
                      {" "}
                      <StateDefaultPropertyDeskto1
                        hugeIconinterfaceoutlineh={item?.icon}
                        text={item?.title}
                        rightIcon={false}
                        leftIcon
                        stateDefaultPropertyDesktBorderRadius="12px"
                        stateDefaultPropertyDesktBackgroundColor="#fff"
                        stateDefaultPropertyDesktBorder="unset"
                        hugeIconinterfaceoutlinehOverflow="hidden"
                        homeColor="#1b1b1b"
                        active={item.active}
                        openPlans={openPlans}

                      />
                    </>
                  ) : (
                    <StateDefaultPropertyDeskto1
                      hugeIconinterfaceoutlineh={item?.icon}
                      text={item?.title}
                      rightIcon={false}
                      leftIcon
                      stateDefaultPropertyDesktBorderRadius="unset"
                      stateDefaultPropertyDesktBackgroundColor="unset"
                      stateDefaultPropertyDesktBorder="unset"
                      hugeIconinterfaceoutlinehOverflow="hidden"
                      homeColor="#fff"
                      active={item.active}
                      openPlans={openPlans}

                    />
                  )}
                </>
              ))}
          </>
        )}
      </>
    </div>
  );
};

export default SidebarDesktop1;

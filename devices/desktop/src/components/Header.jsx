import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HeaderDesktop from "./Header copy";
import HeaderTablet from "./HeaderTablet";
import SidebarDesktop1 from "./SidebarDesktop1";
import VariantsFreeModal from "./VariantsFreeModal";
import VariantsFreeModalTablet from "./VariantsFreeModalTablet";

/**
 * This hHeader component contains the following component
 * 1. Desktop header
 * 2.Tablet header
 * 3. Desktop sidebar
 * 4.Tablet sidebar
 * 5.Subscription plans
 *
 */

const Header = (props) => {
  const { user } = props;
  const [isCreate, setIsCreate] = useState(false);
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSubscriptionOpen, setSubscriptionOpen] = useState(false);

  async function openSideBar() {
    setModalOpen(true);
    setSideBarOpen(true);
  }

  async function closeSideBar() {
    setModalOpen(false);
    setSideBarOpen(false);
  }

  async function openPlans() {
    // setModalOpen(true);
    setSubscriptionOpen(true);
    setSideBarOpen(false);
  }
  async function closePlans() {
    setModalOpen(false);
    setSubscriptionOpen(false);
    setSideBarOpen(false);
  }

  const navigate = useNavigate();

  // There is no need to create on desktop and tablet view, this function is limited to mobile view only
  async function redirectToCreate() {
    navigate("/d-create");
  }
  return (
    <>
      <div className="hidden xl:flex">
        <HeaderDesktop user={user} />
        <SidebarDesktop1
          isSideBarOpen={isSideBarOpen}
          closeSideBar={closeSideBar}
          user={user}
          openPlans={openPlans}
        />
        {isModalOpen && isSubscriptionOpen && (
          <>
            <VariantsFreeModal closePlans={closePlans} />
          </>
        )}
      </div>

      <div className="flex xl:hidden">
        <HeaderTablet user={user} openSideBar={openSideBar} />
        <SidebarDesktop1
          isSideBarOpen={isSideBarOpen}
          closeSideBar={closeSideBar}
          user={user}
          openPlans={openPlans}
        />

        {isSubscriptionOpen && (
          <>
            <VariantsFreeModalTablet closePlans={closePlans} />
          </>
        )}
      </div>
    </>
  );
};

export default Header;

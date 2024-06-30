import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HeaderDesktop from "./Header copy";
import HeaderTablet from "./HeaderTablet";

const Header = (props) => {
  const { user, openSideBar } = props;
  const [isCreate, setIsCreate] = useState(false);

  const navigate = useNavigate();

  // There is no need to create on desktop and tablet view, this function is limited to mobile view only
  async function redirectToCreate() {
    navigate("/d-create");
  }
  return (
    <>
      <div className="hidden xl:flex">
        <HeaderDesktop user={user} />
      </div>

      <div className="flex xl:hidden">
        <HeaderTablet user={user} openSideBar={openSideBar} />
      </div>
    </>
  );
};

export default Header;

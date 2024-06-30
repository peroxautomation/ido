import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Dropdowns1 from "../components/Dropdowns1";
import Property1Desktop1 from "../components/Property1Desktop1";
import DropdownsMenu2 from "../components/DropdownsMenu1";
import CountryDropdown from "../components/CountryDropdown";

const DSignUp1 = () => {
  const [isCountry, setIsCountry] = useState(false);
  const [isState, setIsState] = useState(false);

  const [isCity, setIsCity] = useState(false);

  const navigate = useNavigate();

  async function previousSignUpPage() {
    navigate("/d-sign-up-screen-1"); // update
  }

  async function nextSignUpPage() {
    // navigate("/d-sign-up");
    navigate("/d-sign-up-question-1");
  }

  async function openCountryModal() {
    setIsCountry((prev) => !prev);
    setIsState(false);
    setIsCity(false);
  }

  async function openStateModal() {
    setIsCountry(false);
    setIsState((prev) => !prev);
    setIsCity(false);
  }

  async function openCityModal() {
    setIsCountry(false);
    setIsState(false);
    setIsCity((prev) => !prev);
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <CountryDropdown
        nextSignUpPage={nextSignUpPage}
        setIsCountry={openCountryModal}
        setIsState={openStateModal}
        setIsCity={openCityModal}
      />
      <Property1Desktop1
        text="Sign up"
        property1DesktopAlignSelf="unset"
        property1DesktopPosition="absolute"
        property1DesktopTop="203px"
        property1DesktopLeft="calc(50% - 160px)"
        property1DesktopWidth="320px"
        property1DesktopBottom="unset"
        property1DesktopHeight="unset"
      />

      {/* dropdown model */}
      {isCountry && <DropdownsMenu2 />}
      {isState && <DropdownsMenu2 hugeIcontimeAndDatesolidTop="403px" />}
      {isCity && <DropdownsMenu2 hugeIcontimeAndDatesolidTop="463px" />}

      <img
        className="cursor-pointer hover:opacity-80 absolute top-[56px] left-[48px] w-[9.2px] h-[19.2px]"
        alt=""
        src="/direction-left.svg"
        onClick={previousSignUpPage}
      />
    </div>
  );
};

export default DSignUp1;

import Title from "../components/mobile/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/mobile/PrimaryButton";
import Dropdown from "../components/mobile/Dropdown";
import DropdownSearch from "../components/mobile/DropdownSearch";
import DropdownItem1 from "../components/mobile/DropdownItem1";

const countries = [
  "Afghanistan",
  "Bahrain",
  "Cambodia",
  "Denmark",
  "Ecuador",
  "Finland",
  "Germany",
  "Zimbabwe",
  "Afghanistan",
  "Bahrain",
  "Cambodia",
  "Denmark",
  "Ecuador",
  "Finland",
  "Germany",
  "Zimbabwe",
  "Afghanistan",
  "Bahrain",
  "Cambodia",
  "Denmark",
  "Ecuador",
  "Finland",
  "Germany",
  "Zimbabwe",
  "Nigeria",
];

const states = [
  "Afghanistan",
  "Bahrain",
  "Cambodia",
  "Denmark",
  "Ecuador",
  "Finland",
  "Germany",
  "Zimbabwe",
  "Afghanistan",
  "Bahrain",
  "Cambodia",
  "Denmark",
  "Ecuador",
  "Finland",
  "Germany",
  "Zimbabwe",
  "Afghanistan",
  "Bahrain",
  "Cambodia",
  "Denmark",
  "Ecuador",
  "Finland",
  "Germany",
  "Zimbabwe",
  "Nigeria",
];

const cities = [
  "Afghanistan",
  "Bahrain",
  "Cambodia",
  "Denmark",
  "Ecuador",
  "Finland",
  "Germany",
  "Zimbabwe",
  "Afghanistan",
  "Bahrain",
  "Cambodia",
  "Denmark",
  "Ecuador",
  "Finland",
  "Germany",
  "Zimbabwe",
  "Afghanistan",
  "Bahrain",
  "Cambodia",
  "Denmark",
  "Ecuador",
  "Finland",
  "Germany",
  "Zimbabwe",
  "Nigeria",
];
/**
 * Select Country Page
 * @returns JSX element
 */
const SelectCountry = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [countryInfo, setCountryInfo] = useState({
    country: null,
    state: null,
    city: null,
  });

  /*********************************************************************************** */
  /********************************{Global Variables}********************************* */
  /*********************************************************************************** */
  const navigate = useNavigate();

  /*********************************************************************************** */
  /********************************{ Functions }************************************** */
  /*********************************************************************************** */

  /**
   * On next button click
   */
  const onNextClick = () => {
    navigate("/sign-up/questions");
  };

  /**
   * Handle set country
   */
  const onCountryClick = (newCountry) => {
    setCountryInfo({
      ...countryInfo,
      country: newCountry,
    });
  };

  /**
   * Handle set city
   */
  const onCityClick = (newCity) => {
    setCountryInfo({
      ...countryInfo,
      city: newCity,
    });
  };

  /**
   * Handle set state
   */
  const onStateClick = (newState) => {
    setCountryInfo({
      ...countryInfo,
      state: newState,
    });
  };


  const isActive = () => {
    if (
      countryInfo.city == null ||
      countryInfo.country == null ||
      countryInfo.state == null
    )
      return false;
    else return true;
  };

  /****************************************************************************************** */
  /********************************{ Local components }************************************** */
  /****************************************************************************************** */

  /**
   * Dynamic country list
   * @returns A JSX element
   */
  const CountryDropdownList = () => {
    return (
      <div className="dropdown-primary-list hidden">
        <DropdownSearch />
        {countries.map((element, index) => (
          <DropdownItem1
            placeholder={element}
            key={index}
            onSelectItem={onCountryClick}
          />
        ))}
      </div>
    );
  };

  /**
   * Dynamic state list
   * @returns A JSX element
   */
  const StateDropdownList = () => {
    return (
      <div className="dropdown-primary-list hidden">
        <DropdownSearch />
        {states.map((element, index) => (
          <DropdownItem1
            placeholder={element}
            key={index}
            onSelectItem={onStateClick}
          />
        ))}
      </div>
    );
  };

  /**
   * Dynamic city list
   * @returns A JSX element
   */
  const CityDropdownList = () => {
    return (
      <div className="dropdown-primary-list">
        <DropdownSearch />
        {cities.map((element, index) => (
          <DropdownItem1
            placeholder={element}
            key={index}
            onSelectItem={onCityClick}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden grid grid-flow-row justify-items-center">
      <Title pageName="Select country" />
      <section className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] flex flex-col items-start justify-start gap-[16px] text-left text-base text-neutral-100 font-button-1-regular">
        <Dropdown
          name="Country"
          selected={countryInfo.country}
          DropdownOptions={CountryDropdownList()}
        />
        <Dropdown
          name="State"
          selected={countryInfo.state}
          DropdownOptions={StateDropdownList()}
        />
        <Dropdown
          name="City"
          selected={countryInfo.city}
          DropdownOptions={CityDropdownList()}
        />
      </section>
      <div className="absolute w-[90%] bottom-5">
        <PrimaryButton
          cTA="Next"
          onCTAClick={onNextClick}
          isActive={isActive()}
        />
      </div>
    </div>
  );
};

export default SelectCountry;

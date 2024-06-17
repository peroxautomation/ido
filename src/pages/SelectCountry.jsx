import Dropdown from "../components/mobile/Dropdown";
import Title from "../components/mobile/Title";
import Button1Inactive from "../components/mobile/Button1Inactive";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button1 from "../components/mobile/Button1";
import DropdownSearch from "../components/mobile/DropdownSearch";
import DropdownItem1 from "../components/mobile/DropdownItem1";
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
  const countryListId = "countryDropdownList";
  const cityListId = "cityDropdownList";
  const stateListId = "stateDropdownList";

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

  /**
   * Page event listener to close dropdown
   * Not yet attached becuase it conflicts with the onCTAClick in Dropdown
   */
  const onPageClick = (event) => {
    let countryDropdownList = document.getElementById("countryDropdownList");
    let cityDropdownList = document.getElementById("cityDropdownList");
    let stateDropdownList = document.getElementById("stateDropdownList");

    if (
      event.target != countryDropdownList &&
      event.target.parentNode != countryDropdownList &&
      event.target.parentNode.parentNode != countryDropdownList
    ) {
      countryDropdownList.classList.add("hidden");
    }

    if (
      event.target != cityDropdownList &&
      event.target.parentNode != cityDropdownList &&
      event.target.parentNode.parentNode != cityDropdownList
    ) {
      cityDropdownList.classList.add("hidden");
    }

    if (
      event.target != stateDropdownList &&
      event.target.parentNode != stateDropdownList &&
      event.target.parentNode.parentNode != stateDropdownList
    ) {
      stateDropdownList.classList.add("hidden");
    }
  };

  /****************************************************************************************** */
  /********************************{ Local components }************************************** */
  /****************************************************************************************** */
  const CountryDropdownList = () => {
    return (
      <div
        className={`absolute top-[48px] hidden rounded-2xl h-[calc(70vh_-_11rem)] overflow-y-auto flex flex-col items-start justify-start text-left text-base text-white font-button-2-semibold z-10 w-full`}
      >
        <DropdownSearch />
        <DropdownItem1
          placeholder="Afghanistan"
          onSelectItem={onCountryClick}
        />
        <DropdownItem1 placeholder="Bahrain" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Cambodia" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Denmark" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Ecuador" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Finland" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Germany" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Zimbabwe" onSelectItem={onCountryClick} />
        <DropdownItem1
          placeholder="Afghanistan"
          onSelectItem={onCountryClick}
        />
        <DropdownItem1 placeholder="Bahrain" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Cambodia" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Denmark" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Ecuador" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Finland" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Germany" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Zimbabwe" onSelectItem={onCountryClick} />
        <DropdownItem1
          placeholder="Afghanistan"
          onSelectItem={onCountryClick}
        />
        <DropdownItem1 placeholder="Bahrain" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Cambodia" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Denmark" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Ecuador" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Finland" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Germany" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Zimbabwe" onSelectItem={onCountryClick} />
        <DropdownItem1 placeholder="Nigeria" onSelectItem={onCountryClick} />
      </div>
    );
  };

  const StateDropdownList = () => {
    return (
      <div
        className={`absolute top-[48px] hidden rounded-2xl h-[calc(70vh_-_11rem)] overflow-y-auto flex flex-col items-start justify-start text-left text-base text-white font-button-2-semibold z-10 w-full`}
      >
        <DropdownSearch />
        <DropdownItem1 placeholder="Afghanistan" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Bahrain" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Cambodia" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Denmark" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Ecuador" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Finland" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Germany" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Zimbabwe" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Afghanistan" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Bahrain" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Cambodia" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Denmark" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Ecuador" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Finland" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Germany" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Zimbabwe" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Afghanistan" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Bahrain" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Cambodia" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Denmark" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Ecuador" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Finland" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Germany" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Zimbabwe" onSelectItem={onStateClick} />
        <DropdownItem1 placeholder="Nigeria" onSelectItem={onCountryClick} />
      </div>
    );
  };

  const CityDropdownList = () => {
    return (
      <div
        className={`absolute top-[48px] hidden rounded-2xl h-[calc(70vh_-_11rem)] overflow-y-auto flex flex-col items-start justify-start text-left text-base text-white font-button-2-semibold z-10 w-full`}
      >
        <DropdownSearch />
        <DropdownItem1 placeholder="Afghanistan" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Bahrain" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Cambodia" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Denmark" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Ecuador" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Finland" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Germany" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Zimbabwe" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Afghanistan" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Bahrain" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Cambodia" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Denmark" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Ecuador" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Finland" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Germany" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Zimbabwe" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Afghanistan" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Bahrain" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Cambodia" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Denmark" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Ecuador" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Finland" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Germany" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Zimbabwe" onSelectItem={onCityClick} />
        <DropdownItem1 placeholder="Nigeria" onSelectItem={onCityClick} />
      </div>
    );
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title
        titleRight="unset"
        titleLeft="20px"
        returnPage="/sign-up/birthday"
        pageName="Select country"
        titleWidth="335px"
        direactionLeft="/direaction-left.svg"
      />
      <section className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] flex flex-col items-start justify-start gap-[16px] text-left text-base text-neutral-100 font-button-1-regular">
        <Dropdown
          name="Country"
          selected={countryInfo.country}
          DropdownOptions={CountryDropdownList}
        />
        <Dropdown
          name="State"
          selected={countryInfo.state}
          DropdownOptions={StateDropdownList}
        />
        <Dropdown
          name="City"
          selected={countryInfo.city}
          DropdownOptions={CityDropdownList}
        />
      </section>
      {countryInfo.city == null ||
      countryInfo.country == null ||
      countryInfo.state == null ? (
        <Button1Inactive cTA="Next" />
      ) : (
        <Button1
          cTA="Next"
          onCTAClick={onNextClick}
          className="absolute w-[calc(100%_-_40px)] right-[1.25rem] bottom-[2.5rem] left-[1.25rem]"
        />
      )}
    </div>
  );
};

export default SelectCountry;

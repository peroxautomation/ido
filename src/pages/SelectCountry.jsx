import Dropdown2 from "../components/mobile/Dropdown2";
import Dropdown from "../components/mobile/Dropdown";
import Title from "../components/mobile/Title";
import Button1Inactive from "../components/mobile/Button1Inactive";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Select Country Page
 * @returns JSX element
 */
const SelectCountry = () => {

  const navigate = useNavigate();
  const [btnActive, setBtnActive] = useState(false);

  const onCTAClick = useCallback(() => {
    console.log(`Button active state: `)
    navigate("/sign-up/questions");
  }, [navigate]);

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
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="w-[335px] hidden flex-row items-start justify-start pt-0 px-0 pb-1 box-border">
            <div className="flex-1 relative leading-[24px]">Label</div>
          </div>
          <Dropdown
            showLabel={false}
            labelAlignSelf="unset"
            labelWidth="335px"
            label="Label"
            dropdown="City"
          />
          <div className="w-[335px] hidden flex-row items-center justify-start py-1 px-0 box-border text-sm">
            <div className="flex-1 relative leading-[20px]">Helper text</div>
          </div>
        </div>
        <Dropdown
          showLabel={false}
          labelAlignSelf="unset"
          labelWidth="335px"
          label="Label"
          dropdown="State"
        />
        <Dropdown
          showLabel={false}
          labelAlignSelf="unset"
          labelWidth="335px"
          label="Label"
          dropdown="City"
        />
      </section>
      <Button1Inactive
        onClick={onCTAClick}
        label="Next"
      />
       <Dropdown2
        allHref="https://www.britannica.com/place/Zimbabwe"
        allTarget="_blank"
        className="hidden"
      />
    </div>
  );
};

export default SelectCountry;

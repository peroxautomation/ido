import TitleTablet from "../components/TitleTablet";
import ButtonDefault from "../components/ButtonDefault";

const GoogleAuth = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden text-left text-xl text-neutral-200 font-overline-regular">
      <div className="modal-position">
        <div className="modal_container">
          <div className="absolute w-[calc(100%_-_48px)] top-[188px] right-[24px] left-[24px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[28px]">
              To continue, log in to the Google account you signed up with so we
              can confirm the Ido account username belongs to you.
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_48px)] top-[136px] right-[24px] left-[24px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[28px]">
              Verify your account
            </div>
          </div>
          <TitleTablet
            titleOfPage="Creating cover dance"
            hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
            showTitleOfPage={false}
            hugeIconarrowssoliddirectTop="40px"
            hugeIconarrowssoliddirectWidth="307px"
            propOpacity="0"
          />
          {/* <ButtonDefault
            leftIcon={"/google3.svg"}
            text="Continue with Google"
            rightIcon={""}
            classStyle={"bg-gray-200 absolute top-[308px] w-[335px]"}
          /> */}
          <ButtonDefault
            leftIcon={"/google3.svg"}
            text="Continue with Google"
            rightIcon={""}
            classStyle={"bg-white-8 absolute top-[308px] w-[335px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;

import { useMemo } from "react";
import StateDefaultSizeBigDevic from "./StateDefaultSizeBigDevic";
import StateTabletTextArea from "./StateTabletTextArea";
import StateInactiveSizeDefault from "./StateInactiveSizeDefault";

const VariantsEditProfile = (props) => {
  const {
    className = "",
    ellipse1255,
    hugeIconinterfacesolidinf,
    input,
    hugeIconinterfacesolideye,
    phinfoLight,
    hugeIconeducationsolidpen,
    variantsEditProfileWidth,
    variantsEditProfileHeight,
    variantsEditProfilePosition,
    variantsEditProfileTop,
    variantsEditProfileRight,
    variantsEditProfileBottom,
    variantsEditProfileLeft,
    closeModal,
  } = props;
  const variantsEditProfileStyle = useMemo(() => {
    return {
      width: variantsEditProfileWidth,
      height: variantsEditProfileHeight,
      position: variantsEditProfilePosition,
      top: variantsEditProfileTop,
      right: variantsEditProfileRight,
      bottom: variantsEditProfileBottom,
      left: variantsEditProfileLeft,
    };
  }, [
    variantsEditProfileWidth,
    variantsEditProfileHeight,
    variantsEditProfilePosition,
    variantsEditProfileTop,
    variantsEditProfileRight,
    variantsEditProfileBottom,
    variantsEditProfileLeft,
  ]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] flex flex-col items-center justify-center p-6 box-border text-left text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={variantsEditProfileStyle}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[16px]">
        <img
          className="cursor-pointer hover:opacity-80 w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfacesolidremove.svg"
          onClick={closeModal}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="relative leading-[32px]">Profile photo</div>
              <div className="w-20 flex flex-row items-start justify-between relative">
                <img
                  className="w-20 relative rounded-[50%] h-20 object-cover z-[0]"
                  alt=""
                  src={ellipse1255}
                />
                <div className="w-[calc(100%_-_48px)] !m-[0] absolute h-[calc(100%_-_48px)] top-[28px] right-[20px] bottom-[20px] left-[28px] rounded-2xl bg-white-16 flex flex-row items-start justify-center py-1 px-1.5 box-border z-[1]">
                  <img
                    className="cursor-pointer hover:opacity-80 w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/hugeiconeducationoutlinepencil.svg"
                  />
                </div>
              </div>
            </div>
            <StateDefaultSizeBigDevic
              labelText="User name"
              hugeIconinterfacesolidinf="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
              inputText="Sabina Jeyhunzade"
              hugeIconinterfacesolideye="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
              helperText="Helper text"
              label
              eye={false}
              infoIcon={false}
              helperText={false}
              showInputAndWord
              showInput
              stateDefaultSizeBigDevicAlignSelf="stretch"
              stateDefaultSizeBigDevicWidth="unset"
              stateDefaultSizeBigDevicPosition="unset"
              stateDefaultSizeBigDevicTop="unset"
              stateDefaultSizeBigDevicRight="unset"
              stateDefaultSizeBigDevicLeft="unset"
              inputGap="8px"
              inputBorder="unset"
              inputOutline="unset"
              inputFontFamily="unset"
              inputFontSize="unset"
              inputColor="unset"
              inputAndWordFlex="1"
              inputAndWordWidth="unset"
              inputAndWordPadding="unset"
              inputAndWordBorder="unset"
              inputAndWordOutline="unset"
              inputAndWordFontFamily="unset"
              inputAndWordFontSize="unset"
              inputAndWordBackgroundColor="unset"
              inputAndWordColor="unset"
              inputColor1="#fff"
              inputLineHeight="24px"
              inputTextAlign="center"
              inputFlex="unset"
              inputFontSize1="16px"
              inputFontFamily1="Nunito"
              inputWidth="unset"
              inputHeight="unset"
              inputOverflow="unset"
              hugeIconinterfacesolideyeWidth="24px"
              hugeIconinterfacesolideyePosition="relative"
              hugeIconinterfacesolideyeHeight="24px"
              hugeIconinterfacesolideyeOverflow="hidden"
              hugeIconinterfacesolideyeFlexDirection="unset"
              hugeIconinterfacesolideyePadding="unset"
              helperTextAlignSelf="unset"
              helperTextWidth="340px"
              helperTextFlexDirection="row"
              helperTextPadding="4px 0px"
              helperTextFlex="unset"
              helperTextPosition="unset"
              helperTextFontSize="unset"
              helperTextLineHeight="unset"
              helperTextFontFamily="unset"
              helperTextColor="unset"
              helperTextTextAlign="unset"
              helperTextColor1="#fff"
            />
            <StateTabletTextArea
              questionText="Bio"
              hugeIconinterfacesolidinf="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
              answerText="With years of dedicated training and performance experience, dance is not just a career for me—it's a way of life."
              showInfo={false}
              stateTabletTextAreaWidth="unset"
              stateTabletTextAreaAlignSelf="stretch"
              textAreaHeight="unset"
              answerForQuestionColor="#fff"
            />
          </div>
          <StateInactiveSizeDefault
            text="Save changes"
            hugeIconeducationsolidpen="/hugeiconeducationsolidpencil8@2x.png"
            icon={false}
            stateInactiveSizeDefaultBackgroundColor="#cc0f3c"
            stateInactiveSizeDefaultPosition="unset"
            stateInactiveSizeDefaultTop="unset"
            stateInactiveSizeDefaultLeft="unset"
            stateInactiveSizeDefaultWidth="unset"
            stateInactiveSizeDefaultRight="unset"
            stateInactiveSizeDefaultBottom="unset"
            stateInactiveSizeDefaultGap="8px"
            stateInactiveSizeDefaultFlex="unset"
            stateInactiveSizeDefaultAlignSelf="stretch"
            hugeIconeducationsolidpenWidth="16px"
            hugeIconeducationsolidpenHeight="16px"
          />
        </div>
      </div>
    </div>
  );
};

export default VariantsEditProfile;

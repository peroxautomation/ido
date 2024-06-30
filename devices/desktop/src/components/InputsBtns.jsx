import Input from "./Input";
import ButtonDefault from "./ButtonDefault";
const InputsBtns2 = (props) => {
  const { title, onClick } = props;
  return (
    <div
      className={`absolute w-[calc(100%_-_1100px)] min-w-[340px] max-w-[400px] top-[294px] right-[540px] left-[560px] flex flex-col items-center justify-center gap-[16px]`}
    >
      <div className="mb-8">
        <div className="flex flex-row justify-center items-center py-4 px-0 box-border text-left text-13xl text-neutral-100 font-overline-regular">
          <div className="text-lg text-gray-50 top-[199px]">{title}</div>
        </div>
      </div>
      <Input
        inputLabel="New password"
        inputPlaceholder="Enter your new password"
        helperText=""
        label
        infoIcon=""
        showHelperText
        propAlignSelf="stretch"
        propWidth1="340px"
        propPadding="4px 0px"
        propFlex1="1"
        propFontSize2="14px"
        propLineHeight="20px"
        propFontFamily2="Nunito"
        propColor2="#424242"
        propTextAlign="left"
        icon={"/union.svg"}
      />
      <Input
        inputLabel="Confirm new password"
        inputPlaceholder="Confirm your new password"
        helperText=""
        label
        infoIcon=""
        showHelperText
        propAlignSelf="stretch"
        propWidth1="340px"
        propPadding="4px 0px"
        propFlex1="1"
        propFontSize2="14px"
        propLineHeight="20px"
        propFontFamily2="Nunito"
        propColor2="#424242"
        propTextAlign="left"
        icon={"/union.svg"}
        onClick={onClick}
      />
      <ButtonDefault
        leftIcon={""}
        text={"Reset"}
        rightIcon={""}
        onClick={onClick}
      />
    </div>
  );
};

export default InputsBtns2;

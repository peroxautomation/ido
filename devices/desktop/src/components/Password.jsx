import VariantForCategory from "./VariantForCategory";
import SizeBigStateDefault from "./SizeBigStateDefault";
import PropTypes from "prop-types";

const Password = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-[16px] ${className}`}
    >
      <VariantForCategory
        text="Password"
        showLayers
        variantForCategoryWidth="696px"
        variantForCategoryAlignSelf="unset"
        titleOfPageFontWeight="600"
        titleOfPageTextAlign="center"
      />
      <SizeBigStateDefault
        labelText="Label"
        inputText="Change password"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionright-01.svg"
        helperText="Helper text"
        helperText={false}
        label={false}
        leftIcon={false}
        rightIcon
        sizeBigStateDefaultWidth="335px"
        labelAlignSelf="unset"
        labelWidth="335px"
      />
    </div>
  );
};

Password.propTypes = {
  className: PropTypes.string,
};

export default Password;

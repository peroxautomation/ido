import Property1DesktopTitle from "./Property1DesktopTitle";
import SizeBigStateDefault from "./SizeBigStateDefault";
import PropTypes from "prop-types";

const Password1 = (props) => {
  const { updatingPassword } = props;
  return (
    <div
      className={`absolute top-[640px] left-[312px] flex flex-col items-start justify-start`}
    >
      <Property1DesktopTitle
        text="Password"
        showLayers={false}
        property1DesktopTitlePosition="unset"
        property1DesktopTitleTop="unset"
        property1DesktopTitleLeft="unset"
        property1DesktopTitleWidth="1080px"
        property1DesktopTitleAlignSelf="unset"
      />
      <SizeBigStateDefault
        labelText="Label"
        inputText="Update password"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionright-01.svg"
        helperText="Helper text"
        helperText={false}
        label={false}
        leftIcon={false}
        rightIcon
        sizeBigStateDefaultWidth="335px"
        labelAlignSelf="unset"
        labelWidth="335px"
        updatingPassword={updatingPassword}
      />
    </div>
  );
};

Password1.propTypes = {
  className: PropTypes.string,
};

export default Password1;

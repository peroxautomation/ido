import InputsBtns21 from "../components/InputsBtns2";
import TitleTablet from "../components/TitleTablet";

const Login = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden">
      <InputsBtns21 />
      <TitleTablet
        titleOfPage="Log in"
        hugeIconarrowssoliddirect="/hugeiconarrowssoliddirectionleft-2@2x.png"
        showTitleOfPage
        hugeIconarrowssoliddirectTop="60px"
        hugeIconarrowssoliddirectWidth="unset"
        propOpacity="0"
      />
    </div>
  );
};

export default Login;

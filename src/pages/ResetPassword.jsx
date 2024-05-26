import Title from "../components/mobile/Title";
import Button1 from "../components/mobile/Button1";
import PasswordInput from "../components/mobile/PasswordInput";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const onClick = () => {
    console.log("Reseting password...");
    navigate('/processing')
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title
        pageName="Reset password"
        returnPage="/forgot-password"
      />
      <main className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] flex flex-col items-start justify-start gap-[16px]">
        <PasswordInput label="New password" inputAndWordPlaceholder="Enter password" />
        <Button1
          cTAAlignSelf="stretch"
          cTAPosition="unset"
          cTATop="unset"
          cTALeft="unset"
          cTAWidth="unset"
          cTA="Reset password"
          onCTAClick={onClick}
        />
      </main>
    </div>
  );
};

export default ResetPassword;

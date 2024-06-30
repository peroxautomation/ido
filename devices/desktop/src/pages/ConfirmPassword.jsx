import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import InputsBtns2 from "../components/InputsBtns";
import PasswordResetSuccess from "./PasswordResetSuccess";

const ConfirmPassword = () => {
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  async function successState() {
    setIsConfirmPassword(false);
    setIsSuccess(true);
  }

  return (
    <>
      {isConfirmPassword && (
        <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
          <InputsBtns2 title={"Reset password"} onClick={successState} />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[56px] left-[48px] w-[9.2px] h-[19.2px]">
            <img
              className="absolute top-[0px] left-[0px] w-[9.2px] h-[19.2px] object-contain"
              alt=""
              src="/vector-175-stroke.svg"
            />
          </button>
        </div>
      )}
      {isSuccess && <PasswordResetSuccess />}
    </>
  );
};

export default ConfirmPassword;

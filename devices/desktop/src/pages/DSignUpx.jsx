import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SignUpInputbuttons from "../components/SignUpInputbuttons";

const DSignUpx = () => {
  const navigate = useNavigate();
  async function previousSignUpPage() {
    navigate("/d-sign-up-screen-1");
  }

  return (
    <div className="w-full relative bg-neutral-900 h-screen overflow-hidden">
      <SignUpInputbuttons />
      <img
        className="cursor-pointer hover:opacity-80 absolute top-[56px] left-[48px] w-[9.2px] h-[19.2px]"
        alt=""
        src="/direction-left.svg"
        onClick={previousSignUpPage}
      />
    </div>
  );
};

export default DSignUpx;

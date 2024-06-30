import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Property1Variant from "../components/Property1Variant";
import AllQuestionsUrl from "../components/AllQuestionsUrl";

const DCreatingCoverDanceQ1 = () => {
  const navigate = useNavigate();
// update to the desired redirect path
  async function returnTab() {
    navigate("/d-settings");
  }

  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden">
      <Property1Variant
        text="New cover dance"
        showLayers
        property1Variant2Width="1344px"
        property1Variant2Position="absolute"
        property1Variant2Top="40px"
        property1Variant2Left="48px"
        returnTab={returnTab}
      />
      <AllQuestionsUrl />
    </div>
  );
};

export default DCreatingCoverDanceQ1;

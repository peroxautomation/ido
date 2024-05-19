import GuestNav from "../components/GuestNav";
import TrendingNowSection from "../components/TrendingNowSection";
import RecentlyAddedSection from "../components/RecentlyAddedSection";
import GenresSection from "../components/GenresSection";
import GuestHeader from "../components/GuestHeader";
import LoginPopup from "../components/LoginPopup";
import PopUpShade from "../components/PopUpShade";
import React, {useState} from 'react'
import PlanModal from "../components/PlanModal";

{/* Whats does so far:
      I wanted to get the popups here with conditional statements but was confused on how to do so.
      so far I have the main/guest page with Loginpopup, planmodal, signupmodal didn't make sense to me I don't think it should have a modal */}
      
const MainGuest = () => {

  return (
    
    <div className="absolute h-full w-full bg-black overflow-hidden">
      <GuestNav />
      <div className="absolute h-[calc(100%_-_368px)] w-[calc(100%_-_360px)] top-[352px] right-[48px] bottom-[16px] left-[312px] flex flex-col items-start justify-start gap-[40px]">
        <TrendingNowSection />
        <RecentlyAddedSection />
      </div>
      <GenresSection/>
      <GuestHeader />

      
    </div>
    
  );
};

export default MainGuest;

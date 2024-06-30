import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import DOmparisonPage3 from "./pages/DOmparisonPage3";
import EmailForResetPassword from "./pages/EmailForResetPassword";
import Result from "./pages/Result";
import Result1 from "./pages/Result1";
import FilledOTP from "./pages/FilledOTP";
import AddInfo from "./pages/AddInfo";
import Success from "./pages/Success";
import ComparisonResult from "./pages/ComparisonResult";
import Result2 from "./pages/Result2";
import PremiumPlan from "./pages/PremiumPlan";
import SignupModal from "./pages/SignupModal";
import DefaultOTP1 from "./pages/DefaultOTP1";
import FilledOTP1 from "./pages/FilledOTP1";
import StateSelection from "./pages/StateSelection";
import CitySelection from "./pages/CitySelection";
import CitySelection1 from "./pages/CitySelection1";
import AllSelected from "./pages/AllSelected";
import SelectGender from "./pages/SelectGender";
import SearchResult from "./pages/SearchResult";
import Genre1 from "./pages/Genre1";
import Year from "./pages/Year";
import DSettings from "./pages/DSettings";
import DError from "./pages/DError";
import DSelectCoverImgFromDevice from "./pages/DSelectCoverImgFromDevice";
import DCreatingCoverDanceQ from "./pages/DCreatingCoverDanceQ";
import DGenre1 from "./pages/DGenre1";
import DSuccess from "./pages/DSuccess";
import DSelectVideoFromDevice1 from "./pages/DSelectVideoFromDevice1";
import DPrepared1 from "./pages/DPrepared1";
import DEditCover1 from "./pages/DEditCover1";
import DSelectCoverImgFromDevice1 from "./pages/DSelectCoverImgFromDevice1";
import DAreYouReady from "./pages/DAreYouReady";
import DUploading from "./pages/DUploading";
import DSelectCoverImgFromDevice2 from "./pages/DSelectCoverImgFromDevice2";
import DSelectCoverImgFromDevice3 from "./pages/DSelectCoverImgFromDevice3";
import DOmparisonPage2 from "./pages/DOmparisonPage2";
import DOmparisonPage4 from "./pages/DOmparisonPage4";
import DMoves1 from "./pages/DMoves1";
import DPrepared2 from "./pages/DPrepared2";
import DEditCover2 from "./pages/DEditCover2";
import DAddInfo from "./pages/DAddInfo";
import DAddInfo1 from "./pages/DAddInfo1";
import DSuccess1 from "./pages/DSuccess1";
import DOtp from "./pages/DOtp";
import DOtp2 from "./pages/DOtp2";
import DSignUpQuestion from "./pages/DSignUpQuestion";
import PremiumPlanActive from "./pages/PremiumPlanActive";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import DHome from "./pages/DHome";
import DBgDate from "./pages/DBgDate";
import DWithdraw from "./pages/DWithdraw";
import DDonateSelectingCard from "./pages/DDonateSelectingCard";
import DDonateSelectingCard1 from "./pages/DDonateSelectingCard1";
import DDonateSelectingCard2 from "./pages/DDonateSelectingCard2";
import DDonateAmount from "./pages/DDonateAmount";
import DUpdatePassword from "./pages/DUpdatePassword";
import DLikedVideos from "./pages/DLikedVideos";
import DStory from "./pages/DStory";
import DMovesComment from "./pages/DMovesComment";
import DOmparisonPage1 from "./pages/DOmparisonPage1";
import DAboutUs from "./pages/DAboutUs";
import DFAQs from "./pages/DFAQs";
import DUpgrade from "./pages/DUpgrade";
import DUpdatePasswordForgot from "./pages/DUpdatePasswordForgot";
import DLogin2 from "./pages/DLogin2";
import DOtp1 from "./pages/DOtp1";
import DOtp3 from "./pages/DOtp3";
import DFilledOTP4 from "./pages/DFilledOTP4";
import DCover from "./pages/DMyDanceContainer";
import DCover1 from "./pages/DPlaylistContainer";
import ContactUs from "./pages/ContactUs";
import DResetPassword from "./pages/DResetPassword";
import ConfirmPassword from "./pages/ConfirmPassword";

import ResetPassword1 from "./pages/ResetPassword1";
import Login from "./pages/Login";
import GenderDropdown from "./pages/GenderDropdown";
import SignUpQuestion from "./pages/SignUpQuestion";
import EditCover from "./pages/EditCover";
import Genre from "./pages/Genre";
import Sorry from "./pages/Sorry";
import SelectCoverImgFromDevice from "./pages/SelectCoverImgFromDevice";
import Comparison from "./pages/Comparison";
import FreePlan from "./pages/FreePlan";
import LoginModal from "./pages/LoginModal";
import PaymentPremiumPlan from "./pages/PaymentPremiumPlan";
import CountrySelection from "./pages/CountrySelection";
import SidebarGuest from "./pages/SidebarGuest";
import SidebarUser from "./pages/HomeTablet";
import SearchResult1 from "./pages/SearchResult1";
import Country from "./pages/Country";
import Pricing from "./pages/Pricing";
import SelectGender1 from "./pages/SelectGender1";
import NewChallengeQuestions from "./pages/NewChallengeQuestions";
import FullVideo from "./pages/FullVideo";
import Moves from "./pages/Moves";
import Story from "./pages/Story";
import Playlist from "./pages/Playlist";
import UserProfilePlaylist from "./pages/UserProfilePlaylist";
import ResultOfSelecting from "./pages/ResultOfSelecting";
import CreatingCoverDanceQ from "./pages/CreatingCoverDanceQ";
import MyWallet2 from "./pages/MyWallet2";
import ChatList from "./pages/ChatList";
import Relating from "./pages/Relating";
import RelateRequest from "./pages/RelateRequest";
import AnotherUserProfile from "./pages/AnotherUserProfile";
import DFilledOTP from "./pages/DFilledOTP";
import DFilledOTP1 from "./pages/DFilledOTP1";
import DSignUp1 from "./pages/DSignUp1";
import EmailForResetPassword1 from "./pages/EmailForResetPassword1";
import ResetPassword from "./pages/ResetPassword";
import DefaultOTP from "./pages/DefaultOTP";
import Raiting from "./pages/Raiting";
import LikedVideos from "./pages/LikedVideos";
import History1 from "./pages/History1";
import TrendingNow from "./pages/TrendingNow";
import RecentlyAdded from "./pages/RecentlyAdded";
import SelectGender2 from "./pages/SelectGender2";
import SelectBdDate from "./pages/SelectBdDate";
import AllSelected1 from "./pages/AllSelected1";
import DefaultOTP2 from "./pages/DefaultOTP2";
import FilledOTP2 from "./pages/FilledOTP2";
import Comment1 from "./pages/Comment1";
import EditPlaylist from "./pages/EditPlaylist";
import UserProfile from "./pages/UserProfile";
import DeleteDance from "./pages/DeleteDance";
import UserProfileCover from "./pages/UserProfileCover";
import ReplyComment from "./pages/ReplyComment";
import Comparison1 from "./pages/Comparison1";
import ComparisonResult1 from "./pages/ComparisonResult1";
import SelectVideoFromDevice from "./pages/SelectVideoFromDevice";
import AddInfoForCover from "./pages/AddInfoForCover";
import SelectFromDevice from "./pages/SelectFromDevice";
import ResultOfSelecting1 from "./pages/ResultOfSelecting1";
import EditCover1 from "./pages/EditCover1";
import ChallengeUserSelectVideo from "./pages/ChallengeUserSelectVideo";
import ResultOfSelecting2 from "./pages/ResultOfSelecting2";
import EditCover2 from "./pages/EditCover2";
import SelectCoverImgFromDevice1 from "./pages/SelectCoverImgFromDevice1";
import UploadingBar from "./pages/UploadingBar";
import Success1 from "./pages/Success1";
import Sorry1 from "./pages/Sorry1";
import FullVideo1 from "./pages/FullVideo1";
import Comparison2 from "./pages/Comparison2";
import Result3 from "./pages/Result3";
import Payments from "./pages/Payments";
import MyWallet from "./pages/MyWallet";
import MyWallet1 from "./pages/MyWallet1";
import Story1 from "./pages/Story1";
import DetailsOfPayment from "./pages/DetailsOfPayment";
import AddPaymentMethods from "./pages/AddPaymentMethods";
import Subscriptions from "./pages/Subscriptions";
import Subscriptions1 from "./pages/Subscriptions1";
import Messages from "./pages/Messages";
import UserProfilePlaylist1 from "./pages/UserProfilePlaylist1";
import EditProfile from "./pages/EditProfile";
import DeleteAccountModal from "./pages/DeleteAccountModal";
import GoogleAuth from "./pages/GoogleAuth";
import DMainUser from "./pages/DMainUser";
import DUserProfile from "./pages/DUserProfile";
import DCreatingCoverDanceQ1 from "./pages/DCreatingCoverDanceQ1";
import Settings from "./pages/Settings";
import DLogin from "./pages/DLogin";
import DSignUp from "./pages/DSignUp";
import DMoves from "./pages/DMoves";
import DChatMessage from "./pages/DChatMessage";
import DPlaylists from "./pages/DPlaylists";
import DPrepared from "./pages/DPrepared";
import DEditCover from "./pages/DEditCover";
import DSignUpModal from "./pages/DSignUpModal";
import MyWallet4 from "./pages/MyWallet4";
import MyWallet5 from "./pages/MyWallet5";
import MyWallet6 from "./pages/MyWallet6";
import MyWallet7 from "./pages/MyWallet7";
import ChangePassword from "./pages/ChangePassword";
import ContactUs1 from "./pages/ContactUs1";
import AboutUs from "./pages/AboutUs";
import Donation from "./pages/Donation";
import FilledOTP3 from "./pages/FilledOTP3";
import Success2 from "./pages/Success2";
import Success3 from "./pages/Success3";
import DPayments from "./pages/DPayments";
import DTopUpWallet from "./pages/DTopUpWallet";
import DHistory from "./pages/DHistory";
import DOmparisonPage from "./pages/DOmparisonPage";
import DContactUs from "./pages/DContactUs";
import DNotificationSidebar from "./pages/DNotificationSidebar";
import DRelateReqestSidebar from "./pages/DRelateReqestSidebar";
import MainPageLoggining from "./pages/MainPageLoggining";
import MyWallet3 from "./pages/MyWallet3";
import DSearchResult from "./pages/DSearchResult";
import DSelectVideoFromDevice from "./pages/DSelectVideoFromDevice";
import DGenre from "./pages/DGenre";
import DLogInModal from "./pages/DLogInModal";
import PremiumSubscription from "./pages/PremiumSubscription";
import DSignUpQuestion1 from "./pages/DSignUpQuestion1";

import DMovesTest from "./pages/DMovesTest";
import DCreateContainer from "./pages/DCreateContainer";
import DCreate from "./pages/DCreate";

function App() {
  // const action = useNavigationType();

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action]);

  return (
    <Routes>
      <Route path="/" element={<DHome />} />

      {/*============================================={ Tablet }============================ */}
      <Route
        path="/email-for-reset-password"
        element={<EmailForResetPassword />}
      />
      <Route path="/result" element={<Result />} />
      <Route path="/result1" element={<Result1 />} />
      <Route path="/filled-otp" element={<FilledOTP />} />
      <Route path="/add-info" element={<AddInfo />} />
      <Route path="/success" element={<Success />} />
      <Route path="/comparison-result" element={<ComparisonResult />} />
      <Route path="/result2" element={<Result2 />} />
      <Route path="/premium-plan" element={<PremiumPlan />} />
      <Route path="/signup-modal" element={<SignupModal />} />
      <Route path="/filled-otp1" element={<FilledOTP1 />} />
      <Route path="/state-selection" element={<StateSelection />} />
      <Route path="/city-selection" element={<CitySelection />} />
      <Route path="/city-selection1" element={<CitySelection1 />} />
      <Route path="/all-selected" element={<AllSelected />} />
      <Route path="/select-gender" element={<SelectGender />} />
      <Route path="/search-result" element={<SearchResult />} />
      <Route path="/genre" element={<Genre1 />} />
      <Route path="/year" element={<Year />} />
      <Route path="/my-wallet3" element={<MyWallet4 />} />
      <Route path="/my-wallet4" element={<MyWallet5 />} />
      <Route path="/my-wallet5" element={<MyWallet6 />} />
      <Route path="/my-wallet6" element={<MyWallet7 />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/contact-us1" element={<ContactUs1 />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/filled-otp3" element={<FilledOTP3 />} />
      <Route path="/success2" element={<Success2 />} />
      <Route path="/success3" element={<Success3 />} />
      <Route path="/main-pageloggining" element={<MainPageLoggining />} />
      <Route path="/my-wallet7" element={<MyWallet3 />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/reset-password" element={<ResetPassword1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/gender-dropdown" element={<GenderDropdown />} />
      <Route path="/sign-up-question-1" element={<SignUpQuestion />} />
      <Route path="/edit-cover" element={<EditCover />} />
      <Route path="/genre1" element={<Genre />} />
      <Route path="/sorry" element={<Sorry />} />
      <Route
        path="/select-cover-img-from-device"
        element={<SelectCoverImgFromDevice />}
      />
      <Route path="/comparison" element={<Comparison />} />
      <Route path="/free-plan" element={<FreePlan />} />
      <Route path="/login-modal" element={<LoginModal />} />
      <Route path="/payment-premium-plan" element={<PaymentPremiumPlan />} />
      <Route path="/country-selection" element={<CountrySelection />} />
      <Route path="/sidebar-guest" element={<SidebarGuest />} />
      <Route path="/sidebar-user" element={<SidebarUser />} />
      <Route path="/search-result1" element={<SearchResult1 />} />
      <Route path="/country" element={<Country />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/select-gender1" element={<SelectGender1 />} />
      <Route
        path="/new-challenge-questions"
        element={<NewChallengeQuestions />}
      />
      <Route path="/full-video" element={<FullVideo />} />
      <Route path="/moves" element={<Moves />} />
      <Route path="/story" element={<Story />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/user-profileplaylist" element={<UserProfilePlaylist />} />
      <Route path="/result-of-selecting" element={<ResultOfSelecting />} />
      <Route
        path="/creating-cover-dance-q1"
        element={<CreatingCoverDanceQ />}
      />
      <Route path="/my-wallet" element={<MyWallet2 />} />
      <Route path="/chat-list" element={<ChatList />} />
      <Route path="/relating" element={<Relating />} />
      <Route path="/relate-request" element={<RelateRequest />} />
      <Route path="/another-user-profile" element={<AnotherUserProfile />} />
      <Route
        path="/email-for-reset-password1"
        element={<EmailForResetPassword1 />}
      />
      <Route path="/reset-password1" element={<ResetPassword />} />
      <Route path="/raiting" element={<Raiting />} />
      <Route path="/liked-videos" element={<LikedVideos />} />
      <Route path="/history" element={<History1 />} />
      <Route path="/trending-now" element={<TrendingNow />} />
      <Route path="/recently-added" element={<RecentlyAdded />} />
      <Route path="/select-gender2" element={<SelectGender2 />} />
      <Route path="/select-bd-date" element={<SelectBdDate />} />
      <Route path="/all-selected1" element={<AllSelected1 />} />
      <Route path="/filled-otp2" element={<FilledOTP2 />} />
      <Route path="/comment" element={<Comment1 />} />
      <Route path="/edit-playlist" element={<EditPlaylist />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/delete-dance" element={<DeleteDance />} />
      <Route path="/user-profilecover" element={<UserProfileCover />} />
      <Route path="/reply-comment" element={<ReplyComment />} />
      <Route path="/comparison1" element={<Comparison1 />} />
      <Route path="/comparison-result1" element={<ComparisonResult1 />} />
      <Route
        path="/select-video-from-device"
        element={<SelectVideoFromDevice />}
      />
      <Route path="/add-info-for-cover" element={<AddInfoForCover />} />
      <Route path="/select-from-device" element={<SelectFromDevice />} />
      <Route path="/result-of-selecting1" element={<ResultOfSelecting1 />} />
      <Route path="/edit-cover1" element={<EditCover1 />} />
      <Route
        path="/challenge-user-select-video"
        element={<ChallengeUserSelectVideo />}
      />
      <Route path="/result-of-selecting2" element={<ResultOfSelecting2 />} />
      <Route path="/edit-cover2" element={<EditCover2 />} />
      <Route
        path="/select-cover-img-from-device1"
        element={<SelectCoverImgFromDevice1 />}
      />
      <Route path="/uploading-bar" element={<UploadingBar />} />
      <Route path="/success1" element={<Success1 />} />
      <Route path="/sorry1" element={<Sorry1 />} />
      <Route path="/full-video1" element={<FullVideo1 />} />
      <Route path="/comparison2" element={<Comparison2 />} />
      <Route path="/result3" element={<Result3 />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/my-wallet1" element={<MyWallet />} />
      <Route path="/my-wallet2" element={<MyWallet1 />} />
      <Route path="/story1" element={<Story1 />} />
      <Route path="/details-of-payment" element={<DetailsOfPayment />} />
      <Route path="/add-payment-methods" element={<AddPaymentMethods />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/subscriptions1" element={<Subscriptions1 />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/user-profileplaylist1" element={<UserProfilePlaylist1 />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/delete-account-modal" element={<DeleteAccountModal />} />
      <Route path="/google-auth" element={<GoogleAuth />} />
      <Route path="/settings" element={<Settings />} />

      {/*============================================={ Desktop }============================ */}

      <Route path="/d-are-you-ready" element={<DAreYouReady />} />
      <Route path="/d-uploading" element={<DUploading />} />
      <Route path="/d-omparison-page" element={<DOmparisonPage2 />} />
      <Route path="/d-OmparisonPage3" element={<DOmparisonPage3 />} />
      <Route path="/d-omparison-page1" element={<DOmparisonPage4 />} />
      <Route path="/d-add-info" element={<DAddInfo />} />
      <Route path="/d-add-info1" element={<DAddInfo1 />} />
      <Route path="/d-success1" element={<DSuccess1 />} />

      <Route path="/d-bg-date" element={<DBgDate />} />
      <Route path="/d-withdraw" element={<DWithdraw />} />

      <Route
        path="/d-donate-selecting-card"
        element={<DDonateSelectingCard />}
      />
      <Route
        path="/d-donate-selecting-card1"
        element={<DDonateSelectingCard1 />}
      />
      <Route
        path="/d-donate-selecting-card2"
        element={<DDonateSelectingCard2 />}
      />
      <Route path="/d-donateamount" element={<DDonateAmount />} />
      <Route path="/d-update-password" element={<DUpdatePassword />} />
      <Route path="/d-liked-videos" element={<DLikedVideos />} />
      {/* remove */}
      <Route path="/d-omparison-page2" element={<DOmparisonPage1 />} />

      <Route path="/d-upgrade" element={<DUpgrade />} />
      <Route
        path="/d-update-password-forgot"
        element={<DUpdatePasswordForgot />}
      />

      <Route path="/d-reset-password" element={<DResetPassword />} />

      <Route path="/d-otp" element={<DOtp />} />
      <Route path="/d-otp1" element={<DOtp1 />} />
      <Route path="/d-otp2" element={<DOtp2 />} />
      <Route path="/d-otp3" element={<DOtp3 />} />

      <Route path="/d-filled-otp" element={<DFilledOTP />} />
      <Route path="/d-filled-otp1" element={<DFilledOTP1 />} />
      <Route path="/d-premium-plan-active" element={<PremiumPlanActive />} />
      <Route
        path="/d-password-reset-success"
        element={<PasswordResetSuccess />}
      />
      <Route path="/d-filled-otp4" element={<DFilledOTP4 />} />

      <Route path="/d-mainuser" element={<DMainUser />} />
      <Route path="/d-user-profile" element={<DUserProfile />} />
      <Route
        path="/d-creating-cover-dance-q11"
        element={<DCreatingCoverDanceQ1 />}
      />

      <Route path="/d-login" element={<DLogin />} />
      <Route path="/d-confirm-password" element={<ConfirmPassword />} />
      <Route path="/d-login2" element={<DLogin2 />} />
      <Route path="/d-sign-up-modal" element={<DSignUpModal />} />
      <Route path="/d-sign-up" element={<DSignUp />} />
      <Route path="/d-sign-up-screen-1" element={<DSignUp1 />} />
      <Route path="/d-sign-up-question-1" element={<DSignUpQuestion />} />
      <Route path="/d-moves" element={<DMoves />} />
      <Route path="/d-settings" element={<DSettings />} />

      <Route path="/d-chatmessage" element={<DChatMessage />} />

      <Route path="/d-playlists" element={<DPlaylists />} />

      <Route path="/d-prepared2" element={<DPrepared />} />
      <Route path="/d-edit-cover2" element={<DEditCover />} />
      <Route path="/d-payments" element={<DPayments />} />
      <Route path="/d-history" element={<DHistory />} />
      <Route path="/d-omparison-page3" element={<DOmparisonPage />} />
      <Route path="/d-contact-us" element={<DContactUs />} />
      <Route
        path="/d-notification-sidebar"
        element={<DNotificationSidebar />}
      />
      <Route
        path="/d-relate-reqest-sidebar"
        element={<DRelateReqestSidebar />}
      />

      <Route path="/d-search-result" element={<DSearchResult />} />
      <Route
        path="/d-select-video-from-device1"
        element={<DSelectVideoFromDevice />}
      />
      <Route path="/d-genre1" element={<DGenre />} />
      <Route path="/d-log-in-modal" element={<DLogInModal />} />
      <Route path="/premium-subscription" element={<PremiumSubscription />} />
      <Route path="/d-sign-up-question-11" element={<DSignUpQuestion1 />} />
      <Route path="/d-moves-test" element={<DMovesTest />} />
      <Route path="/d-create-container" element={<DCreateContainer />} />
      <Route path="/d-about-us" element={<DAboutUs />} />
      <Route path="/d-faqs" element={<DFAQs />} />
      <Route path="/d-create" element={<DCreate />} />
    </Routes>
  );
}
export default App;
//DMovesTest

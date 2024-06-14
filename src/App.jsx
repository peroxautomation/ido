import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

/* Login And Onboarding */
import OnboardingPrime from "./pages/OnboardingPrime";
import ForgotPassword from "./pages/ForgotPassword";
import OTP from "./pages/OTP";
import Processing from "./pages/Processing";
import Login from "./pages/Login";

/* Sign up */
import SignUp from "./pages/SignUp";
import SignUpAllInfo from "./pages/SignUpAllInfo";
import SignUpBirthday from "./pages/SignUpBithday";
import AllQuestionsForSignUpIn from "./pages/SignUpQuestions";
import SelectCountry from "./pages/SelectCountry";

/* Onboarding pages */
import OnboardingFree from "./pages/OnboardingFree";
import OnboardingPremium from "./pages/OnboardingPremium";
import StartPremiumPlan from "./pages/StartPremiumPlan";
import PremiumResut from "./pages/PremiumResut";

/* Home pages */
import MainPage from "./pages/MainPage";
import TrendingNow from "./pages/TrendingNow";
import RecentlyAdded from "./pages/RecentlyAdded";

/* Search pages */
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import Filters from "./pages/Filters";

/* Cover/Challenge pages */
import SelectCoverFromGallery from "./pages/SelectCoverFromGallery";
import CreateChallengePreview from "./pages/CreateChallengePreview";
import CreateNew from "./pages/CreateNew";
import CreateChallenge from "./pages/CreateChallenge";
import AddInfoForNewChallenge from "./pages/AddInfoForNewChallenge";
import AddInfoForNewChallenge2 from "./pages/AddInfoForNewChallenge2";
import CreateChallengeRecording from "./pages/CreateChallengeRecording";
import SelectCoverFromVideo from "./pages/SelectCoverFromVideo";
import CreateCover from "./pages/CreateCover";
import AddMusic from "./pages/AddMusic";
import ChallengeQuestion from "./pages/ChallengeQuestion";
import UploadUnsuccessful from "./pages/UploadUnsuccessful";
import UploadSuccessful from "./pages/UploadSuccessful";
import Uploading from "./pages/Uploading";
import ConfrimUpload from "./pages/ConfrimUpload";
import SelectMusic from "./pages/SelectMusic";
import ChallengeQuestion2 from "./pages/ChallengeQuestion2"
import ChallengeQuestion3 from "./pages/ChallengeQuestion3"  
import CreatingCoverDanceQ from "./pages/CreatingCoverDanceQ" 
import SorryPage from "./pages/SorryPage" 

/* Move pages */
import Moves from "./pages/Moves" 
import CreatorView from "./pages/CreatorView"
import OthersView from "./pages/OthersView"
import ComparisonPage from "./pages/ComparisonPage"
import ComparisonResult from "./pages/ComparisonResult"
import FrameComparisonPage from "./pages/FrameComparisonPage"
import AddInfoForCover from "./pages/AddInfoForCover"

/* Profile pages */
import ProfilePrime from "./pages/ProfilePrime";
import PlaylistInner from "./pages/PlaylistInner";
import EditPlaylist from "./pages/EditPlaylist";
import AnotherUserProfile from "./pages/AnotherUserProfile";
import Relating from "./pages/Relating";
import LikedVideos from "./pages/LikedVideos"
import HistoryPage from "./pages/ProfileHistory"

import MyWallet from "./pages/MyWallet";
import TopupResult from "./pages/TopupResult";
import TopUp from "./pages/TopUp";
import MessagePage from "./pages/MessagePage";
import PaymentMethods from "./pages/PaymentMethods";
import Payments from "./pages/Payments";
import Subscriptions from "./pages/Subscriptions";
import AddCard from "./pages/AddCard";
import SubscriptionResult from "./pages/SubscriptionResult";
import RelateRequest from "./pages/RelateRequest";
import Messages from "./pages/Messages";
import Widthdraw from "./pages/Widthdraw";
import WidthdrawResult from "./pages/WidthdrawResult";
import Donate from "./pages/Donate";
import Settings from "./pages/Settings";

import Privacy from "./pages/Privacy";
import PushNotifications from "./pages/PushNotifications";
import AccountControl from "./pages/AccountControl";
import FAQ from "./pages/FAQ";
import DonateSelectPayment from "./pages/DonateSelectPayment";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";


import ConfrimDeleteAccount from "./pages/ConfrimDeleteAccount";
import VerifyYourAccount from "./pages/VerifyYourAccount";
import DeleteAccountNotice from "./pages/DeleteAccountNotice";
import WhyAreYouLeavingIdo from "./pages/WhyAreYouLeavingIdo";
import ReserPasswordResult from "./pages/ReserPasswordResult";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/reset-password":
        title = "";
        metaDescription = "";
        break;
      case "/otp":
        title = "";
        metaDescription = "";
        break;
      case "/processing":
        title = "";
        metaDescription = "";
        break;
      case "/login-incorrect":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>

      <Route path="/" element={<OnboardingPrime />} />

      {/******************************************************** { Login } **********************************************************/}
      <Route path="/login" element={<Login />} />

      {/******************************************************** { Forgot Password } ************************************************/}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/processing" element={<Processing />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      
      {/******************************************************** { Signup } *********************************************************/}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-up/birthday" element={<SignUpBirthday />} />
      <Route path="/sign-up/country" element={<SelectCountry />} />
      <Route path="/sign-up/questions" element={<AllQuestionsForSignUpIn />} />
      <Route path="/sign-up/info" element={<SignUpAllInfo />} />

      {/*************************************** { Onboarding subscription Screen } **************************************************/}
      <Route path="/subscription-free" element={<OnboardingFree />} />
      <Route path="/subscription-premium" element={<OnboardingPremium />} />
      <Route path="/start-subscription-premium" element={<StartPremiumPlan />} />
      <Route path="/subscription-premium-result" element={<PremiumResut />} />
      
      {/************************************************* { Home Screen } ***********************************************************/}
      <Route path="/home" element={<MainPage />} />
      <Route path="/home/trending" element={<TrendingNow />} />
      <Route path="/home/recently-added" element={<RecentlyAdded />} />
      
      {/******************************************** { Search Screen } ***************************************************************/}
      <Route path="/search" element={<Search />} />
      <Route path="/search/result" element={<SearchResult />} />
      <Route path="/search/filter" element={<Filters />} />

      {/******************************************** { Move Screen } ***************************************************************/}
      <Route path="/moves/:videoId" element={<OthersView />} /> 
      <Route path="/moves" element={<Moves />} />
      <Route path="/moves/creator-view/:videoId" element={<CreatorView />} />
      <Route path="/moves/comparison-page" element={<ComparisonPage />} />
      <Route path="/moves/comparison-result" element={<ComparisonResult />} />
      <Route path="/moves/comparison-results/frames" element={<FrameComparisonPage />} />

      {/******************************************** { Create Cover/Challenge Screen } ***************************************************************/}
      <Route path="/create" element={<CreateNew />} />

      <Route path="/create/cover/cover-question" element={<CreatingCoverDanceQ />} />
      <Route path="/create/cover" element={<CreateCover flow="cover" />} />
      <Route path="/create/cover/cover-add-info" element={<AddInfoForCover />} />

      <Route path="/create/:flow" element={<CreateChallenge />} />
      <Route path="/create/:flow/recording" element={<CreateChallengeRecording />}/>
      <Route path="/create/:flow/preview" element={<CreateChallengePreview />}/>
      <Route path="/create/:flow/select-cover" element={<SelectCoverFromVideo />} />
      <Route path="/create/:flow/select-cover/from-gallery" element={<SelectCoverFromGallery />} />
      <Route path="/create/:flow/add-info" element={<AddInfoForNewChallenge />}/>
      <Route path="/create/:flow/select-music" element={<SelectMusic />} />
      <Route path="/create/:flow/add-music-timeline" element={<AddMusic />} />

      <Route path="/create/new-challenge/challenge-question-1" element={<ChallengeQuestion />} />
      <Route path="/create/new-challenge/sorry-page" element={<SorryPage />} />
      <Route path="/create/new-challenge/challenge-question-2" element={<ChallengeQuestion2 />} />
      <Route path="/create/new-challenge/challenge-question-3" element={<ChallengeQuestion3 />} />
      <Route path="/create/new-challenge/challenge-add-info-2" element={<AddInfoForNewChallenge2 />} />

      <Route path="/create/:flow/confrim-upload" element={<ConfrimUpload />} />
      <Route path="/create/:flow/uploading" element={<Uploading />} />
      <Route path="/create/:flow/upload-unsuccessful" element={<UploadUnsuccessful />} />
      <Route path="/create/:flow/upload-successful" element={<UploadSuccessful />} />

      {/******************************************** { Profile Screens } ***************************************************************/}
      <Route path="/profile" element={<ProfilePrime />} />
      <Route path="/profile/:userId" element={<AnotherUserProfile />} />
      <Route path="/profile/playlist" element={<PlaylistInner />} />
      <Route path="/profile/playlist-edit" element={<EditPlaylist />} />
      <Route path="/profile/relating" element={<Relating />} />
      <Route path="/profile/liked-videos" element={<LikedVideos />} />
      <Route path="/profile/history" element={<HistoryPage />} />
      <Route path="/profile/relate-request" element={<RelateRequest />} />
      <Route path="/profile/faq" element={<FAQ />} />
      <Route path="/profile/contact-us" element={<ContactUs />} />
      <Route path="/profile/about-us" element={<About />} />

      {/******************************************** { Profile Settings Screens } ***************************************************************/}
      <Route path="/profile/settings" element={<Settings />} />
      <Route path="/profile/settings/push-notifications" element={<PushNotifications />} />
      <Route path="/profile/settings/privacy" element={<Privacy />} />
      <Route path="/profile/settings/account-control" element={<AccountControl />} />
      <Route path="/profile/settings/account-control/leaving-questions" element={<WhyAreYouLeavingIdo />} />
      <Route path="/profile/settings/delete-account/processing" element={<Processing />} />
      <Route path="/profile/settings/delete-account-agreement" element={<DeleteAccountNotice />} />
      <Route path="/profile/verify-your-account" element={<VerifyYourAccount />} />
      <Route path="/profile/settings/account-control/confirm-delete" element={<ConfrimDeleteAccount />} />
      
      <Route path="/profile/settings/update-password" element={<UpdatePassword />} />
      <Route path="/profile/settings/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile/settings/reset-password" element={<ResetPassword />} />
      <Route path="/profile/settings/reset-password/result" element={<ReserPasswordResult />} />

      {/******************************************** { Profile payment Screens } ***************************************************************/}
      <Route path="/profile/payments" element={<Payments />} />
      <Route path="/profile/payment-methods" element={<PaymentMethods />} />
      <Route path="/profile/add-payment" element={<AddCard />} />
      <Route path="/profile/subscriptions" element={<Subscriptions />} />
      <Route path="/subscription-cancled" element={<SubscriptionResult />} />

      {/******************************************** { Profile my wallet Screens } ***************************************************************/}
      <Route path="/profile/my-wallet" element={<MyWallet />} />

      {/********************************************* { Profile top up Screens } *******************************************************************/}
      <Route path="/profile/my-wallet/top-up" element={<TopUp />} />
      <Route path="/profile/my-wallet/top-up/processing" element={<Processing />} />
      <Route path="/profile/my-wallet/top-up/result" element={<TopupResult />} />


      {/********************************************* { Profile widthdraw Screens } *******************************************************************/}
      <Route path="/profile/my-wallet/widthdraw" element={<Widthdraw />} />
      <Route path="/profile/my-wallet/widthdraw/processing" element={<Processing />} />
      <Route path="/profile/my-wallet/widthdraw/result" element={<WidthdrawResult />} />

      {/********************************************* {Donate Screens } *******************************************************************/}
      <Route path="/donate" element={<Donate />} />
      <Route path="/donate/select-payment" element={<DonateSelectPayment />} />

      {/******************************************** { Chat Screens } ***************************************************************/}
      <Route path="/messages" element={<Messages />} />
      <Route path="/messages/:chatId" element={<MessagePage />} />

    </Routes>
  );
}
export default App;

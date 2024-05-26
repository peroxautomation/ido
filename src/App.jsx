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
import ResetPassword from "./pages/ResetPassword";
import OTP from "./pages/OTP";
import Processing from "./pages/Processing";
import Login from "./pages/Login";

/* Sign up */
import SignUp from "./pages/SignUp";
import SignUpAllInfo from "./pages/SignUpAllInfo";
import SignUpBirthday from "./pages/SignUpBithday";
import AllQuestionsForSignUpIn from "./pages/SignUpQuestions";
import SelectCountry from "./pages/SelectCountry";
import MainPage from "./pages/MainPage";
import TrendingNow from "./pages/TrendingNow";
import RecentlyAdded from "./pages/RecentlyAdded";

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

      {/*************************************** { Login } ************************************************/}
      <Route path="/login" element={<Login />} />

      {/*************************************** { Forgot Password } ************************************************/}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/processing" element={<Processing />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      
      {/*************************************** { Signup } ************************************************/}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-up-birthday" element={<SignUpBirthday />} />
      <Route path="/sign-up-country" element={<SelectCountry />} />
      <Route path="/sign-up-questions" element={<AllQuestionsForSignUpIn />} />
      <Route path="/sign-up-info" element={<SignUpAllInfo />} />

      {/*************************************** { Home Screen } ************************************************/}
      <Route path="/home" element={<MainPage />} />
      <Route path="/home/trending" element={<TrendingNow />} />
      <Route path="/home/recently-added" element={<RecentlyAdded />} />
    </Routes>
  );
}
export default App;

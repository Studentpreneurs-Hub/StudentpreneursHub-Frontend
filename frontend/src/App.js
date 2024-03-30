import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FogotPasswordScreen from "./screens/ForgotPasswordScreens/FogotPasswordScreen";
import SetNewPasswordScreen from "./screens/SetNewPasswordScreen/SetNewPasswordScreen";
import SignUp from "./screens/SignUpScreens/SignUp";
import OTPScreen from "./screens/OTPScreen/OTPScreen";
import Landing from "./screens/LandingPage/Landing";
import OnClickProfile from "./screens/OnClickProfile/OnClickProfile";
import OnClickProduct from "./screens/OnClickProductScreen/OnClickProduct";
import Login from "./screens/LoginScreen/Login";
import RegisterBusiness from "./screens/RegisterBusinessScreen/RegisterBusiness";

function App() {
  return (
    <Router>
      <main className="py-3">
        <Routes>
          <Route path="/" Component={Landing} exact />
          <Route path="/Login" Component={Login} />
          <Route path="/forgotPassword" Component={FogotPasswordScreen} />
          <Route path="/setnewPassword" Component={SetNewPasswordScreen} />
          <Route path="/signUp" Component={SignUp} />
          <Route path="/otp" Component={OTPScreen} />
          <Route path="/onClickProfile" Component={OnClickProfile} />
          <Route path="/onClickProduct" Component={OnClickProduct} />
          <Route path="/registerBusiness" Component={RegisterBusiness} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

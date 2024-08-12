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
import EditingProfileScreen from "./screens/EditingProfileScreen/EditingProfileScreen";
import AboutUs from "./screens/AboutUs/AboutUs";
import OnClickStartSelling from "./screens/OnClickStartSelling/OnClickStartSelling";
import ProductDashboard from "./screens/ProductDashboard/ProductDashboard";
import OverviewDashboard from "./screens/OverviewDashboard/OverviewDashboard";
import VendorDashboard from "./screens/VendorDashboard/VendorDashboard";
import SellerOrBuyer from "./screens/SellerOrBuyer/SellerOrBuyer";
import PageNotFound from "./screens/PageNotFound/PageNotFound";
import Home from "./screens/HomePage/Home";
import ProtectedRoute from "./components/ProtectedRoutes/ProjectedRoutes";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Landing />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<FogotPasswordScreen />} />
            <Route path="/setnewPassword" element={<SetNewPasswordScreen />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/otp" element={<OTPScreen />} />
            <Route path="/onClickProduct" element={<OnClickProduct />} />
            <Route path="/register_bussiness" element={<RegisterBusiness />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/seller_or_buyer" element={<SellerOrBuyer />} />
            <Route path="/ProductDashboard" element={<ProductDashboard />} />
            <Route path="/admin-dashboard" element={<OverviewDashboard />} />
            <Route path="/VendorDashboard" element={<VendorDashboard />} />

            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/OnClickStartSelling"
              element={
                <ProtectedRoute>
                  <OnClickStartSelling />
                </ProtectedRoute>
              }
            />
            <Route
              path="/onClickProfile"
              element={
                <ProtectedRoute>
                  <OnClickProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/EditingProfileScreen"
              element={
                <ProtectedRoute>
                  <EditingProfileScreen />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;

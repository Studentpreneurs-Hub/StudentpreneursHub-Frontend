import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FogotPasswordScreen from './screens/ForgotPasswordScreens/FogotPasswordScreen';
import SetNewPasswordScreen from './screens/SetNewPasswordScreen/SetNewPasswordScreen';
import SignUp from './screens/SignUpScreens/SignUp';
import OTPScreen from './screens/OTPScreen/OTPScreen';
import Landing from './screens/LandingPage/Landing';
import OnClickProfile from './screens/OnClickProfile/OnClickProfile';


function App() {
  return (
    <Router>
      <main className='py-3'>
        <Routes>
          <Route path='/' Component={Landing} exact/>
          <Route path='/forgotPassword' Component={FogotPasswordScreen} />
          <Route path='/setnewPassword' Component={SetNewPasswordScreen} />
          <Route path='/signUp' Component={SignUp} />
          <Route path='/otp' Component={OTPScreen} />
          <Route path='/onClickProfile' Component={OnClickProfile} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

import { Container } from 'react-bootstrap';
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom'
import FogotPasswordScreen from './screens/ForgotPasswordScreens/FogotPasswordScreen';
import SetNewPasswordScreen from './screens/SetNewPasswordScreen/SetNewPasswordScreen';
import SignUp from './screens/SignUpScreens/SignUp';
import OTPScreen from './screens/OTPScreen/OTPScreen';
import Header from './components/Navbar/Header';
import Landing from './screens/LandingPage/Landing';
import OnClickProfile from './screens/OnClickProfile/OnClickProfile';


function App() {
  return (
    <div>
      <main className='py-3'>
        {/* <Container> */}
          {/* <Header /> */}
          {/* <Landing /> */}
          {/* <FogotPasswordScreen /> */}
          <SetNewPasswordScreen /> 
          {/* <SignUp /> */}
          {/* <OTPScreen /> */}
          {/* <OnClickProfile /> */}
        {/* </Container> */}
      </main>
    </div>
  );
}

export default App;

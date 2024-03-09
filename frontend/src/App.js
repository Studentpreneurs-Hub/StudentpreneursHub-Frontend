import { Container } from 'react-bootstrap';
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom'
import FogotPasswordScreen from './screens/ForgotPasswordScreens/FogotPasswordScreen';
import SetNewPasswordScreen from './screens/ForgotPasswordScreens/SetNewPasswordScreen';
import SignUp from './screens/SignUpOTPScreens/SignUp';
import OTPScreen from './screens/SignUpOTPScreens/OTPScreen';

function App() {
  return (
    <div>
      <main className='py-3'>
        <Container>
          {/* <FogotPasswordScreen /> */}
          {/* <SetNewPasswordScreen /> */}
          {/* <SignUp /> */}
          <OTPScreen />
        </Container>
      </main>
    </div>
  );
}

export default App;

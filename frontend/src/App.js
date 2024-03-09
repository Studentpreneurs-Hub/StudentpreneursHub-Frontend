import { Container } from 'react-bootstrap';
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom'
import FogotPasswordScreen from './screens/ForgotPasswordScreens/FogotPasswordScreen';
import SetNewPasswordScreen from './screens/SetNewPasswordScreen/SetNewPasswordScreen';
import SignUp from './screens/SignUpOTPScreens/SignUp';
import OTPScreen from './screens/OTPScreen/OTPScreen';

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

import { Container } from 'react-bootstrap';
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom'
import FogotPasswordScreen from './screens/ForgotPasswordScreens/FogotPasswordScreen';
import SetNewPasswordScreen from './screens/SetNewPasswordScreen/SetNewPasswordScreen';
import SignUp from './screens/SignUpScreens/SignUp';
import OTPScreen from './screens/OTPScreen/OTPScreen';

function App() {
  return (
    <div>
      <main className='py-3'>
        <Container>
<<<<<<< HEAD
          <FogotPasswordScreen />
          {/* <SetNewPasswordScreen /> */}
          {/* <SignUp /> */}
=======
          {/* <FogotPasswordScreen /> */}
          {/* <SetNewPasswordScreen /> */}
          <SignUp />
>>>>>>> 663d680e033a0599b1c986df2c134e06337bedec
          {/* <OTPScreen /> */}
        </Container>
      </main>
    </div>
  );
}

export default App;

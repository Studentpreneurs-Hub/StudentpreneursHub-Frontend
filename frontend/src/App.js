import { Container } from 'react-bootstrap';
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom'
import FogotPasswordScreen from './screens/ForgotPasswordScreens/FogotPasswordScreen';
import SetNewPasswordScreen from './screens/SetNewPasswordScreen/SetNewPasswordScreen';
import SignUp from './screens/SignUpScreens/SignUp';
import OTPScreen from './screens/OTPScreen/OTPScreen';
import Header from './components/Navbar/Header';


function App() {
  return (
    <div>
      <main className='py-3'>
        <Container>
          {/* <Header /> */}
          <FogotPasswordScreen />
          {/* <SetNewPasswordScreen /> */}
          {/* <SignUp /> */}
          {/* <OTPScreen /> */}
        </Container>
      </main>
    </div>
  );
}

export default App;

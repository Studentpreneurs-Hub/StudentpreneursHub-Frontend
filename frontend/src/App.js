import { Container } from 'react-bootstrap';
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom'
import FogotPasswordScreen from './screens/ForgotPasswordScreens/FogotPasswordScreen';

function App() {
  return (
    <div>
      <main className='py-3'>
        <Container>
          <FogotPasswordScreen />
        </Container>
      </main>
    </div>
  );
}

export default App;

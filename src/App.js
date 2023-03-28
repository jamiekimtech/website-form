import { Stack } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About.jsx';
import Dancheong from './components/Dancheong.jsx';
import EmailForm from './components/EmailForm.jsx';
import Footer from './components/Footer.jsx';
import Intro from './components/Intro.jsx';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Stack
        spacing={2}
        alignItems="center"
        sx={{ backgroundColor: 'black', color: 'white', overflowX: 'hidden' }}
      >
        <Navbar />
        <Intro />
        <Dancheong />
        <Main />

        <EmailForm />
        <About />
        <Footer />
      </Stack>
    </BrowserRouter>
  );
}

export default App;

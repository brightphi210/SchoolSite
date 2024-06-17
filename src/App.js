import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About/About';
AOS.init();

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

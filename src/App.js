import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import Design from './pages/Design';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/design' element={<Design />} />
        <Route path='/article' element={<Articles />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;

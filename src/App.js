import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Foot from './Footer';
import Home from './Home';
import Navigation from './Navigation';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Layout />}></Route> */}
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* <Shop /> */}
    <Foot />
    </div>
  );
}

export default App;

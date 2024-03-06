import Home from '../src/component/Home.jsx'
import AboutUs from '../src/component/AboutUs/About.jsx'
import ContactUsTwoSections from '../src/component/contact/contact.jsx'
import NotFound from '../src/component/PageNotFound.jsx'
import { Route,Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Nav.jsx';
import GalleryComponent from './component/Gallery/gallery.jsx';
import './App.css'

function App() {
  return (
    <div className="App">
    
         <Navbar></Navbar>    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUsTwoSections/>}/>
          <Route path='/gallery' element={<GalleryComponent/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/NotFound' element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header';
import Home from './Home';
// import Try from './Try';
import About_us from './About_us';
import Donate_us from './Donate_us';
import Gallery from './Gallery';



// import Videoadded from './Videoadded';
// import Videoadded from './Videoadded';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login';
import Footer from './Footer';
import ContactForm from './ContactForm';
import NgoPage from './NgoPage';
import Signup from './SignUp';
import NgoAdmin from './admin/NgoAdmin';
import UpdateProfileNGO from './UpdateProfileNGO';
import UploadEvent from './UploadEvent';
import GenerateReq from './GenerateReq';
function App() {
  return (
    <div className="App h-screen">

       <BrowserRouter>
       <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      
          <Route path="/NgoPage" element={<NgoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/donate_us" element={<Donate_us />} />
          <Route path="/Adminpage" element={<NgoAdmin/>} />
          <Route path="/UpdateProfileNGO" element={<UpdateProfileNGO/>} />
          <Route path="/UploadEvent" element={<UploadEvent/>} />
          <Route path="/GenerateReq" element={<GenerateReq/>} />
          <Route path="/NgoAdmin" element={<NgoAdmin/>} />

          
      </Routes>
      <Footer/>
    </BrowserRouter>
  
      {/* <Videoadded/> */}

    </div>
  );
}

export default App;

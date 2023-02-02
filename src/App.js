
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pocetna from './Pocetna';
 
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Kontakt from './Kontakt';
import Footer from './Footer';

function App() {
  return (
    <div >
       
       

        <BrowserRouter>
    
          <Navbar></Navbar>


          <Routes>
            <Route path="/" element={<Pocetna></Pocetna>} />
           <Route path="/kontakt" element={<Kontakt></Kontakt>} />
  

          </Routes>
        <Footer></Footer>
     
      </BrowserRouter>
    </div>
  );
}

export default App;

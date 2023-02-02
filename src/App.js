
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pocetna from './Pocetna';
 
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <div >
       
       

        <BrowserRouter>
    
          <Navbar></Navbar>

          
          <Routes>
            <Route path="/" element={<Pocetna></Pocetna>} />
  

          </Routes>
       
     
      </BrowserRouter>
    </div>
  );
}

export default App;

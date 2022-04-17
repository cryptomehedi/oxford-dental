import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Common/Footer";
import Header from "./Component/Common/Header";
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Login";
import ServiceDetails from "./Component/Pages/ServiceDetail";
import Services from "./Component/Pages/Services";

function App() {
  return (
    <div>
      <Header/>
      <div  className='px-4 md:px-16'>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path='/service/:serviceId' element={<ServiceDetails/>}/>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

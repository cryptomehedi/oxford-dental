import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Common/Footer";
import Header from "./Component/Common/Header";
import RequireAuth from "./Component/Common/RequireAuth";
import Blogs from "./Component/Pages/Blogs";
import CheckOut from "./Component/Pages/CheakOut";
import Home from "./Component/Pages/Home";
import Login from "./Component/Pages/Login";
import Register from "./Component/Pages/Register";
import ServiceDetails from "./Component/Pages/ServiceDetail";
import Services from "./Component/Pages/Services";

function App() {
  return (
    <div>
      <Header/>
      <div  className='px-4 md:px-16'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path='/service/:serviceId' element={<RequireAuth><ServiceDetails/></RequireAuth>}/>
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path='/checkout' element={<RequireAuth><CheckOut/></RequireAuth>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

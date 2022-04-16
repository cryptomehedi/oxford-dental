import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Common/Footer";
import Header from "./Component/Common/Header";
import Home from "./Component/Pages/Home";

function App() {
  return (
    <div>
      <Header/>
      <div  className='px-4 md:px-16'>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

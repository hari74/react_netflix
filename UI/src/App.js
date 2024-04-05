import "./App.css";
import Accountsetup from "./components/Accountsetup/Accountsetup";
import Registration from "./components/RegistrationPage/Registration";
import Signpage from "./components/Signuppage/Signpage";
import Header from "./components/header/Header";
import Home from "./Homepage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterHome from "./HomepageFooter/FooterHome";
import Tvshow from "./components/Tvshow/Tvshow";
import Movie from "./components/movies/Movie";
import Genericon from "./components/geners/Genericon";
// import Mylist from "./components/Mylist/Mylist";
import Mylistpage from "./components/Mylist/Mylistpage";

function App() {
  return (
    <div>
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/Accountsetup" element={<Registration />} />
          
          <Route path="/Plan" element={<Accountsetup/>} />
          
           <Route path="/signin" element={<Signpage/>}  /> 
          
           <Route path="/Profile" element={<Home/>}/>

{/* <Route path="/Home" element={<Home/>}/> */}
            <Route path="/tv" element={<Tvshow/>}/>
            <Route path="/movie" element={<Movie/>}/>
            <Route path="/gener" element={<Genericon/>}/>
            <Route path="/mylist" element={<Mylistpage/>}/>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

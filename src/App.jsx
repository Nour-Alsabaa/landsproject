import "./App.css";
import Advisors from './component/Header/Advisors/Advisors';
import LandList from './component/Header/LandCard/LandList';
import Landgallery from "./component/landdetailspage/Landgallery";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Mainpage from "./component/Mainpage/Mainpage.jsx";
import Cover from './component/cover/cover.jsx';
import Login from "./component/Login/Login.jsx";
import Signup from "./component/Signup/Signup.jsx";



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Cover />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/landdetailspage/:id" element={<Landgallery />} />

      </Routes>
    </Router>
  );
}

export default App;




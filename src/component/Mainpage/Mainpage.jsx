import React from 'react';
import Header from '../Header/Header';
import SearchSection from '../Header/SearchSection/SearchSection';
import LandList from '../Header/LandCard/LandList';
import Advisors from '../Header/Advisors/Advisors';
import Footer from '../Footer/Footer';
import { useNavigate } from "react-router-dom";


function Mainpage() {
  const navigate = useNavigate();
  
  return (
    <>

         <Header/>
         <SearchSection/>
          <LandList/>
          <Advisors/>
        
        <div className="imagetofram" style={{position: "relative",marginBottom: "61px"}}>
           <img src="/lands/fram.png"></img>
           <div style={{ marginBottom:"30px",display: "flex",justifyContent: "center",marginBottom: "-2px",position: "absolute",top: "150px",transform: "translateX(-50%)",left: "50%"}}>
              <button id="Post" style={{background:"#28a745", margin: "120px"}}>Post your land</button>
           </div>
        </div>
       
        <Footer/>
    </>
  )
}

export default Mainpage;
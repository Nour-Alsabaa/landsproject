import  { useState } from "react";
import "./Login.css";
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/Signup');
  }

  const goToHome = () => {
    navigate('/Mainpage');
  }



  return (
  <div className="welcom-container">
    <div className="welcome">
       <div className="title-img-welcome tf">
          <h4 className="title-welcome">Welcome Back</h4>
          <img
            className="img-welcome"
            src="/lands/landbook.jpg"
            width="60"
            height="40"
            alt="Logo"
          />
        </div>
      <form className="form-welcome-f">
        <div className="tf">
          <label className="label-welcome" htmlFor="email">Email</label><br />
          <input
            type="email"
            id="email"
            placeholder=" your email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
        </div>

        <div className="tf">
          <label className="label-welcome" htmlFor="password">Password</label><br />
          <input
            type="password"
            id="password"
            placeholder=" your password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
        </div>

        <div className="tf">
          <label>Did you forget your password?</label> <br/>
          <button type="button" className="sign-welcome"
          //  onClick={goToHome}
           >Sign in</button>

          <p className="or-welcome">or</p>

          <button type="button" className="Sign-Google-welcome">
            Sign in with Google
          </button>

          <p className="or-welcome">or</p>

          <button type="button" className="sign-welcome"onClick={goToHome}>Go to Home</button>
        </div>


<div className="footer-form-welcome">
          <span>Don't have an account?</span>
          <a href="#" onClick={goToSignup}>Sign up</a>
        </div>

 <div className="toat">
 {message && <p style={{width: "42%",
      height: "60px",
      color: "black",
      background: "rgb(255 255 255 / 58%)",
      borderRadius:" 5px",
      marginLeft:"180px",
      position: "relative",
      bottom: "-42px",
      textAlign: "center",
      padding: "10px"}}>{message}</p>}

        </div>      </form> </div>
  </div>
  );
}


  

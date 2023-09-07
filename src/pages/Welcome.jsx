import "./styles/welcomeStyles.css";
import WelcomeIMG from "./welcome.svg";
import logo from "./kpmg_logo.png";
import { Link } from "react-router-dom";
import DateTime from "../components/DateTime";

export default function Welcome() {
   return (
      <div className="screen">
         <div className="left-div">
            <div className="heading">
               <img className="logo-img" src={logo} alt="" />
               <div className="heading-data">
                  <span className="heading-text">self checkout</span>
                  <span className="subheading">
                     for an effortless shopping experience
                  </span>
               </div>
               <Link to="/login">
                  <button className="button-28">
                     <span>Start</span>
                  </button>
               </Link>
            </div>
         </div>
         <div className="right-div">
            <img className="welcome-img" src={WelcomeIMG} alt="" />
         </div>
         <div className="time-div">
            <DateTime />
         </div>
      </div>
   );
}

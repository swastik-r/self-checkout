import "./style.css";
import logo from "./kpmg_logo.png";

export default function Header() {
   return (
      <header>
         <img className="header-logo" src={logo} alt="" />
         <div>date & time</div>
      </header>
   );
}

import "./styles/loginStyles.css";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const regNums = ["1111111111", "2222222222", "3333333333", "4444444444"];
   const [mobileNumber, setMobileNumber] = useState("");
   const [isInvalid, setIsInvalid] = useState(false);
   const [isUnregistred, setIsUnregistered] = useState(false);
   const navigate = useNavigate();

   function handleKeyPress(key) {
      if (mobileNumber.length < 10) {
         setMobileNumber((prevNumber) => prevNumber + key.target.innerText);
      }
   }

   function handleClear() {
      setMobileNumber("");
   }

   function handleContinue() {
      if (mobileNumber.length === 10) {
         if (regNums.includes(mobileNumber)) {
            navigate("/cart");
         } else {
            setTimeout(() => {
               setIsUnregistered(false);
            }, 1000);
            setIsUnregistered(true);
         }
      } else {
         setTimeout(() => {
            setIsInvalid(false);
         }, 1000);
         setIsInvalid(true);
      }
   }

   return (
      <div className="screen">
         <div className="top-div">
            <span className="heading">please enter your mobile number</span>
         </div>
         <div className="bottom-div">
            <div className="login-left-div">
               <div className="input-fields-div">
                  {/* Select */}
                  <CustomSelect />
                  {/* Input */}
                  <div
                     style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "50px",
                     }}
                  >
                     <input
                        type="text"
                        className="login-input"
                        placeholder="1234567890"
                        value={mobileNumber}
                        maxLength={10}
                        readOnly
                     />
                     <small
                        style={{ textAlign: "center", color: "black" }}
                        className={isInvalid ? "" : "hide"}
                     >
                        please enter a valid number
                     </small>
                     <small
                        style={{ textAlign: "center", color: "black" }}
                        className={isUnregistred ? "" : "hide"}
                     >
                        please enter a registred number
                     </small>
                  </div>
               </div>
               {/* Button */}
               <button className="button-28" onClick={handleContinue}>
                  Continue
               </button>
            </div>
            <div className="login-right-div">
               <div className="login-keypad">
                  <div className="login-keypad-row">
                     <button
                        className="login-keypad-button"
                        onClick={handleKeyPress}
                     >
                        1
                     </button>
                     <button
                        className="login-keypad-button"
                        onClick={handleKeyPress}
                     >
                        2
                     </button>
                     <button
                        className="login-keypad-button"
                        onClick={handleKeyPress}
                     >
                        3
                     </button>
                  </div>
                  <div className="login-keypad-row">
                     <button
                        className="login-keypad-button"
                        onClick={handleKeyPress}
                     >
                        4
                     </button>
                     <button
                        className="login-keypad-button"
                        onClick={handleKeyPress}
                     >
                        5
                     </button>
                     <button
                        className="login-keypad-button"
                        onClick={handleKeyPress}
                     >
                        6
                     </button>
                  </div>
                  <div className="login-keypad-row">
                     <button
                        className="login-keypad-button"
                        onClick={handleKeyPress}
                     >
                        7
                     </button>
                     <button
                        className="login-keypad-button"
                        onClick={handleKeyPress}
                     >
                        8
                     </button>
                     <button
                        className="login-keypad-button"
                        onClick={handleKeyPress}
                     >
                        9
                     </button>
                  </div>
                  <div className="login-keypad-row-0">
                     <button
                        className="login-keypad-button"
                        onClick={handleKeyPress}
                     >
                        0
                     </button>
                     <button
                        className="login-keypad-button"
                        onClick={handleClear}
                     >
                        clr
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

function CustomSelect() {
   // mock data: { value: "", label: ""}
   const options = [
      { value: "+91", label: "+91 IND" },
      { value: "+1", label: "+1 USA" },
      { value: "+44", label: "+44 UK" },
      { value: "+971", label: "+971 UAE" },
      { value: "+65", label: "+65 SNG" },
      { value: "+60", label: "+60 MAL" },
      { value: "+61", label: "+61 AUS" },
   ];

   const [country, setCountry] = useState("+91");
   function handleChange(e) {
      setCountry(e.target.value);
   }

   return (
      <FormControl>
         <InputLabel>Country Code</InputLabel>
         <Select
            label="Country Code"
            value={country}
            onChange={handleChange}
            sx={{ fontFamily: "Montserrat", fontSize: 20 }}
         >
            {options.map((option) => (
               <MenuItem key={option.value} value={option.value}>
                  {option.label}
               </MenuItem>
            ))}
         </Select>
      </FormControl>
   );
}

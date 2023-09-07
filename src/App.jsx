/* eslint-disable react/prop-types */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Feedback from "./pages/Feedback";

const routes = [
   {
      path: "/",
      element: <Welcome />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/cart",
      element: <Cart />,
   },
   {
      path: "/payment",
      element: <Payment />,
   },
   {
      path: "/feedback",
      element: <Feedback />,
   },
];

export default function App() {
   return (
      <div className="screen">
         <Router>
            <Content />
         </Router>
      </div>
   );
}

function Content() {
   const location = useLocation();
   const hideHF = location.pathname === "/" || location.pathname === "/login";

   return (
      <>
         {/* {!hideHF && <Header />} */}
         <Routes>
            {routes.map(({ path, element }) => (
               <Route key={path} path={path} element={element} />
            ))}
         </Routes>
         {/* {!hideHF && <Footer />} */}
      </>
   );
}

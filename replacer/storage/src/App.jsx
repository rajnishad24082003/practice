import "./App.css";
import "./assets/css/style.css";
import "./assets/css2/style.css";
import "./assets/css/style.scss";
import "./assets/css2/font-awesome.min.css";
import "./assets/css2/flag-icon.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Index";
import Main from "./pages/Main";

function App() {
  // let [loginState, setLoginState] = useState(false);
  // let loginfun = (e)=>{
  //   if(e.message==="Auth User"){
  //     setLoginState(true)
  //   }
  // }

  //chnages for testing
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setLoginState(true);
    }
  }, []);

  const loginfun = (e) => {
    if (e.message === "Auth User") {
      sessionStorage.setItem("user", e.user);
      setLoginState(true);
    }
  };
  return (
    <>
      <BrowserRouter>
        {loginState ? <Main></Main> : <Login loginfun={loginfun}></Login>}
      </BrowserRouter>
    </>
  );
}

export default App;

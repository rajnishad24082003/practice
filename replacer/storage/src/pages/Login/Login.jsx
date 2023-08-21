import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import logohome from "../../assets/images/SUVARNAlogin.svg";
import login12 from "../../assets/images/loginnew.jpg";
import Ganpati from "../../assets/images/Ganpati.png";
import tanishq from "../../assets/images/tanishq.svg";
// import { Login_LoginFun } from "../../context/DataCollector";
import axios from "axios";
const Login = ({ loginfun }) => {
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("http://localhost:5001/api/users/login", {
      //   email,
      //   password,
      // });
      // console.log(res.status);
      // if (res.status == 200) {
      //   toast.success("sign in successfull", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
      // loginfun(res.data)
      if (email === "admin" && password === "1234") {
        loginfun({ message: "Auth User" });
      }
      // console.log(res.data);
      //  }
    } catch (error) {
      toast.error("invalid crendentials", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
  };
  const [email, setUserId] = useState(""); // State for User id input
  const [password, setPassword] = useState(""); // State for Password input

  const handleUserIdChange = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  // Handler function to update the Password state
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const [selectedColor, setSelectedColor] = useState("");
  const [txtCOlor, settxtCOlor] = useState("");
  // Function to update the selected color
  const handleColorChange = (color, txt) => {
    setSelectedColor(color);
    settxtCOlor(txt);
  };

  // Styles for the target div
  const targetDivStyle = {
    backgroundColor: selectedColor,
  };

  // List of available colors
  const colors = [
    { bg: "#290001", txt: "white" },
    { bg: "#B3005E", txt: "white" },
    { bg: "#E14D2A", txt: "white" },
    { bg: "#F2921D", txt: "black" },
  ]; // Sample color options
  const [isActive, setIsActive] = useState(false);

  const handleClickonw = (event) => {
    // 👇️ toggle isActive state variable
    setIsActive((current) => !current);
  };

  const myClass = "bg-salmon";
  return (
    <>
      <section className="login-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-box">
                <img src={Ganpati} />
              </div>
            </div>
          </div>
          <div className="row row-eq-height">
            <div className="col-lg-6 left-col">
              <div className="left-box">
                <div className="img-box">
                  <img src={login12} />
                  <div className="logo-side">
                    <img src={tanishq} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6  right-col">
              <div className="wrapper-box" style={targetDivStyle}>
                <div className="right-box">
                  <div className="img-box">
                    <img src={logohome} />
                  </div>
                  <div className="title-heading">
                    <h1 style={{ color: txtCOlor }}>Sign In</h1>
                  </div>
                  <form>
                    <div className="row form-sec">
                      <div className="col-md-12">
                        <p style={{ color: txtCOlor }}>
                          Please login to your account
                        </p>
                      </div>
                      <div className="col-md-12">
                        <div className="input-box">
                          <label htmlFor="Email" style={{ color: txtCOlor }}>
                            User id{" "}
                          </label>
                          <div className="input-filde">
                            <input
                              onChange={handleUserIdChange}
                              type="email"
                              className="form-control"
                              placeholder="User id"
                              aria-label="email address"
                              aria-describedby="User id"
                            />
                            <span>
                              <i className="fas fa-user"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-box">
                          <label htmlFor="password" style={{ color: txtCOlor }}>
                            Password
                          </label>
                          <div className="input-filde">
                            <input
                              onChange={handlePasswordChange}
                              type="number"
                              className="form-control"
                              placeholder="Password"
                              aria-label="password"
                              aria-describedby="password"
                            />
                            <span>
                              <i className="fas fa-unlock"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-box other-page">
                          <a href="#">Forgot Password</a>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-btn">
                          <button onClick={handleClick}>Sign In</button>
                        </div>
                      </div>
                    </div>
                    <div className="caption-text">
                      {/* <p>
                        {" "}
                        <a href="">Do not have an account ? Sign Up</a>
                      </p> */}
                      <a
                        href="https://iriquehitech.com/>"
                        style={{ color: txtCOlor }}
                      >
                        © 2023 Powered by Irique Hi-tech , All Rights Reserved.
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
      <section className="color_picker_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className={`color_picker ${isActive ? "bg-salmon" : ""}`}>
                {/* Render color options */}
                {colors.map((color) => (
                  <div
                    key={color.bg}
                    className={`color_option `}
                    style={{ backgroundColor: color.bg }}
                    onClick={() => handleColorChange(color.bg, color.txt)}
                  ></div>
                ))}
              </div>
              <div className={`switchcolors_icon`} onClick={handleClickonw}>
                <i className="fas fa-cog"></i>
              </div>
              {/* <div className="target_div" style={targetDivStyle}></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

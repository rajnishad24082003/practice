import { useState } from "react";
import logohome from "../../assets/images/Asset.svg";
import login12 from "../../assets/images/login12.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/users/register", {
        name,
        email,
        password,
        confirmpassword,
      });
      if (res.status === 201) {
        toast.success("registration successfull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(res.data);
      }
    } catch (error) {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : error.message,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      console.log(error);
    }
  };
  const [name, setName] = useState(""); // State for User id input
  const [email, setUserId] = useState(""); // State for User id input
  const [password, setPassword] = useState(""); // State for Password input
  const [confirmpassword, setConfirmPassword] = useState(""); // State for Password input

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleUserIdChange = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  // Handler function to update the Password state
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };
  return (
    <>
      <ToastContainer />
      <div>Register</div>
      <section className="login-sec">
        <div className="container-fluid">
          <div className="row row-eq-height">
            <div className="col-lg-6 left-col">
              <div className="left-box">
                <div className="img-box">
                  <img src={login12} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-col">
              <div className="wrapper-box">
                <div className="right-box">
                  <div className="img-box">
                    <img src={logohome} />
                  </div>
                  <div className="title-heading">
                    <h1>Sign Up</h1>
                  </div>
                  <form>
                    <div className="row form-sec">
                      <div className="col-md-12">
                        <p>Register to your account</p>
                      </div>
                      <div className="col-md-12">
                        <div className="input-box">
                          <label htmlFor="name">Name</label>
                          <div className="input-filde">
                            <input
                              onChange={handleNameChange}
                              type="name"
                              className="form-control"
                              placeholder="Name"
                              aria-label="name"
                              aria-describedby="name"
                            />
                            <span>
                              <i className="fa fa-envelope"></i>
                            </span>
                          </div>
                        </div>
                        <div className="input-box">
                          <label htmlFor="Email">User id </label>
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
                              <i className="fa fa-envelope"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-box">
                          <label htmlFor="password">Password</label>
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
                              <i className="fa fa-eye-slash"></i>
                            </span>
                          </div>
                          <div className="input-box">
                            <label htmlFor="password">Password</label>
                            <div className="input-filde">
                              <input
                                onChange={handleConfirmPasswordChange}
                                type="number"
                                className="form-control"
                                placeholder="Confirm Password"
                                aria-label="Confirm Password"
                                aria-describedby="password"
                              />
                              <span>
                                <i className="fa fa-eye-slash"></i>
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
                            <button onClick={handleClick}>Sign Up</button>
                          </div>
                        </div>
                      </div>
                      <div className="caption-text">
                        <a href="https://iriquehitech.com/>">
                          {" "}
                          © 2023 Powered by Irique Hi-tech , All Rights
                          Reserved.
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

// import { Login_LoginFun } from "../../context/DataCollector";

import React, { useState } from "react";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import "../pages/ProfilePageConfiguration/cardprofile.css"
import "./userprofile.css";
import profileImg from "../assets/images/profile-imges.png";
import profileImgtwo from "../assets/images/Asset 6.svg";
// import ProfilePictureUpload from "../pages/ProfilePageConfiguration/ProfilePictureUpload";
// react-bootstrap components

import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
// import CardProfile from "./ProfilePageConfiguration/Uploadprofile";
// import "./cardprofile.css";

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload">
    <div className="img-wrap img-upload">
      <img htmlFor="photo-upload" src={src} alt="" />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);

const Profile = ({ onSubmit, src }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap">
          <img htmlFor="photo-upload" src={src} alt="" />
        </div>
      </label>
      <button type="submit" className="edit">
        Edit Profile
      </button>
    </form>
  </div>
);

const Edit = ({ onSubmit, children }) => (
  <div className="card">
    <div className="profile-form-submit" onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      {children}
   
    </div>
  </div>
);




function User() {

  // const handleProfilePictureUpload = (profilePicture) => {
  //   // Handle the selected profile picture here
  // };
  const options = { multi: true };
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
  );
  const [active, setActive] = useState("edit");

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const activeP = active === "edit" ? "profile" : "edit";
    setActive(activeP);
  };
  return (
    <>
      <Container fluid className="user-top-sec ">
        <Row>
          <Col md="12">
            
            <div className="edit-profile">
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
            </div>
          </Col>
        </Row>
        <div>
      {active === "edit" ? (
        <Edit onSubmit={handleSubmit}>
          <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
        </Edit>
      ) : (
        <Profile onSubmit={handleSubmit} src={imagePreviewUrl} />
      )}
    </div>
        <Row>
          <Col md="10">
            <Card>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group className="input-box">
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group className="input-box">
                        <label>Username</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group className="input-box">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group className="input-box">
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="First Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group className="input-box">
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group className="input-box">
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group className="input-box">
                        <label>City</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group className="input-box">
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-1" md="6">
                      <Form.Group className="input-box">
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="Postal Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group className="input-box">
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she"
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <div className=" clear-btn">
                        <Button
                          className="btn-fill pull-left"
                          type="submit"
                          variant="info"
                        >
                          Update Profile
                        </Button>
                        <div className="clearfix"></div>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="2">
            <Card className="card-user">
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={profileImgtwo}
                    ></img>
                    <h5 className="title">suvarna gold</h5>
                  </a>
                  <p className="description">
                    Suvarna means beautiful color golden which implies the
                    Beauty.
                  </p>
                </div>
                {/* <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p> */}
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon facebook"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <BsFacebook />
                </Button>
                <Button
                  className="btn-simple btn-icon insta"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <AiFillInstagram />
                </Button>
                <Button
                  className="btn-simple btn-icon twitter "
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <AiFillTwitterCircle />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;

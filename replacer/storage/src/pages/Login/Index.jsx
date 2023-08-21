import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";

const Index = ({ loginfun }) => {
  return (
    <Routes>
      <Route path="/" element={<Login loginfun={loginfun} />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default Index;

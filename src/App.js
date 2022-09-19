import "./App.css";
import * as React from "react";
import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";
import Home from "./components/Home";
import Order from './components/Order'
import Chart from './components/Chart'
import Menu from "./components/Menu";
import Login from "./components/Login"
// import PersistentDrawerLeft from "./components/Home";
function App() {
  return (

    <div>
      <Home></Home>
      <Routes>

        {/* <Route path="/" element={<Home></Home>}></Route> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}
export default App;
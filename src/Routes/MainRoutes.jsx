import React from "react";
import About from "../components/About";
import Home from "../components/Home";

import { Navbar } from "../components/Navbar";
import {Route,Routes} from "react-router-dom"
import Men from "../components/Men";
import Kids from "../components/Kids";
import HomeDecor from "../components/HomeDecor";
import { Products } from "../components/Products";
const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
  <Navbar/>
  <Routes>
<Route path="/" element ={<Home/>}/>
<Route path="/about"  element ={<About/>}/>
<Route path="/products"  element ={<Products/>}/>
<Route path="/products/men" element ={<Men/>}/>
<Route path= "/products/women" element ={<Home/>}/>
<Route path= "/products/kids" element ={<Kids/>}/>
<Route path=  "/products/homedecor" element ={<HomeDecor/>}/>



  </Routes>
  </>;
};
export { MainRoutes };

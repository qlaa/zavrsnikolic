import React, {Component} from "react";
import "./Prvastranica.css";
import Navbar from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Header2 from "./Header2/Header2";
import Content2 from "./Content2/Content2";

export class Prvastranica extends Component{ render()
  { return(
    <div>
      <Navbar></Navbar>
      <Header2></Header2>
      <Content2></Content2>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer></Footer>
    </div>
  );
  }
}


export default Prvastranica;

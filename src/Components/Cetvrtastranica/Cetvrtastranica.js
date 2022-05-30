import React, {Component} from "react";
import "./Cetvrtastranica.css";
import Navbar from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Header5 from "./Header5/Header5";
import Content5 from "./Content5/Content5";

export class Cetvrtastranica extends Component{ render()
  { return(
    <div>
      <Navbar></Navbar>
      <Header5></Header5>
      <Content5></Content5>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer></Footer>
    </div>
  );
  }
}


export default Cetvrtastranica;
import React, {Component} from "react";
import "./Drugastranica.css";
import Navbar from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Header3 from "./Header3/Header3";
import Content3 from "./Content3/Content3"

export class Drugastranica extends Component{ render()
  { return(
    <div>
      <Navbar></Navbar>
      <Header3></Header3>
      <Content3></Content3>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer></Footer>
    </div>
  );
  }
}


export default Drugastranica;
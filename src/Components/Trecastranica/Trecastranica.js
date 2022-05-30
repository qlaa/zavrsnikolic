import React, {Component} from "react";
import "./Trecastranica.css";
import Navbar from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Header4 from "./Header4/Header4";
import Content4 from "./Content4/Content4";

export class Trecastranica extends Component{ render()
  { return(
    <div>
      <Navbar></Navbar>
      <Header4></Header4>
      <Content4></Content4>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer></Footer>
    </div>
  );
  }
}


export default Trecastranica;
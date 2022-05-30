import "./Nav.css";
import {Link} from "react-router-dom";

function Nav() {

  const click = () =>{
    document.getElementById("forma").style.visibility="visible";
  }

  const click2 = () =>{
    document.getElementById("forma").style.visibility="hidden";
  }

  return (
    <div className="Nav">
        <ul class="menu">
          <a href="#vrh" style={{textDecoration: "none"}}><label>Fast Travel</label></a>
          <Link to="/" style={{textDecoration: "none"}}><li>Home</li></Link>
          <a href="#content" style={{textDecoration: "none"}}><li>Products</li></a>
          <a href="#footer" style={{textDecoration: "none"}}><li>Contact</li></a>
          <button onClick={click} onDoubleClick={click2}>SIGN UP</button>
        </ul>
    </div>
  );
}

export default Nav;
